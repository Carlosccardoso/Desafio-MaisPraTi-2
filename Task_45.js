let arr = ["fiat","fiat","chevrolet","fiat","volkw","volkw","chevrolet","kia","chevrolet","fiat"]

function contarOcorrencias(array) {
  const resultado = {};

  for (const i of array) {
    if (resultado[i]) {
      resultado[i]++;
    } else {
      resultado[i] = 1;
    }
  }

  return resultado;
}

const ocorrencias = contarOcorrencias(arr);

console.log(ocorrencias); 