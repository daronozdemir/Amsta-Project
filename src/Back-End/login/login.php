<?php
    // Allow CORS
    header('Access-Control-Allow-Origin: *');

    // Include database file and login handler
    include_once '../config/database.php';
    include_once 'loginHandler.php';
    
    // Instantiate a new database connection
    $database = new Database();
    $db = $database->getConnection();

    // Instantiate the login handler and attempt a login with supplied POST data
    $loginHandler = new LoginHandler($db);
    $attempt = $loginHandler->attemptLogin($_POST['data']);

    // Return encoded JSON if login attempt is true or false
    if ($attempt) {
        echo json_encode([
            'authorization' => true
        ]);
    } else {
        echo json_encode([
            'authorization' => false
        ]);
    }
