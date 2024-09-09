import { gerarNumeroAleatorio, verificarAcerto } from './game.js';
import { solicitarPalpite, mostrarMensagem, mostrarTentativa } from './ui.js';

const numeroDeTentativas = 10;

function iniciarJogo() {
  const numero = gerarNumeroAleatorio();
  mostrarMensagem("Jogo começando...");

  for (let i = 0; i < numeroDeTentativas; i++) {
    let palpite = parseInt(solicitarPalpite(), 10);
    if (verificarAcerto(numero, palpite)) {
      mostrarMensagem("Parabéns! Você acertou!");
      break;
    } else if (numero < palpite) {
      mostrarMensagem("Você errou! O número é menor. Tente novamente.");
    } else {
      mostrarMensagem("Você errou! O número é maior. Tente novamente.");
    }
    mostrarTentativa(i + 1, numeroDeTentativas);
  }

  mostrarMensagem(`Fim do jogo! O número era ${numero}.`);
}


window.iniciarJogo = iniciarJogo;

