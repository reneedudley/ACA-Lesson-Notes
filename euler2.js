'use strict';
	var a = 0;
	var b= 1; 
	var c=1;

var numbers = [];
for (var i=2; i<2000; i+=2){
		c= a+b;
		a=b;
		b=c;
	if (c%2===0 && c<4000000){
		numbers.push(c);
	}
}

var sum =0;
for (var j=0;j<numbers.length;j++){
	sum = sum + numbers[j];
}
console.log(sum);


