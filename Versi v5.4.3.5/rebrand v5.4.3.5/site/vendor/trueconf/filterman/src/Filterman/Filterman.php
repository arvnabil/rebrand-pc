<?php

namespace Filterman;

use LogicException;

/**
 * Class Filterman
 *
 * @package Filterman
 */
class Filterman
{
    const ERROR_MISSING_REQUIRED_FIELD = "missingRequiredField";
    const ERROR_FIELD_HAS_INVALID_TYPE = "fieldHasInvalidType";
    const ERROR_FIELD_HAS_INVALID_VALUE = "fieldHasInvalidValue";
    const ERROR_FIELD_HAS_INVALID_FORMAT = "fieldHasInvalidFormat";
    const ERROR_FIELD_IS_EMPTY = "fieldIsEmpty";
    const ERROR_FIELD_IS_TOO_LONG = "fieldIsTooLong";
    const ERROR_FIELD_IS_TOO_SHORT = "fieldIsTooShort";
    const ERROR_FIELD_MIN_NUMBER = "fieldMinNumber";
    const ERROR_FIELD_MAX_NUMBER = "fieldMaxNumber";

    /* Опция отвечающая за жесткую проверку типов. */
    const OPTION_STRICT_TYPE = "strict_type";

    /* Опция отвечающая за преобразование типов, если это возможно. */
    const OPTION_TYPE_CONVERSION = "type_conversion";

    /* Отвечает за дополнительную информацию в сообщениях об ошибках */
    const OPTION_DEBUG = "debug";

    /* Отвечает за установление значения переданного параметра в заданное, если параметр не передан или равен null*/
    const SET_DEFAULT_VALUE = 'defaultValue';

    const FILTER_TYPE = "type";
    const FILTER_REQUIRED = "required";
    const FILTER_ITEMS = "items";
    const FILTER_ONE_OF = "oneOf";
    const FILTER_PROPERTIES = "properties";
    const FILTER_PATTERN = "pattern";
    const FILTER_MIN_NUMBER = "minNumber";
    const FILTER_MAX_NUMBER = "maxNumber";
    const FILTER_MIN_LENGTH = "minLength";
    const FILTER_MAX_LENGTH = "maxLength";
    const FILTER_VALID_URL = "validURL";
    const FILTER_TO_LOWER = "toLower";
    const FILTER_SANITIZE = "sanitize";
    const FILTER_VAR = "filterVar";
    const TYPE_BOOL = "bool";
    const TYPE_BOOLEAN = "boolean";
    const TYPE_INT = "int";
    const TYPE_INTEGER = "integer";
    const TYPE_REAL = "real";
    const TYPE_FLOAT = "float";
    const TYPE_DOUBLE = "double";
    const TYPE_STRING = "string";
    const TYPE_ARRAY = "array";
    const TYPE_OBJECT = "object";
    const TYPE_NULL = "null";

    /**
     * @var string[]
     */
    private static $filterIssetField = [
        self::FILTER_TYPE,
        self::FILTER_ITEMS,
        self::FILTER_ONE_OF,
        self::FILTER_PROPERTIES,
        self::FILTER_PATTERN,
        self::FILTER_MIN_NUMBER,
        self::FILTER_MAX_NUMBER,
        self::FILTER_MIN_LENGTH,
        self::FILTER_MAX_LENGTH,
        self::FILTER_VALID_URL,
        self::FILTER_TO_LOWER,
        self::FILTER_SANITIZE,
        self::FILTER_VAR
    ];
    /**
     * @var array<string, mixed>
     */
    protected $data = [];

    /**
     * @var array<string, array>
     */
    protected $schema = [];

    /**
     * @var array<string, array>
     */
    protected $errors = [];

    /**
     * @var array<string, mixed>
     */
    protected $options = [
        self::OPTION_DEBUG => false,
        self::OPTION_STRICT_TYPE => false,
        self::OPTION_TYPE_CONVERSION => true
    ];

    /**
     * Filterman constructor.
     *
     * @param array<string, mixed> $options
     */
    public function __construct(array $options = [])
    {
        $this->options = array_merge($this->options, $options);
    }

    /**
     * @return array<string, array>
     */
    public function getErrors(): array
    {
        return $this->errors;
    }

    /**
     * @param array<string, array> $schema
     */
    public function setSchema(array $schema): void
    {
        $this->schema = $schema;
    }

    /**
     * @param array<string, mixed> $data
     *
     * @return array<string, mixed>|null
     */
    public function run(array $data): ?array
    {
        $this->data = $data;
        $this->errors = [];

        foreach ($this->schema as $field => $rules) {
            $this->filter($this->data, $field, $rules, ['root' => '']);
        }

        if ($this->failed()) {
            return null;
        }

        return $this->data;
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     * @param array<string, mixed> $rules
     * @param array<string, mixed> $context
     */
    private function filter(array &$data, $field, array $rules, array $context): void
    {
        if (isset($rules[static::SET_DEFAULT_VALUE])) {
            $this->deleteDefaultValueRuleIfFieldRequired($rules);
        }

        foreach ($rules as $rule => $params) {
            $error = $this->allocator($data, $field, $rule, $params, $context);

            if ($error === null) {
                continue;
            }

            $field_id = ($context['root'] === "") ? $field : $context['root'] . "." . $field;

            if (!isset($this->errors[$field_id])) {
                $this->errors[$field_id] = [];
            }

            $code = $error['code'];

            if (isset($this->errors[$field_id][$code])) {
                continue;
            }

            unset($error['code']);

            $this->errors[$field_id][$code] = $error;
        }
    }

    /**
     * @param array<string, mixed> $rules
     */
    private function deleteDefaultValueRuleIfFieldRequired(array &$rules): void
    {
        if (isset($rules[static::FILTER_REQUIRED]) && $rules[static::FILTER_REQUIRED] === true) {
            unset($rules[static::SET_DEFAULT_VALUE]);
        }
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     * @param string $rule
     * @param mixed $params
     * @param array<string, mixed> $context
     *
     * @return array<string, mixed>|null
     */
    private function allocator(array &$data, $field, string $rule, $params, array $context): ?array
    {
        /** Обработка указанных фильтров пропускаются, в случае если отсутствует value */
        if (in_array($rule, static::$filterIssetField) && false === isset($data[$field])) {
            return null;
        }

        switch ($rule) {
            case(static::FILTER_REQUIRED):
                return $this->filter_required($data, $field, $params);
            case(static::SET_DEFAULT_VALUE):
                $this->set_default_value($data, $field, $params);
                return null;
            case(static::FILTER_TYPE):
                return $this->filter_type($data, $field, $params);
            case(static::FILTER_MIN_LENGTH):
                return $this->filter_min_length($data, $field, $params);
            case(static::FILTER_MAX_LENGTH):
                return $this->filter_max_length($data, $field, $params);
            case(static::FILTER_MIN_NUMBER):
                return $this->filter_min_number($data, $field, $params);
            case(static::FILTER_MAX_NUMBER):
                return $this->filter_max_number($data, $field, $params);
            case(static::FILTER_ITEMS):
                return $this->filter_items($data, $field, $params, $context);
            case(static::FILTER_ONE_OF):
                return $this->filter_one_of($data, $field, $params);
            case(static::FILTER_PROPERTIES):
                return $this->filter_properties($data, $field, $params, $context);
            case(static::FILTER_PATTERN):
                return $this->filter_pattern($data, $field, $params);
            case(static::FILTER_VALID_URL):
                return $this->filter_valid_url($data, $field, $params);
            case(static::FILTER_TO_LOWER):
                $this->filter_to_lower($data, $field, $params);
                return null;
            case(static::FILTER_SANITIZE):
                return $this->filter_sanitize($data, $field, $params);
            case(static::FILTER_VAR):
                $this->filter_var($data, $field, $params);
                return null;
            default:
                return null;
        }
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     * @param bool $is_required
     *
     * @return array<string, mixed>|null
     */
    private function filter_required(array $data, $field, bool $is_required): ?array
    {
        if ($is_required !== true) {
            return null;
        }

        if (isset($data[$field])) {
            return null;
        }

        return $this->getErrorMessage($field, static::ERROR_MISSING_REQUIRED_FIELD, __FILE__, __LINE__, __FUNCTION__);
    }

    /**
     * @param mixed $field
     * @param string $code
     * @param string $file
     * @param int $line
     * @param string $filter
     * @param mixed $params
     *
     * @return array<string, mixed>
     */
    private function getErrorMessage($field, string $code, string $file, int $line, string $filter, $params = null): array
    {
        $error_message = [
            'code' => $code,
            'message' => '',
            'filter' => $filter,
            'params' => $params,
            'file' => '',
            'line' => ''
        ];

        if ($this->options[static::OPTION_DEBUG]) {
            $error_message['file'] = $file;
            $error_message['line'] = $line;
        }

        switch ($code) {
            case(static::ERROR_MISSING_REQUIRED_FIELD):
                $error_message['message'] = "Missing required field $field.";
                break;
            case(static::ERROR_FIELD_HAS_INVALID_TYPE):
                $error_message['message'] = "The field $field has invalid type.";
                break;
            case(static::ERROR_FIELD_HAS_INVALID_VALUE):
                $error_message['message'] = "The field $field has invalid value.";
                break;
            case(static::ERROR_FIELD_HAS_INVALID_FORMAT):
                $error_message['message'] = "The field $field has invalid format.";
                break;
            case(static::ERROR_FIELD_MIN_NUMBER):
                $error_message['message'] = "The field $field must be $params or more.";
                break;
            case(static::ERROR_FIELD_MAX_NUMBER):
                $error_message['message'] = "The field $field must be $params or less.";
                break;
            case(static::ERROR_FIELD_IS_TOO_LONG):
                $error_message['message'] = "The field $field may not be greater than $params characters.";
                break;
            case(static::ERROR_FIELD_IS_TOO_SHORT):
                $error_message['message'] = "The field $field must be at least $params characters.";
                break;
            case(static::ERROR_FIELD_IS_EMPTY):
                $error_message['message'] = "The field $field is empty.";
                break;
        }

        return $error_message;
    }

    /**
     * @param array<string, mixed> $data
     * @param string $field
     * @param mixed $params
     */
    private function set_default_value(array &$data, string $field, $params): void
    {
        if (false === isset($data[$field])) {
            $data[$field] = $params;
        }
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     * @param string $type
     *
     * @return array<string, mixed>|null
     */
    private function filter_type(array &$data, $field, string $type): ?array
    {
        switch ($type) {
            case(static::TYPE_STRING):
                return $this->filter_type_string($data, $field);
            case(static::TYPE_ARRAY):
                return $this->filter_type_array($data, $field);
            case(static::TYPE_NULL):
                return $this->filter_type_null($data, $field);
            case(static::TYPE_INT):
            case(static::TYPE_INTEGER):
                return $this->filter_type_integer($data, $field);
            case(static::TYPE_BOOL):
            case(static::TYPE_BOOLEAN):
                return $this->filter_type_boolean($data, $field);
            case(static::TYPE_REAL):
            case(static::TYPE_FLOAT):
            case(static::TYPE_DOUBLE):
                return $this->filter_type_float($data, $field);
            default:
                return $this->getErrorMessage($field, static::ERROR_FIELD_HAS_INVALID_TYPE, __FILE__, __LINE__, __FUNCTION__);
        }
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     *
     * @return array<string, mixed>|null
     */
    private function filter_type_string(array &$data, $field): ?array
    {
        $value = &$data[$field];

        if (is_string($value)) {
            return null;
        }

        if ($this->options[static::OPTION_STRICT_TYPE] === true) {
            return $this->getErrorMessage($field, static::ERROR_FIELD_HAS_INVALID_TYPE, __FILE__, __LINE__, __FUNCTION__);
        }

        if (is_array($value)) {
            return $this->getErrorMessage($field, static::ERROR_FIELD_HAS_INVALID_TYPE, __FILE__, __LINE__, __FUNCTION__);
        }

        if ($this->options[static::OPTION_TYPE_CONVERSION] === true) {
            settype($value, static::TYPE_STRING);
        }

        return null;
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     *
     * @return array<string, mixed>|null
     */
    private function filter_type_array(array &$data, $field): ?array
    {
        $value = &$data[$field];

        if (is_array($value)) {
            return null;
        }

        return $this->getErrorMessage($field, static::ERROR_FIELD_HAS_INVALID_TYPE, __FILE__, __LINE__, __FUNCTION__);
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     *
     * @return array<string, mixed>|null
     */
    private function filter_type_null(array &$data, $field): ?array
    {
        $value = &$data[$field];

        if ($value !== null) {
            if ($this->options[static::OPTION_STRICT_TYPE] === true) {
                return $this->getErrorMessage($field, static::ERROR_FIELD_HAS_INVALID_TYPE, __FILE__, __LINE__, __FUNCTION__);
            }

            if (is_array($value)) {
                return $this->getErrorMessage($field, static::ERROR_FIELD_HAS_INVALID_TYPE, __FILE__, __LINE__, __FUNCTION__);
            }

            if ($this->options[static::OPTION_TYPE_CONVERSION] === true) {
                settype($value, static::TYPE_NULL);
            }
        }

        return null;
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     *
     * @return array<string, mixed>|null
     */
    private function filter_type_integer(array &$data, $field): ?array
    {
        $value = &$data[$field];

        if (is_integer($value)) {
            return null;
        }

        if ($this->options[static::OPTION_STRICT_TYPE] === true) {
            return $this->getErrorMessage($field, static::ERROR_FIELD_HAS_INVALID_TYPE, __FILE__, __LINE__, __FUNCTION__);
        }

        if (is_array($value)) {
            return $this->getErrorMessage($field, static::ERROR_FIELD_HAS_INVALID_TYPE, __FILE__, __LINE__, __FUNCTION__);
        }

        $_value = (string)$value;

        /**
         * @see https://secure.php.net/manual/ru/function.ctype-digit.php
         */
        if (function_exists('ctype_digit') && false === ctype_digit($_value)) {
            return $this->getErrorMessage($field, static::ERROR_FIELD_HAS_INVALID_TYPE, __FILE__, __LINE__, __FUNCTION__);
        }

        if ($this->options[static::OPTION_TYPE_CONVERSION] === true) {
            settype($value, static::TYPE_INTEGER);
        }

        return null;
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     *
     * @return array<string, mixed>|null
     */
    private function filter_type_boolean(array &$data, $field): ?array
    {
        $value = &$data[$field];

        if (is_bool($value)) {
            return null;
        }

        if ($this->options[static::OPTION_STRICT_TYPE] === true) {
            return $this->getErrorMessage($field, static::ERROR_FIELD_HAS_INVALID_TYPE, __FILE__, __LINE__, __FUNCTION__);
        }

        if (is_array($value)) {
            return $this->getErrorMessage($field, static::ERROR_FIELD_HAS_INVALID_TYPE, __FILE__, __LINE__, __FUNCTION__);
        }

        if ($this->options[static::OPTION_TYPE_CONVERSION] === true) {
            if (in_array($value, ['y', 'yes', 'true', '1', 1, true], true) === true) {
                $value = true;
            } elseif (in_array($value, ['n', 'no', 'false', '0', 0, '0.0', 0.0, 'null', false], true) === true) {
                $value = false;
            }
        }

        return null;
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     *
     * @return array<string, mixed>|null
     */
    private function filter_type_float(array &$data, $field): ?array
    {
        $value = &$data[$field];

        if (is_float($value)) {
            return null;
        }

        if ($this->options[static::OPTION_STRICT_TYPE] === true) {
            return $this->getErrorMessage($field, static::ERROR_FIELD_HAS_INVALID_TYPE, __FILE__, __LINE__, __FUNCTION__);
        }

        if (!is_numeric($value)) {
            return $this->getErrorMessage($field, static::ERROR_FIELD_HAS_INVALID_TYPE, __FILE__, __LINE__, __FUNCTION__);
        }

        if ($this->options[static::OPTION_TYPE_CONVERSION] === true) {
            settype($value, static::TYPE_FLOAT);
        }

        return null;
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     * @param integer $min_length
     *
     * @return array<string, mixed>|null
     */
    private function filter_min_length(array $data, $field, int $min_length): ?array
    {
        $error = $this->filter_type_string($data, $field);

        if ($error !== null) {
            return null;
        }

        $length = function_exists('mb_strlen') ? mb_strlen($data[$field]) : strlen($data[$field]);

        if ($length === 0 && $min_length !== 0) {
            return $this->getErrorMessage($field, static::ERROR_FIELD_IS_EMPTY, __FILE__, __LINE__, __FUNCTION__, $min_length);
        }

        if ($length < $min_length) {
            return $this->getErrorMessage($field, static::ERROR_FIELD_IS_TOO_SHORT, __FILE__, __LINE__, __FUNCTION__, $min_length);
        }

        return null;
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     * @param integer $max_length
     *
     * @return array<string, mixed>|null
     */
    private function filter_max_length(array $data, $field, int $max_length): ?array
    {
        $error = $this->filter_type_string($data, $field);
        if ($error !== null) {
            return null;
        }

        $length = function_exists('mb_strlen') ? mb_strlen($data[$field]) : strlen($data[$field]);

        if ($length > $max_length) {
            return $this->getErrorMessage($field, static::ERROR_FIELD_IS_TOO_LONG, __FILE__, __LINE__, __FUNCTION__, $max_length);
        }

        return null;
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     * @param integer $min_number
     *
     * @return array<string, mixed>|null
     */
    private function filter_min_number(array $data, $field, int $min_number): ?array
    {
        //hack
        $error_integer = $this->filter_type_integer($data, $field);
        $error_float = $this->filter_type_float($data, $field);

        if ($error_integer !== null && $error_float !== null) {
            return null;
        }

        if ($data[$field] < $min_number) {
            return $this->getErrorMessage($field, static::ERROR_FIELD_MIN_NUMBER, __FILE__, __LINE__, __FUNCTION__, $min_number);
        }

        return null;
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     * @param integer $max_number
     *
     * @return array<string, mixed>|null
     */
    private function filter_max_number(array $data, $field, int $max_number): ?array
    {
        //hack
        $error_integer = $this->filter_type_integer($data, $field);
        $error_float = $this->filter_type_float($data, $field);

        if ($error_integer !== null && $error_float !== null) {
            return null;
        }

        if ($data[$field] > $max_number) {
            return $this->getErrorMessage($field, static::ERROR_FIELD_MAX_NUMBER, __FILE__, __LINE__, __FUNCTION__, $max_number);
        }

        return null;
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     * @param array<string, mixed> $rules
     * @param array<string, mixed> $context
     *
     * @return array<string, mixed>|null
     */
    private function filter_items(array &$data, $field, array $rules, array $context): ?array
    {
        $error = $this->filter_type_array($data, $field);
        if ($error !== null) {
            return $error;
        }

        $context['root'] = ltrim($context['root'] . '.' . $field, '.');

        for ($index = 0; $index < count($data[$field]); $index++) {
            $this->filter($data[$field], $index, $rules, $context);
        }

        return null;
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     * @param array<int, mixed> $params
     *
     * @return array<string, mixed>|null
     */
    private function filter_one_of(array &$data, $field, array $params): ?array
    {
        $value = &$data[$field];

        if (array_search($value, $params, true) !== false) {
            return null;
        }

        return $this->getErrorMessage($field, static::ERROR_FIELD_HAS_INVALID_VALUE, __FILE__, __LINE__, __FUNCTION__, $params);
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     * @param array<string, array> $schema
     * @param array<string, mixed> $context
     *
     * @return array<string, mixed>|null
     */
    private function filter_properties(array &$data, $field, array $schema, array $context): ?array
    {
        $error = $this->filter_type_array($data, $field);
        if ($error !== null) {
            return $error;
        }

        $context['root'] = ltrim($context['root'] . '.' . $field, '.');

        foreach ($schema as $key => $rules) {
            $this->filter($data[$field], $key, $rules, $context);
        }

        return null;
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     * @param string $pattern
     *
     * @return array<string, mixed>|null
     */
    private function filter_pattern(array &$data, $field, string $pattern): ?array
    {
        $value = &$data[$field];

        if (!is_string($value)) {
            return null;
        }

        if (!preg_match($pattern, $value)) {
            return $this->getErrorMessage($field, static::ERROR_FIELD_HAS_INVALID_FORMAT, __FILE__, __LINE__, __FUNCTION__, $pattern);
        }

        return null;
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     * @param mixed $flag
     *
     * @return array<string, mixed>|null
     */
    private function filter_valid_url(array $data, $field, $flag = null): ?array
    {
        $error = $this->filter_type_string($data, $field);
        if ($error !== null) {
            return $error;
        }

        $value = $data[$field];

        if (!filter_var($value, FILTER_VALIDATE_URL, $flag ?? null)) {
            return $this->getErrorMessage($field, static::ERROR_FIELD_HAS_INVALID_FORMAT, __FILE__, __LINE__, __FUNCTION__, 'FILTER_VALIDATE_URL');
        }

        return null;
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     * @param mixed $params
     */
    private function filter_to_lower(array &$data, $field, $params): void
    {
        if ($params === false) {
            return;
        }

        $error = $this->filter_type_string($data, $field);
        if ($error !== null) {
            return;
        }

        $value = &$data[$field];

        $value = function_exists('mb_strtolower')
            ? mb_strtolower($value)
            : strtolower($value);
    }

    /**
     * @param array<string, mixed> $data
     * @param mixed $field
     * @param mixed $flag
     *
     * @return array<string, mixed>|null
     */
    private function filter_sanitize(array $data, $field, $flag = null): ?array
    {
        $original = $data[$field];
        $value = &$data[$field];

        $value = htmlspecialchars($value, is_int($flag) ? $flag : ENT_QUOTES|ENT_SUBSTITUTE);

        if ($value !== $original) {
            return $this->getErrorMessage($field, static::ERROR_FIELD_HAS_INVALID_VALUE, __FILE__, __LINE__, __FUNCTION__);
        }

        return null;
    }

    /**
     * @param array<string, mixed> $data
     * @param null|string $field
     * @param null|array<int, mixed> $params
     *
     * @throws LogicException
     */
    private function filter_var(array &$data, ?string $field, ?array $params): void
    {
        if (is_null($params) || count($params) > 1)
            throw new LogicException('Invalid $params argument given. Expected array [(int) $generalFlag => (int) $additionalFlag]');

        $generalFlag = key($params);

        if (false === is_int($generalFlag)) {
            throw new LogicException('Invalid $params argument given. Expected array [(int) $generalFlag => (int) $additionalFlag]');
        }

        $additionalFlag = $params[$generalFlag];

        $data[$field] = filter_var($data[$field], $generalFlag, $additionalFlag);

        if (false === $data[$field])
            throw new LogicException('Invalid Flag Given');
    }

    /**
     * @return bool
     */
    public function failed(): bool
    {
        return !empty($this->errors);
    }

    /**
     * See example_sanitize.
     *
     * @param array<string, mixed> $data
     * @param bool $utf8_encode
     * @param array<string, mixed> $ignored_fields
     */
    public function sanitize(array &$data, bool $utf8_encode = true, array $ignored_fields = []): void
    {
        foreach ($data as $field => &$value) {
            if (isset($ignored_fields[$field]) && !is_array($ignored_fields[$field]) && $ignored_fields[$field] === true) {
                continue;
            }

            if (is_array($value)) {
                $ignored_sub_fields = isset($ignored_fields[$field]) && is_array($ignored_fields[$field])
                    ? $ignored_fields[$field]
                    : [];
                $this->sanitize($value, $utf8_encode, $ignored_sub_fields);
                continue;
            }

            if (is_string($value)) {
                if (strpos($value, "\r") !== false) {
                    $value = trim($value);
                }

                if (function_exists('iconv') && function_exists('mb_detect_encoding') && $utf8_encode) {
                    $current_encoding = mb_detect_encoding($value);
                    if (is_string($current_encoding) && $current_encoding !== 'UTF-8' && $current_encoding !== 'UTF-16') {
                        $value = iconv($current_encoding, 'UTF-8', $value);
                    }
                }

                $value = htmlspecialchars($value, ENT_NOQUOTES);
            }
        }
    }
}
