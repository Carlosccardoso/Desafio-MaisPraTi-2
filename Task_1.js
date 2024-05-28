const prompt = require("prompt-sync")()



function TempoDeVidaPerdido(dia, anos) {


    let minutosPerdidosPorAno = (dia * 365) * 10;

    let minutosTotaisPerdidos = minutosPerdidosPorAno * anos;

    let diasTotaisPerdidos = minutosTotaisPerdidos / (24 * 60);

    return diasTotaisPerdidos;
}


let dia = parseInt(prompt("Quantos você fuma por dia? "));
let anos = parseInt(prompt("É quanto tempo voce ja fumou? "));

let diasPerdidos = TempoDeVidaPerdido(dia, anos);

console.log(`Você perdeu aproximadamente ${diasPerdidos.toFixed(0)}`);




