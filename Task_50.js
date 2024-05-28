const prompt = require("prompt-sync")();

let hoteis = [
    { id: 0, nome: "ibis", cidade: "cachoeirinha", quartos: 3 },
    { id: 1, nome: "ibis", cidade: "esteio", quartos: 2 },
    { id: 2, nome: "ibis", cidade: "canoas", quartos: 7 },
    { id: 3, nome: "ibis", cidade: "porto-alegre", quartos: 2 },
    { id: 4, nome: "ibis", cidade: "gravatai", quartos: 1 },
];

let reservas = [];

do {
    
    console.log("1- Hoteis Disponiveis")
    console.log("2- Reservar um quarto em nossos Hoteis")
    console.log("3- Ver Reservas ")    
    console.log("4- Cadastrar um novo hotel: ")    
    console.log("5- Sair  ")
    let pergunta = (prompt(""));

    if (pergunta === "2") {
        reserva();
    } else if (pergunta === "4") {
        cadastrar();
    } else if (pergunta === "5") {
        console.log("Saindo...");
        break;
    } else if(pergunta === "3"){
        if (reservas.length === 0) {
            console.log("Não há reservas no momento.");
        } else {
            console.log("Reservas:");
            console.log(reservas);
        }
    } else if(pergunta === "1") {
        console.log("Hoteis Disponiveis")
        console.log(hoteis)
    }else{
        console.log("Opção inválida.");
    }
} while (true);

function reserva() {
    let idReserva = reservas.length > 0 ? reservas[reservas.length - 1].id + 1 : 0;
    let nome = prompt("Nome: ");
    let hotelNome = prompt("Hotel: ");
    let cidade = prompt("Cidade: ");
    let hotelEncontrado = false;

    for (let hotel of hoteis) {
        if (hotel.nome === hotelNome) {
            hotelEncontrado = true;
            if (hotel.cidade === cidade) {
                let quartos = parseInt(prompt("Quantos Quartos: "));
                if (quartos <= hotel.quartos) {
                    hotel.quartos -= quartos;
                    console.log(`Reserva feita com sucesso! Restam ${hotel.quartos} quartos no hotel ${hotelNome}.`);
                    reservas.push({ id: idReserva, nome: nome, hotel: hotelNome, cidade: cidade, quartos: quartos });
                    break;
                } else {
                    console.log(`Desculpe, o hotel ${hotelNome} não tem quartos suficientes disponíveis. Restam apenas ${hotel.quartos} quartos.`);
                }
                break;
            }
        }
    }

    if (!hotelEncontrado) {
        console.log(`Hotel ${hotelNome} não encontrado.`);
    }
}

function cadastrar() {
    let nomeHotel = prompt("Nome do Hotel: ");
    let cidade = prompt("Cidade: ");
    let quartos = parseInt(prompt("Quantidade de Quartos: "));

    let proximoIdHotel = hoteis.length > 0 ? hoteis[hoteis.length - 1].id + 1 : 0;

    let novoHotel = { id: proximoIdHotel, nome: nomeHotel, cidade: cidade, quartos: quartos };
    hoteis.push(novoHotel);
    console.log(`Hotel ${nomeHotel} cadastrado com sucesso na cidade ${cidade} com ${quartos} quartos.`);
}
