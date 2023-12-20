// Nome e Experiência
let nomeHeroi = "Felipão The Master 😎";
const xpHeroi = 99999;

// Estrutura de Decisão com switch
let nivelHeroi;

switch (true) {
  case xpHeroi < 1000:
    nivelHeroi = "Ferro";
    break;
  case xpHeroi <= 2000:
    nivelHeroi = "Bronze";
    break;
  case xpHeroi <= 5000:
    nivelHeroi = "Prata";
    break;
  case xpHeroi <= 7000:
    nivelHeroi = "Ouro";
    break;
  case xpHeroi <= 8000:
    nivelHeroi = "Platina";
    break;
  case xpHeroi <= 9000:
    nivelHeroi = "Ascendente";
    break;
  case xpHeroi <= 10000:
    nivelHeroi = "Imortal";
    break;
  default:
    nivelHeroi = "Radiante";
}

// Mensagem com NOME e NÍVEL do herói
console.log("O herói " + nomeHeroi + " está no nível " + nivelHeroi);
