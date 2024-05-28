const prompt = require("prompt-sync")()

var aliquota = 0;
var reg = [
    {
        matricula: "",
        nome: "",
        salario: 0,
        inss: 0,
        liquido: 0

    }
]

for (let set of reg) {
    if (set.matricula == false) {
        let matricula = (prompt("Matricula:  "));
        reg.matricula = matricula
    }
    if (set.nome == false) {
        let nome = (prompt("Nome:  "));
        reg.nome = nome
    }
    if (set.salario == 0) {
        let salario = (prompt("Salario:  "))
        reg.salario = salario
    }
}

if (reg.salario < 1320) {
    console.log("entrou no 1")
    aliquota = 0.07
} else if (reg.salario < 2570) {
    console.log("2")
    aliquota = 0.09
} else if (reg.salario < 3850) {
    console.log("3")
    aliquota = 0.12
} else if (reg.salario < 7500) {
    console.log("4")
    aliquota = 0.14
}
console.log("matricula", reg.matricula)
console.log("nome", reg.nome)
console.log("salario", reg.salario)
console.log("inns", (reg.salario * aliquota))
console.log("liquido", (reg.salario - (aliquota * reg.salario)))

