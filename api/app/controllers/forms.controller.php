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


if (!defined("_FILES_PATH_")) {
    define("_FILES_PATH_", __ROOT__."/app/files");
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
                $newfileName = uniqid('_image_').$filename;
                $path = _FILES_PATH_."/".$newfileName;
                $file->moveTo($path);
                $infoToSave[$key] = $path;
            }
        }

        $table = $allPostPutVars['TABLE'];
        $alphaAndGamma = $allPostPutVars;
        unset($alphaAndGamma['TABLE']);
        $alphaAndGamma = array_merge($infoToSave, $alphaAndGamma);

        $fields = "".implode(",", array_keys($alphaAndGamma))."";
        $values = "'".implode("','", array_values($alphaAndGamma))."'";

        $sql = "INSERT INTO $table ($fields) VALUES ($values)";

        $infoToSave = array_merge($infoToSave, $allPostPutVars);

        $resutl = $form->saveDataForm($sql, $infoToSave);

        return $response
            ->withStatus(200)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($resutl));
    }
}
