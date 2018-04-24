<?php

//Seleccionamos recogemos el parámetro que contiene el código
$codigo = $_POST['cod'];

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

//Actualizamos la base de datos marcado el código como canjeado
$update= "UPDATE codigo SET canjeado='s' WHERE codigoPromocional ='".$codigo."'";
if ($conn->query($update) === TRUE) {
    echo "true";
} else {
    echo $codigo;

}

//Cerramos la conexión
$conn->close();
?>