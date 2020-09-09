//Print odd numbers in an array

var ar=[1,2,3,57,8,12,9];
console.log("Given array : "+ar)
var a=[];
var res=(ar)=>{
	for(var i=0;i<ar.length;i++)
	if(ar[i]%2==1)
	a.push(ar[i])
  return a;
}

console.log("Odd numbers : "+res(ar));