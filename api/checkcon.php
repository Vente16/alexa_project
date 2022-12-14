<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


if (! defined('ABSPATH')) {
define('ABSPATH', __DIR__ . '/');
}

use Dotenv\Dotenv;

 if (!defined("__ROOT__")) {
    define("__ROOT__", ABSPATH);
 }

require_once __ROOT__."vendor/autoload.php";

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

 class Connection
 {
    private $con;

    public function __construct()
    {
        $host = $_SERVER["DB_HOST"];
        $dbname = $_SERVER["DB_NAME"];
        $user = $_SERVER["DB_USER"];
        $pass = $_SERVER["DB_PASSWD"];

        try {
            $con = new PDO(
                "mysql:host=$host; dbname=$dbname; charset-utf8;",
                $user,
                $pass
            );

            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $con->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

            $con->exec("set names utf8");
            $this->con =  $con;
        } catch (PDOException $e) {
            echo 'Falló la conexión: ' . $e->getMessage();
            $this->con =  false;
        }
    }

    public function getConnection()
    {
        return $this->con;
    }
 }
