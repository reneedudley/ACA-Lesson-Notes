'use strict';
var prompt = require('prompt');


function pigLatin(name) {
	var vowels = ['a','e','i','o','u'];
	if (vowels.indexOf(name[0]> -1)){
		return name + 'way';
		console.log('first name is a vowel')
	}
	else {
		if (vowels.indexOf(name[1]> -1)){
			return name.replace(name[0], '') + name[0] + 'ay';
		}
		else{
			return name.replace(name[0]+name[1],"") + name[0]+name[1]+ 'ay';
		}
	}
}
prompt.start();
prompt.get(['name'],function(error, result) {
	console.log(pigLatin(result.name));
});
// 

