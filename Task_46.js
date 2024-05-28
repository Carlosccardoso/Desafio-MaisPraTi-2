let venda = [
  {
    vendedor: "carlos",
    valor: 1200
  },
  {
    vendedor: "carla",
    valor: 300
  },
  {
    vendedor: "carla",
    valor: 1000
  },
  {
    vendedor: "carlos",
    valor: 580
  },
  {
    vendedor: "carla",
    valor: 900
  }
]

function soma(vendas) {
  let somaCarlos = 0;
  let vendaCarlos = 0;
  let somaCarla = 0;
  let vendaCarla = 0;
  for (let venda of vendas) {
    if (venda.vendedor === "carlos") {
      somaCarlos += venda.valor;
      vendaCarlos++
    } else if (venda.vendedor === "carla") {
      somaCarla += venda.valor;
      vendaCarla++
    }
  }
  return [somaCarlos,vendaCarlos,somaCarla,vendaCarla];
}

let conta = soma(venda)

console.log(`Carlos teve no total ${conta[1]} é somou ao total todas as vendas o valor de: ${conta[0]}`)
console.log(`Carla teve no total ${conta[3]} é somou ao total todas as vendas o valor de: ${conta[2]}`)