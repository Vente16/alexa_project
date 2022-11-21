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
require _CONTROLLERS_."/forms.controller.php";
require _CONTROLLERS_."/users.controller.php";


$configuration = [
    'settings' => [
        'displayErrorDetails' => true,
    ],
];

$c = new \Slim\Container($configuration);

$app = new \Slim\App($c);




// GET requests
$app->get("/", "HomeController:index");
$app->get("/checkCon", "TablesController:checkConnection");
$app->get("/tables/fileds", "TablesController::getTables");
$app->get("/dataTable[/{builder}]", "TablesController::dinamycTables");
$app->get("/forms[/{id}]", "FormsController::getFormsBuilt");
$app->get("/formsData[/{id}/{table}]", "FormsController::getFormToUpdate");

// POST requests
$app->post("/tables/builder", "TablesController::saveBuilder");
$app->post("/forms/builder", "FormsController::saveBulderForm");
$app->post("/forms/saveData", "FormsController::saveDataForm");
$app->post("/forms/update", "FormsController::updateFormData");
$app->post("/tables/deleteItem", "TablesController::deleteItem");
$app->post("/users/login", "UsersController::login");

$app->run();
