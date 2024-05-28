const prompt = require("prompt-sync")();
var arr = [];
var a = parseInt(prompt("Número do A: "));

function criarArray() {
    for (let i = 0; i < 2; i++) {
        arr[i] = [];
        for (let j = 0; j < 2; j++) {
            var pergunta = parseInt(prompt("Número: "));
            arr[i][j] = pergunta;
        }
    }
    return arr;
}

function multiplicarArray(arr) {
    var valor;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            valor = arr[i][j] * a;
            arr[i][j] = valor;
        }
    }
    return arr;
}

let vetorV = multiplicarArray(arr);

console.log("Matriz original:", criarArray());

console.log("Matriz resultante da multiplicação:");
console.table(multiplicarArray(arr));

console.log("Vetor V(4) resultante:", vetorV);


