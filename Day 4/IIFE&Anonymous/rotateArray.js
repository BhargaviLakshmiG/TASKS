//Rotate an array left by 2 times

let k=2;

function rotateLeft(){
	var arr=[1,2,3,4,5]
  for(var i=1;i<=2;i++)
	arr.push(arr.shift());
 return arr;
 }


//Anonymous
var rotLeft= function (){
	console.log("Rotate array left 2 times with Anonymous function: "+rotateLeft())
}
rotLeft();

//IIFE
(function (){
	console.log("Rotate array left 2 times with IIFE : "+rotateLeft())
})();