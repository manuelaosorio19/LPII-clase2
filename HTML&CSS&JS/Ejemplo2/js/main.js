import { agregarNumero, limpiar ,borrarElemento,mostrarResultado, agregarOperacion} from "./calculadora.js"

const botones = document.querySelectorAll("button")
const botonBorrado = document.querySelector("[borrado]")
const botonBorradoElemento = document.querySelector("[borrado-elemento]")
const botonesNumero = document.querySelectorAll("[numero]")
const botonIgual = document.querySelector(".igual")
const operadores = document.querySelectorAll("[operador]")
botonesNumero.forEach(
    boton => boton.addEventListener('click', ()=> agregarNumero(boton.textContent)));
botonBorrado.addEventListener('click',()=> limpiar());
botonBorradoElemento.addEventListener('click',()=> borrarElemento());
botonIgual.addEventListener('click', () => mostrarResultado());
operadores.forEach(operador=> operador.addEventListener('click' , ()=> agregarOperacion(operador.textContent)))
console.log(botonesNumero);