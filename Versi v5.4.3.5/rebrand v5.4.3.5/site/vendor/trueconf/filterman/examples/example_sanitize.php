<?php

$start = microtime(true);

require_once "../vendor/autoload.php";

use Filterman\Filterman;

$data = [
    'topic' => 'test',
    'owner' => 'user',
    'description' => '<a><br><br/><p><ul><li><ol><strong><b><h1><h2><h3><h4><h5><h6><u><s><sup><sub><code><pre><div><blockquote><i><em>',
    'schema' => [
        'type' => 1,
        'podiums' => 6,
        'new_ignored_field' => '<a><br><br/>!@#$%^&*()_+|\|=',
        'new_not_ignored_field' => '<script>console.log("HELLO")</script>'
    ],
    'xss' => '<script>console.log("HELLO")</script>',
    'new_ignored_object_field' => [
        'id' => "<a><br><br/>!@#$%^&*()_+|\|=",
        'name' => "<a><br><br/>test_name!@#$%^&*()_+|\|=",
        'role' => '<a><br><br/>user!@#$%^&*()_+|\|='
    ]
];

$ignoredFields = [
    'description' => true,
    'schema' => [
        'new_ignored_field'  => true
    ],
    'new_ignored_object_field'  => true
];

$filterman = new Filterman([
    Filterman::OPTION_DEBUG => true
]);

$filterman->sanitize($data, true, $ignoredFields);

if ($filterman->failed()) {
    $errors = $filterman->getErrors();
    print(json_encode($errors, JSON_PRETTY_PRINT));
} else {
    print(json_encode($data, JSON_PRETTY_PRINT));
}


$end = microtime(true) - $start;

print(PHP_EOL . $end);