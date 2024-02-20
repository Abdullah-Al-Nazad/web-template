<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'mr&mrs');

$id = $_POST['id'];
$title = $_POST['title'];
$details = $_POST['details'];
$start_time = $_POST['start_time'];
$end_time = $_POST['end_time'];

 $query = "UPDATE `story` SET `title`='$title',`start_time`='$start_time',`end_time`='$end_time',`details`='$details' WHERE id=$id";


if ($title != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}
