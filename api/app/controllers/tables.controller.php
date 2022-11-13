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

require_once _MODELS_ . "/table.class.php";

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

    public static function saveBuilder(\Slim\Http\Request $request, \Slim\Http\Response $response, $args)
    {
        $table = new Table();
        $allPostPutVars = $request->getParsedBody();
        $nameBuilder = $allPostPutVars['name'];
        $nameTable = $allPostPutVars['tableName'];
        $fields = $allPostPutVars['filedsFilteredJoined'];
        $builder = $allPostPutVars['builder'];

        $info = $table->saveTableBuilder($nameBuilder,$nameTable,  $fields, $builder);

        return $response
            ->withStatus(200)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($info));
    }

    public static function dinamycTables(\Slim\Http\Request $request, \Slim\Http\Response $response, $args)
    {
        $builder = $args['builder'];
        $table = new Table();

        $info = $table->getDinamycTable($builder);

        return $response
            ->withStatus(200)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($info));
    }

     public static function deleteItem(\Slim\Http\Request $request, \Slim\Http\Response $response, $args)
    {
        $allRequestVars = $request->getParsedBody();

        $module = $allRequestVars['module'];
        $id = $allRequestVars['id'];

        $table = new Table();

        $info = $table->deleteItem($module, $id);

        return $response
            ->withStatus(200)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($info));
    }


}
