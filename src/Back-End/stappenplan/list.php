<?php
// required headers
header('Access-Control-Allow-Origin: *');

// include database and object files
include_once '../config/database.php';
include_once 'stappenplan.php';
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

// initialize object
$stappenplan = new Stappenplan($db);
 
// query products
$stmt = $stappenplan->listAll();
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($results);

?>