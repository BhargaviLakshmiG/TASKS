//Primes in an array

var a=[9,2,3,4,5];
console.log("Array : "+a)

//Anonymous func
var prime=function(a){
   console.log("Primes with Anonymous function : "+callPrime());
 }
 prime(a);


//With IIFE

 (function(){
   console.log("Primes with IIFE : "+callPrime());
 })();



function callPrime(){
	var s="";
for(var i=0;i<a.length;i++)
{
	var c=0;
	 for(var j=1;j<=a[i];j++)
 if(a[i]%j==0)
    c++;
    if(c==2)
     s+=a[i]+" "
 }
return s
}