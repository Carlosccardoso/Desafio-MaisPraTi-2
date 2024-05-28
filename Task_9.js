const prompt = require("prompt-sync")()


var palavrachave = "nao" 
var Fem = "f" 
var Masc = "m" 
var valorM = 0;
var valorF = 0;
let Pergunta;

do {

    let sexo = (prompt("Sexo: "));

    if (sexo == Masc) {
        let Salario = parseInt(prompt("Salario M:  "));

        let result = Salario + valorM
        valorM = result;

    } else if (sexo == Fem) {

        let Salario = parseInt(prompt("Salario F:  "));

        let result1 = Salario + valorF
        valorF = result1;


    }



    Pergunta = (prompt("Que Continuar?  "));

} while (Pergunta != palavrachave);
console.log(`Salario do Sexo Masc ${valorM} e do Fem ${valorF}`);
