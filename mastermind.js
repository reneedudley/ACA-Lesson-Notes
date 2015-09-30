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
printBoard();

