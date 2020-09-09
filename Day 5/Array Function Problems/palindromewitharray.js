//Return all the palindromes in an array 


var s=["malayalam","magic","dad","vini"]
console.log("String array : "+s)
var pal=(s)=>{
	          var str="";
  for(var i=0;i<s.length;i++)
  {
  if(s[i]==s[i].split("").reverse().join(""))
      str+=s[i]+" ";
  }
	console.log("Palindrome strings : "+str);
}

pal(s);