<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'mr&mrs');

$title = $_POST['title'];
$date = $_POST['date'];
$Details = $_POST['Details'];


$target_dir = "../../img/";
$target_file = $target_dir . basename($_FILES["photo"]["name"]);
if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
    $photo = $_FILES["photo"]["name"];
} else {
    $photo='';
}

$query = "insert into story(photo,title,date,details)values('$photo','$title','$date','$Details')";
if ($title != '' && $date !='' && $Details !='') {
    $con->query($query);
    echo json_encode(['status'=>true]);   
}else{
    echo json_encode(['status'=>false]);
}