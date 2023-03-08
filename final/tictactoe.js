/**
 * TIC TAC TOE
 */

/*
    - Comentar cabezara funciones
    - Poner las variables arriba e inicializarlas donde se necesite
    - No errores en la consola (dones)
    - Estilo que se vea bien
    - Subirlo a github 
    - Metodos ganar 2 en 1 (done)
*/

// ZONA DECLARATIVA

let contador_X = 0;
let contador_O = 0;
let turno = true;
let jugador1 = 'X';
let jugador2 = 'O';
let x = [];
let o = [];
let tablero = document.getElementsByClassName('casilla');
let div_turno = document.getElementsByClassName('caja')[0];
div_turno.textContent = 'Turno de X';
let combinacionGanadora = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// ZONA EJECUTIVA

for(let i = 0; i < tablero.length; i++){
    tablero[i].setAttribute('onclick', `pintaConsola(${i})`);
}



function pintaConsola(numero){
    if(turno){
        tablero[numero].textContent = 'X';
        tablero[numero].removeAttribute('onclick');
        ganador();
        turno_O();
        
    } else {
        tablero[numero].textContent = 'O';
        tablero[numero].removeAttribute('onclick');
        ganador();
        turno_X();
    }
    turno = !turno
}

function ganador(){
    for (let i = 0; i < tablero.length; i++){
        if(tablero[i].innerHTML == 'X'){
            x.push(i);
        }
        if(tablero[i].innerHTML == 'O'){
            o.push(i);
        }
    }
    for(let i = 0; i < combinacionGanadora.length ; i++){
        if(x.includes(combinacionGanadora[i][0]) && x.includes(combinacionGanadora[i][1]) && x.includes(combinacionGanadora[i][2])){
            alert('GANAN LAS X');
            contador_X++;
            reiniciar();
        }
        if(o.includes(combinacionGanadora[i][0]) && o.includes(combinacionGanadora[i][1]) && o.includes(combinacionGanadora[i][2])){
            alert('GANAN LAS O');
            contador_O++;
            reiniciar();
        }
    }
}
function reiniciar(){
    for(let i = 0; i < tablero.length; i++){
        tablero[i].textContent = null;
        tablero[i].setAttribute('onclick', `pintaConsola(${i})`);
    }
    x = [];
    o = [];
}

function turno_X(){
    div_turno.textContent = 'Turno de X';
}

function turno_O(){
    div_turno.textContent = 'Turno de O';
}