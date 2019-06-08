<?php
    class LoginHandler {

        // Properties
        private $conn;

        public function __construct($conn){

            // Set connection property with supplied database connection
            $this->conn = $conn;
        }
        
        // Attempt a login with supplied input data
        public function attemptLogin(Array $data){

            // Set data parameters
            $naam = $data[0];
            $wachtwoord = $data[1];
            
            // Prepare a query to fetch user from database
            $stmt = $this->conn->prepare("SELECT * FROM login WHERE naam = ?");

            // Execute prepared statement with user input (username)
            $stmt->execute([
                $naam
            ]);
            
            // Fetch results of executed query as an associative array
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            
            // Count the resulted rows of the executed query, if higher than 0, check for password
            if ($stmt->rowCount() > 0) {

                // Return true if password is verified
                if (password_verify($wachtwoord, $result['wachtwoord'])) {
                    return true;
                }
            }

            // Return false by default (if no user is found, or if password is incorrect)
            return false;
        }
    }