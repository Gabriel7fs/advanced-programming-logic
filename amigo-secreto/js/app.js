const amigos = [];

function adicionar() {

    const nome = document.getElementById('nome-amigo').value.toUpperCase();
    const lista = document.getElementById('lista-amigos');

    if (nome != '' && !amigos.includes(nome)) {
        if (lista.textContent == '') {
            lista.textContent = nome;
        } else {
            lista.textContent += ', ' + nome;
        }

        amigos.push(nome);
    } else {
        alert('Nome vazio ou amigo já incluído!');
    }

    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    let sorteio = document.getElementById('lista-sorteio');

    if (amigos.length < 3) {
        alert('Adicione mais amigos!');
        return;
    }
    
    embaralha(amigos);

    for (i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + ' => ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML += amigos[i] + ' => ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {

    amigos.length = 0;
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}