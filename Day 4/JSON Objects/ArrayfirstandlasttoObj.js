
//Parsing a list and transform the first and last elements of it:

var arr = ["GUVI", "I", "am", "Geek"];
function transformFirstAndLast(arr) {
 var newObject={};
 var key=arr[0]
 newObject[key]=arr[arr.length-1]
  console.log(newObject);
}

transformFirstAndLast(arr);