const prompt = require("prompt-sync")()

let atividade = parseInt(prompt("Quanto tempo voce fez de atividade fisica? "));

const Dez = 2;
const DezaVinte = 5;
const Vinte = 10;
const Fatura = 0.05;
var result = 0;
var valor = 0;

if (atividade <= 10) {

    result = atividade * Dez
    valor = result * Fatura

    console.log("entrou na 1")

} else if (atividade <= 20) {

    result = atividade * DezaVinte
    valor = result * Fatura

    console.log("entrou na 2")

} else if (atividade > 20) {

    result = atividade * Vinte
    valor = result * Fatura

    console.log("entrou na 3")

}



console.log(`Voce tem ${result} de pontos, e ${valor.toFixed(1)}$ de fatura`)
