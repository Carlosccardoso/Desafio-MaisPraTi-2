const prompt = require("prompt-sync")()



var pesoM = 72.7;
var pesoF = 62.1;
var ideal = 0;

function pesoIdeal(altura, sexo) {

    if (sexo == "Homem") {

        ideal = pesoM * altura - 58

    }else{

        ideal = pesoF * altura - 44.7
    }

    return ideal.toFixed(2)
}


let altura =(prompt("Qual sua altura:  "));
let sexo = (prompt("Voce e Homem ou Mulher: "));

console.log(pesoIdeal(altura,sexo))