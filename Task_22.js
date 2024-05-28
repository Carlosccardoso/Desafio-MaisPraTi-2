const prompt = require("prompt-sync")();

var populacao = [];

do {
    var salario = parseFloat(prompt("Digite seu Salario: "));
    var filhos = parseInt(prompt("Quantos Filhos: "));
    var pergunta = prompt("Quer continuar? ");

    populacao.push({ salario: salario, filhos: filhos });

} while (pergunta !== "nao");

let somaS = 0;

for (let i = 0; i < populacao.length; i++) {
    somaS = somaS + populacao[i].salario;
}

let media = somaS / populacao.length;

console.log("Média de salário:", media);