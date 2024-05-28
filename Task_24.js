function contarNegativosLinha(matriz, linha) {
    let conta = 0;
    for (let j = 1; j <= 8; j++) {
        if (matriz[linha][j] < 0) {
            conta++;
        }
    }
    return conta;
}

var arr1 = [];
for (let i = 1; i <= 6; i++) {
    arr1[i] = [];
    for (let j = 1; j <= 8; j++) {
        arr1[i][j] = Math.floor(Math.random() * 21) - 10;
    }
}

var arr = [];
for (let i = 1; i <= 6; i++) {
    arr[i] = contarNegativosLinha(arr1, i);
}

console.table(arr1);
console.log(arr);

