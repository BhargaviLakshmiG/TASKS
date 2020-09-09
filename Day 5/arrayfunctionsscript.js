//Rest countries API with array functions
console.log("Coming")
var req=new XMLHttpRequest();
var url_str="https://restcountries.eu/rest/v2/all"
req.open("GET",url_str,true);
req.send();
req.onload=function(){
	var data=JSON.parse(this.response);
console.log(data)

//Get  countries in asia
const asiaCountries=data.filter((data)=>{
	return (data.region==="Asia")
	})

console.log("Asian countries : ")
console.log(asiaCountries);


//Get the countries with population less than 2Lakhs
const popul=data.filter((data)=>{
	return (data.population<200000)
})
console.log("Countries with population less than 2Lakhs : ")
console.log(popul);

//Bumpup the current population  of all the counteirs by 1Lalkh
const bumpPopul=data.map((data)=>{
	return data.population+100000 ;
})
console.log("Population of all countries increased by 1lakh :")
console.log(bumpPopul)

//convert all the names in capital - map
const capNames=data.map((data)=>{
	return data.name.toUpperCase() ;
})
console.log("All country names in CAPITALS :")
console.log(capNames);


//print following  details  name , capital , flag
console.log("Details of Name ,Capital,Flag :")
const det=data.forEach((data)=>{
		console.log(data.name,data.capital,data.flag)
})

//Print the total population of the countries
const totalPopulation=data.reduce((currentPop,data)=>{
	return data.population+currentPop
},0)

console.log("Total Population : "+totalPopulation)


//Print the total population of the countries in asia - filter & reduce

const asianPopulation=data.filter((data)=>{
    return (data.region==="Asia")
}).reduce((current,asiaCountries)=>{
	return asiaCountries.population+current
},0)
console.log("Asian Population : "+asianPopulation)


}
