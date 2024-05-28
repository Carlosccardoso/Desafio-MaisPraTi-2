const prompt = require("prompt-sync")()
const numeroCorreto = Math.floor((Math.random() * 5)+1)
console.log(numeroCorreto);
let tentativa;

do {
    tentativa = prompt("tente um numero de 1 a 5 ");
    if (tentativa < numeroCorreto) {
        console.log("tenta um numero maior");
    } else if (tentativa > numeroCorreto) {
        console.log("tenta um numero menor");
    }
} while (tentativa != numeroCorreto);
console.log("acertou");
