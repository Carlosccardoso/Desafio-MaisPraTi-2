const prompt = require("prompt-sync")()

function ler() {
    var arr = []

    for (i = 0; i < 10; i++) {
        arr.push(parseInt(prompt(`Digite um numero para posição ${i}: `)))
}
    return arr;
}

function compacto(arr){
    let arrayPositivo = []
    let arrayNegativo = []
    for(i = 0;i < arr.length;i++){
        if(arr[i] >= 1){
            arrayPositivo.push(arr[i])
        }else{
            arrayNegativo.push(arr[i])
        }
    }
    return [arrayPositivo, arrayNegativo];
}

var array = ler()
const [positivos, negativos] = compacto(array);
console.log("Elementos positivos:", positivos);
console.log("Elementos negativos:", negativos);