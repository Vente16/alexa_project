<?php

require_once __DIR__ . '/connection.class.php';

class Form
{
    private $con;

    public function __construct()
    {
        $con = new Connection();
        $this->con = $con->getConnection();
    }

    public function getFormsBuilt($builder)
    {

        $data = array();

        try {
            $sql = "SELECT * FROM `FORMS_BUILDER` WHERE ID=:builder";
            $query = $this->con->prepare($sql);

            $query->bindParam('builder', $builder, PDO::PARAM_STR);

            if ($query->execute()) {
                $info = $query->fetchAll(PDO::FETCH_ASSOC);
                $data['data'] = $info;
                $data['statusCode'] = 200;
            }
        } catch (PDOException $e) {
            $data['statusCode'] = 500;
            $data['message'] = $e->getMessage();
        }

        return $data;
    }

    public function saveFormBuilder($name, $builder, $id_user = 1)
    {
        $data = array();

        try {
            $sql = "INSERT INTO FORMS_BUILDER (NAME, BUILDER , ID_USER) VALUES ('$name','$builder', $id_user);";

            $query = $this->con->prepare($sql);

            if ($query->execute()) {
                $data['data'] = array(
                    'name' => $name,
                    'builder' => $builder
                );

                $data['message'] = 'Form builder saved successfully';
                $data['statusCode'] = 200;
            }
        } catch (PDOException $e) {
            $data['statusCode'] = 500;
            $data['message'] = $e->getMessage();
        }

        return $data;
    }

    public function saveDataForm($sql, $infoToSave, $id_user = 1)
    {
        $data = array();

        try {

            $query = $this->con->prepare($sql);

            if ($query->execute()) {
                $data['data'] = $infoToSave;

                $data['message'] = 'Form data saved successfully';
                $data['statusCode'] = 200;
            }
        } catch (PDOException $e) {
            $data['statusCode'] = 500;
            $data['message'] = $e->getMessage();
        }

        return $data;
    }

}
