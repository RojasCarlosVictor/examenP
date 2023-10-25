<?php
// Obtener los datos del formulario enviado por el cliente
$usuario = $_POST['usuario'];
$puntuacion = $_POST['puntuacion'];

// Establece la conexión con la base de datos 
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$database = "nombre_de_tu_base_de_datos";

$conn = new mysqli($servername, $username, $password, $database);

// Verifica la conexión
if ($conn->connect_error) {
    die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

// Inserta la puntuación en la base de datos
$sql = "INSERT INTO puntuaciones (usuario, puntuacion) VALUES ('$usuario', $puntuacion)";

// Verifica si la inserción fue exitosa y enviar una respuesta al cliente
if ($conn->query($sql) === TRUE) {
    echo "Puntuación guardada con éxito";
} else {
    echo "Error al guardar la puntuación: " . $conn->error;
}

// Cerrar  conexión con bd
$conn->close();
?>
