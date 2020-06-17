//Business Logic
function Player (player1, player2, game){
  this.players = [player1, player2];
  this.game = game;
}

function Game (turnScore, total, gameWins, gameLoses) {
  this.turnScore = 0;
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
  let newRoll = Math.floor(Math.random() * 6) + 1;
  if (newRoll !== 1) {
    this.turnScore += newRoll;
  } else {
    alert("You rolled a 1! Your score for this round is 0, and your turn is over!");
    Player.switchUser();
     // changes players
  }
}

Dice.prototype.hold = function() {
  return this.turnScore += this.totalScore
  alert("Your turn is over pass the mouse!");
  Player.switchUser(); // changes players
}


// function P1 (p1Total, p1Wins, p1Loses){
//     this.p1Total = 0;
//     this.p1Wins = 0;
//     this.p1Loses = 0;
// }
  
// function P2 (p2Total, p2Wins, p2Loses){
//     this.p2Total = 0;
//     this.p2Wins = 0;
//     this.p2Loses = 0;
// }
  
// function Dice (hold, score){
//     this.hold = hold;
// }

//UI Logic