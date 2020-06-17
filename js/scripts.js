//Business Logic
// function Player (player1, player2){
//   this.player1 = player1;
//   this.player2 = player2;
// }

// function Game (roll, score, total) {
//   this.roll = 0;
//   this.score = 0;
//   this.total = 0;
// }

function P1 (p1Total, p1Wins, p1Loses){
    this.p1Total = 0;
    this.p1Wins = 0;
    this.p1Loses = 0;
}
  
function P2 (p2Total, p2Wins, p2Loses){
    this.p2Total = 0;
    this.p2Wins = 0;
    this.p2Loses = 0;
}
  
function Dice (roll, hold, score){
    this.roll = roll;
    this.hold = hold;
    this.score = 0;
}

Dice.prototype.roll = function() {
  let newRoll = Math.floor(Math.random() * 6) + 1;
  if (newRoll === 1) {
    this.score = 0;
    alert("You rolled a 1! Your score for this round is 0, and your turn is over!");
  } else {
    this.score += newRoll;
  }
}

//UI Logic