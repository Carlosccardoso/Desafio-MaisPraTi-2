const prompt = require("prompt-sync")()

const num = parseInt(prompt("Digite o primeiro termo da PA:"));
const razao = parseInt(prompt("Digite a razão da PA:"));

var pa = [];
var result = 0;



for (let i = 0; i < 10; i++) {
    let termo = num + (i * razao);
    pa.push(termo);
    result = result + termo;
}

console.log(`O P.A é ${pa}`)
console.log(`E a soma de todos os valores é ${result}`)