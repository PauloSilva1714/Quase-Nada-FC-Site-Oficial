document.addEventListener('DOMContentLoaded', function () {
    const proximoJogoTitulo = document.querySelector('.proximo-jogo');
    const modalContainer = document.querySelector('.noticias');
    const matchContainer = document.querySelector('.match-container');
    const prevButton = document.querySelector('.ct-slide-game-prev');
    const nextButton = document.querySelector('.ct-slide-game-next');
    const matchInfos = Array.from(document.querySelectorAll('.match-info'));
    let currentIndex = 0;



    const jogos = [
        {
                time1: {
                    nome: 'Família Resenha Pará',
                    logo: './src/imagens-logo/logo-familia-resenha-para-76-75 .png',
                    jogadores: [
                       { nome: 'Vinícius bastos (#)', foto: './src/imagens-logo/logo-familia-resenha-para-76-75 .png', video: null, gols: 0, cartaoAmarelo: true, cartaoVermelho: false },
                        
                        // Adicione mais jogadores
                    ]
                },
                time2: {
                    nome: 'Quase Nada FC',
                    logo: './src/imagens-logo/logo-quase-nada-76-76.png',
                    jogadores: [
                        { nome: 'Rafael bastos (#)', foto: './src/img-jogadores/Rafael bispo dos Santos bastos.jpg', video: null, gols: 1, cartaoAmarelo: false, cartaoVermelho: false },
                        { nome: 'Erick corrêa', foto: './src/imagens-logo-times/quasenada-icon-50.50.png', video: null, gols: 0, cartaoAmarelo: true, cartaoVermelho: false },
                        
                        // Adicione mais jogadores
                    ]
                },
                horario: '09:00 - 19/01/25',
                placar: { time1: 0, time2: 1 },
                resumo: "",
                melhoresMomentos: [
                    { tipo: 'video', url: './src/videos/V%C3%ADdeo%20do%20WhatsApp%20de%202025-01-20%20%C3%A0(s)%2008.04.47_bad1ac14.mp4' },
                    { tipo: 'foto', url: './src/imagens/Imagem do WhatsApp de 2025-01-20 à(s) 08.05.42_645cb2d0.jpg' }
                ],
                 local: "ANTIGO CT DO BARRA"
            },
            {
                time1: {
                    nome: 'Duarte e Amigos',
                    logo: './src/imagens-logo-times/Duarte-e-amigos-50-50.png',
                    jogadores: [
                        {nome: '', posicao: 'Gol', foto: '', video: null, gols: 0, cartaoAmarelo: false, cartaoVermelho: false},
  {nome: '', posicao: 'Zag', foto: '', video: null, gols: 0, cartaoAmarelo: false, cartaoVermelho: false},
  
  {nome: '', posicao: 'Mei', foto: '', video: null, gols: 0, cartaoAmarelo: false, cartaoVermelho: false},
 
                        // Adicione mais jogadores
                    ]
                },
                time2: {
                    nome: 'Quase Nada FC',
                    logo: './src/imagens-logo-times/quasenada-icon-50.50.png',
                    jogadores: [
                       {nome: '', posicao: 'Gol', foto: '', video: null, gols: 0, cartaoAmarelo: false, cartaoVermelho: false},
  {nome: '', posicao: 'Zag', foto: '', video: null, gols: 0, cartaoAmarelo: false, cartaoVermelho: false},
  
  {nome: '', posicao: 'Mei', foto: '', video: null, gols: 0, cartaoAmarelo: false, cartaoVermelho: false},
 
                        
                        // Adicione mais jogadores
                    ]
                },
                horario: '14:30 - 02/02/25',
                placar: { time1: 0, time2: 0 },
                resumo: "",
                melhoresMomentos: [
                    { tipo: 'foto', url: './src/imagens-melhores-momentos/melhor_momento7.jpg' },
                    { tipo: 'video', url: 'url_video_melhor_momento5.mp4' },
                ],
                    local: "ANTIGO CT DO BARRA"
            },
            
{time1: 
{nome: 'Carcará U.F.C',
logo: './src/imagens-logo-times/carcara-ufc.jpg',
jogadores: [
    {nome: '', posicao: 'Gol', foto: '', video: null, gols: 0, cartaoAmarelo: false, cartaoVermelho: false},
  
    {nome: '', posicao: 'Mei', foto: '', video: null, gols: 0, cartaoAmarelo: false, cartaoVermelho: false}
]},

time2: {
nome: 'Quase Nada FC',
logo: 'src/imagens-logo-times/logo-quase-nada-76-76.png',
jogadores: [
    {nome: '', posicao: 'Gol', foto: '', video: null, gols: 0, cartaoAmarelo: false, cartaoVermelho: false},
    
    {nome: '', posicao: 'Mei', foto: '', video: null, gols: 0, cartaoAmarelo: false, cartaoVermelho: false} ]},

 horario: '15:00 - 16/02/25',
 placar: { time1: 0, time2: 0 },
 resumo: "O jogo entre Quase Nada FC e Família Resenha Pará foi emocionante, com muitos gols e reviravoltas. Quase Nada FC saiu vitorioso, mas Família Resenha Pará mostrou garra.",
 melhoresMomentos: [
{ tipo: 'video', url: 'url_video_melhor_momento1.mp4' },
{ tipo: 'foto', url: './src/imagens-melhores-momentos/melhor_momento1.jpg' },

                        // Adicione mais momentos
],
 local: "ANTIGO CT DO BARRA"
               },

               {time1: 
                {nome: 'A Definir',
                logo: './src/imagens-logo/default-team.png',
                jogadores: [
                    {nome: '', posicao: 'Gol', foto: '', video: null, gols: 0, cartaoAmarelo: false, cartaoVermelho: false},
                  
                    {nome: '', posicao: 'Mei', foto: '', video: null, gols: 0, cartaoAmarelo: false, cartaoVermelho: false}
                ]},
                
                time2: {
                nome: 'Quase Nada FC',
                logo: 'src/imagens-logo-times/logo-quase-nada-76-76.png',
                jogadores: [
                    {nome: '', posicao: 'Gol', foto: '', video: null, gols: 0, cartaoAmarelo: false, cartaoVermelho: false},
                    
                    {nome: '', posicao: 'Mei', foto: '', video: null, gols: 0, cartaoAmarelo: false, cartaoVermelho: false} ]},
                
                 horario: '15:00 - 16/02/25',
                 placar: { time1: 0, time2: 0 },
                 resumo: "O jogo entre Quase Nada FC e Família Resenha Pará foi emocionante, com muitos gols e reviravoltas. Quase Nada FC saiu vitorioso, mas Família Resenha Pará mostrou garra.",
                 melhoresMomentos: [
                { tipo: 'video', url: 'url_video_melhor_momento1.mp4' },
                { tipo: 'foto', url: './src/imagens-melhores-momentos/melhor_momento1.jpg' },
                { tipo: 'foto', url: './src/imagens-melhores-momentos/melhor_momento2.jpg' },
                                        // Adicione mais momentos
                ],
                 local: "ANTIGO CT DO BARRA"
                               },
                               {time1: 
                                {nome: 'A Definir',
                                logo: './src/imagens-logo/default-team.png',
                                jogadores: [
                                    {nome: '', posicao: 'Gol', foto: '', video: null, gols: 0, cartaoAmarelo: false, cartaoVermelho: false},
                                  
                                    {nome: '', posicao: 'Mei', foto: '', video: null, gols: 0, cartaoAmarelo: false, cartaoVermelho: false}
                                ]},
                                
                                time2: {
                                nome: 'Quase Nada FC',
                                logo: 'src/imagens-logo-times/logo-quase-nada-76-76.png',
                                jogadores: [
                                    {nome: '', posicao: 'Gol', foto: '', video: null, gols: 0, cartaoAmarelo: false, cartaoVermelho: false},
                                    
                                    {nome: '', posicao: 'Mei', foto: '', video: null, gols: 0, cartaoAmarelo: false, cartaoVermelho: false} ]},
                                
                                 horario: '15:00 - 16/02/25',
                                 placar: { time1: 0, time2: 0 },
                                 resumo: "O jogo entre Quase Nada FC e Família Resenha Pará foi emocionante, com muitos gols e reviravoltas. Quase Nada FC saiu vitorioso, mas Família Resenha Pará mostrou garra.",
                                 melhoresMomentos: [
                                { tipo: 'video', url: 'url_video_melhor_momento1.mp4' },
                                { tipo: 'foto', url: './src/imagens-melhores-momentos/melhor_momento1.jpg' },
                                { tipo: 'foto', url: './src/imagens-melhores-momentos/melhor_momento2.jpg' },
                                                        // Adicione mais momentos
                                ],
                                 local: "ANTIGO CT DO BARRA"
                                               },
        ];
 

  
            function criarModalResumoHTML(jogo) {
                return `
                   <div class="modal fade modal-fullscreen" id="resumoModal" tabindex="-1" aria-labelledby="resumoModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-fullscreen modal-dialog-scrollable table-responsive">
                            <div class="modal-content bg-dark text-light table-responsive">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="resumoModalLabel">Resumo do Jogo</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="match-container d-flex align-items-center justify-content-between w-100 mb-3">
                                        <div class="team d-flex align-items-center gap-2">
                                            <figure class="mb-0"><img src="${jogo.time1.logo}" alt="${jogo.time1.nome}" style="width: 30px; height: 30px;"></figure>
                                            <span>${jogo.time1.nome}</span>
                                        </div>
    
                                        <div class="match-placar">
                                          <span class="placar">
                                             ${jogo.placar.time1}
                                            <span style="margin: 0 10px;">x</span>
                                            ${jogo.placar.time2}
                                           </span>
                                              ${jogo.penaltis ? `<div class="penaltis-placar">( ${jogo.penaltis.time1} x ${jogo.penaltis.time2} )</div>` : ''}
                                         </div>
    
                                        <div class="team d-flex align-items-center gap-2">
                                            <figure class="mb-0"><img src="${jogo.time2.logo}" alt="${jogo.time2.nome}" style="width: 30px; height: 30px;"></figure>
                                            <span>${jogo.time2.nome}</span>
                                        </div>
                                    </div>
                                     <div class="text-center d-flex justify-content-around ">
                                            <div>
                                                <p  class="text-center text-warning">
                                                    ${jogo.time1.jogadores
                                                      .filter(jogador => jogador.gols > 0)
                                                      .flatMap(jogador => Array(jogador.gols).fill(jogador.nome))
                                                      .join(', ')
                                                     }
                                                </p>
                                             </div>
                                            <div>
                                                 <p class="text-center text-warning">
                                                      ${jogo.time2.jogadores
                                                        .filter(jogador => jogador.gols > 0)
                                                        .flatMap(jogador => Array(jogador.gols).fill(jogador.nome))
                                                        .join(', ')
                                                       }
                                                     </p>
                                              </div>
                                        </div>
                                        <p class="text-center text-light mb-3">Local da Partida: ${jogo.local}</p>
                                        <p class="resumo-texto">${jogo.resumo}</p>
    
                                        <div class="mt-4">
                                            <h6 class="text-center">Jogadores</h6>
                                            <div class="d-flex justify-content-around">
                                                ${['time1', 'time2'].map(time => `
                                                    <div>
                                                        <h6 class="text-light text-center">${jogo[time].nome}</h6>
                                                         <ul class="list-unstyled">
                                                            ${jogo[time].jogadores.map(jogador => `
                                                                <li class="jogador-item d-flex align-items-center mb-2">
                                                                     <img src="${jogador.foto}" alt="${jogador.nome}" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 10px;">
                                                                      <div class="jogador-info">
                                                                        <span class="jogador-nome">${jogador.nome}</span>
                                                                         <span class="jogador-posicao text-light ms-1">${jogador.posicao ? jogador.posicao : ' '}</span>
                                                                       ${jogador.gols > 0 ? `<span class="badge bg-success ms-1">Gols: ${jogador.gols}</span>` : ''}
                                                                        ${jogador.cartaoAmarelo ? '<span class="badge bg-warning ms-1">Cartão Amarelo</span>' : ''}
                                                                        ${jogador.cartaoVermelho ? '<span class="badge bg-danger ms-3">Cartão Vermelho</span>' : ''}
                                                                      ${jogador.video ? `<a href="${jogador.video}" class="ms-1 text-info" target="_blank">Ver Vídeo</a>` : ''}
                                                                   </div>
                                                                </li>
                                                            `).join('')}
                                                        </ul>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        </div>
    
                                         <div class="mt-4">
                                            <h6 class="text-center">Melhores Momentos</h6>
                                            <div class="melhores-momentos-container d-flex flex-wrap justify-content-center">
                                                ${jogo.melhoresMomentos.map(momento =>
                                                    momento.tipo === 'foto' ?
                                                    `<div class="momento-item m-2">
                                                        <img src="${momento.url}" alt="Melhor Momento" style="max-width: 200px; max-height: 150px;">
                                                    </div>`
                                                    :
                                                    `<div class="momento-item m-2">
                                                        <video width="200" height="150" controls>
                                                            <source src="${momento.url}" type="video/mp4">
                                                                Seu navegador não suporta vídeos HTML5.
                                                            </video>
                                                        </div>`
                                                ).join('')}
                                            </div>
                                         </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }
        
    function criarModalHTML(jogos) {
        return `
            <div class="modal fade modal-fullscreen" id="jogosModal" tabindex="-1" aria-labelledby="jogosModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
                    <div class="modal-content bg-dark text-light table-responsive">
                        <div class="modal-header">
                            <h5 class="modal-title" id="jogosModalLabel">Próximos Jogos</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <ul class="list-group">
                                ${jogos.map((jogo, index) => `
                                    <li class="list-group-item d-flex align-items-center ${index === 0 ? 'list-group-item-primary' : ''}" data-jogo-index="${index}">
                                        <div class="match-container d-flex align-items-center justify-content-between w-100">
                                            <div class="team d-flex align-items-center gap-2">
                                                <figure class="mb-0"><img src="${jogo.time1.logo}" alt="${jogo.time1.nome}" style="width: 30px; height: 30px;"></figure>
                                                <span>${jogo.time1.nome}</span>
                                            </div>

                                            <div class="match-placar"><span class="placar">${jogo.placar.time1}<span style="margin: 0 10px;">x</span>${jogo.placar.time2}</span>${jogo.penaltis ? `<div class="penaltis-placar">( ${jogo.penaltis.time1} x ${jogo.penaltis.time2} )</div>` : ''}</div>
                                            <div class="team d-flex align-items-center gap-2">
                                                <figure class="mb-0"><img src="${jogo.time2.logo}" alt="${jogo.time2.nome}" style="width: 30px; height: 30px;"></figure>
                                                <span>${jogo.time2.nome}</span>
                                            </div>
                                            <span class="horario text-muted ms-auto">${jogo.horario}</span>
                                        </div>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
            
        `;
    }
    function updateButtons() {
        if (currentIndex === 0) {
            prevButton.classList.add('slick-disabled');
            prevButton.setAttribute('aria-disabled', 'true');
        } else {
            prevButton.classList.remove('slick-disabled');
            prevButton.setAttribute('aria-disabled', 'false');
        }
  
        if (currentIndex === matchInfos.length - 1) {
            nextButton.classList.add('slick-disabled');
            nextButton.setAttribute('aria-disabled', 'true');
        } else {
            nextButton.classList.remove('slick-disabled');
            nextButton.setAttribute('aria-disabled', 'false');
        }
    }
  
  
    function showMatch(index) {
        matchInfos.forEach((matchInfo, i) => {
            if (i === index) {
                matchInfo.style.display = 'flex'; // ou o estilo que você usa para exibir
            } else {
                matchInfo.style.display = 'none';
            }
        });
    }
  
    function goToNextMatch() {
        if (currentIndex < matchInfos.length - 1) {
            currentIndex++;
            showMatch(currentIndex);
            updateButtons();
        }
    }
  
  
    function goToPrevMatch() {
        if (currentIndex > 0) {
            currentIndex--;
            showMatch(currentIndex);
            updateButtons();
        }
    }
  
  
    // Eventos para os botões
    nextButton.addEventListener('click', goToNextMatch);
    prevButton.addEventListener('click', goToPrevMatch);
    
    // Inicialização
    showMatch(currentIndex);
    updateButtons();

    proximoJogoTitulo.addEventListener('click', function () {
        const modalHTML = criarModalHTML(jogos);
        modalContainer.insertAdjacentHTML('beforeend', modalHTML);
        const modalJogos = document.getElementById('jogosModal');
        // Use Bootstrap's API para mostrar o modal
        const modal = new bootstrap.Modal(modalJogos);
        modal.show();

        // Adicione um ouvinte para remover o modal ao fechar
        modalJogos.addEventListener('hidden.bs.modal', function () {
            modalJogos.remove();
        });
        // Adicione um ouvinte de clique para cada item da lista de jogos
        const listaJogos = modalJogos.querySelectorAll('.list-group-item');
        listaJogos.forEach(item => {
            item.addEventListener('click', function () {
                const jogoIndex = parseInt(this.getAttribute('data-jogo-index'), 10);
                const jogoSelecionado = jogos[jogoIndex];

                const modalResumoHTML = criarModalResumoHTML(jogoSelecionado);
                modalContainer.insertAdjacentHTML('beforeend', modalResumoHTML);
                const modalResumo = document.getElementById('resumoModal');

                const modalResumoInstance = new bootstrap.Modal(modalResumo);
                modalResumoInstance.show();

                modalResumo.addEventListener('hidden.bs.modal', function () {
                    modalResumo.remove();
                });
            });
        });
    });
});
