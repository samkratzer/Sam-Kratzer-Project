/*
	Creator: Sam Kratzer
	Date created: 6/18/2019
	Date last modified: 6/18/2019
*/

var button = document.getElementById("button");
var input = document.getElementById("input");

var startingBid = document.getElementById("starting-bid");
var totalRolls = document.getElementById("total-rolls");
var highestWinnings = document.getElementById("highest-winnings");
var highestWinningsRound = document.getElementById("highest-winnings-round");
var results = document.getElementById("results");

var bank;
var initial;
var currentRound=0;
var mostWon=0;
var roundAtHighestWinnings=0;
var fundsAvailable=true;

button.addEventListener("click", play); //listens for button click
input.addEventListener("keydown", function(e){ //listens for enter key
    if (e.keyCode===13) { 
    	clear();
        play();
    }
});

function play(){
	clear();

	bank=parseFloat(input.value) || 0;
	initial=bank;

	if(bank<1){
		alert("Please enter a valid starting bid.");
	}

	else if(bank>75000000){
		alert("You're going to be waiting a long time... try again");
	}

	else{
		while(fundsAvailable==true){
			bank = playRound(bank);
			checkHighest();
			fundsAvailable=checkFunds(bank);
		}

		alert(currentRound+". Play again.");
		display();
	}
}

function playRound(bank){ //plays a round of the game
	currentRound++;
	var value=rollDice(2,6);

	if(value==7) return bank+4;
	else return bank-1;
}

function rollDice(numDice, numSides){ //rolls two six-sided dice
	var total=0
	for (i=0; i<numDice; i++) total+=(Math.floor(Math.random()*numSides)+1);
	return total;
}

function checkFunds(a){ //checks if the game can continue
	if(a<1) return false;
	else return true;
}

function checkHighest(){ //updates the record for highest winnings and round when reached
	if(bank > mostWon) {
		mostWon=bank;
		roundAtHighestWinnings=currentRound;
	}
}

function display() {
	startingBid.innerHTML = initial;
	totalRolls.innerHTML = currentRound;
	highestWinnings.innerHTML = mostWon;
	highestWinningsRound.innerHTML = roundAtHighestWinnings;
}

function clear() {
	startingBid.innerHTML = null;
	totalRolls.innerHTML = null;
	highestWinnings.innerHTML = null;
	highestWinningsRound.innerHTML = null;

	bank=0;
	initial=0;
	currentRound=0;
	mostWon=0;
	roundAtHighestWinnings=0;
	fundsAvailable=true;
}