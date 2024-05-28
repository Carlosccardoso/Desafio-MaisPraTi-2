const prompt = require("prompt-sync")()

function validarHorario(horario) {
    const regex = /^(0[0-9]|1[0-9]|2[0-3])\.(0[0-9]|[1-5][0-9])\.(0[0-9]|[1-5][0-9])$/;
    return regex.test(horario);
}

function lerHorario() {
    let horario = prompt("Digite um horário no formato HH.MM.SS: ");

    while (!validarHorario(horario)) {
        console.log("Horário inválido.");
        horario = prompt("Digite um horário no formato HH.MM.SS: ");
    }

    return horario;
}

let horarios = [];

for (let i = 0; i < 5; i++) {
    let horario = lerHorario();2
    horarios.push(horario);
}

console.log("Horários digitados:");
for (let horario of horarios) {
    console.log(horario);
}
