<?php

//Recogemos el parámetro del email
$email = $_POST['mail'];

//Generamos un código único
$codigo = uniqid();

//Credenciales de conexion
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hotelinking";

//Creamos conexión 
$conn = new mysqli($servername, $username, $password, $dbname);

//Comproblamos conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//Inseramos el código para el usuario que lo ha solicitado
$ins="INSERT INTO codigo(codigoPromocional,canjeado,email) VALUES ('".$codigo."','n','".$email."')";
if ($conn->query($ins) === TRUE) {
    echo 'true';
} else {
    echo 'false';
}

//Cerramos la conexión
$conn->close();
?>