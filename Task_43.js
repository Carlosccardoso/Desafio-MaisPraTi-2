let dados1 = {
  nome:"Carlos",
  idade: 17,
  sexo:"masculino",
  email:"meuemail@ponto.com",
  trabalhando:false
}

let dados2 = {
  nome:"Flavia",
  idade: 17,
  sexo:"Feminino",
  email:"meuemail@ponto.com",
  trabalhando:false
}

function compararArr(x,y){
    let result = {}
      for(const i in x){
        if(x[i] === y[i]){
          result[i] = x[i]
        }
      }
     return result;
}

const comparar = compararArr(dados1,dados2)

console.log(comparar)