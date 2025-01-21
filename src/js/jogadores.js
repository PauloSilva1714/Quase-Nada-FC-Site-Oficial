// Lista de jogadores
const jogadores = [
  {
   nome:"Breno Vinicius Santos de Souza",
   posicao: "Centro Avante",
   foto: "./src/img-jogadores/Breno-vinius-santos.jpeg",
   detalhes: {
     partidas: 0,
     gols: 0,
     cartoesAmarelos: 0,
     cartoesVermelhos: 0
   }
 },
  {
    nome:"Alison de Lina gama",
    posicao: "#",
    foto: "./src/img-jogadores/Alison de Lina gama.jpg",
    detalhes: {
      partidas: 0,
      gols: 0,
      cartoesAmarelos: 0,
      cartoesVermelhos: 0
    }
  },
  {
    nome:"Anderson lira sousa",
    posicao: "#",
    foto: "./src/img-jogadores/Anderson lira sousa.jpg",
    detalhes: {
      partidas: 0,
      gols: 0,
      cartoesAmarelos: 0,
      cartoesVermelhos: 0
    }
  },
  {
    nome:"Arley Rezende Lacerda",
    posicao: "ATA",
    foto: './src/img-jogadores/Arley-resende-lacerda.jpg',
    detalhes: {
      partidas: 1,
      gols: 0,
      cartoesAmarelos: 0,
      cartoesVermelhos: 0
    }
  },
  {
    nome:"Breno Luiz Costa Cardoso",
    posicao: "Meia",
    foto: './src/img-jogadores/Breno Luiz Costa Cardoso.jpg',
    detalhes: {
      partidas: 0,
      gols: 0,
      cartoesAmarelos: 0,
      cartoesVermelhos: 0
    }
  },
  {
    nome:"Davi Freire Ramos",
    posicao: "Zagueiro",
    foto: './src/img-jogadores/Davi-freire-ramos.jpeg',
    detalhes: {
      partidas: 1,
      gols: 0,
      cartoesAmarelos: 0,
      cartoesVermelhos: 0
    }
  },
  {
    nome:"Erick Corrêa",
    posicao: "#",
    foto: './src/imagens-logo-times/quasenada-icon-50.50.png',
    detalhes: {
      partidas: 1,
      gols: 0,
      cartoesAmarelos: 1,
      cartoesVermelhos: 0
    }
  },
  {
    nome:"Felipe Almeida dias",
    posicao: "#",
    foto: './src/img-jogadores/Felipe Almeida dias.jpg',
    detalhes: {
      partidas: 1,
      gols: 0,
      cartoesAmarelos: 0,
      cartoesVermelhos: 0
    }
  },
  {
    nome:"Jair Antunes Monteiro Junior",
    posicao: "#",
    foto: './src/img-jogadores/Jair Antunes Monteiro Junior.jpg',
    detalhes: {
      partidas: 0,
      gols: 0,
      cartoesAmarelos: 0,
      cartoesVermelhos: 0
    }
  },
  {
    nome:"João Vitor Alves da Silva",
    posicao: "#",
    foto: './src/img-jogadores/João Vitor Alves da Silva.jpg',
    detalhes: {
      partidas: 1,
      gols: 0,
      cartoesAmarelos: 0,
      cartoesVermelhos: 0
    }
  },
  {
    nome:"Marcos Paulo da Costa Monteiro",
    posicao: "Gol",
    foto: './src/img-jogadores/Marcos Paulo da Costa Monteiro.jpg',
    detalhes: {
      partidas: 0,
      gols: 0,
      cartoesAmarelos: 0,
      cartoesVermelhos: 0
    }
  },
  {
    nome:"Matheus Baltazar de Oliveira",
    posicao: "#",
    foto: './src/img-jogadores/Matheus Baltazar de Oliveira.jpg',
    detalhes: {
      partidas: 0,
      gols: 0,
      cartoesAmarelos: 0,
      cartoesVermelhos: 0
    }
  },
  {
      nome: "Max Alexandre Pinheiro da Silva",
      posicao: "Volante",
      foto: './src/img-jogadores/max-alexandre.png',
      detalhes: {
          partidas: 1,
          gols: 0,
          cartoesAmarelos: 0,
          cartoesVermelhos: 0
      }
  },
  {
      nome: "Rafael bispo dos Santos bastos",
      posicao: "#",
      foto: './src/img-jogadores/Rafael bispo dos Santos bastos.jpg',
      detalhes: {
        partidas: 1,
        gols: 1,
        cartoesAmarelos: 0,
        cartoesVermelhos: 0
      }
    },
    {
      nome: "Raimundo Cezar pereira de Lima",
      posicao: "Defensor",
      foto: './src/img-jogadores/Raimundo Cezar pereira de Lima.jpeg',
      detalhes: {
        partidas: 1,
        gols: 0,
        cartoesAmarelos: 0,
        cartoesVermelhos: 0
      }
    },
    {
      nome: "Wiliame Jeferson Moraes Do Nascimento",
      posicao: "Atacante",
      foto: './src/img-jogadores/wiliame-jeferson-morais-do-nascimento.jpeg',
      detalhes: {
        partidas: 1,
        gols: 0,
        cartoesAmarelos: 0,
        cartoesVermelhos: 0
      }
    },
    {
      nome: "Cristiano Tubin",
      posicao: "#",
      foto: './src/img-jogadores/Cristiano Tubin.jpg',
      detalhes: {
        partidas: 1,
        gols: 0,
        cartoesAmarelos: 0,
        cartoesVermelhos: 0
      }
    }
];


// Lista da comissão técnica
const comissaoTecnica = [
{
  nome: "Leno Moisés Cabral Carvalho",
  cargo: "Técnico",
  foto: "./src/imagens/leno moises tec.jpeg"
  },
  {
  nome: "Alexsandro Martins de Freitas",
  cargo: "Auxiliar Técnico",
  foto: "./src/imagens/auxiliartec.jpeg"
  },
  {
  nome: "Bismael Robson Da Silva Santos",
  cargo: "Massagista",
  foto: "./src/imagens/Bismael Robson Da Silva Santos massagista.jpeg"
  }
];

// Função para criar a lista de jogadores (mantida)
function criarListaJogadores() {
  const listaJogadores = document.getElementById("listaJogadores");
  jogadores.forEach((jogador) => {
      const li = document.createElement("LI");
      li.classList.add("list-group-item", "d-flex", "align-items-center", "cursor-pointer");
      li.dataset.nome = jogador.nome;
      li.dataset.foto = jogador.foto;
      li.dataset.partidas = jogador.detalhes.partidas;
      li.dataset.gols = jogador.detalhes.gols;
      li.dataset.cartoesAmarelos = jogador.detalhes.cartoesAmarelos;
      li.dataset.cartoesVermelhos = jogador.detalhes.cartoesVermelhos;
      li.innerHTML = `
       <img src="${jogador.foto}" alt="${jogador.nome}" width="50" height="50" class="rounded-circle me-3">
       <div>
         <h6>${jogador.nome}</h6>
         <p>${jogador.posicao}</p>
       </div>
     `;
      listaJogadores.appendChild(li);

      li.addEventListener("click", () => {
          const modalJogador = document.getElementById("modalJogador");
          const detalhesJogador = document.getElementById("detalhesJogador");
          detalhesJogador.innerHTML = `
       <div class="d-flex align-items-center">
         <img src="${li.dataset.foto}" alt="${li.dataset.nome}" width="100" height="100" class="rounded-circle me-3">
         <div>
           <h6>${li.dataset.nome}</h6>
           <p>Partidas: ${li.dataset.partidas}</p>
           <p class="badge bg-success ms-1">Gols: ${li.dataset.gols}</p>
           <p class="badge bg-warning ms-1">Cartões Amarelos: ${li.dataset.cartoesAmarelos}</p>
           <p class="badge bg-danger ms-1">Cartões Vermelhos: ${li.dataset.cartoesVermelhos}</p>
         </div>
       </div>
     `;
          const modal = new bootstrap.Modal(modalJogador);
          modal.show();
      });
  });
}

// Função para criar a lista da comissão técnica
function criarListaComissaoTecnica() {
  const listaComissao = document.getElementById("listaComissaoTecnica");
  comissaoTecnica.forEach((membro) => {
      const li = document.createElement("LI");
      li.classList.add("list-group-item", "d-flex", "align-items-center", "cursor-pointer");
      li.dataset.nome = membro.nome;
      li.dataset.foto = membro.foto;
      li.dataset.cargo = membro.cargo;
      li.innerHTML = `
       <img src="${membro.foto}" alt="${membro.nome}" width="50" height="50" class="rounded-circle me-3">
       <div>
         <h6>${membro.nome}</h6>
         <p>${membro.cargo}</p>
       </div>
     `;
      listaComissao.appendChild(li);

      li.addEventListener("click", () => {
          const modalComissao = document.getElementById("modalComissao");
          const detalhesComissao = document.getElementById("detalhesComissao");
          detalhesComissao.innerHTML = `
       <div class="d-flex align-items-center">
         <img src="${li.dataset.foto}" alt="${li.dataset.nome}" width="100" height="100" class="rounded-circle me-3">
         <div>
           <h6>${li.dataset.nome}</h6>
           <p>Cargo: ${li.dataset.cargo}</p>
         </div>
       </div>
     `;
          const modal = new bootstrap.Modal(modalComissao);
          modal.show();
      });
  });
}

criarListaJogadores();
criarListaComissaoTecnica();
