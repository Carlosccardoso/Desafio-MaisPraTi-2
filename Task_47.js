function receptor(x,y){
  const resultado = {};
  
  for (const chave in x) {
    if (x[chave]) {
      resultado[chave] = y(x[chave]);
    }
  }

  return resultado;
}
function multiplicação(x){
  return x * 2;
}

const obj = {
  a: 10,
  b: 20,
  c: 30
};

let result = receptor(obj, multiplicação)
console.log(result)