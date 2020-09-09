//Remove duplicates from array

var a=[5,7,2,2,3,5,2,3];
console.log("Actual array : "+a)

function remDup()
{
	var newar=[];
	for(var i=0;i<a.length;i++)
	{
	if(newar.indexOf(a[i])==-1)
	newar.push(a[i])
	}
	return newar;
}


//Anonymous
var remDuplicates=function(){
	console.log("Removing duplicates in an array with Anonymous : "+remDup())
}
remDuplicates();


//IIFE
(function(){
	console.log("Removing duplicates in an array with Anonymous : "+remDup());
	})();