// Nome e Experiência
let nomeHeroi = "Felipão The Master 😎";
let xpHeroi = 5000; // Valor inicial

// Contador para simular 3 aumentos de experiência
let contador = 0;

// Loop WHILE simulando aumento de experiência
while (contador < 3) {
  xpHeroi += 2000; // Aumento de experiência
  
  // Estrutura de Decisão para verificar o nível do herói
  let nivelHeroi;

  if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
  } else if (xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
  } else if (xpHeroi <= 5000) {
    nivelHeroi = "Prata";
  } else if (xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
  } else if (xpHeroi <= 8000) {
    nivelHeroi = "Platina";
  } else if (xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
  } else if (xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
  } else {
    nivelHeroi = "Radiante";
  }

  // Mensagem com NOME e NÍVEL do herói com implementação também da Experiência
  console.log("O herói " + nomeHeroi + " está no nível " + nivelHeroi + " com " + xpHeroi + " de experiência.");

  contador++;
}
