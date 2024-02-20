<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$con=new mysqli("localhost","root","","mr&mrs");
$data=$con->query("SELECT * FROM story")->fetch_all(MYSQLI_ASSOC);
Header("Content-Type: application/json");
echo json_encode($data);