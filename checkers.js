//components- checkers are responsible for it's color, it's position, if he's king, 12 checkers total 
//game-responsible for starting, calling a winner, rules, ending, turn switching
//board- responsible for placing checkers, creating checkers, removing checkers, locating a specific checker

'use script';

var colors= require('colors/safe');
var prompt= require('prompt');
prompt.start();

//every class should have as few concerns as possible
function Checker(color,position){
	this.color= color;
	this.postion= position;
}
var grid= [];

function Board(){
	this.grid= [];
	this.createGrid= function(){
		for (var i=0; i<8; i++){
				this.grid.push([' ', ' ', ' ', ' ', ' ', ' ', ' ',' ']);
			}
   		}
	this.viewBoard= function(){
		for(var i=0;i<this.grid.length;i++){
			console.log(this.grid[i].join(' '));
		}
	}
	this.checkers= [];
	this.createCheckers= function(){
		var whitePosition= [
			[0,0],[0,1],[0,3],[0,5],
			[1,0],[1,2],[1,4],[1,6],
			[2,1],[2,3],[2,5],[2,7]]; 
		var redPosition=[
			[5,0],[5,2],[5,4],[5,6],
			[6,1],[6,3],[6,5],[6,7],
			[7,0],[7,2],[7,4],[7,6]];
		for (var i=0;i<12;i++){
			this.checkers.push(new Checker("white",whitePosition[i]));
			this.checkers.push(new Checker("red",redPosition[i]));
		}
		for (var i=0;i<12;i++){
			var whitechecker = new Checker("white",whitePosition[i]);
			this.checkers.push(whitechecker);
			var redcheckers = new Checker("white",redPosition[i]);
			this.checkers.push(redcheckers);
		}
	}
	this.placeCheckers= function(){
		for (var i=0; i<this.checkers.length;i++){
			var checker= this.checkers[i]
			var checkerPostion= checker.position //[0,1]
			this.grid [ [checkerPostion[0]] [checkerPostion[i] ]= checker.color
		}
	

var Board = new Board();
console.log(Board);
Board.createGrid();
Board.viewBoard();
Board.createCheckers();
console.log(Board);
Board.placeCheckers();
console.log(Board);


