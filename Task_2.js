const prompt = require("prompt-sync")()

let velocidade = parseInt(prompt("Quantos km voce estava? "));

const kmPermitido = 80;
const multa = 5;
let valordamulta = 0;


    if(velocidade > kmPermitido){

        var quantovocepassou = velocidade - kmPermitido
        valordamulta = quantovocepassou * 5
        
        console.log(`paizao levou multa blz, toma i o valor da multa ${valordamulta}`)
    }else if(velocidade == 80){
        console.log("paizao manera o pé ta quase levando multa")
    }else{
        console.log('voce e um exemplo para sociedade')
    }
        
    







