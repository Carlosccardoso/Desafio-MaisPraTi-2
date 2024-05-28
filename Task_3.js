const prompt = require("prompt-sync")()

let Distancia = parseInt(prompt("Quantos km voce estava? "));
const promo = 200;


if(Distancia >= promo){
    var preçopromo = Distancia * 0.5
    console.log(`Preço da Passagem ficou em ${preçopromo}`)
}else{
    var preçonormal = Distancia * 0.45
    console.log(`Preço da Passagem ficou em ${preçonormal}`)

}
