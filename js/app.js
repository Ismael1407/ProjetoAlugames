let jogosAlugados = 1;

function quantosJogosEstaoAlugados() {
    console.log(`Jogos alugados: ${jogosAlugados}`);

}

function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector(".dashboard__item__img");
    let botao = jogo.querySelector(".dashboard__item__button");
    let gameClicked = jogo.querySelector(".dashboard__item__name");


    if (botao.classList.contains("dashboard__item__button--return")) {
        if (confirm("Deseja realmente devolver este jogo?")) {
            botao.textContent = "Alugar";
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented');
            jogosAlugados--;
            return;
        }
    }
    botao.textContent = "Devolver";
    botao.classList.add('dashboard__item__button--return');
    imagem.classList.add('dashboard__item__img--rented');
    jogosAlugados++;

    quantosJogosEstaoAlugados();
}








