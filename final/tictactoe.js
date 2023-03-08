/**
 * TIC TAC TOE
 */

/*
    - Comentar cabezara funciones
    - Poner las variables arriba e inicializarlas donde se necesite
    - No errores en la consola
    - Estilo que se vea bien
    - Subirlo a github
    - Metodos ganar 2 en 1
*/

let jugador1 = 'X';
let jugador2 = 'O';

let x = [];
let o = [];

/**
 * [0, 1, 2]
 * [3, 4, 5]
 * [6, 7, 8]
 */
// let tablero = ['','','','','','','','',''];
let tablero = document.getElementsByClassName('casilla');

// cada vez que se haga clic en la casilla me de el nombre de la posicion
for(let i = 0; i < tablero.length; i++){
    tablero[i].setAttribute('onclick', `pintaConsola(${i})`);
}

// Variable turno quiere decir que cuando su valor sea:
//      - true = pintar x
//      - false = pintar o

let turno = true;

function pintaConsola(numero){
    if(turno){
        tablero[numero].textContent = 'X';
        GANAR_X();
    } else {
        tablero[numero].textContent = 'O';
        GANAR_O();
    }
    tablero[numero].removeAttribute('onclick');
    turno = !turno;
}

/**
 * [3, 4, 5]
 * [0, 3, 6]
 * [1, 4, 7]
 * [2, 5, 8]
 * [0, 4, 8]
 * [2, 4, 6]
 */
let combinacionGanadora = [
    [3, 4, 5],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];




function GANAR_X(){
    let actual = [];
    // Recorrer las casillas para ver su contenido
    for (let i = 0; i < tablero.length; i++){
        if(tablero[i].innerHTML == 'X'){
            actual.push(i);
        }
    }
    /**
     * Utilizar Array.include para comprobar si una de las combinaciones correctas
     * esta incluida en mi array de actual
     */
    for(let i = 0; i < combinacionGanadora.length ; i++){
        if(actual.includes(combinacionGanadora[i][0]) && actual.includes(combinacionGanadora[i][1]) && actual.includes(combinacionGanadora[i][2])){
            alert('GANAN LAS X');
        }
    }
}

function GANAR_O(){
    let actual = [];
    // Recorrer las casillas para ver su contenido
    for (let i = 0; i < tablero.length; i++){
        if(tablero[i].innerHTML == 'O'){
            actual.push(i);
        }
    }
    /**
     * Utilizar Array.include para comprobar si una de las combinaciones correctas
     * esta incluida en mi array de actual
     */
    for(let i = 0; i < combinacionGanadora.length ; i++){
        if(actual.includes(combinacionGanadora[i][0]) && actual.includes(combinacionGanadora[i][1]) && actual.includes(combinacionGanadora[i][2])){
            alert('GANAN LAS O');
        }
    }
}