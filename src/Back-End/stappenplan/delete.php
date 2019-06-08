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

$stmt = $stappenplan->delete($_POST['plan']);
$num = $stmt->rowCount();

if ($num > 0) {
    echo json_encode(
        array(
            "deleted" => true,
            "message" => "Stappenplan verwijderd:" . $_POST['plan']
        )
    );
} else {
    echo json_encode(
        array(
            "deleted" => false,
            "message" => "Geen stappenplan verwijderd"
        )
    );
}