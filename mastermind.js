'use strict';
var newBoard = [];

function printBoard(){
	for (var i=0; i<9; i++){
		newBoard.push([' ', ' ', ' ', ' ']);
	}
    for (var i=0; i<9; i++){
		console.log(newBoard[i].join(' '));
	}
}

var numTry=0;

function insertPattern(pattern){
	var patternArr = pattern.split('');
	for (var i=0; i<4; i++){
	newBoard[numTry][i] = patternArr[i];
	}
}

var solution = 'abcd'

function checkSolution(pattern){
	if (result['pattern'] === solution){
		return true;
	}
		return false; 
}

var prompt = require('prompt');
prompt.start();

//
function game(){
	printBoard();
	prompt.get(['pattern'], function(error, result) {
		insertPattern(result['pattern']);
		numTry ++;
		game();
	}

		);
	}

game();
