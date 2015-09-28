'use strict';
var prompt = require('prompt');
prompt.start();
var stacks = {
	A: [4,3,2,1],
	B: [],
	C: [],
}

function CompareBlock (){
	var fromStackLastIndex = stacks[startStack].length - 1;
	var currentBlock = stacks[startStack][fromStackLastIndex];
	var toStackLastIndex = stacks[endStack].length - 1;
	var compareBlock = stacks[endStack][toStakLastIndex];
	return (currentBlock < compareBlock || !compareBlock) ? true : false;
}

function MoveBlock (startStack, endStack){
	var block = stacks[startStack].pop();
	stacks[endStack].push(block);
}


function checkForWin () {
 	return (stacks[B] === [4,3,2,1] || stacks[C] === [4,3,2,1]) ? true :false;
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
		
});
}
Towers();