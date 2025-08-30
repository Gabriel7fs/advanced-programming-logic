let numerosSorteados = [];

function sortear () {
    let numero;
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let inicial = parseInt(document.getElementById("de").value);
    let final = parseInt(document.getElementById("ate").value);

    for (let i = 0; i < quantidade; i++) {
        numero = gerarNumeros(inicial, final);

        while (numerosSorteados.includes(numero)) {
            numero = gerarNumeros(inicial, final);
        }
        numerosSorteados.push(numero);
    };

    exibirNumeros();
    habilitarReiniciar();
    numerosSorteados = [];
}

function exibirNumeros () {
    const resultado = document.getElementById("resultado");
    if (numerosSorteados.length === 0) {
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`
    } else {
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados.join(", ")}</label>`
    }
}

function gerarNumeros (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar () {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    numerosSorteados = [];
    exibirNumeros();
    habilitarReiniciar();
}

function habilitarReiniciar() {
    const btnReiniciar = document.getElementById("btn-reiniciar");

    if (numerosSorteados.length > 0) {
        btnReiniciar.classList.remove("container__botao-desabilitado");
        btnReiniciar.classList.add("container__botao");
    } else {
        btnReiniciar.classList.remove("container__botao");
        btnReiniciar.classList.add("container__botao-desabilitado");
    }
}