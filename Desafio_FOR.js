// Nome e Experiência
let nomeHeroi = "Felipão The Master 😎";
let xpHeroi = 5000; // Valor inicial

// Loop FOR simulando aumento de experiência
for (let i = 0; i < 3; i++) { // Simulando 3 aumentos de experiência
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

  // Mensagem com NOME e NÍVEL do herói e implementei a Experiência!
  console.log("O herói " + nomeHeroi + " está no nível " + nivelHeroi + " com " + xpHeroi + " de experiência.");
}
