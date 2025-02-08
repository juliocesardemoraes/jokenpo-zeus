// Posição 0 - jogador, Posição 1 - computador
let score = [0, 0];

const handResultTag = document.getElementById("hand__result");
const handResultPcTag = document.getElementById("hand__result__pc");

const handChosenTag = document.getElementById("hand__choosen");
const handChosenPcTag = document.getElementById("hand__computer");

const scoreTag = document.getElementById("score");
const helpSectionTag = document.getElementById("help__section");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function escolher(valor) {
  const possibilidades = ["pedra", "papel", "tesoura"];
  const numeroGerado = getRandomInt(3);
  const escolhaPC = possibilidades[numeroGerado];
  handResultTag.style.display = "none";
  handResultPcTag.style.display = "none";

  console.log(valor);

  handChosenTag.src = `/public/${valor}.svg`;
  handChosenPcTag.src = `/public/${escolhaPC}.svg`;

  const ganhos = {
    pedra: "tesoura",
    papel: "pedra",
    tesoura: "papel",
  };

  // se o valor for igual ao numeroGerado empate.
  // se o valor for pedra - tesoura ganhou.
  // se o valor não for esse - perdeu

  handResultTag.style.display = "block";
  handResultPcTag.style.display = "block";

  if (valor == escolhaPC) {
    handResultTag.textContent = "Você empatou";
    handResultPcTag.textContent = "Empate";
    score;
  } else if (ganhos[valor] == escolhaPC) {
    handResultTag.textContent = "Você ganhou!";
    handResultPcTag.textContent = "Computador perdeu";
    score[0]++;
  } else {
    handResultTag.textContent = "Você perdeu";
    handResultPcTag.textContent = "Computador ganhou";
    score[1]++;
  }

  scoreTag.textContent = `${score[0]}/${score[1]}`;
}

const showElement = (elementId) => {
  const getElementTag = document.getElementById(elementId);

  getElementTag.classList.toggle("hidden");
};
