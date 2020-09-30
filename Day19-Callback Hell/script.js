
var counter=document.createElement("div");
counter.setAttribute("id","countdown");

document.body.append(counter);


var timeleft=10;
var timer=setTimeout(function(){
 counter.innerHTML=timeleft ;
   timer=setTimeout(function(){
    counter.innerHTML= --timeleft ;
       timer=setTimeout(function(){
        counter.innerHTML= --timeleft ;  
          timer=setTimeout(function(){
            counter.innerHTML= --timeleft ; 
             timer=setTimeout(function(){
               counter.innerHTML= --timeleft ; 
                 timer=setTimeout(function(){
                   counter.innerHTML= --timeleft ;  
                     timer=setTimeout(function(){
                      counter.innerHTML= --timeleft ;  
                       timer=setTimeout(function(){
                        counter.innerHTML= --timeleft ;  
                         timer=setTimeout(function(){
                           counter.innerHTML= --timeleft ;  
                             timer=setTimeout(function(){
                               counter.innerHTML= --timeleft ;  
                                timer=setTimeout(function(){
                                  counter.innerHTML="HAPPY INDEPENDENCE DAY!!" ;  
                                },500) ;                                                             
                             },1000);
                        },1000);
                    },1000);
                 },1000);
               },1000);
            },1000);
        },1000);
    },1000);
  },1000);
},1000);

 