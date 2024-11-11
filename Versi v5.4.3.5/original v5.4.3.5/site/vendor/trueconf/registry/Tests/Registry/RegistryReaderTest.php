<?php

namespace Tests\Registry;

use Exception;
use InvalidArgumentException;
use PHPUnit\Framework\TestCase;
use Tests\Config;
use TrueConf\Registry\RegistryReader as Reg;

class testClass
{
    public $field0 = "";
    public $field1 = "";
    public $field2 = 0;
    public $field3 = 0;
    public $field4 = 0.;
    public $field5 = 0.;
    public $field6 = false;
    public $field7 = false;
}

/**
 * Class RegistryReaderTest
 */
class RegistryReaderTest extends TestCase
{
    /**
     * @var string
     */
    protected $rootPath;

    /**
     * @var Reg
     */
    protected $reg;

    /**
     * @var array
     */
    protected $paths;

    const DEFAULT_PARAM_PAGE_SIZE = 20;
    const VERY_LONG_STRING = <<<EOT
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
        qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum 
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
        qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum 
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
EOT;
    const ALL_VALID_FIELDS = [
        "field0" => "I am a good string",
        "field1" => "~!@#$%^&*()-+={}[]\|';:<>,.?/`№ I am too",
        "field2" => 2147483647,
        "field3" => -345634,
        "field4" => 1E-310,
        "field5" => 1E308,
        "field6" => true,
        "field7" => false
    ];

    const ALL_INVALID_FIELDS = [
        "field0" => 1E309
    ];

    /**
     * RegistryReaderTest constructor.
     * @param null $name
     * @param array $data
     * @param string $dataName
     * @throws Exception
     */
    function __construct($name = null, array $data = array(), $dataName = '')
    {
        parent::__construct($name, $data, $dataName);
        $this->reg = new Reg();
        $this->initFields();
    }

    protected function initFields()
    {
        $this->rootPath = Config::getInstance()->getRootPath();
        $this->paths = Config::getInstance()->getPaths();
    }

    /**
     * @param array $schema
     * @param array $values
     * @return array
     */
    protected function getFullEditedArray(array $schema, array $values)
    {
        $outArr = [];
        foreach (array_keys($schema) as $fieldName) {
            /*
            if (is_array(self::ALL_FIELDS[$fieldName])) {
                $outArr[$fieldName] = $this->getFullEditedArray(self::ALL_FIELDS[$fieldName]);
                continue;
            }
            */
            $outArr[$fieldName] = isset($values[$fieldName]) ? $values[$fieldName] : null;
        }

        return $outArr;
    }

    /**
     * @param $value
     * @return string
     */
    protected function getValueType($value)
    {
        return is_string($value) ? Reg::ENUM_SCHEMA_PHP_TYPE_STRING :
            (is_float($value) ? Reg::ENUM_SCHEMA_PHP_TYPE_FLOAT :
                (is_int($value) ? Reg::ENUM_SCHEMA_PHP_TYPE_INT :
                    (is_bool($value) ? Reg::ENUM_SCHEMA_PHP_TYPE_BOOL :
                        Reg::DEFAULT_SCHEMA_PHP_TYPE)));
    }

    /**
     * @param array $fields
     * @return void
     */
    protected function cleanRegistry(array $fields)
    {
        foreach ($fields as $key) {
            $this->assertTrue($this->reg->deleteField($this->rootPath, $key));
            $this->assertFalse($this->reg->hasField($this->rootPath, $key));
        }
        foreach ($this->paths as $path) {
            $this->assertTrue($this->reg->deletePath($this->rootPath . $path));
            $this->assertFalse($this->reg->hasPath($this->rootPath . $path));
        }
        $this->assertTrue($this->reg->deletePath($this->rootPath));
        $this->assertFalse($this->reg->hasPath($this->rootPath));
    }

    /**
     * @param array $values
     * @return array
     */
    protected function getValidRegistrySchema(array $values)
    {
        $oneSchema = [];
        foreach ($values as $key => $value) {
            $oneSchema[$key] = [
                Reg::SCHEMA_REG_FIELD => $key,
                Reg::SCHEMA_PHP_TYPE => $this->getValueType($value)
            ];
        }

        $allValidSchemas = [$oneSchema];

        foreach ($this->paths as $path) {
            $newSchema = $oneSchema;
            foreach (array_keys($newSchema) as $key) {
                $newSchema[$key][Reg::SCHEMA_REG_PATH] = $path;
            }
            $allValidSchemas[] = $newSchema;
        }

        return $allValidSchemas;
    }

    /**
     * @return array
     */
    protected function getInvalidRegistrySchema()
    {
        return [
            "bad_reg_field" => [
                "field0" => [
                    Reg::SCHEMA_REG_FIELD => 0,
                    Reg::SCHEMA_PHP_TYPE => Reg::ENUM_SCHEMA_PHP_TYPE_STRING
                ]
            ],
            "none_field" => [
                "field0" => [
                    Reg::SCHEMA_REG_FIELD => "field2324",
                    Reg::SCHEMA_PHP_TYPE => Reg::ENUM_SCHEMA_PHP_TYPE_STRING
                ]
            ],
            "bad_field_info" => [
                "field0" => "hello"
            ],
            "empty_schema" => [],
            "bad_path" => [
                "field0" => [
                    Reg::SCHEMA_REG_PATH => "//ldnjfkljsdf",
                    Reg::SCHEMA_REG_FIELD => "field0",
                    Reg::SCHEMA_PHP_TYPE => Reg::ENUM_SCHEMA_PHP_TYPE_STRING
                ]
            ]
        ];
    }


    public function testCase0_RegistrySetData_validValues()
    {
        $schemas = $this->getValidRegistrySchema(self::ALL_VALID_FIELDS);

        $this->assertTrue($this->reg->createPath($this->rootPath));
        $this->assertTrue($this->reg->hasPath($this->rootPath));

        foreach ($schemas as $schema) {
            $this->assertTrue($this->reg->setData($this->rootPath, $schema, self::ALL_VALID_FIELDS));
        }
    }

    /**
     * @depends testCase0_RegistrySetData_validValues
     */
    public function testCase1_RegistryGetData_validSchema()
    {
        $schemas = $this->getValidRegistrySchema(self::ALL_VALID_FIELDS);

        foreach ($schemas as $schema) {
            $response = $this->reg->getData($this->rootPath, $schema);
            $this->assertEquals($this->getFullEditedArray($schema, self::ALL_VALID_FIELDS), $response);
        }
    }

    /**
     * @depends testCase0_RegistrySetData_validValues
     */
    public function testCase2_RegistryGetFieldsCount_validSchema()
    {
        $this->assertEquals($this->reg->getFieldsCount($this->rootPath), count(self::ALL_VALID_FIELDS));
    }

    /**
     * @depends testCase0_RegistrySetData_validValues
     */
    public function testCase3_RegistryGetSubKeysCount_validSchema()
    {
        $val = count($this->getValidRegistrySchema(self::ALL_VALID_FIELDS)) - 1;
        $this->assertEquals($this->reg->getSubKeysCount($this->rootPath), $val);
    }

    /**
     * @depends testCase0_RegistrySetData_validValues
     */
    public function testCase4_RegistryGetDataObject_validSchema()
    {
        $obj1 = new testClass();
        $obj2 = new testClass();
        $this->reg->getDataObject($this->rootPath, $obj1);

        foreach (self::ALL_VALID_FIELDS as $key => $value){
            $obj2->$key = $value;
        }
        $this->assertEquals($obj1, $obj2);
    }

    /**
     * @depends testCase0_RegistrySetData_validValues
     */
    public function testCase5_RegistryGetData_invalidSchema()
    {
        $schemas = $this->getInvalidRegistrySchema();

        $this->assertEquals($this->reg->getData($this->rootPath, $schemas["empty_schema"]), []);
        $this->assertEquals($this->reg->getData($this->rootPath, $schemas["none_field"]), ["field0" => null]);
        $this->assertEquals($this->reg->getData($this->rootPath, $schemas["bad_path"]), ["field0" => null]);

        //TODO: This test is waiting changes in function 'reg_key_exists' (return 'true' when path don't exist)
        //$this->assertNull($this->reg->getData("HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\TrueConf\\34534", $schemas["bad_path"]));
    }

    /**
     * @depends testCase0_RegistrySetData_validValues
     */
    public function testCase6_RegistryGetData_invalidSchema_RegField()
    {
        $schemas = $this->getInvalidRegistrySchema();

        $this->expectException(InvalidArgumentException::class);
        $this->reg->getData($this->rootPath, $schemas["bad_reg_field"]); //ex
    }

    /**
     * @depends testCase0_RegistrySetData_validValues
     */
    public function testCase7_RegistryGetData_invalidSchema_FieldInfo()
    {
        $schemas = $this->getInvalidRegistrySchema();

        $this->expectException(InvalidArgumentException::class);
        $this->reg->getData($this->rootPath, $schemas["bad_field_info"]); //ex
    }

    /**
     * @depends testCase0_RegistrySetData_validValues
     */
    public function testCase8_RegistryCustomTypeValue_validValues()
    {
        foreach (self::ALL_VALID_FIELDS as $key => $value)
        {
            $this->assertEquals(
                $this->reg->getCustomTypeValue($this->rootPath, $key, $this->getValueType($value)),
                $value
            );
        }
    }

    /**
     * @depends testCase0_RegistrySetData_validValues
     */
    public function testCase9_RegistryGetDataList()
    {
        $schema = $this->getValidRegistrySchema(self::ALL_VALID_FIELDS)[0];
        foreach ($this->reg->getDataList($this->rootPath, $schema) as $res) {
            $this->assertEquals($res, self::ALL_VALID_FIELDS);
        }
    }

    /**
     * @depends testCase0_RegistrySetData_validValues
     */
    public function testCase10_RegistryGetFieldsNames()
    {
        $fieldNames = array_column($this->getValidRegistrySchema(self::ALL_VALID_FIELDS)[0],
            Reg::SCHEMA_REG_FIELD);
        $this->assertEquals($this->reg->getFieldsNames($this->rootPath), $fieldNames);

        //TODO: This test is waiting changes in function 'reg_get_value_names' (return [] or fields from Trueconf//Server)
        //$fakePath = "HKEY_LOCAL_MACHINE"; //"HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\bad_path"; //$this->rootPath . "\\bad_path";
        //$this->assertNull($this->reg->getFieldsNames($fakePath));
    }

    /**
     * @depends testCase0_RegistrySetData_validValues
     */
    public function testCase11_RegistryDeleteData()
    {
        $this->cleanRegistry(array_keys(self::ALL_VALID_FIELDS));
    }

    /**
     * @depends testCase11_RegistryDeleteData
     */
    public function testCase12_RegistrySetData_InvalidValues()
    {
        $schemas = $this->getValidRegistrySchema(self::ALL_INVALID_FIELDS);

        foreach ($schemas as $schema) {
            $this->assertTrue($this->reg->setData($this->rootPath, $schema, self::ALL_INVALID_FIELDS));
        }
    }

    /**
     * @depends testCase12_RegistrySetData_InvalidValues
     */
    public function testCase13_RegistryGetData_InvalidValues()
    {
        $schemas = $this->getValidRegistrySchema(self::ALL_INVALID_FIELDS);

        foreach ($schemas as $schema) {
            $response = $this->reg->getData($this->rootPath, $schema);
            $this->assertNotEquals($this->getFullEditedArray($schema, self::ALL_INVALID_FIELDS), $response);
        }
    }

    /**
     * @depends testCase12_RegistrySetData_InvalidValues
     */
    public function testCase14_RegistryDeleteData()
    {
        $this->cleanRegistry(array_keys(self::ALL_INVALID_FIELDS));
    }

    /**
     * @depends testCase14_RegistryDeleteData
     */
    public function testCase15_RegistryCustomTypes()
    {
        $this->assertTrue($this->reg->createPath($this->rootPath));
        $this->assertTrue($this->reg->hasPath($this->rootPath));

        // bool testing
        $this->assertTrue($this->reg->setValueAsBool($this->rootPath, "bool", true));
        $this->assertEquals($this->reg->getValueAsBool($this->rootPath, "bool"), true);
        $this->assertTrue($this->reg->deleteField($this->rootPath, "bool"));
        $this->assertTrue($this->reg->setValueAsBool($this->rootPath, "bool", false));
        $this->assertEquals($this->reg->getValueAsBool($this->rootPath, "bool"), false);
        $this->assertTrue($this->reg->deleteField($this->rootPath, "bool"));

        // string testing
        $this->assertTrue($this->reg->setValueAsString($this->rootPath, "string", "\"~!@#$%^&*()-+={}[]\|';:<>,.?/`№ I am too"));
        $this->assertEquals($this->reg->getValueAsString($this->rootPath, "string"), "\"~!@#$%^&*()-+={}[]\|';:<>,.?/`№ I am too");
        $this->assertTrue($this->reg->deleteField($this->rootPath, "string"));
        $this->assertTrue($this->reg->setValueAsString($this->rootPath, "string", self::VERY_LONG_STRING));
        $this->assertEquals($this->reg->getValueAsString($this->rootPath, "string"), self::VERY_LONG_STRING);
        $this->assertTrue($this->reg->deleteField($this->rootPath, "string"));

        // int testing
        $this->assertTrue($this->reg->setValueAsInt($this->rootPath, "int", PHP_INT_MAX));
        $this->assertEquals($this->reg->getValueAsInt($this->rootPath, "int"), PHP_INT_MAX);
        $this->assertTrue($this->reg->deleteField($this->rootPath, "int"));
        $this->assertTrue($this->reg->setValueAsInt($this->rootPath, "int", PHP_INT_MIN));
        $this->assertEquals($this->reg->getValueAsInt($this->rootPath, "int"), PHP_INT_MIN);
        $this->assertTrue($this->reg->deleteField($this->rootPath, "int"));

        // float testing
        $this->assertTrue($this->reg->setValueAsFloat($this->rootPath, "float", PHP_FLOAT_MAX));
        $this->assertEqualsWithDelta($this->reg->getValueAsFloat($this->rootPath, "float"), PHP_FLOAT_MAX,1E295);
        $this->assertTrue($this->reg->deleteField($this->rootPath, "float"));

        //Here INF -> 0.0 (expected behavior)
        $this->assertTrue($this->reg->setValueAsFloat($this->rootPath, "float", 1E309));
        $this->assertEquals($this->reg->getValueAsFloat($this->rootPath, "float"), 0.0);
        $this->assertTrue($this->reg->deleteField($this->rootPath, "float"));

        $this->assertTrue($this->reg->setValueAsFloat($this->rootPath, "float", PHP_FLOAT_MIN));
        $this->assertEquals($this->reg->getValueAsFloat($this->rootPath, "float"), PHP_FLOAT_MIN);
        $this->assertTrue($this->reg->deleteField($this->rootPath, "float"));

        $this->assertTrue($this->reg->setValueAsFloat($this->rootPath, "float", 1E-325));
        $this->assertEquals($this->reg->getValueAsFloat($this->rootPath, "float"), 1E-325);
        $this->assertTrue($this->reg->deleteField($this->rootPath, "float"));

        $this->assertTrue($this->reg->deletePath($this->rootPath));
        $this->assertFalse($this->reg->hasPath($this->rootPath));
    }

    //TODO: This test is waiting change in function 'reg_write_value' (return 'true' but registry entry don't create)
    /*
    public function testCase11_RegistryLongFieldName()
    {
        $schema = [
            "field" => [
                Reg::SCHEMA_REG_FIELD => self::VERY_LONG_STRING, //"hello",
                Reg::SCHEMA_PHP_TYPE => Reg::ENUM_SCHEMA_PHP_TYPE_STRING
            ]
        ];

        $this->assertFalse($this->reg->setData($this->rootPath, $schema, ["field" => "hello"]));
    }

    /**
     * @depends testCase11_RegistryLongFieldName
     *
    public function testCase12_RegistryLongFieldName_Delete()
    {
        $this->assertTrue($this->reg->deletePath($this->rootPath));
        $this->assertFalse($this->reg->hasPath($this->rootPath));
    }*/
}