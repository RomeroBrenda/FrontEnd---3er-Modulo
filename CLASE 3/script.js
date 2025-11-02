// ======================================================
// EJERCICIO 2: EVITAR COMPORTAMIENTO POR DEFECTO
// ======================================================

// Capturamos el hipervínculo por su ID
let hipervinculo = document.getElementById('miEnlace');


/* ----------------------------------------------------------------------
EVITAR REDIRECCION SIEMPRE

// Agregamos el Event Listener para el evento 'click'
hipervinculo.addEventListener('click', function (event) {

    // Acción: Mostrar un mensaje en la consola
    console.log('Hiciste clic en el enlace, pero no te redirigiré.');

    // Evitamos la acción por defecto del enlace (la redirección)
    event.preventDefault();

    // Otra acción: Mostrar una alerta en la ventana
    alert("No irás a otra página.");
});
-------------------------------------------------------------------------- */


// EVITAR REDIRECCION SOLO BAJO CIERTAS CONDICIONES (CONFIRM)

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

// ======================================================
// EJERCICIO 3: EVENTOS DEL MOUSE
// ======================================================

// Array de colores para usar en el resaltado
let colores = ['lightblue', 'lightgreen', 'lightcoral', 'lightsalmon'];

// Seleccionamos TODOS los elementos que tienen la clase 'item-lista'
let itemsLista = document.querySelectorAll('.item-lista');

// Recorremos cada uno de los elementos seleccionados
itemsLista.forEach((item, index) => {

    // Obtenemos el color según la posición (índice) del elemento en la lista
    const colorDinamico = colores[index % colores.length];

    // mouseover: el mouse entra en el elemento
    item.addEventListener('mouseover', function () {
        item.style.backgroundColor = colorDinamico; // Usa el color del array
        console.log('Mouse entró. Color:', colorDinamico);
    });

        // mouseout: el mouse sale del elemento
    item.addEventListener('mouseout', function () {
        item.style.backgroundColor = 'transparent'; // Restablece al color original
            console.log('Mouse salió. Color: transparent');
    });

});


// ======================================================
// EJERCICIO 4: DETECCION DE TECLAS PRESIONADAS
// ======================================================

// Event Listener para el evento 'keydown' en todo el documento
// 'keydown' se activa cuando se presiona CUALQUIER tecla, incluyendo ENTER
document.addEventListener('keydown', function (event) {
    console.log("EJERCICIO 4 - Tecla presionada (KeyDown): " + event.key);

    // Detección de la tecla "Enter"
    if (event.key === 'Enter') {
        let mensaje = document.getElementById('mensajeEnter');
        mensaje.textContent = "¡Presionaste la tecla ENTER!";

        // Evitamos que el Enter haga un salto de línea en el input si está activo
        if (document.activeElement.tagName === 'INPUT') {
            event.preventDefault();
        }
    } else {
        // Borramos el mensaje si se presiona otra tecla
        document.getElementById('mensajeEnter').textContent = "";
    }
});

// ======================================================
// EJERCICIO 5: CONTROL DE PROPAGACION DE EVENTOS
// ======================================================

// Capturamos los elementos por sus IDs
const abuelo = document.getElementById('abuelo');
const padre = document.getElementById('padre');
const hijo = document.getElementById('hijo');

// Función para manejar el clic y mostrar un mensaje
function manejarClic(nombreElemento, detenerPropagacion) {
    return function (event) {
        console.log(`Clic en: ${nombreElemento}`);
        alert(`Clic detectado en: ${nombreElemento}`);

        if (detenerPropagacion) {
            // stopPropagation() evita que el evento suba a los elementos padre
            event.stopPropagation();
            console.log(`${nombreElemento} llamó a stopPropagation() y detuvo el Bubbling.`);
            alert(`${nombreElemento} llamó a stopPropagation() y detuvo el Bubbling.`);
        }
    };
}

// Asignamos los event listeners a cada elemento
abuelo.addEventListener('click', manejarClic('ABUELO', false));
padre.addEventListener('click', manejarClic('PADRE', false));

// Asignamos el EventListener al hijo, indicando que use stopPropagation
hijo.addEventListener('click', manejarClic('HIJO', true));
