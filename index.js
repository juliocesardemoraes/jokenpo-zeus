// Posição 0 - jogador, Posição 1 - computador
let score = [0, 0];

const handResultTag = document.getElementById("hand__result");
const handResultPcTag = document.getElementById("hand__result__pc");

const handChosenTag = document.getElementById("hand__choosen");
const handChosenRefTag = document.getElementById("hand__choosen__ref");
const handChosenPcTag = document.getElementById("hand__computer");

const scoreTag = document.getElementById("score");
const helpSectionTag = document.getElementById("help__section");

const generatingResultTag = document.getElementById("generating__result");
const h1ElementCountdownTag = generatingResultTag.querySelector("h1");
const userScreenTag = document.getElementById("user__screen");
const pcScreenTag = document.getElementById("pc__screen");

const buttonsFunctionality = document.getElementById("buttons__selector");
const buttons = buttonsFunctionality.querySelectorAll("div");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const disableEnableOptions = () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle("disabled");
    buttons[i].disabled = true;
  }
};

function escolher(valor) {
  const possibilidades = ["pedra", "papel", "tesoura"];
  const numeroGerado = getRandomInt(3);
  const escolhaPC = possibilidades[numeroGerado];
  handResultTag.style.display = "none";
  handResultPcTag.style.display = "none";

  handChosenRefTag.src = `/public/${valor}.svg`;

  generatingResultTag.classList.toggle("hidden");
  userScreenTag.classList.toggle("hidden");
  pcScreenTag.classList.toggle("hidden");

  let counter = 3;

  disableEnableOptions();

  const thisInterval = setInterval(() => {
    counter--;
    h1ElementCountdownTag.textContent = `${counter}`;
    console.log("INTERVAL");

    if (counter === 0) {
      h1ElementCountdownTag.textContent = `${3}`;

      clearInterval(thisInterval);
    }
  }, 1000);

  setTimeout(() => {
    generatingResultTag.classList.toggle("hidden");
    userScreenTag.classList.toggle("hidden");
    pcScreenTag.classList.toggle("hidden");

    handChosenTag.src = `/public/${valor}.svg`;
    handChosenPcTag.src = `/public/${escolhaPC}.svg`;

    const ganhos = {
      pedra: "tesoura",
      papel: "pedra",
      tesoura: "papel",
    };

    handResultTag.style.display = "block";
    handResultPcTag.style.display = "block";

    if (valor == escolhaPC) {
      handResultTag.textContent = "Você empatou";
      handResultPcTag.textContent = "Empate";
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

    disableEnableOptions();
  }, 3000);
}

const showElement = (elementId) => {
  const getElementTag = document.getElementById(elementId);

  getElementTag.classList.toggle("hidden");
};
