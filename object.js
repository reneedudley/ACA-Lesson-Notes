
// class, capatalize classes
function Human(name){
	this.name= name;
	this.planataryorigin="earth";
	this.explainyourself=function(){
		console.log("I'm a human");
	}

}
// objects > substantiate classes
var humanOne = new Human();
var Kevin = new Human("kevin");
var humanArr=[];

// instance
console.log(humanOne.planataryorigin);
console.log(humanOne.explainyourself());

var humanTwo= new Human();
console.log(kevin.name);
for (var i=0;i<100:i++){
	hummanArr.push(new Human(i));
}