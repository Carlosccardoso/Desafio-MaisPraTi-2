var arr = [];
var result = [];

function criarMatriz() {
    for (let i = 0; i < 5; i++) {
        arr[i] = [];
        for (let j = 0; j < 5; j++) {
            arr[i][j] = Math.floor(Math.random() * 99 + 1);
        }
    }
    return arr;
}

function maiorValor(arr) {
    result = [];
    let valor = 0;
    let maioresNumeros = [];
    let produtos = [];
    
    for (let i = 0; i < arr.length; i++) {
        let somaLinha = 0;
        let maiorNumeroLinha = 0;
        
        for (let j = 0; j < arr[i].length; j++) {
            somaLinha += arr[i][j];
            if (arr[i][j] > maiorNumeroLinha) {
                maiorNumeroLinha = arr[i][j];
            }
        }
        
        maioresNumeros.push(maiorNumeroLinha);
        produtos.push(maiorNumeroLinha * somaLinha);
        valor += somaLinha; 
    }
    
    console.log("Soma total da matriz:", valor);
    console.log("Maiores números de cada linha:", maioresNumeros);
    console.log("Produtos (maior número de cada linha * soma da linha):", produtos);
    
    return produtos;
}

criarMatriz();

console.log("A matriz gerada é:");
console.table(arr);

console.log("Resultados:");
maiorValor(arr);
