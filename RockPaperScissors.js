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
prompt.get(['hand1', 'hand2'], function(error, result){
	console.log(compareHands(result['hand1'], result['hand2']));
});

