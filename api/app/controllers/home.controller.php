<?php
/*
    show errors
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
 */

class HomeController
{
    public static function index(\Slim\Http\Request $req, \Slim\Http\Response $response, $args)
    {
        $date = date("Y-m-d H:i:s");

        $data = [
            "name" => "Alexa api",
            "version" => "1.0",
            "date" => $date,
            "server" => $_SERVER["SERVER_NAME"],
        ];

        return $response
            ->withStatus(200)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($data));
    }
}
