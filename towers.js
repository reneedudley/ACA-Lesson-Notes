'use strict';
var prompt = require('prompt');
prompt.start();
var stacks = {
	A: [4,3,2,1],
	B: [],
	C: [],
}

function CompareBlock (startStack,endStack){
	var fromStackLastIndex = stacks[startStack].length - 1;
	var currentBlock = stacks[startStack][fromStackLastIndex];
	var toStackLastIndex = stacks[endStack].length - 1;
	var compareBlock = stacks[endStack][toStackLastIndex];
	return (currentBlock < compareBlock || !compareBlock) ? true : false;
}

function MoveBlock (startStack, endStack){
	var block = stacks[startStack].pop();
	stacks[endStack].push(block);
}


function checkForWin () {
 	return (stacks['B'].length === 4 || stacks['C'].length === 4) ? true :false;
 } 

function Towers(){
	console.log(stacks);
	prompt.get(['startStack','endStack'],function(error, result) {
		if (CompareBlock(result['startStack'],result['endStack'])){
			MoveBlock(result['startStack'],result['endStack']);
		}
		if (!checkForWin()){
			Towers();
		}
		else{
			console.log("you won!");
			return false;
		}
		
});
}
Towers();