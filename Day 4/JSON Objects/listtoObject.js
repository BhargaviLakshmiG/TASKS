//Parsing a list of lists and convert into a JSON object:



var array= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];

function transformEmployeeData(arr) {
 var tranformEmployeeList = [];

 for (var i = 0; i < array.length; i++) 
 {
 	tranformEmployeeList[i] = {};
 	for(var j=0;j<array[i].length;j++)
 	 {
 	 	k=0;
 	 	var key=array[i][j][k];
 	 	tranformEmployeeList[i][key]=array[i][j][k+1]
  }
    
}
 
  return tranformEmployeeList;
}


console.log("Object array is : ");
console.log(transformEmployeeData())
