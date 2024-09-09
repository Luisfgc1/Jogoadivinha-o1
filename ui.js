export function solicitarPalpite() {
  return prompt("Digite um número entre 0 e 100:");
}

export function mostrarMensagem(mensagem) {
  console.log(mensagem);
}

export function mostrarTentativa(tentativa, totalTentativas) {
  console.log(`Tentativa ${tentativa} de ${totalTentativas}`);
}
