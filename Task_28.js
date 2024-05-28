var arr = [];

function criarArray() {
    for (let i = 0; i < 10; i++) {
        arr[i] = [];
        for (let j = 0; j < 10; j++) {
            arr[i][j] = Math.floor(Math.random() * 21);
        }
    }
    return arr;
}

function soma(arr) {

    let soma1 = 0;
    let soma2 = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j === i) {
                soma1 += arr[i][j]
            } else {
                soma2 += arr[i][j]
            }
        }
    }
    return {
        acima: soma1,
        abaixo: soma2
    }

}
console.table(criarArray());
var resultado = soma(arr);
console.log("Soma dos elementos diagonal principal:", resultado.acima);
console.log("Soma dos elementos fora da diagonal principal:", resultado.abaixo);