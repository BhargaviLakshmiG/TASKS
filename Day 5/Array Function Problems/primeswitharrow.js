//Return all the prime numbers in an array

var ar=[32,43,41,5,8]
console.log("Array elements : "+ar);

var prime=()=>{
var s="";
	for(var i=0;i<ar.length;i++)
	{
	     c=0;
	    for(var j=0;j<=ar[i];j++)
	          if(ar[i]%j===0)
	              c++;
	 if(c==2)
	  s+=ar[i]+" ";
	}
	console.log("Primes in array : "+s)
}

prime();