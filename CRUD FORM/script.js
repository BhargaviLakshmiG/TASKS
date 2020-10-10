var countryStateInfo = {
    "India": {
        "AndhraPradesh":["Vijayawada","Vizag","Tirupati"],
        "TamilNadu":["Chennai","Coimbatore","Madurai"],
         "Maharashtra":["Mumbai","Pune","Nagpur"]
	},
	"USA": {
        "NewJersey": ["Jersey City","Newark","Trenton"],
		"California": ["Los Angeles","San Diego","Sacremento"],
		"Texas":["Houston","Dallas","Austin"]
	      },
	"Australia": {
        "Victoria":["Melbourne","Victoria","Geelong"],
        "Queensland":["Brisbane","Cairns","GoldCoast"],
         "Tasmania":["Hobart","Burnie","Devonport"]
	}
}


var cont=document.createElement("div");
cont.setAttribute("class","container");
var h=document.createElement("h2");
h.innerHTML="DETAILS FORM";
cont.append(h);

document.body.append(cont);


var f=document.createElement("form");
f.setAttribute("id","my_form");

var user_name=createEl("User Name","text","name");
var email=createEl("E-mail","email","email");
var password=createEl("Password","password","password");
var password_1=createEl("Re-enter Password","password","password1");

//Radio button for gender
var gendiv=document.createElement("div");
gendiv.setAttribute("class","form-group");
var g=document.createElement("label");
g.setAttribute("class","col-4 mb-2")
g.innerHTML="Gender";
var genlbl_male=document.createElement("label");
genlbl_male.innerHTML="Male&nbsp;";
var ml=document.createElement("input");
ml.setAttribute("type","radio");
ml.setAttribute("name","gender");
ml.setAttribute("value","Male");
ml.setAttribute("id","male");
var genlbl_fm=document.createElement("label");
genlbl_fm.innerHTML="Female"
var fm=document.createElement("input");
fm.setAttribute("type","radio")
fm.setAttribute("name","gender");
fm.setAttribute("value","Female");
fm.setAttribute("id","female")
gendiv.append(g,ml,genlbl_male,fm,genlbl_fm);

//Marital Status

var marital_status=document.createElement("div");
marital_status.setAttribute("class","form-group");
var label_mar_sta=document.createElement("label");
label_mar_sta.setAttribute("class","col-4 mb-2")
label_mar_sta.innerHTML="Marital Status";
var label_single=document.createElement("label");
label_single.innerHTML="Single&nbsp;";
var single=document.createElement("input");
single.setAttribute("type","radio");
single.setAttribute("name","marstatus");
single.setAttribute("value","Single");
single.setAttribute("id","single")
var label_married=document.createElement("label");
label_married.innerHTML="Married"
var married=document.createElement("input");
married.setAttribute("type","radio")
married.setAttribute("name","marstatus");
married.setAttribute("value","Married");
married.setAttribute("id","married")
marital_status.append(label_mar_sta,single,label_single,married,label_married,);


//Adding address line1 and 2 ,food and color
var add_1=createEl("Address Line1","text","address1");
var add_2=createEl("Address Line2","text","address2");
var food=createEl("Favorite Food","text","food");
var color=createEl("Favorite Color","text","color");




//Dropdown for Country
var ctydiv=document.createElement("div");
ctydiv.setAttribute("class","form-group");
var cty_lbl=document.createElement("label");
cty_lbl.setAttribute("class","col-4");
cty_lbl.innerHTML="Country";
var cty=document.createElement("select");
cty.setAttribute("class","col-7");
cty.setAttribute("id","countrySel");
cty.size=1;
var o1=new Option("Select Country","select");
o1.selected=true;
cty.add(o1);
ctydiv.append(cty_lbl,cty);



var state_lbl=document.createElement("label");
state_lbl.setAttribute("class","col-4");
state_lbl.innerHTML="State";
var state=document.createElement("select");
state.setAttribute("class","col-7")
state.setAttribute("id","stateSel");
var opt=new Option("Select State"," ");
opt.setAttribute("value"," ");
state.add(opt);
ctydiv.append(state_lbl,state);

var city_lbl=document.createElement("label");
city_lbl.setAttribute("class","col-4");
city_lbl.innerHTML="City";
var city=document.createElement("select");
city.setAttribute("class","col-7")
city.setAttribute("id","citySel");
var optcity=new Option("Select City"," ");
city.add(optcity);
ctydiv.append(city_lbl,city);





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
 // r.setAttribute("class","form-group");
  var lab=document.createElement("label");
  lab.setAttribute("class","col-4");
  lab.innerHTML=labl;
  var ip=document.createElement("input");
  ip.setAttribute("type",txt_typ);
  ip.setAttribute("id",idval);
  ip.setAttribute("class","col-7");
  r.append(lab,ip);
  return r;
 }
cont.append(user_name,email,password,password_1,gendiv,marital_status,add_1,add_2,food,color,ctydiv,butdiv);
var table= document.createElement("table");
table.setAttribute("id","user-table");


//Add Table head
function createTabHead(){
   table.setAttribute("id","t");
   table.setAttribute("border","1");
    table.setAttribute("id","user-table");

     var thr=document.createElement("tr");     
    var tabh1=document.createElement("th");
    var tabh2=document.createElement("th");
    var tabh3=document.createElement("th");
    var tabh4=document.createElement("th");
    var tabh5=document.createElement("th");
    var tabh6=document.createElement("th");
    var tabh7=document.createElement("th");
    var tabh8=document.createElement("th");
    var tabh9=document.createElement("th");
    var tabh10=document.createElement("th");
    var tabh11=document.createElement("th");
    var tabh12=document.createElement("th");
    var tabh13=document.createElement("th");

    tabh1.innerHTML="Name";
    tabh2.innerHTML="Email";
    tabh3.innerHTML="Gender";
    tabh4.innerHTML="Status";
    tabh5.innerHTML="Add1";
    tabh6.innerHTML="Add2";
    tabh7.innerHTML="Food";
    tabh8.innerHTML="Color";
    tabh9.innerHTML="Country";
    tabh10.innerHTML="State";
    tabh11.innerHTML="City"
    tabh12.innerHTML="EDIT";
    tabh13.innerHTML="DELETE"
   
    thr.append(tabh1,tabh2,tabh3,tabh4,tabh5,tabh6,tabh7,tabh8,tabh9,tabh10,tabh11,tabh12,tabh13);
    table.append(thr);
    
}
document.body.appendChild(table);


  var countrySel = document.getElementById("countrySel");
  var stateSel = document.getElementById("stateSel");
  var citySel = document.getElementById("citySel");
  
  //Loading countries
  for (var country in countryStateInfo) {
    countrySel.options[countrySel.options.length] = new Option(country, country);
  }

  //Lading states when country changed
  countrySel.onchange = function() {
    stateSel.length = 1; 
    citySel.length = 1; 
    
    if (this.selectedIndex < 1)
      return;
    for (var state in countryStateInfo[this.value]) {
      stateSel.options[stateSel.options.length] = new Option(state, state);
    }
  }

  //Loading cities when state changed
  stateSel.onchange = function() {
    citySel.length = 1; 
    if (this.selectedIndex < 1)
      return; 

      var cities = countryStateInfo[countrySel.value][this.value];  
      console.log(cities)

    for (var i in cities) {
      citySel.options[citySel.options.length] = new Option(cities[i], cities[i]);
    }
  }




    console.log("Getting User Info");

    var userDataList = [];
    var isEdit = false;
    var selectedRow = null;
    async function getUsers() {
          var userRequest = await fetch(
        "https://5f7b03d440abc60016472aff.mockapi.io/users"
      );
      var userData = await userRequest.json();
      userDataList = userData;
        populateData(userData);
    }
    
    function populateData(userData) {
      document.getElementById("user-table").innerHTML = "";
      createTabHead();
        userData.forEach((element) => {
        var tr = document.createElement("tr");
        var tdName = document.createElement("td");
        tdName.innerHTML = element.username;
        var tdEmail = document.createElement("td");
        tdEmail.innerHTML = element.email;
        var tdAdd1 = document.createElement("td");
        tdAdd1.innerHTML = element.addressline1;
        var tdAdd2 = document.createElement("td");
        tdAdd2.innerHTML = element.addressline2;
        var tdGender=document.createElement("td");
        tdGender.innerHTML=element.gender;
        var tdStatus=document.createElement("td");
        tdStatus.innerHTML=element.maritalstatus;
        var tdFood=document.createElement("td");
        tdFood.innerHTML=element.food;
        var tdColor=document.createElement("td");
        tdColor.innerHTML=element.color;
        var tdCountry=document.createElement("td");
        tdCountry.innerHTML=element.country;
        var tdState=document.createElement("td");
        tdState.innerHTML=element.state;
        var tdCity=document.createElement("td");
        tdCity.innerHTML=element.city;
        
        var tdEdit = document.createElement("td");
        var tdDelete = document.createElement("td");
        var editButton = document.createElement("button");
        var deleteButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        deleteButton.innerHTML = "Delete";
        tdEdit.appendChild(editButton);
        tdDelete.appendChild(deleteButton);
        editButton.setAttribute("onclick", "getRow(" + element.id + ")");
        deleteButton.setAttribute("onclick", "delteRow(" + element.id + ")");
        tr.appendChild(tdName);
        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.append(tdGender,tdStatus,tdAdd1,tdAdd2,tdFood,tdColor,tdCountry,tdState,tdCity);
        tr.appendChild(tdEdit);
        tr.appendChild(tdDelete);
        
        document.getElementById("user-table").appendChild(tr);
      });
    }
    
    async function delteRow(id) {
      var question = confirm("Are you sure do you want to delete?");
      if (question) {
        var deleteRow = await fetch(
          "https://5f7b03d440abc60016472aff.mockapi.io/users/" + id,
          {
            method: "DELETE",
          }
        );
        await deleteRow.json();
        getUsers();
      }
    }
    
    function getRow(id) {
      console.log("Coming here "+isEdit);
      console.log(userDataList[id-1]);
     
      isEdit = true;
      selectedRow = userDataList[id - 1].id;
      document.getElementById("name").value = userDataList[id-1].username;
      document.getElementById("email").value = userDataList[id-1].email;
      document.getElementById("password").value = userDataList[id-1].password;
      document.getElementById("password1").value = userDataList[id-1].password1;
      console.log(userDataList[id - 1].gender);
      if (userDataList[id - 1].gender == "Male") {
        document.getElementById("male").checked = true;
      } else if (userDataList[id - 1].gender == "Female") {
        document.getElementById("female").checked = true;
      }

      if (userDataList[id - 1].gender == "male") {
        document.getElementById("male").checked = true;
      } else if (userDataList[id - 1].gender == "female") {
        document.getElementById("female").checked = true;
      }

      if (userDataList[id - 1].maritalstatus == "Single") {
        document.getElementById("single").checked = true;
      } else if (userDataList[id - 1].maritalstatus == "Married") {
        document.getElementById("married").checked = true;
      }
      document.getElementById("address1").value = userDataList[id-1].addressline1;
      document.getElementById("address2").value = userDataList[id-1].addressline2;
      document.getElementById("food").value = userDataList[id-1].food;
      document.getElementById("color").value = userDataList[id-1].color;
      //document.getElementsById("countrySel").value=userDataList[id-1].country;
      //document.getElementsById("stateSel").value=userDataList[id-1].state;
      //document.getElementsById("citySel").value=userDataList[id-1].city;

      
    }
    
    async function addData() {

        var gar=document.getElementsByName("gender");
        var mar_stat=document.getElementsByName("marstatus");
        for(var i=0;i<2;i++)
          {
           if(gar[i].checked==true)
            var genVal=gar[i].value;
            if(mar_stat[i].checked==true)
            var marStat=mar_stat[i].value;
            console.log(genVal , marStat)
          }
      
       
        if(document.getElementById("name").value==""){
            alert("Please enter name")
           }
         else if(document.getElementById("email").value==""){
            alert("Please enter email")
           }  
        else if(document.getElementById("password").value!=document.getElementById("password1").value)
        {
            alert("Please enter same password");
            document.getElementById("password1").focus();
        }
        
        else if(document.getElementById("address1").value==""){
            alert("Please enter Address Line 1");
           }
        else if(document.getElementById("address2").value==""){
            document.getElementById("address2").value=" ";
           }
           
        
               
      var data = {
        username: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        password1: document.getElementById("password1").value,
        addressline1: document.getElementById("address1").value,
        addressline2: document.getElementById("address2").value,
        food:document.getElementById("food").value,
        color:document.getElementById("color").value,
        gender:genVal,
        maritalstatus:marStat,
        country:document.getElementById("countrySel").value,
        state:document.getElementById("stateSel").value,
        city:document.getElementById("citySel").value
      };
      if (!isEdit) {
        console.log("POST EDIT")
        var postData = await fetch(
          "https://5f7b03d440abc60016472aff.mockapi.io/users/",
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
      } else {
        console.log("PUT EDIT")
        var postData = await fetch(
          "https://5f7b03d440abc60016472aff.mockapi.io/users/" + selectedRow,
          {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        isEdit = false;
        selectedRow = null;
      }
    
      var postResult = await postData.json();
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("password1").value = "";
      document.getElementById("address1").value = "";
      document.getElementById("address2").value = "";
      document.getElementById("food").value = "";
      document.getElementById("color").value="";
      console.log(document.getElementById("male"));
      document.querySelector('input[name="gender"]:checked').checked = false;
      document.querySelector('input[name="marstatus"]:checked').checked = false;



      document.getElementById("countrySel").value=o1;
      document.getElementById("stateSel").value=opt;
      document.getElementById("citySel").value=optcity;

      document.getElementById("name").focus();
      getUsers();
      console.log(postResult);
    }
    
    getUsers();




//cont.appendChild(table);

