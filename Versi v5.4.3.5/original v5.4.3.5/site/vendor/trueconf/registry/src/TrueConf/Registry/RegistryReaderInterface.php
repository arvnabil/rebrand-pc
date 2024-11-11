<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.com>
 */

declare(strict_types=1);

namespace TrueConf\Registry;

use Generator;

/**
 * Interface RegistryReaderInterface
 * @package TrueConf\Registry
 */
interface RegistryReaderInterface
{
    const SCHEMA_REG_KEY = 'reg_key';
    const SCHEMA_REG_TYPE = 'reg_type';
    const SCHEMA_REG_PATH = 'reg_path';
    const SCHEMA_REG_FIELD = 'reg_field';
    const SCHEMA_PHP_TYPE = 'php_type';
    const SCHEMA_READ_ONLY = 'read_only';
    const SCHEMA_FIELD_NAME = 'field_name';
    const LIMIT_FIELD_COUNT = 4;

    const REG_SZ = 'REG_SZ';
    const REG_EXPAND_SZ = 'REG_EXPAND_SZ';
    const REG_BINARY = 'REG_BINARY';
    const REG_DWORD = 'REG_DWORD';
    const REG_QWORD = 'REG_QWORD';
    const REG_MULTI_SZ = 'REG_MULTI_SZ';

    const ENUM_FILTER_FROM = -1;
    const ENUM_FILTER_EQUALS = 0;
    const ENUM_FILTER_TO = 1;
    const ENUM_FILTER_NOT_EMPTY = 10;
    const ENUM_FILTER_INCLUDES = 20;

    const ENUM_SORT_ORDER_ASC = 0;
    const ENUM_SORT_ORDER_DESC = 1;

    const ENUM_SCHEMA_PHP_TYPE_BOOL = 'bool';
    const ENUM_SCHEMA_PHP_TYPE_INT = 'int';
    const ENUM_SCHEMA_PHP_TYPE_FLOAT = 'float';
    const ENUM_SCHEMA_PHP_TYPE_STRING = 'string';

    const DEFAULT_SCHEMA_PHP_TYPE = self::ENUM_SCHEMA_PHP_TYPE_STRING;
    const DEFAULT_SORT_ORDER = self::ENUM_SORT_ORDER_ASC;
    const DEFAULT_PAGE_ID = 1;
    const DEFAULT_PAGE_SIZE = 200;


    /**
     * Проверяет наличие ветки в реестре.
     * @param string $path
     * @return bool
     */
    public function hasPath(string $path): bool;

    /**
     * Создает ветку в реестре.
     * @param string $path
     * @return bool
     */
    public function createPath(string $path): bool;

    /**
     * Удаляет ветку в реестре.
     * @param string $path
     * @return bool
     */
    public function deletePath(string $path): bool;

    /**
     * Возвращает вложенные ключи в ветку реестра.
     * @param string $path
     * @return string[]
     */
    public function getSubKeys(string $path): array;

    /**
     * Проверяет наличие поля.
     * @param string $path
     * @param string $field
     * @return bool
     */
    public function hasField(string $path, string $field): bool;

    /**
     * Удаляет поле.
     * @param string $path
     * @param string $field
     * @return bool
     */
    public function deleteField(string $path, string $field): bool;

    /**
     * Получает значение из поля, как bool.
     * В случае отсутствия поля или если поле является строкой с пустым значением, должно возвращаться null
     * @param string $path
     * @param string $field
     * @return bool|null
     */
    public function getValueAsBool(string $path, string $field): ?bool;

    /**
     * Получает значение из поля, как int.
     * В случае отсутствия поля или если поле является строкой с пустым значением, должно возвращаться null
     * @param string $path
     * @param string $field
     * @return int|null
     */
    public function getValueAsInt(string $path, string $field): ?int;



    /**
     * Получает значение из поля, как float.
     * В случае отсутствия поля или если поле является строкой с пустым значением, должно возвращаться null
     * @param string $path
     * @param string $field
     * @return float|null
     */
    public function getValueAsFloat(string $path, string $field): ?float;

    /**
     * Получает значение из поля, как string.
     * В случае отсутствия поля должно возвращаться null
     * @param string $path
     * @param string $field
     * @return string|null
     */
    public function getValueAsString(string $path, string $field): ?string;

    /**
     * Задает значение для поля, как bool.
     * Реестр не поддерживает тип bool, значение должно быть сохраненно в поле REG_DWORD.
     * @param string $path
     * @param string $field
     * @param bool $value
     * @param string $type
     * @return bool
     */
    public function setValueAsBool(string $path, string $field, bool $value, string $type = self::REG_DWORD): bool;

    /**
     * Задает значение для поля, как int.
     * @param string $path
     * @param string $field
     * @param int $value
     * @param string $type
     * @return bool
     */
    public function setValueAsInt(string $path, string $field, int $value, string $type = self::REG_DWORD): bool;

    /**
     * Задает значение для поля, как float.
     * Реестр не поддерживает тип float, значение должно быть сохраненно в строковое поле.
     * @param string $path
     * @param string $field
     * @param float $value
     * @param string $type
     * @return bool
     */
    public function setValueAsFloat(string $path, string $field, float $value, string $type = self::REG_SZ): bool;

    /**
     * Задает значение для поля, как string.
     * @param string $path
     * @param string $field
     * @param string $value
     * @param string $type
     * @return bool
     */
    public function setValueAsString(string $path, string $field, string $value, string $type = self::REG_SZ): bool;

    /**
     * Получает данные из каталога реестра по схеме выбранное количество полей.
     * @param string $path
     * @param array $schema
     * @param array $fields
     * @return array|null
     */
    public function getData(string $path, array $schema, array $fields = null): ?array;

    /**
     * Записывает данные из массива $data в каталог реестра по схеме.
     * @param string $path
     * @param array $schema
     * @param array $data
     * @return bool
     */
    public function setData(string $path, array $schema, array $data): bool;

    /**
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
                                string $sortField = null): Generator;

    /**
     * Получает все названия полей в данном пути реестра.
     * @param string $path
     * @return array|null
     */
    public function getFieldsNames(string $path): ?array;

    /**
     * Получает количество полей в данном пути реестра.
     * @param string $path
     * @return int|null
     */
    public function getFieldsCount(string $path): ?int;

    /**
     * Получает количество поддиректорий в данном пути реестра.
     * @param string $path
     * @return int|null
     */
    public function getSubKeysCount(string $path): ?int;

    /**
     * Заполняет свойства объекта данными из реестра в случае совпадающих имён
     * @param string $path
     * @param object $obj
     * @return bool
     */
    public function getDataObject(string $path, object $obj): bool;


}