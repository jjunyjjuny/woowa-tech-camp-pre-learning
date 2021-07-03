window.addEventListener("DOMContentLoaded", () => {
  startGame("ticTacToe");
});

const startGame = (game) => {
  const app = document.getElementById("app");
  app.appendChild(GAME[game]);
};
