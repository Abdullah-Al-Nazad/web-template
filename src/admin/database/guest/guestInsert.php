<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'mr&mrs');

$name = $_POST['name'];
$identity = $_POST['identity'];


$target_dir = "../../img/";
$target_file = $target_dir . basename($_FILES["photo"]["name"]);
if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
    $photo = $_FILES["photo"]["name"];
} else {
    $photo='';
}

$query = "insert into guest(name,photo,identity)values('$name','$photo','$identity')";
if ($name != '' && $identity !='') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}