// program 3
let numero = 0;
let intentos = 0;
let listaNumeroSorteado= [];
let numeroMaximo=10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    //para imprimir
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numero === numeroUsuario){
        asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos===1) ? 'vez':'veces'}` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(numero > numeroUsuario){
        asignarTextoElemento('p','el numero es mayor');
    } else {
        asignarTextoElemento('p','el numero es menor');
    }
    intentos++;
    limpiarCaja();
    return;
   
}
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value= '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Bienvenido a mi juego!');
    asignarTextoElemento('p',`Ingresa un numero del 1 al ${numeroMaximo}`);
    numero = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    if (listaNumeroSorteado.length==numeroMaximo){
        asignarTextoElemento('p','ya no hay numeros');
    }else{
    if (listaNumeroSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}


condicionesIniciales();