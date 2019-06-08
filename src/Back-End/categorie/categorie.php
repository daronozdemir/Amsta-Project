<?php
class Categorie{
 
    // database connection and table name
    private $conn;
    private $table_name = "categorie";
 
    // object properties
    public $catnaam;
    public $img;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
        // read products
    }
    function read(){
 
        // select all query
        $query = "select * from categorie";
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
     
        // execute query
        $stmt->execute();
     
        return $stmt;
    }
}