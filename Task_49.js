let arr = [
    {
        id: 0,
        categoria: "pix",
        data: "12/02/22",
        valor: 1200
    },
    {
        id: 1,
        categoria: "ted",
        data: "02/07/22",
        valor: 300
    },
    {
        id: 2,
        categoria: "pix",
        data: "13/02/23",
        valor: 1000
    },
    {
        id: 3,
        categoria: "ted",
        data: "12/02/24",
        valor: 580
    },
    {
        id: 4,
        categoria: "pix",
        data: "24/09/24",
        valor: 900
    }
];

function lerTransaçoes(transacoes) {
    let resultado = {};

    transacoes.forEach(transacao => {
        if (resultado[transacao.categoria]) {
            resultado[transacao.categoria] += transacao.valor;
        } else {
            resultado[transacao.categoria] = transacao.valor;
        }
    });

    return resultado;
}

let valoresAgrupados = lerTransaçoes(arr);

console.log(valoresAgrupados);