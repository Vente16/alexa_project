<?php
/*
    show errors
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
 */

if (!defined("__ROOT__")) {
    define("__ROOT__", dirname(dirname(dirname(__FILE__))));
}

if (!defined("_MODELS_")) {
    define("_MODELS_", __ROOT__."/app/models");
}

require _MODELS_ . "/table.class.php";

class TablesController
{
    public static function getTables(\Slim\Http\Request $req, \Slim\Http\Response $response, $args)
    {
        $table = new Table();
        $tables = $table->getTables();

        return $response
            ->withStatus(200)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($tables));
    }
}
