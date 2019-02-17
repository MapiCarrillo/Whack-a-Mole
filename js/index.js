$(document).ready(function() {
  var url = new URL(document.URL);
  var playerName = url.searchParams.get("name");
  var playerRounds = url.searchParams.get("rounds");
  var game = new Game("#mole-game", playerName, playerRounds);
});
