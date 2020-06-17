//Business Logic
function Player (player1, player2, game){
  this.player1 = player1;
  this.player2 = player2;
  this.game = game;
  this.currentPlayer = "player1";
}

function Game (turnScore, totalScore, gameWins, gameLoses) {
  this.turnScore = 0;
  this.totalScore = 0;
  this.gameWins = 0;
  this.gameLoses = 0;
}

function SwitchUser () {
  this.turnScore = 0; // clear turn points when players switch
  if (this.currentPlayer === "player1") { // checks to see if current player is at index 0 (player1)
    this.currentPlayer = "player2"; // makes player2 current player
  } else {
    this.currentPlayer = "player1"; // makes player 1 current player
  }
}

Game.prototype.roll = function() {
  let newRoll = Math.floor((Math.random() * 6) + 1);
  console.log("your roll:" + newRoll);
  if (newRoll === 1) {
    this.turnScore = 0;
    alert("You rolled a 1! Your score for this round is 0, and your turn is over!");
    // SwitchUser(); // changes players
  } else if (newRoll != 1) {
    this.turnScore += newRoll;
  } else {
    this.totalScore += newRoll >= 100;
    alert("You won!");
    
  }
  return this.totalScore;
}

Game.prototype.hold = function() {
  this.totalScore += this.turnScore;
  alert("Your turn is over pass the mouse!");
  this.turnScore = 0;
  // SwitchUser(); // changes players
  console.log("your total score:" + this.totalScore);
}

//UI Logic
$(document).ready(function(){
  let playerOne = new Game("player1");
  let playerTwo = new Game("player2");
  $("#roll-player-one").click(function() {
    playerOne.roll();
    // SwitchUser();
    $(".p1-score").text(" " + playerOne.turnScore); 
  })
    $("#hold-player-one").click(function() {
      playerOne.hold();
      $(".p1-total").text(" " + playerOne.totalScore);
  })

  $("#roll-player-two").click(function() {
    playerTwo.roll();
    $(".p2-score").text(" " + playerTwo.turnScore);
  })
  $("#hold-player-two").click(function() {
    playerTwo.hold();
    $(".p2-total").text(" " + playerTwo.totalScore);
    
  })
})    