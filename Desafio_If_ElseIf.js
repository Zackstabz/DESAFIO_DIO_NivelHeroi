// Nome e Experiência
let nomeHeroi = "Felipão The Master 😎";
const xpHeroi = 99999;

// Estrutura de Decisão
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

// Mensagem com NOME e NÍVEL do herói
console.log("O herói " + nomeHeroi + " está no nível " + nivelHeroi);
