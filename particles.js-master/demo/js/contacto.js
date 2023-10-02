document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Aquí puedes agregar el código para procesar el formulario, como enviar datos a un servidor o mostrar un mensaje de confirmación.
    // Por ejemplo, puedes utilizar JavaScript para validar los campos antes de enviarlos.

    alert("¡Gracias por su mensaje! Le responderemos pronto.");
    document.getElementById("contactForm").reset(); // Limpiar el formulario
});