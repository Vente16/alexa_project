<?php

header("Access-Control-Allow-Origin: *");
header(
    "Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept"
);
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
date_default_timezone_set("America/Bogota");

if (!defined("__ROOT__")) {
    define("__ROOT__", dirname(dirname(dirname(__FILE__))));
}

if (!defined("_MODELS_")) {
    define("_MODELS_", __ROOT__."/app/models");
}


if (!defined("_FILES_PATH_")) {
    define("_FILES_PATH_", __ROOT__."/files");
}


require_once _MODELS_ . "/form.class.php";

$form = new Form();

$infoToSave = array();

$allPostPutVars = $_POST;

$files = $_FILES;

foreach ($files as $key => $file) {
    if (!$file['error']) {
        $filename = $file['name'];
        $ext = pathinfo($filename, PATHINFO_EXTENSION);
        $newfileName = uniqid('_image_').".".$ext;
        $path = _FILES_PATH_."/".$newfileName;
        try {
            move_uploaded_file($file["tmp_name"], $path);
            $infoToSave[$key] = "api/files/".$newfileName;
        } catch(Exception $e) {
            $mydata = array('error' => true, 'message' => $e->getMessage());
            header('Content-type: application/json');
            echo json_encode($mydata);
            break;
        }
    }
}

$infoToSave = array_merge($infoToSave, $allPostPutVars);

$table = array_key_exists("TABLE", $infoToSave) ? $infoToSave["TABLE"] : "TEST";

if (array_key_exists("TABLE", $infoToSave)) {
    unset($infoToSave['TABLE']);
}


$fields = "".implode(",", array_keys($infoToSave))."";
$values = "'".implode("','", array_values($infoToSave))."'";

$sql = "INSERT INTO $table ($fields) VALUES ($values)";

$data = $form->saveDataForm($sql, $infoToSave);

header('Content-type: application/json');
echo json_encode($data);
