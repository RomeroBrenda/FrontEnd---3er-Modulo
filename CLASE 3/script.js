// Capturamos el hipervínculo por su ID
let hipervinculo = document.getElementById('miEnlace');

// =========================================================
// EVITAR REDIRECCION SIEMPRE
// =========================================================
/*
// Agregamos el Event Listener para el evento 'click'
hipervinculo.addEventListener('click', function (event) {

    // Acción: Mostrar un mensaje en la consola
    console.log('Hiciste clic en el enlace, pero no te redirigiré.');

    // Evitamos la acción por defecto del enlace (la redirección)
    event.preventDefault();

    // Otra acción: Mostrar una alerta en la ventana
    alert("No irás a otra página.");
});
*/

// ========================================================
// EVITAR REDIRECCION SOLO BAJO CIERTAS CONDICIONES(CONFIRM)
// ========================================================

// Agregamos el Event Listener para el evento 'click'
hipervinculo.addEventListener('click', function (event) {
    // Usamos confirm para preguntarle al usuario
    // Guarda TRUE si presiona Aceptar, o FALSE si presiona Cancelar.
    let quiereContinuar = confirm("Estás a punto de salir de la página. ¿Quieres continuar con la redirección?");

    // Comprobamos la respuesta del usuario
    if (!quiereContinuar) {
        // Si el usuario canceló, 
        // prevenimos la acción nativa del enlace (la redirección).
        event.preventDefault(); // Detiene la redirección 
        console.log("El usuario ha cancelado la redirección.");
        alert("Redirección cancelada. ¡Te quedas aquí!");
    }

    // Si el usuario acepto, el código NO llama a event.preventDefault(),
    // y la acción nativa del enlace (la redirección) se ejecuta normalmente.
});