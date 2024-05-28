const prompt = require("prompt-sync")()

var arr = []
var pergunta =parseInt(prompt("Qual numero: "));
var quantidade = 0;
var result = [];

function criarMatriz() {

    for (let i = 0; i < 10; i++) {
        arr[i] = [];
        for (let j = 0; j < 10; j++) {
            arr[i][j] = Math.floor(Math.random() * 30);
        }
    }
    return arr;
}

function valoresIguais(arr){
   result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i][j] == pergunta){
                quantidade ++
            }else{
                result.push(arr[i][j]);
            }
        }
    } 
    return quantidade
}

criarMatriz();
var qtde = valoresIguais(arr);

console.table(arr);
console.log(`Existem ${qtde} números ${pergunta} na sua tabela.`);
console.log("Valores diferentes de", pergunta, "na sua tabela:", result);