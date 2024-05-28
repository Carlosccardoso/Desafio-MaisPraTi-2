const prompt = require("prompt-sync")()

var gab = []
var arr = []
for (i = 0; i < 5; i++) {
    let pergunta = parseInt(prompt("Numero: "))
    gab.push(pergunta)
}

function criarArray() {
    for (let i = 0; i < 50000000; i++) {
        arr[i] = Math.floor(Math.random() * 10)
    }
    return arr;
}

criarArray()


function arraysIguais(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

function numeroPremiado(arr) {

    let competidor = []
    let numeroComp = 0;

    for (i = 0; i < arr.length; i++) {
        competidor.push(arr[i])
        numeroComp ++
        if (competidor.length === 5) {
            if (arraysIguais(competidor, gab)){
                console.log("parabens voce ganhou, competidor numero",numeroComp)
                console.log(competidor)
                return;
            }else {
                competidor = []
            }
        }
    }
    console.log("nenhum competidor ganhou")
}

numeroPremiado(arr)
