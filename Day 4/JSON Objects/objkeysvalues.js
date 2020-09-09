//Getting keyts,values from object and convert to list

var obj = {name :"RajiniKanth", age : 33, hasPets : false};
function printAllKeys(obj) {
console.log("Object Keys : ")
  console.log("Keys : "+Object.keys(obj));
} 
printAllKeys(obj);



function printAllValues(obj) {
console.log("Object values " )
  console.log("Values : "+Object.values(obj));
} 
printAllValues(obj);


function convertObjecttoList(obj) {
	console.log("Object to List")
  console.log(Object.entries(obj));
} 
convertObjecttoList(obj);
