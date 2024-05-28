const dados = {
    cantor: 'Raquel dos Teclados',
    idade: 27,
    shows: ['RS', 'SP', 'MG'],
    cidade: ['Porto Alegre','São Paulo', 'Belo Horizonte'],
    cache: [7000, 10000, 5000],
    pago: true,
  };
  
  function filtrarArr(obj) {
    const result = {};
  
    for (const i in obj) {
      if (Array.isArray(obj[i])) {
        result[i] = obj[i];
      }
    }
  
    return result;
  }
  
  const apenasArr = filtrarArr(dados);
  
  console.log(apenasArr);
  