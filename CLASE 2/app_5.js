// =======================================================
// ACTIVIDAD 5: GENERADOR DE TARJETAS DINÁMICAS
// =======================================================

// Capturamos elementos del DOM
const inputTarjetaNombre = document.getElementById('input-tarjeta-nombre');
const inputTarjetaDescripcion = document.getElementById('input-tarjeta-descripcion');
const btnCrearTarjeta = document.getElementById('btn-crear-tarjeta');
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');

// Event Listener para CREAR la tarjeta
btnCrearTarjeta.addEventListener('click', (event) => {

    // Evitamos que el botón recargue la página
    event.preventDefault(); 
    
    const nombre = inputTarjetaNombre.value.trim();
    const descripcion = inputTarjetaDescripcion.value.trim();

    // Validación básica
    if (nombre === "" || descripcion === "") {

        console.warn("Faltan datos. El nombre y la descripción no pueden estar vacíos.");
        alert("Por favor, completa ambos campos para crear la tarjeta."); 
        return;
    }
    
    // Creamos el Template String (HTML interno de la tarjeta)
    const contenidoTarjeta = `
        <h3>${nombre}</h3>
        <p>${descripcion}</p>
        <button class="btn-eliminar">X</button>
    `;
    
    // Creamos el elemento contenedor de la tarjeta
    const nuevaTarjeta = document.createElement('div');
    
    // Asignamos la clase CSS y el contenido HTML
    nuevaTarjeta.classList.add('tarjeta-dinamica');
    nuevaTarjeta.innerHTML = contenidoTarjeta;
    
    // AGREGAMOS la nueva tarjeta al contenedor principal (appendChild)
    contenedorTarjetas.appendChild(nuevaTarjeta);

    const btnEliminar = nuevaTarjeta.querySelector('.btn-eliminar');
    
    btnEliminar.addEventListener('click', () => {

        // Usamos removeChild en el padre (contenedorTarjetas)
        // para eliminar al hijo (nuevaTarjeta)
        contenedorTarjetas.removeChild(nuevaTarjeta);
    });
    
    // Limpiamos los campos del formulario después de crear la tarjeta
    inputTarjetaNombre.value = '';
    inputTarjetaDescripcion.value = '';
});
