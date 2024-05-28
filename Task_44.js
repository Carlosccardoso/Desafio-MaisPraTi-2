let dados1 = {
  nome: "Carlos",
  idade: 17,
  sexo: "masculino",
  email: "meuemail@ponto.com",
  trabalhando: false
}



function quantaStrings(x) {
  let result = {}
  let qtd = 0
  for (const i in x) {
    if (typeof x[i] === 'string') {
      result[i] = x[i]
      qtd++
    }
  }
  return [result,qtd]
}
const comparar = quantaStrings(dados1)

console.log(comparar)