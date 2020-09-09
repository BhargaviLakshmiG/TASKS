//Convert all the strings to title caps in a string array
var str="welcome to arrow functions";
console.log("String is : "+str);
var res=(str)=>{
	  str = (str.toLowerCase()).split(' '); 
	  for (var i = 0; i < str.length; i++)
	   { 
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
}
console.log("String with title caps : "+str.join(' '));
}

res(str);
