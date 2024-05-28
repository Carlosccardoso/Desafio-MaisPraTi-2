var arr = []
var arrLinha = []
var arrColuna = []

function criarMatriz() {

    for (let i = 0; i < 5; i++) {
        arr[i] = [];
        for (let j = 0; j < 5; j++) {
            arr[i][j] = Math.floor(Math.random() * 21);
        }
    }
    return arr;
}

function somaLinha(arr) {
    arrLinha = [];
    for (let i = 0; i < arr.length; i++) {
        let soma = 0;
        for (let j = 0; j < arr[i].length; j++) {
            soma += arr[i][j];
        }
        arrLinha.push(soma);
    }
}

function somaColunas(arr) {
    arrColuna = [];
    for (let j = 0; j < arr[0].length; j++) {
        let soma = 0;
        for (let i = 0; i < arr.length; i++) {
            soma += arr[i][j];
        }
        arrColuna.push(soma);
    }
}

criarMatriz();
somaLinha(arr);
somaColunas(arr);

console.table(arr);
console.log("Soma das linhas:", arrLinha);
console.log("Soma das Colunas:", arrColuna);
