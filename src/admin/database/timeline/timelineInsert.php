<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'mr&mrs');
$data = json_decode(file_get_contents('php://input'), true);

$title = $data['title'];
$EndTime = $data['EndTime'];
$StartTime = $data['StartTime'];
$details = $data['details'];

$query = "insert into  timeline(title,details,start_time,end_time)values('$title','$details','$StartTime','$EndTime')";
if ($title != '' && $details !='' && $StartTime !='' && $EndTime !='') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}
header('Content-Type: Application/json');
// echo json_encode($title.$EndTime.$StartTime.$details);