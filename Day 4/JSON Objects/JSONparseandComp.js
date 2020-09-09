//Parsing JSON Objects and Compare

var securityQuestions = [
 {
 question: "What was your first pet’s name?",
 expectedAnswer: "FlufferNutter"
 },
 {
 question: "What was the model year of your first car?",
 expectedAnswer: "1985"
 },
 {
 question: "What city were you born in?",
 expectedAnswer: "NYC"
 }
]

//Test data for true
var ques = "What was your first pet’s name?";
var ans  =  "FlufferNutter";


/*Test data for false
var ques = "What was your first pet’s name?";
var ans  =  "DufferNutter";
*/


var status = chksecurityQuestions(securityQuestions, ques, ans);


function chksecurityQuestions(securityQuestions,question,answer) {
    var f=false;
    for(var i=0;i<securityQuestions.length;i++)
    {
    	if(ques==securityQuestions[i].question)
    	{
    		if(securityQuestions[i].expectedAnswer==answer)
    			f=true;
    	}
    }
 return f; 
}

console.log(status)
