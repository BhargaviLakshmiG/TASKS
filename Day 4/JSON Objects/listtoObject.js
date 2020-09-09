//Parsing a list of lists and convert into a JSON object:



var array= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];


function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 for (var i = 0; i < array.length; i++) {
 	
 	
 		tranformEmployeeList[i] = {};
  	    for (var k = 0; k < array[i].length -1; k++) {
            var key = array[i][k];
             tranformEmployeeList[key] = array[i][k+1]
    
  }
 }
 console.log(tranformEmployeeList);
}


transformEmployeeData();
