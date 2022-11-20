<?php

use PHPUnit\Framework\TestCase;

class TableClass extends TestCase
{

    private $classTable;

    public function setUp(): void {
        $this->classTable = new Table();
    }

    public function testGroupByTableName(): void {

       $array_data = array(
        array('TABLE_NAME' => 'CLIENTS', 'COLUMN_NAME' => 'ID'),
        array('TABLE_NAME' => 'CLIENTS', 'COLUMN_NAME' => 'NOMBRE'),
        array('TABLE_NAME' => 'CLIENTS', 'COLUMN_NAME' => 'APELLIDO'),
        array('TABLE_NAME' => 'CLIENTS', 'COLUMN_NAME' => 'TELEFONO'),
        array('TABLE_NAME' => 'CLIENTS', 'COLUMN_NAME' => 'DOCUMENTO'),
        array('TABLE_NAME' => 'PRODUCTS', 'COLUMN_NAME' => 'ID'),
        array('TABLE_NAME' => 'PRODUCTS', 'COLUMN_NAME' => 'NOMBRE'),
        array('TABLE_NAME' => 'PRODUCTS', 'COLUMN_NAME' => 'FOTO')
       );

      $array_expected = array(
        'CLIENTS' => array('ID', 'NOMBRE', 'APELLIDO', 'TELEFONO', 'DOCUMENTO'),
        'PRODUCTS' => array('ID', 'NOMBRE', 'FOTO')
        );

       $this->assertEquals($array_expected,  $this->classTable->groupByTableName($array_data));
    }

     public function testGroupByTableNameNull(): void {

       $array_data = array();
       $array_expected = array();

       $this->assertEquals($array_data,  $this->classTable->groupByTableName($array_expected));

    }

      public function testGroupByTableNameDiffrentKeys(): void {

       $array_data = array('anykey' => 'testing', 'anotherkey' => 'testing');
       $array_expected = array();
       $this->assertEquals($array_expected,  $this->classTable->groupByTableName($array_data));

    }
    /*
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
    }  */
}
