<?php
class Stap{
 
    // database connection and table name
    private $conn;
    private $table_name = "stap";
 
    // object properties
    public $plannaam;
    public $stapnr;
    public $stapnaam;
    public $omschrijving;
    public $stapimg;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
        // read products
    }

    function read($plannaam){
        // select all query
        $query = "SELECT * FROM `stap` WHERE `plannaam` =  '".$plannaam."'";
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
     
        // execute query
        $stmt->execute();
     
        return $stmt;
    }

    function create(Array $file, String $stapNr, String $stapOmschrijving, String $plannaam){
        $directory = '/srv/www/team9/public/img';
        move_uploaded_file($file["tmp_name"], $directory . '/' . $file['name']);
        
        $fileUrl = "https://team9.amsta-hva.tk/img/" . $file['name'];
        $query = "INSERT INTO `stap` (`stapnr`, `plannaam`, `omschrijving`, `stapimg`) VALUES (?, ?, ?, ?)";

        $stmt = $this->conn->prepare($query);

        $values = [$stapNr, $plannaam, $stapOmschrijving, $fileUrl];
        $stmt->execute($values);

        return $stmt;
    }

    public function delete(String $stapNr, String $planNaam) {
        $query = "DELETE FROM stap WHERE stapnr = ? AND plannaam = ?";

        $stmt = $this->conn->prepare($query);
        $stmt->execute([$stapNr, $planNaam]);

        return $stmt;
    }
}