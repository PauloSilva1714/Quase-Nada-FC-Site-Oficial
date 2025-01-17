// app.js

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    let mensagemErro = document.getElementById("mensagem-erro-pesquisa");

    section.innerHTML = '';
    mensagemErro.textContent = "";

    let resultados = "";
    let encontrouResultados = false;

    for (let dado of dados) {
        const titulo = dado.titulo.toLowerCase();
        const descricao = dado.descricao.toLowerCase();
        const tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
          <div class="item-resultado" w-tid="33">
              <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
              <img src="${dado.img}" sizes="(max-width:800px) 100vw, 800px" alt="Imagem do atleta"  width="300" height="200" w-tid="35">
              <p class="descricao-meta"><strong>${dado.descricao}</strong></p>
              <a href="${dado.link}" target="_blank"><strong>Saiba mais</strong></a>
          </div>
      `;
            encontrouResultados = true;
        }
    }

    if (encontrouResultados) {
        section.innerHTML = resultados;
        const modalPesquisa = new bootstrap.Modal(document.getElementById('modalPesquisa'));
        modalPesquisa.show();
    } else {
        mensagemErro.textContent = "Nenhum resultado encontrado.";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Evento para pesquisa
    document.getElementById("campo-pesquisa").addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        pesquisar();
      }
    });

    // Código para o menu
    const botaoMenu = document.querySelector(".botao-menu");
    const menuLateral = document.querySelector(".menu-lateral");
    const background = document.querySelector(".background");

    botaoMenu.addEventListener("click", () => {
        menuLateral.classList.toggle("ativo");
        background.classList.toggle("ativo");
        botaoMenu.classList.toggle("ativo");
    });

    // Código para o próximo jogo e notícias
    const proximoJogo = document.querySelector(".proximo-jogo");
    const noticias = document.querySelector(".noticias");

    window.addEventListener('scroll', () => {
        const distanciaDoTopo = noticias.getBoundingClientRect().top;
        if (distanciaDoTopo < window.innerHeight * 0.8) {
            proximoJogo.classList.add("animado");
        }
    });

    proximoJogo.classList.add("hidden");
    proximoJogo.classList.remove("hidden");
    proximoJogo.classList.add("animado");

    // Código para os links "Saiba Mais"
    const linksSaibaMais = document.querySelectorAll(".item-resultado a");
    linksSaibaMais.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.textDecoration = "underline";
            link.style.color = "gold";
        });
        link.addEventListener("mouseout", () => {
            link.style.textDecoration = "none";
            link.style.color = "#1c1d1f";
        });
    });
    
    // Delegação de eventos para o zoom das imagens
    const modalSobreBody = document.querySelector('#modalSobre .modal-body'); // Seleciona o modal-body do modal sobre
    
    modalSobreBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('zoomable-image')) {
            event.target.classList.toggle('zoomed');// Alterna a classe 'zoomed'
        }
    });
});


// Função para criar o HTML de um jogador
function criarHTMLJogador(jogador) {
    let playerContainer = document.createElement('div');
    playerContainer.className = "player-card";

    let playerImage = document.createElement('img');
    playerImage.src = jogador.img;
    playerImage.alt = `Foto de ${jogador.titulo}`;
    playerContainer.appendChild(playerImage);

    let playerName = document.createElement('h3');
    playerName.textContent = jogador.titulo;
    playerContainer.appendChild(playerName);

    let playerDescription = document.createElement('p');
    playerDescription.textContent = jogador.descricao;
    playerContainer.appendChild(playerDescription);

    let playerLink = document.createElement('a');
    playerLink.href = jogador.link;
    playerLink.textContent = 'Saiba Mais';
    playerContainer.appendChild(playerLink);

    return playerContainer;
}
