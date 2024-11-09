function validarLogin(event) {
    // Prevenir el envío del formulario
    event.preventDefault();
    
    // Obtener los valores de usuario y contraseña
    var usuario = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;

    // Validar usuario y contraseña
    if ((usuario === 'enfermeria01' && contrasena === 'enfermeria2') || 
        (usuario === 'paciente01' && contrasena === 'paciente1')) {
        alert('Inicio de sesión exitoso'); // Mensaje de éxito
        window.location.href = 'menu_principal.html'; // Redirige a la página principal
    } else {
        alert('Usuario o contraseña incorrectos'); // Mensaje de error
    }
}
