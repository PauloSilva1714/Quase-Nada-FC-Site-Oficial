// app.js

function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  let mensagemErro = document.getElementById("mensagem-erro-pesquisa"); // Novo elemento para a mensagem

  section.innerHTML = ''; // Limpa os resultados anteriores
  mensagemErro.textContent = ""; // Limpa qualquer mensagem de erro anterior

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
       // Exibe o modal apenas se houver resultados
      const modalPesquisa = new bootstrap.Modal(document.getElementById('modalPesquisa'));
      modalPesquisa.show();
  } else {
      // Exibe a mensagem de "Nenhum resultado encontrado" fora do modal
      mensagemErro.textContent = "Nenhum resultado encontrado.";
  }
}


// Adicionando o event listener ao input para executar a pesquisa ao pressionar enter
document.getElementById("campo-pesquisa").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      event.preventDefault(); 
      pesquisar(); 
  }
});

// Restante do seu código (menu, scroll, etc.) permanece igual...

// Seleciona os elementos do menu e do background
const botaoMenu = document.querySelector(".botao-menu");
const menuLateral = document.querySelector(".menu-lateral");
const background = document.querySelector(".background");

// Adiciona um listener de evento para o clique no botão do menu
botaoMenu.addEventListener("click", () => {
// Alterna a classe "ativo" nos elementos do menu e do background
menuLateral.classList.toggle("ativo");
background.classList.toggle("ativo");
botaoMenu.classList.toggle("ativo");
});

// Seleciona os elementos do próximo jogo e das notícias
const proximoJogo = document.querySelector(".proximo-jogo");
const noticias = document.querySelector(".noticias");

// Adiciona um listener de evento para o scroll da página
window.addEventListener('scroll', () => {
// Calcula a distância do topo da seção de notícias em relação à parte superior da viewport
const distanciaDoTopo = noticias.getBoundingClientRect().top;

// Se a distância do topo for menor que 80% da altura da viewport, adiciona a classe "animado" ao elemento do próximo jogo
if (distanciaDoTopo < window.innerHeight * 0.8) {
proximoJogo.classList.add("animado");
}
});

// Oculta o elemento do próximo jogo inicialmente
proximoJogo.classList.add("hidden");
// Exibe o elemento do próximo jogo com a animação
proximoJogo.classList.remove("hidden");

// Adiciona a classe de animação ao elemento do próximo jogo
proximoJogo.classList.add("animado");

// Seleciona todos os links "Saiba Mais"
const linksSaibaMais = document.querySelectorAll(".item-resultado a");

// Itera sobre cada link "Saiba Mais"
linksSaibaMais.forEach(link => {
// Adiciona um listener de evento para o mouseover
link.addEventListener("mouseover", () => {
// Adiciona o estilo de sublinhado e cor dourada ao link
link.style.textDecoration = "underline";
link.style.color = "gold";
});
// Adiciona um listener de evento para o mouseout
link.addEventListener("mouseout", () => {
// Remove o estilo de sublinhado e define a cor original do link
link.style.textDecoration = "none";
link.style.color = "#1c1d1f";
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
