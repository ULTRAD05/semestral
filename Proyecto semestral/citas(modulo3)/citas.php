<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombrePaciente = $_POST['nombrePaciente'];
    $fecha = $_POST['fecha'];
    $especialidad = $_POST['especialidad'];

    // Conexión a la base de datos
    $conexion = new mysqli('localhost', 'usuario', 'contraseña', 'base_datos');

    if ($conexion->connect_error) {
        die("Conexión fallida: " . $conexion->connect_error);
    }

    $sql = "INSERT INTO citas (nombrePaciente, fecha, especialidad) 
            VALUES ('$nombrePaciente', '$fecha', '$especialidad')";

    if ($conexion->query($sql) === TRUE) {
        echo "Cita registrada exitosamente.";
    } else {
        echo "Error: " . $sql . "<br>" . $conexion->error;
    }

    $conexion->close();
}
?>
