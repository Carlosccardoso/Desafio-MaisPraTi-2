var arr = []

function criarMatriz() {

    for (let i = 0; i < 5; i++) {
        arr[i] = [];
        for (let j = 0; j < 5; j++) {
            arr[i][j] = Math.floor(Math.random() * 21);
        }
    }
    return arr;
}

function somaLinha4(arr) {
    let linha = 4;
    let soma = 0;

    for (let j = 0; j < arr[linha].length; j++) {
        soma += arr[linha][j];
    }

    return soma;
}

function somaColuna2(arr) {
    let coluna = 2;
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i][coluna];
    }
    return soma;
}

function somaDiagonal(arr) {
    let soma1 = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j === i) {
                soma1 += arr[i][j]
            }
            
        }
    }
    return soma1
}

function somaTudo(arr){

    let soma = 0;
    for(let i = 0;i < arr.length;i++){
        for(let j = 0;j < arr.length;j++){
            soma += arr[i][j]
        }
    }
    return soma
}

console.table(criarMatriz());
console.log("Soma da linha 4:", somaLinha4(arr));
console.log("Soma da coluna 2:", somaColuna2(arr));
console.log("Soma da diagonal principal:", somaDiagonal(arr));
console.log("Soma de todos os elementos da matriz:", somaTudo(arr));