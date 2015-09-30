'use strict';
var newBoard = [];
var colors = require('colors/safe');
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
	var message = computeMessag(patternArr);
	for (var i=0; i<4; i++){
	newBoard[numTry][i] = patternArr[i];
	}
	newBoard.push(message);
}

var solution = 'abcd'

function checkSolution(pattern){
	if (pattern === solution){
		return true;
	}
		return false; 
}

function computeMessag(pattern){
	var splitPattern = pattern.split('');
	var splitSolution = solution.split('');
	var lettersSpacesCorrect = 0;
	var lettersCorrect = 0;
	if (splitPattern[0] === splitSolution[0]) {
    lettersSpacesCorrect += 1;
	}
	if (splitPattern[1] === splitSolution[1]) {
	    lettersSpacesCorrect += 1;
	}
	if (splitPattern[2] === splitSolution[2]) {
	    lettersSpacesCorrect += 1;
	}
	if (splitPattern[3] === splitSolution[3]) {
	    lettersSpacesCorrect += 1;
	}
	if (splitSolution.indexOf(splitPattern[0]) > -1) {
    lettersCorrect += 1;
	}
	
	if (splitSolution.indexOf(splitPattern[1]) > -1) {
	    lettersCorrect += 1;
	}
	if (splitSolution.indexOf(splitPattern[2]) > -1) {
	    lettersCorrect += 1;
	}
	if (splitSolution.indexOf(splitPattern[3]) > -1) {
	    lettersCorrect += 1;
	}
	var lettersCorrect = lettersSpacesCorrect - lettersCorrect;
	return colors.red(lettersSpaceCorrect) + ' - ' + lettersCorrect;
}

var prompt = require('prompt');
prompt.start();

//
function game(){
	printBoard();
	prompt.get(['pattern'], function(error, result) {
		insertPattern(result['pattern']);
		if (checkSolution(result['pattern'])) {
			console.log(result['pattern'] + ' is the solution!');
			return; }
		else {numTry ++;
		game();} 
	}

		);
	}

game();
