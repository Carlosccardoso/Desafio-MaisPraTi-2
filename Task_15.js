const prompt = require("prompt-sync")()

var pergunta;

var arr = []

for (let i = 1; i <= 10; i++) {

    pergunta = parseInt(prompt("Numero  "));
    arr.push(pergunta);
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(`Numero par ${arr[i]}, na posição ${i}`)
    } else {
        console.log(`Numero é impar ${arr[i]}, na posição ${i}`)
    }
}

