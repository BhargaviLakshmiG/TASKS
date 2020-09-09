//Palindromes in array

var str=["Hai","madam","mam","here"]
console.log("String array : "+str)
//Anonymous function
var pal=function(str){
console.log("Palindromes with anonymous function : "+callPalin());
 }
 pal(str);


//With IIFE

(function(){
	  console.log("Palindromes with IFFI : "+callPalin());
 })();
 


function callPalin()
{
	let s="";
	for(var i=0;i<str.length;i++)
	if(str[i]==str[i].split("").reverse().join(""))
	s+=str[i]+" "
   return s;
}

