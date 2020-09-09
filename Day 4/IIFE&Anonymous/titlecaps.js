//Title caps

var caps=function(){
   console.log("Title Caps with Anonymous function : "+titleCaps());
 }
 caps();
 

//With IIFE

 (function(){
   console.log("TitleCaps with IIFE : "+titleCaps());
 })();


function titleCaps() { 
	 var str="hello welcome"
	  str = (str.toLowerCase()).split(' '); 
	  for (var i = 0; i < str.length; i++) { 
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);  
  } 
  return str.join(' '); 
} 

