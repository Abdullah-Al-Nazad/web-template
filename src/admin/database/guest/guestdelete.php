<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$con=new mysqli("localhost","root","","mr&mrs");
$id=$_GET['id'];
$data=$con->query("DELETE FROM guest WHERE id= $id");

Header("Content-Type: application/json");
echo json_encode(['status'=>true]);