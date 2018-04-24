<?php 

//Recogemos los parámetros de email y contraseña
$mail = $_POST['mail'];
$pass = $_POST['pass'];
$response = [];

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

//Seleccionamos el email y el usuario con los parámetros
$query="SELECT count(email) as total, usuario, email FROM usuarios WHERE email='".$mail."' AND pass='".$pass."'";
$resultat= mysqli_query($conn, $query);
$element= mysqli_fetch_array($resultat);

//Si se ha contado una aparición, significa que las credenciales son correctas
if ($element['total'] == 1) {
    //Creamos un JSON para devolver el email y el nombre de usuario
    $response['usuario'] = $element['usuario'];
    $response['email'] = $element['email'];
    echo json_encode($response);
} else {
    echo 'false';
}
$conn->close();
?>