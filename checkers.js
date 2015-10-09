//components- checkers are responsible for it's color, it's position, if he's king 
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
	this.grid= function print(){
			for (var i=0; i<9; i++){
				grid.push([' ', ' ', ' ', ' ', ' ', ' ', ' ',' ']);
			}
    		for (var i=0; i<9; i++){
				console.log(newBoard[i].join(' '));
			};}
	this.checkers= [];
	this.createCheckers= function(){
		var whitePosition= [[0,1],[0,3],[0,5],[0,7]...]; //finish the damn board
		var redPosition=[[5,0],[5,2]...];
		for (var=i;i<12;i++){
			this.checkers.push(new Checker("white",whitePosition[i]));
			this.checkers.push(new Checker("red",redPosition[i]));
		}
	}

}