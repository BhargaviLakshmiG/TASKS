
var con=createSub("div","row");

 function createSub(d,cl){
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
           if (this.status>=200 && this.status<400) {
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
    var curar=[];
      
     for(var i in data){
        let str=" "
        var cap=createSub("div","col-sm-4");
        var capcard=createSub("div","card text-black bg-success mb-4");
        var capbody=createSub("div","card-body");
        var caphead=createSub("h4","card-title");
        caphead.innerHTML=data[i].name;
        var captxt=createSub("p");
        //captxt.setAttribute("id","capital")
              
       capbody.append(caphead,captxt);
       capcard.appendChild(capbody);
       cap.appendChild(capcard);
       con.appendChild(cap);
       let el_f=document.createElement("a");
       el_f.href=data[i].flag;
       el_f.innerHTML=data[i].flag;
       var curr=data[i].currencies[0].code+" "+data[i].currencies[0].name+" "+data[i].currencies[0].symbol;
        str="Capital: "+data[i].capital+"<br/>"+"Region: "+data[i].region+'<br/>'+"LatLng: "+data[i].latlng+'<br/>'+" Currency: "+curr+"<br/>"+"Flag: ";
        
        
       
       captxt.innerHTML=str;
       captxt.appendChild(el_f);
          }
          console.log(str)
    })
.catch(function(x) {
    //false
    console.log(x.statusText);
   });



































