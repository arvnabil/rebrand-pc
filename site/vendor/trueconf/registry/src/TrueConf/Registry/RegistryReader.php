<?php

declare(strict_types=1);

namespace TrueConf\Registry;

use Generator;
use InvalidArgumentException;
use ReflectionProperty;
use Throwable;
use function array_key_exists;
use function array_keys;
use function array_multisort;
use function array_reverse;
use function arsort;
use function asort;
use function count;
use function in_array;
use function is_array;
use function is_null;
use function is_string;
use function mb_strpos;
use function reg_create_key;
use function reg_delete_key;
use function reg_delete_value;
use function reg_get_sub_keys;
use function reg_key_exists;
use function reg_read_value;
use function reg_value_exists;
use function reg_write_value;
use function reg_get_key_info;

/**
 * Class RegistryReader
 * @package TrueConf\Registry
 */
class RegistryReader implements RegistryReaderInterface
{

    /**
     * @param string $path
     * @param array $schema
     * @param array $data
     * @return bool
     */
    public function setData(string $path, array $schema, array $data): bool
    {
        $done = 0;

        /**
         * Перебираем все поля из массива данных и записывавем доуступные для записи.
         * Если массив пустой, метод создаёт каталог в реестре по указанному пути $path.
         */
        foreach ($data as $fieldName => $fieldValue) {
            /**
             * Если поле отсутствует в схеме, то пропускаем его.
             */
            $fieldInfo = $schema[$fieldName] ?? null;

            if (!is_array($fieldInfo)) {
                continue;
            }

            /**
             * Если в схеме отсутствует поле, то пропускаем его. (логическая ошибка).
             */
            $regFieldName = $fieldInfo[static::SCHEMA_REG_FIELD] ?? null;

            if (!is_string($regFieldName)) {
                continue;
            }

            /**
             * Если поле только на чтение, то пропускаем его.
             */
            $readyOnly = $fieldInfo[static::SCHEMA_READ_ONLY] ?? false;

            if ($readyOnly === true) {
                continue;
            }

            $fieldPath = isset($fieldInfo[static::SCHEMA_REG_PATH]) ? ($path . $fieldInfo[static::SCHEMA_REG_PATH]) : $path;

            $phpFieldType = $fieldInfo[static::SCHEMA_PHP_TYPE] ?? static::DEFAULT_SCHEMA_PHP_TYPE;

            $result = $this->setCustomTypeValue($fieldPath, $regFieldName, $fieldValue, $phpFieldType);

            if ($result === true) {
                $done++;
            }
        }

        return $done > 0;
    }

    /**
     * @param string $fieldPath
     * @param string $regFieldName
     * @param mixed $fieldValue
     * @param string $phpFieldType
     * @return bool
     */
    protected function setCustomTypeValue(string $fieldPath, string $regFieldName, $fieldValue, string $phpFieldType): bool
    {
        switch ($phpFieldType) {
            case static::ENUM_SCHEMA_PHP_TYPE_INT:
                return $this->setValueAsInt($fieldPath, $regFieldName, (int)$fieldValue, static::REG_DWORD);
            case static::ENUM_SCHEMA_PHP_TYPE_FLOAT:
                return $this->setValueAsFloat($fieldPath, $regFieldName, (float)$fieldValue, static::REG_SZ);
            case static::ENUM_SCHEMA_PHP_TYPE_BOOL:
                return $this->setValueAsBool($fieldPath, $regFieldName, (bool)$fieldValue, static::REG_DWORD);
            default:
            case static::ENUM_SCHEMA_PHP_TYPE_STRING:
                return $this->setValueAsString($fieldPath, $regFieldName, (string)$fieldValue, static::REG_SZ);
        }
    }

    /**
     * @param string $path
     * @param string $field
     * @param bool $value
     * @param string $type
     * @return bool
     */
    public function setValueAsBool(string $path, string $field, bool $value, string $type = self::REG_DWORD): bool
    {
        return reg_write_value($path, $field, $value ? "1" : "0", $type);
    }

    /**
     * @param string $path
     * @param string $field
     * @param int $value
     * @param string $type
     * @return bool
     */
    public function setValueAsInt(string $path, string $field, int $value, string $type = self::REG_DWORD): bool
    {
        if ($value < 0) {
            $type = self::REG_SZ;
        }
        return reg_write_value($path, $field, (string)$value, $type);
    }

    /**
     * @param string $path
     * @param string $field
     * @param float $value
     * @param string $type
     * @return bool
     */
    public function setValueAsFloat(string $path, string $field, float $value, string $type = self::REG_SZ): bool
    {
        return reg_write_value($path, $field, (string)$value, $type);

    }

    /**
     * @param string $path
     * @param string $field
     * @param string $value
     * @param string $type
     * @return bool
     */
    public function setValueAsString(string $path, string $field, string $value, string $type = self::REG_SZ): bool
    {
        return reg_write_value($path, $field, (string)$value, $type);

    }

    /**
     *
     * Метод получает отфильтрованные, отсортированные данные запрошенной страницы необходимого размера.
     * Порядок этапов формирования массива данных:
     *
     * Этапы:
     * 1: Фильтрация;
     * 2: Сортировка;   //По умолчанию массив данных сортируются по ключу в порядке возрастания
     * 3: Пэйджинг и заполнение данными.
     *
     * @param string $path
     * @param array $schema
     * @param array|null $fields
     * @param array|null $filters
     * @param int $page
     * @param int $size
     * @param int $sortOrder
     * @param string|null $sortField
     * @return Generator
     */
    public function getDataList(string $path,
                                array $schema,
                                array $fields = null,
                                array $filters = null,
                                int $page = self::DEFAULT_PAGE_ID,
                                int $size = self::DEFAULT_PAGE_SIZE,
                                int $sortOrder = self::DEFAULT_SORT_ORDER,
                                string $sortField = null): Generator
    {
        if ($page === 0) {
            return null;
        }

        if ($size === 0) {
            return null;
        }

        if (!$this->hasPath($path)) {
            return null;
        }

        if (count($schema) === 0) {
            return null;
        }

        $fields = is_null($fields) ? array_keys($schema) : $fields;
        if (count($fields) === 0) {
            return null;
        }

        $subKeys = $this->getSubKeys($path);
        $subKeysCount = count($subKeys);
        if ($subKeysCount === 0) {
            return null;
        }

        $firstIndex = ($page - 1) * $size;
        $lastIndex = $page * $size;
        if ($firstIndex >= $subKeysCount) {
            return null;
        }


        /**
         * Сортировать массив следует, если выполнены условия:
         * 1. Поле сортировки задано;
         * 2. Поле присутствует в списке полей для выборки;
         * 3. Поле присутствует в схеме;
         * 4. Для поля не установлен фильтр EQUALS;
         * 5. Поле задано, в противном случае порядок сортировки установлен по убыванию.
         *
         * Если поле для сортировке отсутствует в перечене полей для выборки,
         * то сортируем по умолчанию (по ключу).
         */
        $needSort = in_array($sortField, $fields)
            && isset($schema[$sortField])
            && !isset($filters[$sortField][static::ENUM_FILTER_EQUALS])
            && (!is_null($sortField) || $sortOrder === static::ENUM_SORT_ORDER_DESC);

        /**
         * Определение флагов для выбора сценария получения массива данных
         */
        $needFilterData = is_array($filters) && count($filters) > 0;

        /**
         * Пэйджинг необходим в одном из случаев:
         * 1. Запрашивается страница, отличная от первой;
         * 2. На первой странице количество ключей меньше общего количества ключей в ветке реестра.
         */
        $needGetPageData = $page > 1 || $lastIndex < $subKeysCount;
        $needGetAllData = !$needFilterData && !$needSort && !$needGetPageData;

        $dataList = [];
        /**
         * Обработка исключительных ситуаций
         */

        /**
         * Получение всех данных в случае отсутствия необходимости в фильтрации, сортировке и выборке из списка страниц
         */
        if ($needGetAllData) {
            foreach ($subKeys as $subKey) {
                $subKeyPath = $path . '\\' . $subKey;
                $dataList[$subKey] = $this->getData($subKeyPath, $schema, $fields);
                yield $subKey => $this->getData($subKeyPath, $schema, $fields);
            }
            return null;
        }

        /**
         * Получение выборки данных из необходимой страницы без фильтрации и сортировки по полю
         */
        if (!$needFilterData && !$needSort/* && $needGetPageData*/) {
            yield from $this->getDataListFromKeys($path, $subKeys, $subKeysCount, $schema, $fields, $firstIndex, $lastIndex);
            return null;
        }
        /**
         * Получение отфильтрованных и отсортированных данных
         */
        /**
         * По умолчанию сортируем по ключу массива
         */
        if (!$needFilterData /*&& $needSort*/ && !$needGetPageData && is_null($sortField)) {
            $subKeys = array_reverse($subKeys);
            foreach ($subKeys as $subKey) {
                $subKeyPath = $path . '\\' . $subKey;
                $dataList[$subKey] = $this->getData($subKeyPath, $schema, $fields);
                yield $subKey => $this->getData($subKeyPath, $schema, $fields);
            }
            return null;
        } /**
         * Получение отфильтрованных и отсортированных данных
         */
        elseif (!$needFilterData /*&& $needSort*/ && !$needGetPageData) {
            $keyListForSort = [];
            foreach ($subKeys as $subKey) {
                $subKeyPath = $path . '\\' . $subKey;
                $data = $this->getData($subKeyPath, $schema, $fields);
                $dataList[$subKey] = $data;
                $keyListForSort[$subKey] = $data[$sortField];
//                $keyListForSort[$subKey] = $this->getCustomTypeValue($subKeyPath,
//                    $schema[$sortField][static::SCHEMA_REG_FIELD], $schema[$sortField][static::SCHEMA_PHP_TYPE]);
            }

            $sortOrder === static::ENUM_SORT_ORDER_DESC ? SORT_DESC : SORT_ASC;
            array_multisort($keyListForSort, $sortOrder, $dataList);

            foreach ($dataList as $key => $data) {
                yield $key => $data;
            }
            return null;
        }

        /**
         * Получение ключей выборки массива для сортировки и их сортировка, если требуется
         */
        if (is_null($sortField) && !$needFilterData /*&& $needSort && $needGetPageData*/) {
            yield from $this->getDataListFromKeys($path, array_reverse($subKeys), $subKeysCount, $schema, $fields,
                $firstIndex, $lastIndex);
        } elseif (!$needFilterData /*&& $needSort && $needGetPageData*/) {
            $keyListForSort = [];
            foreach ($subKeys as $subKey) {
                $subKeyPath = $path . '\\' . $subKey;
                $fieldPhpType = isset($schema[$sortField][static::SCHEMA_PHP_TYPE])
                    ? $schema[$sortField][static::SCHEMA_PHP_TYPE]
                    : static::DEFAULT_SCHEMA_PHP_TYPE;
                $keyListForSort[$subKey] = $this->getCustomTypeValue($subKeyPath,
                    $schema[$sortField][static::SCHEMA_REG_FIELD], $fieldPhpType);
            }

            if ($sortOrder === static::ENUM_SORT_ORDER_ASC) {
                asort($keyListForSort);
                yield from $this->getDataListFromKeys($path, array_keys($keyListForSort), $subKeysCount,
                    $schema, $fields, $firstIndex, $lastIndex);

                return null;
            }
            arsort($keyListForSort);

            yield from $this->getDataListFromKeys($path, array_keys($keyListForSort), $subKeysCount,
                $schema, $fields, $firstIndex, $lastIndex);

            return null;
        }

        $keyListForSort = [];
        if ($needSort/* && $needFilterData*/) {
            /**
             * Получение выборки ключей отфильтрованных и отсортированных данных
             */
            $keysCount = 0;
            /**
             * Дублирущая проверка (уже имеется в $needFilterData) добавлена после автоматизированного анализа кода
             * для избежания возможных багов при вызове метода fieldsMatchFilters.
             */
            $filters = is_array($filters) ? $filters : [];
            foreach ($subKeys as $subKey) {
                $subKeyPath = $path . '\\' . $subKey;
                if (!$this->fieldsMatchFilters($subKeyPath, $schema, $filters)) {
                    continue;
                }
                $fieldPhpType = isset($schema[$sortField][static::SCHEMA_PHP_TYPE])
                    ? $schema[$sortField][static::SCHEMA_PHP_TYPE]
                    : static::DEFAULT_SCHEMA_PHP_TYPE;
                $keyListForSort[$subKey] = $this->getCustomTypeValue($subKeyPath,
                    $schema[$sortField][static::SCHEMA_REG_FIELD], $fieldPhpType);
                $keysCount++;
            }

            if (count($keyListForSort) === 0) {
                return null;
            }

            $sortOrder === SORT_ASC ? asort($keyListForSort) : arsort($keyListForSort);
            yield from $this->getDataListFromKeys($path, $keyListForSort, $keysCount,
                $schema, $fields, $firstIndex, $lastIndex);

            return null;
        }

        /**
         * По умолчанию сортируем по ключу массива
         */
        if (is_null($sortField) && $needFilterData && $needSort && $needGetPageData) {
            $keyListForSort = $sortOrder === static::ENUM_SORT_ORDER_ASC
                ? $keyListForSort
                : array_reverse($keyListForSort);
            yield from $this->getDataListFromKeys($path, $keyListForSort, $subKeysCount,
                $schema, $fields, $firstIndex, $lastIndex);
            return null;
        }

        /**
         * В остальных случаях фильтруем массив ключей, получаем необходимую страницу из массива и заполняем её данными.
         */
        /**
         * Получение выборки ключей отфильтрованных данных
         */
        $keysCount = 0;
        /**
         * Дублирущая проверка (уже имеется в $needFilterData) добавлена после автоматизированного анализа кода
         * для избежания возможных багов при вызове метода fieldsMatchFilters.
         */
        $filters = is_array($filters) ? $filters : [];
        foreach ($subKeys as $subKey) {
            $subKeyPath = $path . '\\' . $subKey;
            if (!$this->fieldsMatchFilters($subKeyPath, $schema, $filters)) {
                continue;
            }
            $keyListForSort[] = $subKey;
            $keysCount++;
        }

        if (count($keyListForSort) === 0) {
            return null;
        }

        /**
         * Определение и проверка параметров постраничной навигации
         */
        yield from $this->getDataListFromKeys($path, $keyListForSort, $keysCount, $schema, $fields, $firstIndex, $lastIndex);

        return null;
    }

    /**
     * @param string $path
     * @return bool
     */
    public function hasPath(string $path): bool
    {
        return reg_key_exists($path);
    }

    /**
     * @param string $path
     * @return array
     */
    public function getSubKeys(string $path): array
    {
        return reg_get_sub_keys($path);
    }

    /**
     * @param string $path
     * @param array $schema
     * @param array $fields
     * @return array
     */
    protected function parseSchema(string $path, array $schema, array $fields): array
    {
        $paths = [];
        foreach ($fields as $fieldName) {
            $fieldInfo = $schema[$fieldName] ?? null;

            if (!is_array($fieldInfo)) {
                throw new InvalidArgumentException("Bad schema: field info not an array", 0);
            }

            $regFieldName = $fieldInfo[static::SCHEMA_REG_FIELD] ?? null;

            if (!is_string($regFieldName)) {
                throw new InvalidArgumentException("Bad schema: field name not a string", 0);
            }

            $fieldPath = isset($fieldInfo[static::SCHEMA_REG_PATH])
                ? ($path . $fieldInfo[static::SCHEMA_REG_PATH])
                : $path;

            $phpFieldType = $fieldInfo[static::SCHEMA_PHP_TYPE] ?? static::DEFAULT_SCHEMA_PHP_TYPE;
            if (!array_key_exists($fieldPath, $paths)) {
                $paths[$fieldPath] = [];
            }
            $paths[$fieldPath][$regFieldName] = [
                static::SCHEMA_PHP_TYPE => $phpFieldType,
                static::SCHEMA_FIELD_NAME => $fieldName
            ];
        }

        return $paths;
    }

    /**
     * @param $value
     * @param string $type
     * @return int|string|float|bool|null
     */
    protected function formatValue($value, $type)
    {
        if (is_null($value)) {
            return $value;
        }
        switch ($type) {
            case static::ENUM_SCHEMA_PHP_TYPE_INT:
                return (int)$value;
            case static::ENUM_SCHEMA_PHP_TYPE_FLOAT:
                return (float)$value;
            case static::ENUM_SCHEMA_PHP_TYPE_BOOL:
                return (bool)$value;
            default:
            case static::ENUM_SCHEMA_PHP_TYPE_STRING:
                return (string)$value;
        }
    }

    /**
     * @param array $resRequest
     * @param array $info
     * @return array/none
     */
    protected function parseResult(array $resRequest, array $info): ?array
    {
        $data = [];

        $names = array_column($resRequest, 'name');
        $values = array_column($resRequest, 'value');
        foreach ($info as $fieldName => $fieldInfo) {
            if (!(($ind = array_search((string) $fieldName, $names)) === false)) {
                $data[$fieldInfo[static::SCHEMA_FIELD_NAME]] = $this->formatValue($values[$ind],
                    $fieldInfo[static::SCHEMA_PHP_TYPE]);
                continue;
            }
            // field don't find in reg response
            $data[$fieldInfo[static::SCHEMA_FIELD_NAME]] = null;
        }
        return $data;
    }

    /**
     * @param array $fieldsDataByPaths
     * @return array
     */
    protected function makeRequests(array $fieldsDataByPaths): array
    {
        $data = [];

        foreach ($fieldsDataByPaths as $path => $info) {
            if (count($info) > self::LIMIT_FIELD_COUNT) {
                $resReq = reg_read_values($path);
                //handle response and add result to $data
                $data += $this->parseResult($resReq, $info);
                continue;
            }
            foreach ($info as $reqFieldName => $resInfo) {
                $data[$resInfo[static::SCHEMA_FIELD_NAME]] = $this->getCustomTypeValue($path,
                    (string) $reqFieldName, $resInfo[static::SCHEMA_PHP_TYPE]);
            }
        }

        return $data;
    }

    /**
     * @param string $path
     * @param array $schema
     * @param array|null $fields
     * @return array|null
     */
    public function getData(string $path, array $schema, array $fields = null): ?array
    {
        if (!$this->hasPath($path)) {
            return null;
        }

        $data = [];
        if (count($schema) === 0) {
            return $data;
        }

        $fields = is_null($fields) ? array_keys($schema) : $fields;

        //group schema with path
        $paths = $this->parseSchema($path, $schema, $fields);

        //make requests
        $data = $this->makeRequests($paths);

        return $data;
    }

    /**
     * @param string $path
     * @param string $field
     * @return bool
     */
    public function hasField(string $path, string $field): bool
    {
        return reg_value_exists($path, $field);
    }

    /**
     * @param string $fieldPath
     * @param string $regFieldName
     * @param string $phpFieldType
     * @return mixed
     */
    function getCustomTypeValue(string $fieldPath, string $regFieldName, string $phpFieldType)
    {
        switch ($phpFieldType) {
            case static::ENUM_SCHEMA_PHP_TYPE_INT:
                return $this->getValueAsInt($fieldPath, $regFieldName);
            case static::ENUM_SCHEMA_PHP_TYPE_FLOAT:
                return $this->getValueAsFloat($fieldPath, $regFieldName);
            case static::ENUM_SCHEMA_PHP_TYPE_BOOL:
                return $this->getValueAsBool($fieldPath, $regFieldName);
            default:
            case static::ENUM_SCHEMA_PHP_TYPE_STRING:
                return $this->getValueAsString($fieldPath, $regFieldName);
        }
    }

    /**
     * @param string $path
     * @param string $field
     * @return bool|null
     */
    public function getValueAsBool(string $path, string $field): ?bool
    {
        $res = reg_read_value($path, $field);
        return $res === false ? null : (bool)$res['value'];
    }

    /**
     * @param string $path
     * @param string $field
     * @return int|null
     */
    public function getValueAsInt(string $path, string $field): ?int
    {
        $res = reg_read_value($path, $field);
        return $res === false ? null : (int)$res['value'];
    }

    /**
     * @param string $path
     * @param string $field
     * @return float|null
     */
    public function getValueAsFloat(string $path, string $field): ?float
    {
        $res = reg_read_value($path, $field);

        return $res === false ? null : (float)$res['value'];
    }

    /**
     * @param string $path
     * @param string $field
     * @return null|string
     */
    public function getValueAsString(string $path, string $field): ?string
    {
        $res = reg_read_value($path, $field);
        return $res === false ? null : (string)$res['value'];
    }

    /**
     * @param string $path
     * @param array $subKeys
     * @param int $subKeysCount
     * @param array $schema
     * @param array $fields
     * @param int $firstIndex
     * @param int $lastIndex
     * @return Generator
     */
    protected function getDataListFromKeys(string $path,
                                           array $subKeys,
                                           int $subKeysCount,
                                           array $schema,
                                           array $fields,
                                           int $firstIndex,
                                           int $lastIndex): Generator
    {
        $lastIndex = $lastIndex > $subKeysCount ? $subKeysCount : $lastIndex;

        $dataList = [];
        for ($i = $firstIndex; $i < $lastIndex; $i++) {
            $subKey = $subKeys[$i];
            $subKeyPath = $path . '\\' . $subKey;
            $dataList[$subKey] = $this->getData($subKeyPath, $schema, $fields);
            yield $subKey => $this->getData($subKeyPath, $schema, $fields);
        }
    }

    /**
     * Метод проверяет данные полей пути на соответсвие заданным фильтрам
     *
     * @param string $path
     * @param array $schema
     * @param array $filters
     * @return bool
     */
    protected function fieldsMatchFilters(string $path, array $schema, array $filters): bool
    {
        foreach ($filters as $fieldName => $fieldFilters) {
            $fieldPhpType = isset($schema[$fieldName][static::SCHEMA_PHP_TYPE])
                ? $schema[$fieldName][static::SCHEMA_PHP_TYPE]
                : static::DEFAULT_SCHEMA_PHP_TYPE;
            $fieldValue = $this->getCustomTypeValue($path,
                $schema[$fieldName][static::SCHEMA_REG_FIELD],
                $fieldPhpType);

            if ($this->fieldMatchFilters($fieldValue, $fieldFilters)) {
                continue;
            }
            return false;
        }

        return true;
    }

    /**
     *  Метод проверяет значение поля на соответсвие заданным фильтрам
     * @param mixed $fieldValue
     * @param array $fieldFilters
     * @return bool
     */
    protected function fieldMatchFilters($fieldValue, array $fieldFilters = []): bool
    {
        /**
         * Если массив фильтров для поля пустой, пропускаем его.
         */
        if (!is_array($fieldFilters) || count($fieldFilters) === 0) {
            return true;
        }
        /**
         * Иначе проверяем все фильтры для данного поля
         */

        /**
         * @return Generator
         */
        function getFilters()
        {
            yield RegistryReader::ENUM_FILTER_FROM => function ($fieldValue, $filterValue) {
                return $fieldValue >= $filterValue;
            };
            yield RegistryReader::ENUM_FILTER_TO => function ($fieldValue, $filterValue) {
                return $fieldValue <= $filterValue;
            };
            yield RegistryReader::ENUM_FILTER_EQUALS => function ($fieldValue, $filterValue) {
                return $fieldValue == $filterValue;
            };
            yield RegistryReader::ENUM_FILTER_NOT_EMPTY => function ($fieldValue, $filterValue) {
                return $fieldValue >= !is_null($fieldValue) === $filterValue;
            };
            yield RegistryReader::ENUM_FILTER_INCLUDES => function ($fieldValue, $filterValue) {
                return $fieldValue >= false !== mb_strpos($fieldValue, $filterValue);
            };
        }

        foreach (getFilters() as $filterName => $filterFunction) {
            $filterExists = array_key_exists($filterName, $fieldFilters)
                && !is_null($fieldFilters[$filterName]);
            $filterSuccess = !$filterExists || $filterFunction($fieldValue, $fieldFilters[$filterName]);
            if ($filterSuccess) {
                continue;
            }

            return false;
        }

        return true;
    }

    /**
     * @param string $path
     * @return bool
     */
    public function createPath(string $path): bool
    {
        return reg_create_key($path);
    }

    /**
     * @param string $path
     * @return bool
     */
    public function deletePath(string $path): bool
    {
        return reg_delete_key($path);
    }

    /**
     * @param string $path
     * @param string $field
     * @return bool
     */
    public function deleteField(string $path, string $field): bool
    {
        return reg_delete_value($path, $field);
    }

    /**
     * Получает все названия полей в данном пути реестра.
     * @param string $path
     * @return array|null
     */
    public function getFieldsNames(string $path): ?array
    {
        $res = reg_get_value_names($path);
        return $res === false ? null : $res;
    }

    /**
     * Получает количество полей в данном пути реестра.
     * @param string $path
     * @return int|null
     */
    public function getFieldsCount(string $path): ?int
    {
        $res = reg_get_key_info($path);
        if (isset($res["values_count"])) {
            return $res["values_count"];
        }
        return null;
    }

    /**
     * Получает количество поддиректорий в данном пути реестра.
     * @param string $path
     * @return int|null
     */
    public function getSubKeysCount(string $path): ?int
    {
        $res = reg_get_key_info($path);
        if (isset($res["sub_keys_count"])) {
            return $res["sub_keys_count"];
        }
        return null;
    }

    /**
     * @param string $_field_name
     * @return mixed
     */
    protected function reformNameField($_field_name = '')
    {
        return str_replace(array(' - ', ' ', '-', ':'), array('_', '_', '', '_'), strtolower($_field_name));
    }

    /**
     * @param string $objField
     * @param object $obj
     * @param array $field
     */
    private function initFieldInObj(string $objField, object $obj, array $field)
    {
        try {
            $reflection = new ReflectionProperty(get_class($obj), $objField);
            if ($reflection->isStatic()) {
                return;
            }

            switch(gettype($obj->$objField)){
                case "integer":
                    $obj->$objField = (int)$field['value'];
                    break;
                case "double":
                    $obj->$objField = (float)$field['value'];
                    break;
                case "boolean":
                    $obj->$objField = (boolean)$field['value'];
                    break;
                default:
                    $obj->$objField = $field['value'];
            }

        } catch (Throwable $e) {
        }
    }

    /**
     * Получает все поля из реестра с именами как у свойств переданного объекта
     * @param string $path
     * @param object $obj
     * @return bool
     */
    public function getDataObject(string $path, object $obj): bool
    {
        if (!$this->hasPath($path))
            return false;
        $reg_fields = reg_read_values($path);
        foreach ($reg_fields as $field) {
            if (!$field)
                continue;

            $obj_field = self::reformNameField($field['name']);
            if (strcmp(gettype($obj), 'object') !== 0) {
                continue;
            }
            if (!property_exists($obj, $obj_field)) {
                if (strlen($obj_field)) {
                    $obj->$obj_field = $field['value'];
                }
                continue;
            }
            $this->initFieldInObj($obj_field, $obj, $field);
        }

        return true;
    }
}