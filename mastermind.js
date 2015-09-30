var board = [
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ']
];

var newBoard = [];

function printBoard(){
	for (i=0; i<9; i++){
		newBoard.push([' ', ' ', ' ', ' ']);
	}
	console.log(newBoard);
}
printBoard();
