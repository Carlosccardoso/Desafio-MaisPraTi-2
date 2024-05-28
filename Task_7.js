const prompt = require("prompt-sync")()

let Carro = parseInt(prompt("Qual Carro voce Vai Querer? "));
let Dias = parseInt(prompt("Quantos Dias vai ficar com o carro? "));
var Distancia = parseInt(prompt("Quanto km voce vai fazer com o carro? "));


let AluguelCarroPopular = 90;
let AluguelCarroLuxo = 150;

let preçoKM = 0.20;
let preçoKMPro = 0.10;

let preçoKmLuxo = 0.30;
let preçoKmLuxoPro = 0.25;

var valor = 0;
var valorkm = 0;

if (Carro == "1") {

    valor = AluguelCarroPopular;
    var quantDias = Dias * AluguelCarroPopular

    if (Distancia >= 100) {

        let Di1 = Distancia * preçoKMPro
        valorkm = Di1
        console.log("Preço por KM com a Promo", Di1.toFixed(1), "R$")

    } else {

        let Di2 = Distancia * preçoKM
        valorkm = Di2
        console.log("Preço por KM sem a Promo", Di2.toFixed(1), "R$")
    }

    console.log("Preço do Alguel do carro Popular", quantDias)
    console.log("Preço do Alguel do carro + Valor dos Km Rodados", valorkm + quantDias)

} else if (Carro == "2") {

    valor = AluguelCarroLuxo;
    var quantDias = Dias * AluguelCarroLuxo

    if (Distancia >= 200) {

        let Di1 = Distancia * preçoKmLuxoPro
        valorkm = Di1
        console.log("Preço por KM com a Promo", Di1.toFixed(1), "R$")

    } else {

        let Di2 = Distancia * preçoKmLuxo
        valorkm = Di2
        console.log("Preço por KM sem a Promo", Di2.toFixed(1), "R$")
    }

    console.log("Preço do Alguel do carro Luxo", quantDias)
    console.log("Preço do Alguel do carro + Valor dos Km Rodados", valorkm + quantDias)
}