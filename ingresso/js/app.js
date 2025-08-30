function comprar() {

    let tipo = document.getElementById("tipo-ingresso").value;
    let qtd = document.getElementById("qtd").value;

    if (tipo == "inferior") {
        ingresso(tipo, qtd);
    } else if (tipo == "superior") {
        ingresso(tipo, qtd);
    } else if (tipo == "pista") {
        ingresso(tipo, qtd);
    }
}

function ingresso (tipo, qtd) {

    let qtdInferior = document.getElementById("qtd-inferior").textContent;
    let qtdSuperior = document.getElementById("qtd-superior").textContent;
    let qtdPista = document.getElementById("qtd-pista").textContent;

    if (tipo == "inferior") {
        if (qtd > qtdInferior) {
            alert("Cadeira inferior indisponível");
        } else {
            qtdInferior -= qtd;
            document.getElementById("qtd-inferior").textContent = qtdInferior;
        }
    } else if (tipo == "superior") {
        if (qtd > qtdSuperior) {
            alert("Cadeira superior indisponível");
        } else {
            qtdSuperior -= qtd;
            document.getElementById("qtd-superior").textContent = qtdSuperior;
        }
    } else if (tipo == "pista") {
        if (qtd > qtdPista) {
            alert("Pista indisponível");
        } else {
            qtdPista -= qtd;
            document.getElementById("qtd-pista").textContent = qtdPista;
        }
    }
}