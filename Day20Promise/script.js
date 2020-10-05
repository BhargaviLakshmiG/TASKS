
var con=createDiv("div","row");

 function createDiv(d,cl){
   var sub=document.createElement(d);
   sub.setAttribute("class",cl);
   return sub;
 }

document.body.append(con);


var prom = new Promise(function (resolve, reject) {
 var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.eu/rest/v2/all", true);
    xhr.send();
    xhr.onload = function() {
        console.log(xhr);
        var data=JSON.parse(this.response);
           if (this.status==200) {
                //console.log(data)
                resolve(data);
            }
            else {
                reject(xhr);
            }
        }
 });


prom.then(function(data) {
    // success
    console.log("success");
        for(var i in data){
        var str="";
       var card=createDiv("div"," col-lg-4 col-sm-12");
       var capcard=createDiv("div","card text-black bg-success mb-4");
       var cardbody=createDiv("div","card-body");
       var cardhead=createDiv("h4","card-title");
       var cardimg=createDiv("img","class-img-top");
       cardimg.setAttribute("src",data[i].flag);
       cardhead.innerHTML=data[i].name;
       var cardtxt=createDiv("p");
       var curr_info=data[i].currencies[0].code+" "+data[i].currencies[0].name+" "+data[i].currencies[0].symbol;
       str=`Capital: ${data[i].capital}<br/>Region: ${data[i].region}<br/>LatLng: ${data[i].latlng}<br/> Currency: ${curr_info}<br/>` ;
      cardtxt.innerHTML=str;
         
     
      cardbody.append(cardhead,cardimg,cardtxt);
      capcard.appendChild(cardbody);
      card.appendChild(capcard);
      con.appendChild(card);
     
        
      }  

          console.log(str)
    })
.catch(function(x) {
    //false
    console.log(x);
   });



































