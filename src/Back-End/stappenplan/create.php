<?php

// required headers
header('Access-Control-Allow-Origin: *');

include_once '../config/database.php';
include_once 'stappenplan.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

$stappenplan = new Stappenplan($db);

if (isset($_FILES['planImage']) && isset($_POST['planName']) && isset($_POST['planCategory'])) {

    $allowedTypes = [IMAGETYPE_PNG, IMAGETYPE_JPEG, IMAGETYPE_GIF];
    $detectedType = exif_imagetype($_FILES['planImage']['tmp_name']);

    if (in_array($detectedType, $allowedTypes)) {
        $stmt = $stappenplan->createStappenPlan($_FILES['planImage'], $_POST['planName'], $_POST['planCategory']);
        
        if ($stmt->rowCount() > 0) {
            echo json_encode(array(
                'status' => true,
                'message' => 'Stappenplan toegevoegd'
            ));
        } else {
            echo json_encode(array(
                'status' => false,
                'message' => 'Stappenplan niet toegevoegd'
            ));
        }
    }
} else {
    echo json_encode(array(
        'status' => false,
        'message' => 'Stappenplan data is incorrect of niet compleet'
    ));
}
