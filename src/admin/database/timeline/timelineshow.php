<?php
// echo"<pre>";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$con=new mysqli("localhost","root","","mr&mrs");
$datas=$con->query("SELECT * FROM timeline LIMIT 4")->fetch_all(MYSQLI_ASSOC);
$data=array();
foreach($datas as $d){
    $aa=array();
    $start_time= date('h:i A', strtotime($d['start_time']));
    $aa['start_time']=$start_time;
    

    
    $end_time= date('h:i A', strtotime($d['end_time']));
    $aa['end_time']=$end_time;
    

    
    $title= $d['title'];
    $aa['title']=$title;
    

    
    $details= $d['details'];
    $aa['details']=$details;
    array_push($data,$aa);
}
Header("Content-Type: application/json");
echo json_encode($data);
