const prompt = require("prompt-sync")()

var reg = [
    {
        nome:"",
        cargo:"",
        salario:0
    }
]

for(let set of reg){
            if(set.nome == false){
                let nome = (prompt("Nome:  "));
                reg.nome = nome
            }
            if(set.cargo == false){
                let cargo = (prompt("Cargo:  "));
                reg.cargo = cargo
            }
            if(set.salario == 0){
                let salario = (prompt("Salario:  "))
                reg.salario = salario
            }
        }
   
console.log(`Bom dia ${reg.nome}, a vaga e para o cargo ${reg.cargo}, e o salario é ${reg.salario}`)