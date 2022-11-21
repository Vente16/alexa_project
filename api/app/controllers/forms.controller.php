<?php

//show errors
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


if (!defined("__ROOT__")) {
    define("__ROOT__", dirname(dirname(dirname(__FILE__))));
}

if (!defined("_MODELS_")) {
    define("_MODELS_", __ROOT__."/app/models");
}

$files_format = str_replace("/api", "", getcwd());

if (!defined("_FILES_PATH_")) {
    define("_FILES_PATH_", $files_format."/files");
}


require_once _MODELS_ . "/form.class.php";

class FormsController
{
    public static function getFormsBuilt(\Slim\Http\Request $req, \Slim\Http\Response $response, $args)
    {
        $id_builder = $args['id'];
        $form = new Form();
        $info = $form->getFormsBuilt($id_builder);
        return $response
            ->withStatus(200)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($info));
    }

    public static function saveBulderForm(\Slim\Http\Request $request, \Slim\Http\Response $response, $args)
    {
        $form = new Form();

        $allPostPutVars = $request->getParsedBody();
        $namebuilder = $allPostPutVars['name'];
        $builder = $allPostPutVars['builder'];

        $info = $form->saveFormBuilder($namebuilder, $builder);

        return $response
            ->withStatus(200)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($info));
    }

    public static function saveDataForm(\Slim\Http\Request $request, \Slim\Http\Response $response, $args)
    {
        $form = new Form();
        $infoToSave = array();
        $allPostPutVars = $request->getParsedBody();
        $files = $request->getUploadedFiles();


        foreach ($files as $key => $file) {
            if ($file->getError() == UPLOAD_ERR_OK) {
                $filename = $file->getClientFilename();
                $ext = pathinfo($filename, PATHINFO_EXTENSION);
                $newfileName = uniqid('_image_').".".$ext;
                $path = _FILES_PATH_."/".$newfileName;
                $file->moveTo($path);

                $infoToSave[$key] = "files/".$newfileName;
            }

        }

        $infoToSave = array_merge($infoToSave, $allPostPutVars);

        $table = $allPostPutVars['TABLE'];
        $alphaAndGamma = $allPostPutVars;
        unset($infoToSave['TABLE']);

        $fields = "".implode(",", array_keys($infoToSave))."";
        $values = "'".implode("','", array_values($infoToSave))."'";

        $sql = "INSERT INTO $table ($fields) VALUES ($values)";

        $info = $form->saveDataForm($sql, $infoToSave);

        return $response
            ->withStatus(200)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($info));
    }

    public static function getFormToUpdate(\Slim\Http\Request $request, \Slim\Http\Response $response, $args)
    {
        $form = new Form();
        $table = $args['table'];
        $id = $args['id'];

        $info = $form->getFormToUpdate($id, $table);

        return $response
            ->withStatus(200)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($info));
    }

    public static function updateFormData(\Slim\Http\Request $request, \Slim\Http\Response $response, $args)
    {
        $form = new Form();
        $infoToSave = array();
        $allPostPutVars = $request->getParsedBody();

        $files = $request->getUploadedFiles();

        foreach ($files as $key => $file) {
            if ($file->getError() == UPLOAD_ERR_OK) {
                $filename = $file->getClientFilename();
                $ext = pathinfo($filename, PATHINFO_EXTENSION);
                $newfileName = uniqid('_image_').".".$ext;
                $path = _FILES_PATH_."/".$newfileName;
                $file->moveTo($path);

                $infoToSave[$key] = "files/".$newfileName;
            }
        }

        $infoToSave = array_merge($infoToSave, $allPostPutVars);

        $table = $allPostPutVars['TABLE'];
        $id = $allPostPutVars['ID'];
        unset($infoToSave['TABLE']);
        unset($infoToSave['ID']);

        $sql = "UPDATE $table SET ";
        $lastKey = array_key_last($infoToSave);
        foreach ($infoToSave as $inputKey => $inputValue) {
            if ($inputKey == $lastKey) {
                $sql.="$inputKey = '$inputValue' ";
            } else {
                $sql.="$inputKey = '$inputValue', ";
            }
        }

        $sql.="WHERE ID = $id";

        $info = $form->updateDataForm($sql, $infoToSave);

        return $response
            ->withStatus(200)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($info));
    }
}
