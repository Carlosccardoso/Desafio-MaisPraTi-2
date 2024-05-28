const prompt = require("prompt-sync")()

var total = 0;
var numMenor = 500;
var Media = 0;
var par = 0;
var palavrachave = "nao"
var result;
var num = 0;
do {
    let Pergunta = parseInt(prompt("Numero: "));
  
    num = num + 1

    result = Pergunta + total

    total = result
    
    var Continuar = (prompt("Que Continuar?  "));

    if(Pergunta < numMenor){
        numMenor = Pergunta
    }
    
    if(Pergunta %2 == 0){
       
        
        par = par + 1
    }

    Media = (total)/num
   

} while (Continuar != palavrachave);

console.log(`esse e o resultado de todas as somas ${result} esse do numero menor ${numMenor} essa e a media ${Media.toFixed(2)} e quantos numeros pares foram digitado ${par}`)
