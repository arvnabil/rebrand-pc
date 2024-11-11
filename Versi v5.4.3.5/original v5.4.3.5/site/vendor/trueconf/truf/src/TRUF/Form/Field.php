<?php

namespace TRUF\Form;

class Field {

    protected $name;
    protected $error = '';
    protected $value = '';

    public function __construct($_name, $_value = null, $_error = null) {
        $this->name = $_name;
        $this->value = $_value;
        $this->error = $_error;
    }

    public function value($_val = null) {
        if (is_null($_val))
            return $this->value;

        $this->value = $_val;
        return $this;
    }

    public function error($_error_message = null) {
        if (is_null($_error_message))
            return $this->error;

        $this->error = $_error_message;
        return $this;
    }

}
