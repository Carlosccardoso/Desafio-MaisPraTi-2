const prompt = require("prompt-sync")()

console.log("Pedra,Papel e Tesoura")
let escolha = prompt("Jo ken Po: ")
let escolha1 = prompt("Jo ken Po: ")


if (escolha == "Pedra") {
    if (escolha1 == "Papel") {
        console.log("Pedra Perde para Papel")
    } else if (escolha1 == "Tesoura") {
        console.log("Pedra Ganha de Tesoura")
    } else {
        console.log("Pedra com Pedra da faisca XD")
    }
}
if (escolha == "Tesoura") {
    if (escolha1 == "Papel") {
        console.log("Tesoura Ganha de Papel")
    } else if (escolha1 == "Pedra") {
        console.log("Pedra Ganha de Tesoura")
    } else {
        console.log("Tesoura")
    }
}
if (escolha == "Papel") {
    if (escolha1 == "Tesoura") {
        console.log("Papel Perde para Tesoura")
    } else if (escolha1 == "Pedra") {
        console.log("Papel Ganha de Pedra")
    } else {
        console.log("Papel")
    }
}

