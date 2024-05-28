const prompt = require("prompt-sync")()

var nomes = [];
var pergunta;



for(let i = 1; i <= 10; i++){
    
    pergunta = (prompt("Nome?  "));
    nomes.push(pergunta);
    console.log(i)
    
}
console.log("entrou", nomes.reverse());