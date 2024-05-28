const prompt = require("prompt-sync")()

var arrNome = []
var arrIdade = []

for (let i = 1; i <= 3; i++) {
    var nome = (prompt("Nome:  "));
    var idade = parseInt(prompt("Idade:  "));
    arrNome.push(nome)
    arrIdade.push(idade)
}

for (let i = 0; i < arrIdade.length; i++) {
    if (arrIdade[i] >= 18) {
        console.log(`Meu nome é ${arrNome[i]}, e minha idade é ${arrIdade[i]}`)
    }
}