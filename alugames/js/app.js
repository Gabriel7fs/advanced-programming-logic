function alterarStatus (id) {
    let game = document.getElementById(`game-${id}`);
    let imgStatus = game.querySelector(".dashboard__item__img");
    let btnStatus = game.querySelector(".dashboard__item__button");

    if (imgStatus.classList.contains("dashboard__item__img--rented")) {
        imgStatus.classList.remove("dashboard__item__img--rented");
        btnStatus.classList.remove("dashboard__item__button--return");
        btnStatus.textContent = "Alugar";
        
    } else {
        imgStatus.classList.add("dashboard__item__img--rented");
        btnStatus.classList.add("dashboard__item__button--return");
        btnStatus.textContent = "Devolver";
    }
}