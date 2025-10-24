// =======================================================
// ACTIVIDAD 1: RELACIONES EN EL DOM
// =======================================================

// 1. Seleccionamos el elemento de referencia (el segundo <p>)
// Usamos querySelector y el selector nth-child(2) para obtener el segundo párrafo dentro del <div>
const parrafoReferencia = document.querySelector('div p:nth-child(2)'); 
console.log("--- Elemento de Referencia ---");
console.log(parrafoReferencia); // Va a mostrar: <p>Brenda Nahir Romero</p>

// 2. Accedemos a las relaciones del elemento seleccionado
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