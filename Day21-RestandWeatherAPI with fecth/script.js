var container=document.createElement("div");
container.setAttribute("class","container");

var con=createDiv("div","row");



function createDiv(d,cl){
    var sub=document.createElement(d);
    sub.setAttribute("class",cl);
    return sub;
  }
 
  
async function fetchData(){
 var server_data=await fetch("https://restcountries.eu/rest/v2/all");
  //   console.log(server_data);
     return await server_data.json();
  
}

fetchData().then(function(data) {
 // success
 console.log("success with restapi");
 //console.log(data)
  for(var i in data){
      var str="";
     var cap=createDiv("div"," col-lg-4 col-sm-12");
     var capcard=createDiv("div","card text-black bg-success mb-4");
     var capbody=createDiv("div","card-body");
     var caphead=createDiv("h4","card-title");
     var cardimg=createDiv("img","class-img-top");
     cardimg.setAttribute("src",data[i].flag);
     caphead.innerHTML=data[i].name;
     var cardtxt=createDiv("p");
     var wea_p = document.createElement("p");
     wea_p.setAttribute("id","wea_det"+data[i].name);
     wea_p.value="";
       
    let weat_btn=document.createElement("button");
    weat_btn.setAttribute("class","btn btn-primary");
    weat_btn.innerText="Click for Weather";
    weat_btn.setAttribute("id","myBtn");
    weat_btn.setAttribute('onclick','getWeather("'+data[i].name+'")');
    capbody.append(caphead,cardimg,cardtxt,wea_p,weat_btn);
    capcard.appendChild(capbody);
    cap.appendChild(capcard);
    con.appendChild(cap);
    str="Capital: "+data[i].capital+"<br/>"+"Region: "+data[i].region+'<br/>'+"Country Code: "+data[i].alpha3Code;
    cardtxt.innerHTML=str;
      
    }  

 })


.catch(function(error) {
 //failure
 console.log(error);
});



function getWeather(name){
    console.log("Getting weather for "+name);
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ name +"&APPID=cf8aa0b1474d506375c37d9e4a3eef90")
   .then( function(response){
       return response.json();
   })
   .then(function(res){
      var wea_info = document.getElementById('wea_det'+name);
      console.log(wea_info)
      //If city info is found ,cod status=200
      if(res.cod==200){
             var temp=(res.list[0] .main.temp-272).toFixed(0)+" C"; //changing temp from kelvin to C
             console.log("Temp of "+name +temp);
             var wthr=res.list[0].weather[0].description;
             console.log("Wetaher : "+wthr);
             wea_info.innerHTML="Temperature: "+temp+"<br/> Weather: "+wthr;
                      }
       else  //If city is not found in weather API ,cod 404
         wea_info.innerHTML="Weather :Info not found";
      
   })
 
 }

  


container.appendChild(con);
document.body.append(container);