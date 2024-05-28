const prompt = require("prompt-sync")();
var arr = [];

function criarArray() {
    for (let i = 0; i <= 1; i++) {
        arr[i] = [];
        for (let j = 0; j <= 2; j++) {
            var pergunta = parseInt(prompt("Número: "));
            arr[i][j] = pergunta;
        }
    }
    return arr;
}

function mostrarSomaColunas(M) {
    var somaColunas = [];

    for (var j = 0; j < 3; j++) {
        somaColunas[j] = 0;
    }
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 3; j++) {
            somaColunas[j] += M[i][j];
        }
    }

    return somaColunas;
}

console.table(criarArray());
console.table(mostrarSomaColunas(arr));
