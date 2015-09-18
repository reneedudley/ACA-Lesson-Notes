'use strict';
var prompt = require('prompt');
prompt.start();
console.log("Let's get started!");
prompt.get(['number'], function (error, result){
	var num = parseInt(result['number']);
});
