//Sum of all numbers in an array

var ar=[3,5,1,9,5];
console.log("Array elements : "+ar);

var res=()=>{
var sum=0;
	for(var i=0;i<ar.length;i++)
	sum+=ar[i];
	return sum;
}
var s=res();
console.log("Sum of elements : "+s)