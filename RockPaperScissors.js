'use strict';
var prompt = require('prompt');
prompt.start();
console.log('Lets get started');

function compareHands(hand1, hand2){
	if (hand1 === hand2){
		return "its a tie";
	}
	if (hand1 === 'rock'){
		if(hand2 === 'scissors'){
			return "player 1 wins";
		} 
		else{
			return "player 1 wins" 
		}
	}
	if (hand1 === 'paper'){
		if(hand2 === 'scissors'){
			return "player 2 wins";
		} 
		else{
			return "player 1 wins"
		}
	}
	if (hand1 === 'scissors'){
		if(hand2 === 'rock'){
			return "player 1 wins" ;
		} 
		else{
			return "player 2 wins";
		}
	}

}
function acceptableInput(hand){
	if (hand === 'rock' || hand === 'paper' || hand === 'scissors'){
		return true;
	}
	else{
		return false;
	}
}
prompt.get(['hand1', 'hand2'], function(error, result){
	var lowerHand1 = result['hand1'].toLowerCase();
	var lowerHand2 = result['hand2'].toLowerCase();
	if (acceptableInput(lowerHand1) && acceptableInput(lowerHand2)){
	console.log(compareHands(lowerHand1, lowerHand2);
	} else {
		console.log('only rock, paper, or scissors is acceptable');
	} 

});

