const createInitPanel = () => [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const state = {
  display: createInitPanel(),
  score: [0, 0],
  turn: "x",
};

const createTicTacToe = () => {
  const ticTacToe = document.createElement("div");
  ticTacToe.classList.add("container");
  ticTacToe.appendChild(createHeader());
  return ticTacToe;
};

const createHeader = () => {
  const header = document.createElement("header");
  header.classList.add("header");
  drawHeader(header);
  return header;
};

const drawHeader = (header) => {
  const { score, turn } = state;

  header.innerHTML = `
    <h1 class="header-title">TIC TAC TOE</h1>
    <div class="header-turn">${turn === "x" ? "X 의 차례" : "O의 차례"} </div>
    <div class="header-score">${score[0]} : ${score[1]}</div>`;
};

const createDisplay = () => {
  const display = document.createElement("div");
  drawDisplay(display);
};
const drawDisplay = () => {};

export default createTicTacToe;
