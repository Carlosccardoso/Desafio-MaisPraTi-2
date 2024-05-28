const prompt = require("prompt-sync")()

var arr = []

for (let i = 1; i <= 20; i++) {

    const numeroCorreto = Math.floor((Math.random() * 99))
    arr.push(numeroCorreto)
}

arr.sort(function (a, b) {
    return a - b;
});

console.log(arr)