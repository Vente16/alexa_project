<?php

require __DIR__ . '/connection.class.php';

class Table
{
    private $con;

    public function __construct()
    {
        $con = new Connection();
        $this->con = $con->getConnection();
    }

    private function groupByTableName($array)
    {
        $data = array();
        foreach ($array as $key => $value) {
            $data[$value['TABLE_NAME']][] = $value['COLUMN_NAME'];
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
                    'fileds' => $fileds,
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
}
