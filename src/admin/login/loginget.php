<?php
require './vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

header("Content-Type: Application/json");

$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];
$password = $data['password'];
$con = new mysqli('localhost', 'root', '', 'mr&mrs');
$user = $con->query("select * from users where email='$email' and password='$password'")->fetch_assoc();
if (isset($user)) {
    // $key = 'bangladesh';
    // $payload = [
    //     'iss' => 'http://example.org',
    //     'aud' => 'http://example.com',
    //     'iat' => 1356999524,
    //     'nbf' => 1357000000,
    //     'name' => $user['name'],
    //     'email' => $user['email']
    // ];
    $jwt = JWT::encode($payload, $key, 'HS256');
    echo json_encode([
        // 'token' => $jwt,
        'status' => true
    ]);
} else {
    echo json_encode([
        'status' => false
    ]);
}
