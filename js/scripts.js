//Business Logic -----

// Backend logic for Game
function Player (player1, player2, game){
  this.player1 = player1;
  this.player2 = player2;
  this.game = game;
  this.currentPlayer = "player1";
}

function Game () {
  this.turnScore = 0;
  this.totalScore = 0;
  this.gameWins = 0; // add functionality
  this.gameLoses = 0; // add functionality 
}

// Switch player turn function (needs work)
function SwitchUser () {
  this.turnScore = 0; // clear turn points when players switch
  if (this.currentPlayer === "player2") { // checks to see if current player is at index 0 (player1)
    this.currentPlayer = "player1"; // makes player2 current player
    $(".card-body1").show();
    $(".card-body2").hide();
    } else {
      this.currentPlayer = "player2"; // makes player 1 current player
      $(".card-body2").show();
      $(".card-body1").hide();
  }
}

// Roll button method, outputs a random number
Game.prototype.roll = function() {
  let dice = document.getElementsByClassName("dice");
  let diceStatus = document.getElementById("dice-status");
  let newRoll = Math.floor((Math.random() * 6) + 1);
  dice.innerHTML = newRoll;
  diceStatus.innerHTML = newRoll;
  if (newRoll != 1) {
    this.turnScore += newRoll; // pushes new roll into turnScore
    if (this.totalScore + this.turnScore >= 100) {
      alert("You won!");
    }
  } else { // If user rolls one you will get this alert
    alert("You rolled a 1! Your score for this round is 0, and your turn is over!");
    SwitchUser();
  }
  return this.totalScore;
}

Game.prototype.hold = function() {
  this.totalScore += this.turnScore; // add turnScore to players totalScore
  this.turnScore = 0
  SwitchUser(); // changes players
  alert("Your turn is over pass the mouse!");
  console.log("your total score:" + this.totalScore);
}

//UI Logic
$(document).ready(function(){
  let playerOne = new Game("player1");
  let playerTwo = new Game("player2");
  $("#roll-player-one").click(function() {
    playerOne.roll();
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
});    