
var arr = [];

function criarArray(valor1,valor2) {
    for (var i = 0; i < valor1; i++) {
        arr[i] = [];
        for (var j = 0; j < valor2; j++) {
            arr[i][j] = Math.floor(Math.random() * 21)
        }
    }
    return arr;
}

function criarProduto(x){
    var soma = 0;
    for(let i = 0;i < x.length;i++){
        for(let j = 0;j < x.length;j++){
            soma += x[i][j]
        }
    }
    return soma

}

console.table(criarArray(3,5))
console.table(criarArray(3,5))
console.table(criarProduto(arr))
