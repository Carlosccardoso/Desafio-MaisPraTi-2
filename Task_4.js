const prompt = require("prompt-sync")()

let Valor = parseInt(prompt("Primeiro Valor? "));
let Valor2 = parseInt(prompt("Segundo Valor? "));
let Valor3 = parseInt(prompt("Terceiro Valor? "));


let valor4 = Valor + Valor2
let Valor5 = Valor2 + Valor3
let Valor6 = Valor + Valor3



if(valor4 > Valor3 && Valor5 > Valor && Valor6 > Valor2){
    console.log("isso e um triangulo")
}else {
    console.log("isso n e triangulo")
}
