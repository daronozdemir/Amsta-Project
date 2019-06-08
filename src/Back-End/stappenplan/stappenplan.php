<?php
class Stappenplan{
 
    // database connection and table name
    private $conn;
    private $table_name = "stappenplan";
 
    // object properties
    public $plannaam;
    public $img;
    public $catnaam;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
        // read products
    }
    function read($catnaam){
 
        // select all query
        $query = "SELECT * FROM `stappenplan` WHERE `catnaam` =  '".$catnaam."'";
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
     
        // execute query
        $stmt->execute();
     
        return $stmt;
    }

    public function listAll() {
        // select all query
        $query = "SELECT * FROM `stappenplan`";
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
     
        // execute query
        $stmt->execute();
     
        return $stmt;
    }

    public function delete(string $planNaam) {
        // delete query
        $query = "DELETE FROM stappenplan WHERE plannaam = ?";
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
     
        // execute query
        $stmt->execute([$planNaam]);
     
        return $stmt;
    }

    public function createStappenPlan(Array $file, String $name, String $category) {
        $directory = '/srv/www/team9/public/img';
        move_uploaded_file($file["tmp_name"], $directory . '/' . $file['name']);
        
        $fileUrl = "https://team9.amsta-hva.tk/img/" . $file['name'];
        $query = "INSERT INTO `stappenplan` (`plannaam`, `img`, `catnaam`) VALUES (?, ?, ?)";

        $stmt = $this->conn->prepare($query);

        $values = [$name, $fileUrl, $category];
        $stmt->execute($values);

        return $stmt;
    }
}