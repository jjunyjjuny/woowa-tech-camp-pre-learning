const createTicTacToe = () => {
  const game = document.createElement("div");

  const header = createHeader();
  const display = createDisplay();

  game.appendChild(header);
  game.appendChild(display);

  return game;
};

const createHeader = () => {};
const drawHeader = () => {};

const createDisplay = () => {};
const drawDisplay = () => {};

export default createTicTacToe;
