<?php


namespace TrueConf\Serviceman\Utils;


use ReflectionClass;
use ReflectionException;

class Util
{
    /**
     * @param string $class
     * @param mixed $constValue
     * @return null|string
     */
    public static function getConstantAsStringByValue(string $class, $constValue): ?string
    {
        $constantName = null;

        try {
            $class = new ReflectionClass ($class);
        } catch (ReflectionException $exception) {
            return null;
        }

        $constants = $class->getConstants();

        foreach ($constants as $name => $value) {
            if ($value === $constValue) {
                $constantName = $name;
            }
        }

        return $constantName;
    }
}