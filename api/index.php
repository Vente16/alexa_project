<?php

/*  To display errors
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
*/

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

if (!defined("__ROOT__")) {
    define("__ROOT__", __DIR__);
}

if (!defined("_CONTROLLERS_")) {
    define("_CONTROLLERS_", __ROOT__."/app/controllers");
}

require __ROOT__."/cors.php";
require __ROOT__."/vendor/autoload.php";
require _CONTROLLERS_."/home.controller.php";
require _CONTROLLERS_."/tables.controller.php";

$app = new \Slim\App();


// GET requests
$app->get("/", "HomeController:index");
$app->get("/tables/fileds", "TablesController::getTables");

// POST requests
$app->post("/tables/builder", "TablesController::saveBuilder");

$app->run();
