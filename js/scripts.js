//Business Logic
function Player (player1, player2, game){
  this.players = [player1, player2];
  this.game = game;
}

function Game (turnScore, total, gameWins, gameLoses) {
  this.turnScore = 100;
  this.totalScore = 0;
  this.gameWins = 0;
  this.gameLoses = 0;
}

Player.prototype.switchUser = function() {
  this.turnScore = 0; // clear turn points when players switch
  if (this.players === [0]) { // checks to see if current player is at index 0 (player1)
    this.players = [1]; // makes player2 current player
  } else {
    this.players = [0]; // makes player 1 current player
  }
}

Game.prototype.roll = function() {
  let newRoll = Math.floor((Math.random() * 6) + 1);
  if (newRoll !== 1) {
    this.turnScore += newRoll;
  } else if (totalScore += turnScore >= 100) {
    alert("You won!");
  } else {
    alert("You rolled a 1! Your score for this round is 0, and your turn is over!");
    Player.switchUser();
     // changes players
  }
  return newRoll;
}

Game.prototype.hold = function() {
  return this.turnScore += this.totalScore
  alert("Your turn is over pass the mouse!");
  Player.switchUser(); // changes players
}

//UI Logic
$(document).ready(function(){
  $("#roll").click(function() {
    
  $("#hold").click(function() {
    
  })
  })
})