const prompt = require("prompt-sync")()

var arr = []

for (i = 0; i < 15; i++) {
    let pergunta = parseInt(prompt("Numero: "))
    arr.push(pergunta)
}

function imparPar(arr) {

    let par = []
    let impar = []

    for (i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 === 0) {
            par.push(arr[i])
            if (par.length === 5) {
                console.log("Vetor Par Cheio", par)
                par = []
            } else {
                impar.push(arr[i])
                if (impar.length === 5) {
                    console.log("Vetor Impar Cheio", impar)
                    impar = []
                }

            }
        }
    }

    if (par.length > 0) {
        console.log("Vetor de pares restante:", par);
    }
    if (impar.length > 0) {
        console.log("Vetor de ímpares restante:", impar);
    }
}

imparPar(arr)
