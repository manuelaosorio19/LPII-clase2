const pantalla = document.querySelector(".pantalla")
let valorPrevio = "";

function agregarNumero(numero){
    if(pantalla.textContent =='0'){
        pantalla.textContent =numero;
    }else{
        pantalla.textContent +=numero
    }
}
function limpiar(){
    pantalla.textContent ='0';
}
function borrarElemento(){
    if(pantalla.textContent !='0'){
        pantalla.textContent = pantalla.textContent.slice(0, -1);
    }
    
}
function mostrarResultado() {
    pantalla.textContent = eval(valorPrevio + pantalla.textContent);
    

}
function agregarOperacion(operacion){
    if(operacion == '.' && ! pantalla.textContent.includes(".")){
        pantalla.textContent += operacion;
    }
    if(operacion !== '.'){
    valorPrevio = pantalla.textContent + operacion;
    limpiar();
    }
}
export{agregarNumero, limpiar, borrarElemento, mostrarResultado, agregarOperacion };