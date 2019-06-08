<?php

// required headers
header('Access-Control-Allow-Origin: *');

include_once '../config/database.php';
include_once 'stap.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

$stap = new Stap($db);

if (isset($_POST['data']['stapnr']) && isset($_POST['data']['plannaam'])) {

    $stmt = $stap->delete($_POST['data']['stapnr'], $_POST['data']['plannaam']);
        
    if ($stmt->rowCount() > 0) {
        echo json_encode(array(
            'status' => true,
            'message' => 'Stap verwijderd'
        ));
    } else {
        echo json_encode(array(
            'status' => false,
            'message' => 'Stap niet verwijderd'
        ));
    }
} else {
    echo json_encode(array(
        'status' => false,
        'message' => 'Stap data is incorrect of niet compleet'
    ));
}
