const prompt = require("prompt-sync")()

var gab = [24, 54, 26, 21, 11]
var arr = []
// for (i = 0; i < 6; i++) {
//     let pergunta = parseInt(prompt("Numero da loto do dia: "))
//     gab.push(pergunta)
// }

function criarArray() {
    for (let i = 0; i < 250 ; i++) {
        arr[i] = Math.floor(Math.random() * 60 + 1)
    }
    return arr;
}

function arraysIguais(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

function resultado(arr, gab) {
    let tamanho = 5;
    let comp = 0
    for (let i = 0; i < arr.length; i += tamanho) {
        let competidor = arr.slice(i, i + tamanho);
            comp ++
            if (arraysIguais(competidor,gab)) {
                console.log(`O Competidor numero ${comp} ganhou,  Bilhete ${competidor} Gabarito ${gab}`)
                break
             }
            else{
                console.log(`O Competidor numero ${comp} perdeu, Bilhete ${competidor} Gabarito ${gab}` )

            }
        }
    }

criarArray()
resultado(arr,gab)
