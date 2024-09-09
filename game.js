export function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 100);
}

export function verificarAcerto(numero, palpite) {
  return numero === palpite;
}
