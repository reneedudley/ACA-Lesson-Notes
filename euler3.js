'use strict';


var a= 600851475143;
var c=1;


for (var i=2; i< Math.sqrt(600851475143) ;i++){
		if (a%i===0){
			 a = a/i;
			 c= i;
		}
};
console.log(c);

