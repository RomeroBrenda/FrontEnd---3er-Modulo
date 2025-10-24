// =======================================================
// ACTIVIDAD 1: RELACIONES EN EL DOM
// =======================================================

// Seleccionamos el elemento de referencia (el segundo <p>)
// Usamos querySelector y el selector nth-child(2) para obtener el segundo párrafo dentro del <div>
const parrafoReferencia = document.querySelector('div p:nth-child(2)');
console.log("--- Elemento de Referencia ---");
console.log(parrafoReferencia);

// Accedemos a las relaciones del elemento seleccionado
console.log("\n--- Relaciones del Elemento ---");

// a) ELEMENTO PADRE: parentElement
// Devuelve el <div> que contiene a todos los <p>
const elementoPadre = parrafoReferencia.parentElement;
console.log("Elemento Padre:", elementoPadre);

// b) PRIMER HIJO: firstElementChild
// Devuelve el primer elemento hijo del padre
const primerHijo = parrafoReferencia.firstElementChild;
console.log("Primer Hijo (Elemento):", primerHijo); // Si no tiene hijos, devuelve NULL

// c) HERMANO ANTERIOR: previousElementSibling
// Devuelve el <p> que está justo antes 
const hermanoAnterior = parrafoReferencia.previousElementSibling;
console.log("Hermano Anterior:", hermanoAnterior);

// d) HERMANO SIGUIENTE: nextElementSibling
// Devuelve el <p> que está justo después
const hermanoSiguiente = parrafoReferencia.nextElementSibling;
console.log("Hermano Siguiente:", hermanoSiguiente);

// =======================================================
// ACTIVIDAD 2: CREANDO Y AGREGANDO ELEMENTOS
// =======================================================

// Definimos textos aleatorios para usar en el párrafo
const textosAleatorios = [
    "¡Un nuevo nodo ha sido creado con éxito!",
    "El DOM es un árbol de nodos, y acabamos de añadir una hoja.",
    "Elemento dinámico insertado por JavaScript.",
    "Este párrafo tiene un texto completamente aleatorio.",
    "Practicando document.createElement y appendChild."
];

// Capturamos los elementos del DOM de la Actividad 2
const contenedorClase2 = document.getElementById('contenedor-clase2');
const btnAgregarClase2 = document.getElementById('btn-agregar-clase2');

// Función auxiliar para obtener un texto aleatorio de la lista
function obtenerTextoAleatorio() {

    // Math.random() * textos.length genera un número entre 0 y el total de textos.
    const indiceAleatorio = Math.floor(Math.random() * textosAleatorios.length);
    return textosAleatorios[indiceAleatorio];
}

// Event Listener para el botón "Agregar Elemento"
btnAgregarClase2.addEventListener('click', () => {

    // a) CREAR: Creamos un nuevo elemento de tipo párrafo
    const nuevoParrafo = document.createElement('p');

    // b) CONTENIDO: Le asignamos el texto aleatorio
    nuevoParrafo.textContent = obtenerTextoAleatorio();

    // Estilo para diferenciarlo
    nuevoParrafo.style.color = 'darkgreen';

    // c) AGREGAR: Insertamos el nuevo <p> dentro del <div> contenedor
    contenedorClase2.appendChild(nuevoParrafo);
});

// =======================================================
// ACTIVIDAD 3: innerHTML vs innerText
// =======================================================

// Capturamos los elementos del DOM
const divContenido = document.getElementById('contenido-a-cambiar');
const btnInnerText = document.getElementById('btn-inner-text');
const btnInnerHTML = document.getElementById('btn-inner-html');

// Lógica para innerText
btnInnerText.addEventListener('click', () => {

    // innerText solo inyecta texto puro. Ignora cualquier etiqueta HTML.
    divContenido.innerText = 'Este contenido fue modificado con innerText. La etiqueta <strong> NO </strong> se interpretará.';
});

// Lógica para innerHTML
btnInnerHTML.addEventListener('click', () => {

    // innerHTML inyecta código HTML. Intrerpreta las etiquetas y las renderiza.
    divContenido.innerHTML = 'Este contenido fue modificado con <b>innerHTML</b>. Mira cómo el texto está en <strong>negrita y la etiqueta se renderiza</strong>.';
});

// =======================================================
// ACTIVIDAD 4: TEMPLATE STRINGS
// =======================================================

// Capturamos los elementos del DOM
const inputNombre = document.getElementById('input-nombre');
const btnMostrarMensaje = document.getElementById('btn-mostrar-mensaje');
const divMensaje = document.getElementById('mensaje-bienvenida');


// Event Listener para el botón "Mostrar Mensaje"
btnMostrarMensaje.addEventListener('click', () => {

    // Obtenemos el valor del input y eliminamos espacios al inicio/final
    const nombreUsuario = inputNombre.value.trim();

    divMensaje.className = ''; // Limpiamos clases CSS previas

    if (nombreUsuario === "") {

        // Usamos la clase CSS de ERROR
        divMensaje.classList.add('mensaje-error');
        divMensaje.innerHTML = "Por favor, ingresa un nombre para continuar.";

        return;
    }

    // Usamos la clase CSS de ÉXITO
    divMensaje.classList.add('mensaje-exito');

    // Template Strings para construir el mensaje
    const mensajeTemplate = `
        <p>
            Hola <strong>${nombreUsuario}</strong>, bienvenida a la clase de JavaScript!
        </p>
        <p class="small-text">
            ¡Gracias por usar Template Strings!
        </p>
    `;

    divMensaje.innerHTML = mensajeTemplate;
});