<?php

require_once __DIR__ . '/connection.class.php';

class Table
{
    private $con;

    public function __construct()
    {
        $con = new Connection();
        $this->con = $con->getConnection();
    }

    public function groupByTableName($array): array
    {
        $data = array();
        
        if(count($array) == 0) return $data;

        $first_key = array_keys($array)[0];

        if (is_array($array[$first_key])){
            foreach ($array as $key => $value) {
                $data[$value['TABLE_NAME']][] = $value['COLUMN_NAME'];
            }
        }
        return $data;
    }


    public function getTables()
    {
        $dbname = $_SERVER["DB_NAME"];

        $data = array();

        try {
            $sql = "select * from information_schema.columns where table_schema = :dbname ";
            $query = $this->con->prepare($sql);

            $query->bindParam('dbname', $dbname, PDO::PARAM_STR);

            if ($query->execute()) {
                $tables = $query->fetchAll(PDO::FETCH_ASSOC);
                $data['data'] = $this->groupByTableName($tables);
                $data['statusCode'] = 200;
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
