<?php


use Firebase\JWT\JWT;
use Firebase\JWT\Key;

require_once __DIR__ . '/connection.class.php';

class User
{
    private $con;

    public function __construct()
    {
        $con = new Connection();
        $this->con = $con->getConnection();
    }

    public function login($email, $password)
    {
        $data = array();

        try {
            $sql = "SELECT u.ID, u.NOMBRE, u.APELLIDO, u.ROL, u.EMAIL FROM USERS u WHERE u.EMAIL='$email' AND u.PASSWORD='$password' AND u.ESTADO = 1";

            $query = $this->con->prepare($sql);

            if ($query->execute()) {
                $user = $query->fetchAll(PDO::FETCH_ASSOC);

                $userExists = count($user) ? true : false;

                $data['exits'] = $userExists;
                $data['statusCode'] = 200;

                if ($userExists) {
                    $key = $_SERVER["JWT_KEY"];
                    $payload = $user[0];
                    $payload['random'] = uniqid(). ''.uniqid();
                    $jwt = JWT::encode($payload, $key, 'HS256');

                    $data['token'] = $jwt;
                }
            }

        } catch (PDOException $e) {
            $data['statusCode'] = 500;
            $data['message'] = $e->getMessage();
        }

        return $data;

    }


    public function saveTableBuilder($name, $table, $fields, $builder, $id_user = 1)
    {
        $data = array();

        try {
            $sql = "INSERT INTO TABLES_BUILDER (NAME, NAME_TABLE, FIELDS, BUILDER, ID_USER) VALUES ('$name', '$table', '$fields', '$builder', $id_user);";

            $query = $this->con->prepare($sql);

            if ($query->execute()) {
                $data['data'] = array(
                    'name' => $name,
                    'table:' => $table,
                    'fileds' => $fields,
                    'builder' => $builder
                );

                $data['message'] = 'Table builder saved successfully';
                $data['statusCode'] = 200;
            }
        } catch (PDOException $e) {
            $data['statusCode'] = 500;
            $data['message'] = $e->getMessage();
        }

        return $data;
    }

    public function getDinamycTable($builder)
    {
        $data = array();

        try {
            $sql = "CALL GET_DIMANYC_TABLE('$builder')";

            $query = $this->con->prepare($sql);

            if ($query->execute()) {
                $rows = $query->fetchAll(PDO::FETCH_ASSOC);
                $header = array_keys($rows[0]);

                $data['data'] = array(
                    'records' => [],
                    'header' => []
                );

                $data['data']['records'] = $rows;
                $data['data']['header']  = $header;
                $data['statusCode'] = 200;
            }
        } catch (PDOException $e) {
            $data['statusCode'] = 500;
            $data['message'] = $e->getMessage();
        }

        return $data;
    }

     public function deleteItem($table, $id)
     {
         $data = array();

         try {
             $sql = "UPDATE $table t SET ESTADO = 0 WHERE  t.ID = $id";

             $query = $this->con->prepare($sql);

             if ($query->execute()) {
                 $data['message'] = 'Item deleted successfully';
                 $data['statusCode'] = 200;
             }
         } catch (PDOException $e) {
             $data['statusCode'] = 500;
             $data['message'] = $e->getMessage();
         }

         return $data;
     }
}
