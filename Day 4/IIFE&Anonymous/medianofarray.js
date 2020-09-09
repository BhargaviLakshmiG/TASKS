var a1=[1,2,3,4];
var a2=[5,6,7,8];

function median()
{
	let arr=a1.concat(a2)
	let n=arr.length;
	var med=(arr[n/2]+arr[n/2-1])/2
	return med;
}

//Anonymous
let m=function(){
	console.log("Median of arrays using Anonymous : "+median())
}
m();

//IIFE
(function(){
	console.log("Median of arrays using IIFE : "+median())
})();