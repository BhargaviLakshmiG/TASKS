

var cont=document.createElement("div");
cont.setAttribute("class","container");
var h=document.createElement("h2");
h.innerHTML="PERSON DETAILS FORM";
cont.append(h);

var f=document.createElement("form");
f.setAttribute("id","my_form");

var first_name=createEl("First Name","text","f_name");
var last_name=createEl("Last Name","text","l_name");
var add=createEl("Address","text","addr");
var pin=createEl("Pincode","number","pin_cd");

//Radio button for gender
var gendiv=document.createElement("div");
gendiv.setAttribute("class","form-group");
var g=document.createElement("label");
g.setAttribute("class","col-4")
g.innerHTML="Gender";
var genlbl_male=document.createElement("label");
genlbl_male.innerHTML="Male";
var ml=document.createElement("input");
ml.setAttribute("type","radio");
ml.setAttribute("name","genradio");
ml.setAttribute("value","Male");
var genlbl_fm=document.createElement("label");
genlbl_fm.innerHTML="Female"
var fm=document.createElement("input");
fm.setAttribute("type","radio")
fm.setAttribute("name","genradio");
fm.setAttribute("value","Female");
gendiv.append(g,ml,genlbl_male,fm,genlbl_fm);

//Select for choice of food
var fooddiv=document.createElement("div");
fooddiv.setAttribute("class","form-group");
var food_lbl=document.createElement("label");
food_lbl.setAttribute("class","col-4");
food_lbl.innerHTML="Choice of Food";
var sel=document.createElement("select");
sel.setAttribute("class","col-7")
sel.multiple=true;
sel.setAttribute("id","food_val");
var o1=new Option("Pizza","Pizza");
var o2=new Option("Pasta","Pasta");
var o3=new Option("Sphagetti","Sphagetti");
var o4=new Option("Milkshake", "Milkshake");
var o5=new Option("Icecream","Icecream");
sel.add(o1);
sel.add(o2);
sel.add(o3);
sel.add(o4);
sel.add(o5);
fooddiv.append(food_lbl,sel);


//Dropdown for State 
var statediv=document.createElement("div");
statediv.setAttribute("class","form-group");
var state_lbl=document.createElement("label");
state_lbl.setAttribute("class","col-4");
state_lbl.innerHTML="Select Country";
var st=document.createElement("select");
st.setAttribute("class","col-7")
st.setAttribute("id","st_val");
var o1=new Option("Andhra Pradesh","Andhra Pradesh");
var o2=new Option("Tamilnadu","Tamilnadu");
var o3=new Option("Telangana","Telangana");
var o4=new Option("Kerala", "Kerala");
var o5=new Option("Karnataka","Karnataka");
st.add(o1);
st.add(o2);
st.add(o3);
st.add(o4);
st.add(o5);
fooddiv.append(state_lbl,st);


//Dropdown for Country
var ctydiv=document.createElement("div");
ctydiv.setAttribute("class","form-group");
var cty_lbl=document.createElement("label");
cty_lbl.setAttribute("class","col-4");
cty_lbl.innerHTML="Select Country";
var cty=document.createElement("select");
cty.setAttribute("class","col-7")
cty.setAttribute("id","cty_val");
var o1=new Option("India","India");
var o2=new Option("Canada","Canada");
var o3=new Option("Newzealand","Newzealand");
var o4=new Option("Australia", "Australia");
var o5=new Option("USA","USA");
cty.add(o1);
cty.add(o2);
cty.add(o3);
cty.add(o4);
cty.add(o5);
ctydiv.append(cty_lbl,cty);


//Add Button
var butdiv=document.createElement("div");
var but=document.createElement("input");
but.setAttribute("type","button")
but.setAttribute("id","add_btn");
but.setAttribute("value","ADD");
but.setAttribute("onClick","addData()");
butdiv.append(but)



function createEl(labl,txt_typ,idval){
  var r=document.createElement("div");
  r.setAttribute("class","form-group");
  var lab=document.createElement("label");
  lab.setAttribute("class","col-4");
  lab.innerHTML=labl;
  var ip=document.createElement("input");
  ip.setAttribute("type","txt_typ");
  ip.setAttribute("id",idval);
  ip.setAttribute("class","col-7");
  r.append(lab,ip);
  return r;
 }
cont.append(first_name,last_name,add,pin,gendiv,fooddiv,statediv,ctydiv,butdiv);


//Add Table head

var table= document.createElement("table");
          table.setAttribute("id","t");
          table.setAttribute("border","1")

     var thr=document.createElement("tr");     
    var tabh1=document.createElement("th");
    var tabh2=document.createElement("th");
    var tabh3=document.createElement("th");
    var tabh4=document.createElement("th");
    var tabh5=document.createElement("th");
    var tabh6=document.createElement("th");
    var tabh7=document.createElement("th");
    var tabh8=document.createElement("th");

    tabh1.innerHTML="FirstName";
    tabh2.innerHTML="LastName";
    tabh3.innerHTML="Address";
    tabh4.innerHTML="PinCode";
    tabh5.innerHTML="Gender";
    tabh6.innerHTML="Food";
    tabh7.innerHTML="State";
    tabh8.innerHTML="Country";
   
    thr.append(tabh1,tabh2,tabh3,tabh4,tabh5,tabh6,tabh7,tabh8);
    table.append(thr);







document.body.append(cont)





//onbutton Click

function addData(){

    var selar=[];
    for ( var i = 0; i < sel.selectedOptions.length; i++) {
       selar.push(sel.selectedOptions[i].value);
     }
    
   

if(document.getElementById("f_name").value==""){
    alert("Please enter first name")
   }
else if(document.getElementById("l_name").value==""){
    alert("Please enter last name")
         }
else if(document.getElementById("addr").value==""){
    alert("Please enter address")
         }
 else if(document.getElementById("pin_cd").value==""){
     alert("Please enter pincode")
 }  
 else if(selar.length<2){
        alert("Please select atleast two food items");
         }  
else{ 
var row=table.insertRow(0);
var cell0=row.insertCell(0);
var cell1=row.insertCell(1);
var cell2=row.insertCell(2);
var cell3=row.insertCell(3);
var cell4=row.insertCell(4);
var cell5=row.insertCell(5);
var cell6=row.insertCell(6);
var cell7=row.insertCell(7);
cell0.innerHTML=document.getElementById("f_name").value;
cell1.innerHTML=document.getElementById("l_name").value;
cell2.innerHTML=document.getElementById("addr").value;
cell3.innerHTML=document.getElementById("pin_cd").value;

var gar=document.getElementsByName("genradio");
for(var i=0;i<gar.length;i++)
  {
   if(gar[i].checked==true)
    cell4.innerHTML=gar[i].value;
    console.log(gar[i].value)
  }
 
  cell5.innerHTML=selar.toString(); 
  cell6.innerHTML=document.getElementById("st_val").value;
  cell7.innerHTML=document.getElementById("cty_val").value;

row.append(cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7);       
table.appendChild(row);
document.body.appendChild(table);
console.log("Added row")
console.log(table)

// print.innerHTML=table;
cont.append(table)
}

}
