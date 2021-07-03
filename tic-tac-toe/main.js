import GAMES from "./games/games.js";

window.addEventListener("DOMContentLoaded", () => {
  startGame("tictactoe");
});

const app = document.getElementById("app");

const startGame = (gameName) => {
  const game = GAMES[gameName]();
  app.appendChild(game);
};
