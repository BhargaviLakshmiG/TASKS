
//Sum of array elements

var a=[3,4,2,1,4]
console.log("Array : "+a)
//Anonymous
 var sum=function(){
   
  console.log("Sum of elements with anonymous function: " +callSum());
 }
sum();

//IIFE
(function(){
  console.log("Sum of elements with IIFE: " +callSum());
})();

 function callSum(){
	let s=0;
 for(var i=0;i<a.length;i++)
  s+=a[i];
  return s;
}