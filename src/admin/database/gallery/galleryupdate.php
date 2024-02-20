<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'mr&mrs');

$title = $_POST['title'];
$date = $_POST['date'];
$id = $_POST['id'];


$target_dir = "../../img/";
$target_file = $target_dir . basename($_FILES["photo"]["name"]);
if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
    $photo = $_FILES["photo"]["name"];
    $query = "update gallery set title='$title', photo='$photo', date='$date' where id=$id";
} else {
    $query = "update gallery set title='$title', date='$date' where id=$id";
}

if ($title != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}
