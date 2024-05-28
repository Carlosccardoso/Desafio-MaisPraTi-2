var arr = []

function criarArray() {
    for (let i = 0; i < 3; i++) {
        arr[i] = [];
        for (let j = 0; j < 3; j++) {
            arr[i][j] = Math.floor(Math.random() * 21);
        }
    }
}

function pegarDiagonal(arr) {
    var soma2 = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j === i) {
                soma2 += arr[i][j];
            }
        }
    }
    return soma2;
}

function multiplicar(arr, soma) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = [];
        for (let j = 0; j < arr[i].length; j++) {
            result[i][j] = arr[i][j] * soma;
            console.log(result[i][j]);
        }
    }
    return result;
}


criarArray();
console.table(arr);
var soma = pegarDiagonal(arr);
console.log(soma);
console.table(multiplicar(arr, soma));