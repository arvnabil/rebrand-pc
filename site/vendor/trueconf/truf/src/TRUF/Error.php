<?php

/**
 * Description of Error
 *
 * @package TRUF
 * @author Adrey Kravchenko
 */

namespace TRUF;

class Error {

    public function onNotFound(\TRUF\Event $event) {
        print "<fieldset>";
        print "<legend><h1>404 Not Found</h1></legend>";
        print "Page for path <i>" . \TRUF\Request::getPath() . "</i> undefined";

        $desc = $event->payload();
        if ($desc) {
            print "<br /><i><pre>";
            var_dump($event->payload());
            print "</pre></i>";
        }
        print "</fieldset>";
        $event->stopPropagation();
    }

    public function onError(\TRUF\Event $event) {
        $data = $event->payload();

        print "<fieldset>";
        print "<legend><h1>TRUF Error Handler</h1></legend>";
        print "<h4>Error type: {$data['type']}</h4>
               <h4>Error message: {$data['message']}</h4>
               <h4>File: {$data['file']}</h4>
               <h4>Line: {$data['line']}</h4>";
        print "</fieldset>";
    }

    public function onFatalError(\TRUF\Event $event) {
        $data = $event->payload();

        print "<fieldset>";
        print "<legend><h1>TRUF Fatal Error Handler</h1></legend>";
        print "Error type: {$data['type']}<br />
               Error message: {$data['message']}<br />
               File: {$data['file']}<br />
               Line: {$data['line']}<br />";
        print "</fieldset>";
    }

    public function onShutdown(\TRUF\Event $event) {
        print "run shutdown function";
    }

    public function onExeption(\TRUF\Event $event) {
        print "<fieldset>";
        print '<legend><h1>TRUF Exeption Handler</h1></legend>';
        print '<h2>Code: ' . $event->payload()->getCode() . '</h2>';
        print '<h2>' . $event->payload()->getMessage() . '</h2>';
        print str_replace(PHP_EOL, '<br />', $event->payload()->getTraceAsString());
        print "</fieldset>";
    }

    public function onIoCError(\TRUF\Event $event) {
        $pl = $event->payload();
        print "<fieldset>";
        print '<legend><h1>TRUF IoC Error Handler</h1></legend>';
        print '<h4>IoC name: ' . $pl['name'] . '</h4>';
        print '<h4>required params: ' . $pl['required'] . '</h4>';
        print '<h4>given params: ' . $pl['given'] . '</h4>';
        print '<h4>File: ' . $pl['file'] . '</h4>';
        print '<h4>Line: ' . $pl['line'] . '</h4>';
        print "</fieldset>";
    }

    public function onContextError(\TRUF\Event $event) {
        $pl = $event->payload();
        print "<fieldset>";
        print '<legend><h1>TRUF Context Error Handler</h1></legend>';
        print '<h4>Error: ' . $pl . '</h4>';
        print "</fieldset>";
    }

}
