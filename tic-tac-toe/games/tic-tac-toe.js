const initBoard = () => [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const state = {
  game: null,
  board: initBoard(),
  score: [0, 0],
  turn: "X",
};

const createTicTacToe = () => {
  const ticTacToe = document.createElement("div");
  ticTacToe.classList.add("container");
  state.game = ticTacToe;
  render();
  return ticTacToe;
};

const render = () => {
  const { game } = state;
  game.innerHTML = "";
  game.appendChild(createHeader());
  game.appendChild(createDisplay());
};

const clearBoard = () => {
  state.board = initBoard();
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
    <div class="header-score">X ${score[0]} : O ${score[1]}</div>`;
};

const createDisplay = () => {
  const display = document.createElement("div");
  display.classList.add("display");
  drawDisplay(display);
  setGameAction(display);
  return display;
};

const drawDisplay = (display) => {
  const { board } = state;

  display.innerHTML = `
  <div class="display-container">
    ${board
      .map(
        (row, i) =>
          `<div class="display-row">${row
            .map(
              (space, j) =>
                `<div class="display-space ${spaceForm[space]}" data-location=${i}-${j}>${space}</div>`
            )
            .join("")}</div>`
      )
      .join("")}
  </div>

  `;
};

const setGameAction = (display) => {
  display.addEventListener("click", ({ target }) => {
    if (!target.classList.contains("display-space")) return;

    const { turn, board } = state;
    const [x, y] = target.dataset.location.split("-");
    board[x][y] = turn;
    state.turn = turn === "X" ? "O" : "X";
    const result = refereGame();
    render();
    if (!result) return;
    result === "X" ? state.score[0]++ : state.score[1]++;
    clearBoard();
    render();
  });
};

const refereGame = () => {
  const { board } = state;
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      if (board[i][0] !== "") return board[i][0];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      if (board[0][i] !== "") return board[0][i];
    }
  }
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    if (board[0][0] !== "") return board[0][0];
  }
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    if (board[0][2] !== "") return board[0][2];
  }
};
const spaceForm = {
  X: "clicked mark-x",
  O: "clicked mark-o",
  "": "",
};
export default createTicTacToe;
