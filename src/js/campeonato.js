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
              <th scope="col">Pts</th>
              <th scope="col">J</th>
              <th scope="col">V</th>
              <th scope="col">E</th>
              <th scope="col">D</th>
              <th scope="col">GP</th>
              <th scope="col">GC</th>
              <th scope="col">SG</th>
            </tr>
          </thead>
          <tbody>
             <tr>
          <th scope="row">1</th>

          
          <td> <img src="./src/imagens-logo-times/Duarte-e-amigos-50-50.png" alt="Duarte e Amigos" class="team-logo-table">Duarte e Amigos</td>
          <td>3</td> <!-- Pontos -->
          <td>1</td> <!-- jogos -->
          <td>1</td> <!-- vitorias -->
          <td>0</td> <!-- Empates -->
          <td>0</td> <!-- Derrotas -->
          <td>2</td> <!-- GP -->
          <td>1</td> <!-- GC -->
          <td>1</td> <!-- SG -->
        </tr>
            <tr>
              <th scope="row">2</th>
              <td><img src="./src/imagens-logo-times/quasenada-icon-50.50.png" alt="Quase Nada FC" class="team-logo-table">Quase Nada FC</td>
              <td>3</td> <!-- Pontos -->
              <td>1</td> <!-- jogos -->
              <td>1</td> <!-- vitorias -->
              <td>0</td> <!-- Empates -->
              <td>0</td> <!-- Derrotas -->
              <td>1</td> <!-- GP -->
              <td>0</td> <!-- GC -->
              <td>1</td> <!-- SG -->
            </tr>
        <tr>
          <th scope="row">3</th>
          <td>
            <img src="./src/imagens-logo-times/carcara-ufc-50-50.jpg" alt="Carcará U.F.C" width="50"  height="50"class="team-logo-table">Carcará U.F.C</td>
          <td>0</td> <!-- Pontos -->
          <td>1</td> <!-- jogos -->
          <td>0</td> <!-- vitorias -->
          <td>0</td> <!-- Empates -->
          <td>1</td> <!-- Derrotas -->
          <td>1</td> <!-- GP -->
          <td>2</td> <!-- GC -->
          <td>-1</td> <!-- SG -->
        </tr>

        <tr>
          <th scope="row">4</th>
          <td><img src="./src/imagens-logo-times/logo-familia-resenha-para-50-49.png" alt="Familia Resenha" class="team-logo-table">Familia Resenha</td>
          <td>0</td> <!-- Pontos -->
          <td>1</td> <!-- jogos -->
          <td>0</td> <!-- vitorias -->
          <td>0</td> <!-- Empates -->
          <td>1</td> <!-- Derrotas -->
          <td>0</td> <!-- GP -->
          <td>1</td> <!-- GC -->
          <td>-1</td> <!-- SG -->
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
