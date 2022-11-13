<?php
/*
    show errors
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
 */

if (!defined("_MODELS_")) {
    define("_MODELS_", __ROOT__."/app/models");
}

require_once _MODELS_ . "/user.class.php";

class UsersController
{
    public static function login(\Slim\Http\Request $request, \Slim\Http\Response $response, $args)
    {
        $user = new User();
        $allPostPutVars = $request->getParsedBody();
        $email = isset($allPostPutVars['email']) ? $allPostPutVars['email'] : '';
        $password = isset($allPostPutVars['password']) ? $allPostPutVars['password'] : '';

        $info = $user->login($email, $password);

        return $response
            ->withStatus(200)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($info));
    }

    /*
    public static function saveBuilder(\Slim\Http\Request $request, \Slim\Http\Response $response, $args)
    {
        $table = new Table();
        $allPostPutVars = $request->getParsedBody();
        $nameBuilder = $allPostPutVars['name'];
        $nameTable = $allPostPutVars['tableName'];
        $fields = $allPostPutVars['filedsFilteredJoined'];
        $builder = $allPostPutVars['builder'];

        $info = $table->saveTableBuilder($nameBuilder, $nameTable, $fields, $builder);

        return $response
            ->withStatus(200)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($info));
    }
      */

}
