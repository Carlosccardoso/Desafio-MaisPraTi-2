function fibonacci(n) {
    let fibonacciSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
    }
    return fibonacciSequence;
}
console.log("Os 10 primeiros elementos da sequência de Fibonacci são:");
console.log(fibonacci(15).join(", "));


