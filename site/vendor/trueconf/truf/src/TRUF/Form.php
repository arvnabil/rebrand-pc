<?php

namespace TRUF;

class Form {

    const EVENT_PREFIX = 'form_validate_field_';

    protected $fields = array();

    public function __construct() {
        foreach (\TRUF\Request::getParams()->postAll() as $param) {
            $this->fields[$param->key()] = new Form\Field($param->key(), $param->raw());
        }
    }

    public function init() {
        $_this = $this;
        Event::bind(Application::EVENT_PAGE_PRELOAD, function()use($_this) {
            foreach ($this->fields as $key => $field) {
                $event_name = self::EVENT_PREFIX . $key;
                Event::trigger($event_name, $_this, $field);
            }
        });
    }

    public function error($_name, $_error = null) {
        if (isset($this->fields[$_name])) {
            $field = $this->fields[$_name];
            /* @var $field \TRUF\Form\Field */
            if (is_null($_error))
                return $field->error();
            else {
                $field->error($_error);
                return $this;
            }
        }
        return is_null($_error) ? null : $this;
    }

    public function value($_name, $_value = null) {
        if (isset($this->fields[$_name])) {
            $field = $this->fields[$_name];
            /* @var $field \TRUF\Form\Field */
            if (is_null($_value))
                return $field->value();
            else {
                $field->value($_value);
                return $field;
            }
        }
        return is_null($_value) ? null : $this;
    }

    public function fields() {
        return $this->fields;
    }

    public function field($_name) {
        if (isset($this->fields[$_name]))
            return $this->fields[$_name];

        return null;
    }

    public function __get($_name) {
        return $this->field($_name);
    }

    public function hasErrors() {
        foreach ($this->fields as $field) {
            /* @var $field \TRUF\Form\Field */
            $error = $field->error();
            if (!empty($error))
                return true;
        }
        return false;
    }

}
