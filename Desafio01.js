let quantidadePositivos = 0;

for (let i = 0; i < 6; i++) {

  const valorInformadoPeloUsuario = gets();
  valorInformadoPeloUsuario = parseFloat(prompt("Digite um número:"));

  if (valorInformadoPeloUsuario > 0) {
      quantidadePositivos++;
      
  }

  // TODO Incrementar a "quantidadePositivos" somente SE o "valorInformadoPeloUsuario" for positivo.

}

console.log(`${quantidadePositivos} valores positivos`);