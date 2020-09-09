//Finding odds in an array

var a=[1,2,3,4,5];
console.log("Array is : "+a)
//Anonymous func
var odd=function(a){
	console.log("Odds using Anonymous function : ")
for(var i=0;i<a.length;i++)
 if(a[i]%2==1)
 console.log(a[i])
 }
 odd(a);


//With IIFE

 (function(){
 	console.log("Odds using IIFE : ")
for(var i=0;i<a.length;i++)
 if(a[i]%2==1)
 console.log(a[i])
 })();




