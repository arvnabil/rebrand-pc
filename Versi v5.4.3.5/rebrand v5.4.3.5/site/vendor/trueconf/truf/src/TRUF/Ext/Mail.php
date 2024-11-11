<?php
namespace TRUF\Ext;

require_once 'libs/class.phpmailer.php';

class Mail extends \PHPMailer{

    /**
     * Instance of current class
     * 
     * @var \TRUF\Ext\Mail
     */
    private static $instance = null;
    
    protected $replacements = array();

    public function __construct() {
        $this->IsSMTP();
        $this->IsHTML(TRUE);        
        
        $this->CharSet = "UTF-8";
        $this->SMTPDebug = FALSE;
    }

    /**
     * 
     * @return \TRUF\Ext\Mail
     */
    public static function getSingleton() {
        if (is_null(self::$instance))
            self::$instance = new self;

        return self::$instance;
    }

    /**
     * Set Array of mail replacements
     * 
     * @param array $patterns_arr
     * @return \TRUF\Ext\Mail
     */
    public function setReplacements(array $patterns_arr) {
        $this->replacements = $patterns_arr;
        return $this;
    }
    
    /**
     * Get Array of mail replacements
     * 
     * @return array
     */
    public function getReplacements(){
        return $this->replacements;
    }

    public function send() {
         if ($this->Username && $this->Password)
            $this->SMTPAuth = TRUE;
        
        if (count($this->replacements)) {
            $keys = array_keys($this->replacements);
            $values = array_values($this->replacements);
            $this->Body = str_replace($keys, $values, $this->Body);
            $this->Subject = str_replace($keys, $values, $this->Subject);
        }

        return parent::Send();
    }

}