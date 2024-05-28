const prompt = require("prompt-sync")()

var gab = []
var arr = []

for (i = 0; i < 20; i++) {
    let pergunta = (prompt("pergunta: "))
    gab.push(pergunta)
}

function criarResposta() {
    let letras = ['A', 'B', 'C', 'D'];

    for (let i = 0; i < 1000; i++) {
        let numeroAleatorio = Math.floor(Math.random() * letras.length);
        arr.push(letras[numeroAleatorio]);
    }
    return arr;
}

criarResposta()



function resposta(arr, gab) {
    let tamanho = 20;
    let comp = 0
    for (let i = 0; i < arr.length; i += tamanho) {
        let aluno = arr.slice(i, i + tamanho);
        let acertos = 0;
        comp++
        

        for (let j = 0; j < aluno.length; j++) {
            if (aluno[j] === gab[j]) {
                acertos++;
            }
        }

        if (acertos >= 12) {
            console.log(`O Aluno ${comp} acertou ${acertos}, e esta APROVADO. Resposta ${aluno} `)
        } else {
            console.log(`O Aluno ${comp} acertou ${acertos}, e esta REPROVADO. Resposta ${aluno} `)
        }
    }
}
resposta(arr, gab)
console.log(arr)
