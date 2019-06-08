<?php

// required headers
header('Access-Control-Allow-Origin: *');

include_once '../config/database.php';
include_once 'stap.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

$stap = new Stap($db);

if (isset($_FILES['stapImg']) && isset($_POST['stapNr']) && isset($_POST['stapOmschrijving']) && isset($_POST['planNaam'])) {

    $allowedTypes = [IMAGETYPE_PNG, IMAGETYPE_JPEG, IMAGETYPE_GIF];
    $detectedType = exif_imagetype($_FILES['stapImg']['tmp_name']);

    if (in_array($detectedType, $allowedTypes)) {
        $stmt = $stap->create($_FILES['stapImg'], $_POST['stapNr'], $_POST['stapOmschrijving'], $_POST['planNaam']);
        
        if ($stmt->rowCount() > 0) {
            echo json_encode(array(
                'status' => true,
                'message' => 'Stap toegevoegd'
            ));
        } else {
            echo json_encode(array(
                'status' => false,
                'message' => 'Stap niet toegevoegd'
            ));
        }
    }
} else {
    echo json_encode(array(
        'status' => false,
        'message' => 'Stap data is incorrect of niet compleet'
    ));
}
