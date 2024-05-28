let pessoa = {
    nome: "Carlos",
    idade: 18,
}

console.log(pessoa)

let endereço = {
    rua: "Pinheiro",
    numero: 208,
    email: "neerfs@gmail.com"

    
}

let dadosCompletos = {...pessoa, ...endereço}
console.log(dadosCompletos) 