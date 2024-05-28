const prompt = require("prompt-sync")()

function ler() {
    var arr = []

    for (i = 0; i < 6; i++) [
        arr.push(parseInt(prompt(`Digite um numero para posição ${i}: `)))
    ]
    return arr;
}

function soma(arr) {
    let valor = 0
    for (let i = 0; i < arr.length; i++) {
        valor = valor + arr[i]
    }
    return valor
}

function multplicar(arr) {
    let valor = 1
    for (i = 0; i < arr.length; i++) {
        valor *= arr[i]
    }
    return valor
}

function media(arr) {
    let valor = 0
    for (i = 0; i < arr.length; i++) {
        valor = + arr[i]
    }
    let media = valor / arr.length
    return media
}


let array = ler()

console.log(`A soma dos elementos é `, soma(array))
console.log("O resultado dos Produtos é ", multplicar(array))
console.log("A media dos elementos é ", media(array).toFixed(2))
console.log("Array", array)
array.sort()
console.log("Ordem crescente",array)
