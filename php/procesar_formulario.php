<?php
header("Content-Type: application/json");
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = trim($_POST["nombre"]);
    $email = trim($_POST["email"]);
    $mensaje = trim($_POST["mensaje"]);

    if (strlen($nombre) < 3 || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($mensaje) < 10) {
        echo json_encode(["success" => false, "message" => "Datos inválidos."]);
        exit;
    }

    echo json_encode(["success" => true, "message" => "Mensaje enviado correctamente."]);
} else {
    echo json_encode(["success" => false, "message" => "Método no permitido."]);
}
?>
