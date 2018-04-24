<?php

//Seleccionamos todos los códigos del usuario
$email = $_POST['mail'];

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

//Inicializamos la tabla de resultados
$respuesta = "<table id='table' class='table'><tr><td><h4>Codigo</h4></td><td><h4>Acción</h4></td></tr>";

//Seleccionamos los códigos del usuario en concreto que no estén canjeados
$query="SELECT codigoPromocional FROM codigo WHERE email='".$email."' AND canjeado='n'";
$resultat= mysqli_query($conn, $query);
while($element = mysqli_fetch_array($resultat)) {
    //Construimos las filas de las tablas con el código y un botón para canjearlos
    $respuesta = $respuesta."<tr><td id='cod'>".$element['codigoPromocional']."</td><td><h4 class='t-button' id='botonCanjear'><a href='#'><span class='label label-success'>Canjear</span></a></h4></td></tr>";
}
$respuesta = $respuesta."</table>";

//Cerramos la connexión
$conn->close();

echo $respuesta;

?>