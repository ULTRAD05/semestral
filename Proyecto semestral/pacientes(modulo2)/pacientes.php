<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $genero = $_POST['genero'];
    $tipo_sangre = $_POST['tipo_sangre'];
    $especialidad = $_POST['especialidad'];

    // Conexión a la base de datos (modificar con tus credenciales)
    $conexion = new mysqli('localhost', 'usuario', 'contraseña', 'base_datos');

    if ($conexion->connect_error) {
        die("Conexión fallida: " . $conexion->connect_error);
    }

    $sql = "INSERT INTO pacientes (nombre, apellido, genero, tipo_sangre, especialidad) 
            VALUES ('$nombre', '$apellido', '$genero', '$tipo_sangre', '$especialidad')";

    if ($conexion->query($sql) === TRUE) {
        echo "Paciente registrado exitosamente.";
    } else {
        echo "Error: " . $sql . "<br>" . $conexion->error;
    }

    $conexion->close();
}
?>
