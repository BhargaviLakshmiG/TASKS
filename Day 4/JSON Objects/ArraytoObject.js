//Parsing a list of lists and convert into a JSON object:

var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
console.log("Array : ")
console.log(array)
function fromListToObject(arr) {
 var newObj={} ;
  for (var i = 0; i < array.length; i++) {
         for (var k = 0; k < array[i].length -1; k++) {
      var key = array[i][k];
      newObj[key] = array[i][k+1]
    }
  }
  console.log("Object :")
 console.log(newObj);
}

fromListToObject(array);