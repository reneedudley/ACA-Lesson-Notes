'use strict';
var prompt = require('prompt');
prompt.start();
console.log('Lets get started');

prompt.get(['hand1', 'hand2'], function(error, result){
	if (result['hand1'] === result['hand2']){
		console.log("it's a tie");
	}
	if (result['hand1'] === 'rock'){
		if(result['hand 2'] === 'scissors'){
			console.log("player 1 wins");
		} 
		else{
			console.log("player 1 wins");
		}
	}
	if (result['hand1'] === 'paper'){
		if(result['hand 2'] === 'scissors'){
			console.log("player 2 wins");
		} 
		else{
			console.log("player 1 wins");
		}
	}
	if (result['hand1'] === 'rock'){
		if(result['hand 2'] === 'scissors'){
			console.log("player 1 wins");
		} 
		else{
			console.log("player 2 wins");
		}
	}
});