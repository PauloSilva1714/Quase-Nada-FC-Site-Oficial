const conteudoModal = document.getElementById('conteudo-modal');
const modalLabel = document.getElementById('campeonatoJogosModalLabel');
const modal = new bootstrap.Modal(document.getElementById('campeonatoJogosModal'));
const linkCampeonato = document.getElementById('linkCampeonato');
// Função para carregar conteúdo de Campeonato
function carregarCampeonato() {
  modalLabel.innerHTML = '<a href="https://campeonato.ifut.com.br/campeonato/campeonato-elite-society-fut-7" target="_blank"  style="text-decoration: none; color: rgb(255, 38, 0); font-size: 1.5em;">Campeonato Elite Society Fut <img src="./src/imagens-logo/Campeonato-Elite-Society-Fut-7-50x50.jpg" width="50" height="50"></a> ';

  conteudoModal.innerHTML = `
    <!-- Tabela do Campeonato -->
    <div class="campeonato-tabela w-100">
      <h3 class="display-6 fw-bold text-center bg-light p-1 rounded cursor-pointer transition-background mb-3">Grupo D</h3>
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Posição</th>
              <th scope="col">Time</th>
              <th scope="col">Pontos</th>
              <th scope="col">Jogos</th>
              <th scope="col">Vitórias</th>
              <th scope="col">Empates</th>
              <th scope="col">Derrotas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Quase Nada FC</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr>
          <th scope="row">2</th>
          <td>Familia Resenha</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Carcará U.F.C</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Duarte e Amigos</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
            <!-- Adicione mais linhas aqui -->
          </tbody>
        </table>
      </div>
    </div>
  `;
  modal.show();
}

export { carregarCampeonato };
// Adicionar eventos de clique
linkCampeonato.addEventListener('click', carregarCampeonato); // vamos usar os eventos no app.js