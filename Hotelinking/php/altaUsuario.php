<?php 

$email = $_POST['mail'];
$user = $_POST['usr'];
$pass = $_POST['pass'];

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


//Miramos que no se haya usado ya el email
$query="SELECT count(email) as total FROM usuarios WHERE email='".$user."' AND pass='".$pass."'";
$resultat= mysqli_query($conn, $query);
$element= mysqli_fetch_array($resultat);

//Si el usuario ya existe
if ($element['total'] == 1) {
    echo 'falseUs';    
} else {
    $ins="INSERT INTO usuarios(email,usuario,pass) VALUES ('".$email."','".$user."','".$pass."')";
    if ($conn->query($ins) === TRUE) {
        echo 'true';
    } else {
        echo 'falseIns';
    }

} 

$conn->close();

?>
    