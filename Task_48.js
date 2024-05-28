const inventarioLojaA = {
  "maça": 10,
  "melancia": 5,
  "banana": 4,
  "laranja": 3,
  "pessego": 1
};

const inventarioLojaB = {
  "maça": 10,
  "melancia": 5,
  "banana": 4,
  "laranja": 3,
  "morango": 4
};

function JuntarInv(x, y) {
  let invDuasLojas = {};

  for (let i in x) {
    invDuasLojas[i] = x[i];
  }

  for (let i in y) {
    if (invDuasLojas[i] !== undefined) {
      invDuasLojas[i] += y[i];
    } else {
      invDuasLojas[i] = y[i];
    }
  }

  return invDuasLojas;
}

let pronto = JuntarInv(inventarioLojaA, inventarioLojaB);

console.log(pronto);
