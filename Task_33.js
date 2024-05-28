const prompt = require("prompt-sync")()

var arr = [];

function criarArray() {
    for (let i = 0; i < 3; i++) {
        arr[i] = [];
        for (let j = 0; j < 3; j++) {
            // arr[i][j] = Math.floor(Math.random() * 21);
            arr[i][j] = parseFloat(prompt(`Digite um numero: `));

        }
    }
    return arr;
}

function pegarDiagonal(arr) {
    var soma2 = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j === i) {
                soma2 += arr[i][j]
            }
        }
    }
    return soma2
}

function pegarDiagonalSec(arr) {
    var soma1 = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i + j === arr.length - 1) {
                soma1 += arr[i][arr.length - 1 - i];
                var resultado = soma1 / arr.length
            }
        }
    }
    return resultado ;
}

function multiplicar(x, y) {
    return x * y;
}


var matriz = criarArray();
console.table(matriz);
var somaDiagonal = pegarDiagonal(matriz);
var mediaDiagonalSec = pegarDiagonalSec(matriz);
console.log("Soma da diagonal principal:", somaDiagonal);
console.log("Média da diagonal secundária:", mediaDiagonalSec);
console.log("Resultado da multiplicação:", multiplicar(somaDiagonal, mediaDiagonalSec));
