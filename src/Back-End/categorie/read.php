<?php
// required headers
header('Access-Control-Allow-Origin: *');

// include database and object files
include_once '../config/database.php';
include_once 'categorie.php';
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

// initialize object
$categorie = new Categorie($db);
 
// query products
$stmt = $categorie->read();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
    
    // products array
    $products_arr=array();
    $products_arr["records"]=array();
 
    // retrieve our table contents
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $product_item=array(
            "catnaam" => $catnaam,
            "img" => $img
        );
 
        array_push($products_arr["records"], $product_item);
    }
 
    echo json_encode($products_arr);
}
 
else{
    echo json_encode(
        array("message" => "No products found.")
    );
}
?>