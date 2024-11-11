<?php

$start = microtime(true);

require_once "../vendor/autoload.php";

use Filterman\Filterman;

$data = [
    'topic' => 'a',
    'owner' => 'PeTr',
    'schema' => [
        'type' => 1,
        'podiums' => 6,
        'max_participants' => '24.3'
    ],
    'schedule' => [
        'type' => 1,
        'time' => "10:30",
        'days' => ['mon', 'tue']
    ],
    'xss' => '<script>console.log("HELLO")</script>'
];

$schema = [
    'topic' => [
        Filterman::FILTER_REQUIRED => true,
        Filterman::FILTER_TYPE => Filterman::TYPE_STRING,
        Filterman::FILTER_MIN_LENGTH => 1,
        Filterman::FILTER_MAX_LENGTH => 255
    ],
    'owner' => [
        Filterman::FILTER_TYPE => Filterman::TYPE_STRING,
        Filterman::FILTER_TO_LOWER => true
    ],
    'schema' => [
        Filterman::FILTER_REQUIRED => true,
        Filterman::FILTER_TYPE => Filterman::TYPE_ARRAY,
        Filterman::FILTER_PROPERTIES => [
            'type' => [
                Filterman::FILTER_REQUIRED => true,
                Filterman::FILTER_TYPE => Filterman::TYPE_INTEGER
            ],
            'max_participants' => [
                Filterman::FILTER_TYPE => Filterman::TYPE_FLOAT,
                Filterman::FILTER_MIN_NUMBER => 1,
                Filterman::FILTER_MAX_NUMBER => 25
            ]
        ]
    ],
    'schedule' => [
        Filterman::FILTER_REQUIRED => true,
        Filterman::FILTER_TYPE => Filterman::TYPE_ARRAY,
        Filterman::FILTER_PROPERTIES => [
            'type' => [
                Filterman::FILTER_REQUIRED => true,
                Filterman::FILTER_TYPE => Filterman::TYPE_INTEGER
            ],
            'time' => [
                Filterman::FILTER_TYPE => Filterman::TYPE_STRING,
                Filterman::FILTER_PATTERN => "/^(2[0-3]|[01]?[0-9]):(0[1-9]{1}|[1-5]{1}[0-9])$/"
            ]
        ]
    ],
    'xss' => [
        Filterman::FILTER_SANITIZE => FILTER_FLAG_NO_ENCODE_QUOTES
    ]
];

$filterman = new Filterman([
    Filterman::OPTION_DEBUG => true
]);

//$filterman->sanitize($data);
$filterman->setSchema($schema);
$data = $filterman->run($data);


if ($filterman->failed()) {
    $errors = $filterman->getErrors();
    print(json_encode($errors, JSON_PRETTY_PRINT));
} else {
    print(json_encode($data, JSON_PRETTY_PRINT));
}


$end = microtime(true) - $start;

print(PHP_EOL . $end);