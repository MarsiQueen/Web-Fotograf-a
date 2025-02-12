document.getElementById("contactoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
    
    let errorNombre = document.getElementById("errorNombre");
    let errorEmail = document.getElementById("errorEmail");
    let errorMensaje = document.getElementById("errorMensaje");
    let mensajeExito = document.getElementById("mensajeExito");

    // Limpiar mensajes de error
    errorNombre.innerText = "";
    errorEmail.innerText = "";
    errorMensaje.innerText = "";
    mensajeExito.innerText = "";

    let valido = true;

    // Validación del nombre
    if (nombre.length < 3) {
        errorNombre.innerText = "El nombre debe tener al menos 3 caracteres.";
        valido = false;
    }

    // Validación del email
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regexEmail.test(email)) {
        errorEmail.innerText = "Ingresa un correo electrónico válido.";
        valido = false;
    }

    // Validación del mensaje
    if (mensaje.length < 10) {
        errorMensaje.innerText = "El mensaje debe tener al menos 10 caracteres.";
        valido = false;
    }

    if (valido) {
        // Enviar datos con AJAX usando Fetch API
        let formData = new FormData();
        formData.append("nombre", nombre);
        formData.append("email", email);
        formData.append("mensaje", mensaje);

        fetch("/php/procesar_formulario.php", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            if (data.success) {
                mensajeExito.innerText = "¡Mensaje enviado con éxito!";
                document.getElementById("contactoForm").reset();
            } else {
                mensajeExito.innerText = "Hubo un error al enviar el mensaje.";
            }
        })
        .catch(error => {
            console.error(error);
            mensajeExito.innerText = "Error en el servidor.";
        });        
    }
});
