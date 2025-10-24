// Referencia al <body> para cambiar el fondo (Actividad 3)
const body = document.body;

// Capturamos los elementos del DOM
const contenedor = document.getElementById('contenedor');
const btnAgregar = document.querySelector('#btn-agregar');
const btnEliminar = document.querySelector('#btn-eliminar');

// Capturamos el botón de la Actividad 3
const btnColor = document.getElementById('btn-color');

// Inicializamos variable para llevar la cuenta de los parrafos (Actividad 2)
let contadorParrafos = 1;

// =======================================================
// LÓGICA DE LA ACTIVIDAD 2: CREAR Y ELIMINAR PÁRRAFOS
// =======================================================

// Boton "Agregar Parrafo" 
// Event Listener -> "Escuchador de Eventos" (cuando hacemos CLICK, se ejecuta la funcion)
btnAgregar.addEventListener('click', () => {

    // CREAR: Crea una etiqueta <p>
    let nuevoParrafo = document.createElement('p');

    // CONTENIDO: Le AGREGA el texto, usando el numero del contador
    nuevoParrafo.textContent = "Este es el parrafo numero " + contadorParrafos;

    // AÑADIR: Metemos el nuevo <p> dentro del <div> contenedor
    contenedor.appendChild(nuevoParrafo);

    contadorParrafos ++;

}); 

// Boton "Eliminar Ultimo Parrafo"
btnEliminar.addEventListener('click', () => {
    // Seleccionamos el último elemento hijo dentro del contenedor
    const ultimoParrafo = contenedor.lastElementChild;

    // Verificamos si existe un último párrafo 
    if (ultimoParrafo) {
        // Eliminamos ese hijo del contenedor
        contenedor.removeChild(ultimoParrafo);
    } else {
        alert("No hay más párrafos para eliminar.");
    }
});

// =======================================================
// LÓGICA DE LA ACTIVIDAD 3: CAMBIAR COLOR DE FONDO
// =======================================================

// Función que genera un código de color hexadecimal aleatorio
function generarColorAleatorio() {

    // Genera un número aleatorio entre 0 y 16777215 (FFFFFF en hex)
    const numeroAleatorio = Math.floor(Math.random() * 16777215); 

    // Convierte a Hex, asegura que tenga 6 dígitos y añade el #
    return '#' + numeroAleatorio.toString(16).padStart(6, '0'); 
}

// Boton "Cambiar Color de Fondo"
btnColor.addEventListener('click', () => {

    // 1. Llama a la función para obtener el color
    const nuevoColor = generarColorAleatorio();
    
    // 2. Aplica el nuevo color al estilo de fondo del <body>
    body.style.backgroundColor = nuevoColor;
    
    // Opcional: muestra el código de color en el botón
    btnColor.textContent = `Color: ${nuevoColor}`;
});

// =======================================================
// LÓGICA DE LA ACTIVIDAD 4: BÚSQUEDA Y ESTILOS EN LISTA
// =======================================================

// 1. Capturamos el botón
const btnDestacar = document.getElementById('btn-destacar');

// 2. Añadimos el evento de click
 btnDestacar.addEventListener('click', () => {
        
    // 3. SELECCIONAR: Usamos querySelectorAll() para obtener TODOS los <li> con la clase 'destacado'
    const elementosDestacados = document.querySelectorAll('.destacado');

    // 4. RECORRER: recorremos 'elementosDestacados' con forEach 
    elementosDestacados.forEach(elemento => {
            
        // 5. MODIFICAR ESTILO: Cambiamos el color de texto a rojo 
        elemento.style.color = 'red';
        elemento.style.fontWeight = 'bold'; // Y lo ponemos en negrita

    });
});

// =======================================================
// LÓGICA DE LA ACTIVIDAD 5: CAMBIO DE ATRIBUTO (SRC)
// =======================================================

// Definimos las rutas de las imágenes
const IMAGEN_ORIGINAL = "imagen_original.jpg";
const IMAGEN_ALTERNATIVA = "imagen_alterna.jpg";

// 1. Capturamos los elementos
const imagenElemento = document.getElementById('mi-imagen');
const btnCambiar = document.getElementById('btn-cambiar-imagen');

// 2. Añadimos el evento de click al botón
btnCambiar.addEventListener('click', () => {
        
    // 3. Obtenemos el src actual del elemento 
    // Usamos .getAttribute()
    const srcActual = imagenElemento.getAttribute('src');

    // 4. Lógica de alternancia de imagenes
     if (srcActual === IMAGEN_ORIGINAL) {

        // Si tiene la imagen original, la cambiamos a la alternativa
        imagenElemento.setAttribute('src', IMAGEN_ALTERNATIVA); 
        btnCambiar.textContent = "Volver a Original";
    } else {
        
        // Si tiene la imagen alternativa, la cambiamos a la original
        imagenElemento.setAttribute('src', IMAGEN_ORIGINAL); 
        btnCambiar.textContent = "Cambiar Imagen";
    }
});


