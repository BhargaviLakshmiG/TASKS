//JS file with Movie Class

class Movie{
   
  constructor(t,s,r){
    	this._title=t;
    	this._studio=s;
    	if(r==undefined)
    	this._rating="PG";  //setting rating to PG when no rating is provided
    else
    	this._rating=r;
    }
   
   
   get getPG(){
   	   var pgMovList=[];
          for (var i = 0; i < mov1.length; i++) {
           if (mov1[i].rating==="PG") {
         pgMovList.push(mov1[i]);
                      }
        }
 return pgMovList;
   }
   
   
   
}
 
 mov=new Movie("Casino Royale","Eon Productions","PG-13"); //creating instance of class Movie
  mov1=[new Movie("Hello","hi","PG"),new Movie("Welcome","Studio","G")];
console.log(mov._title);
console.log(mov._studio)
console.log(mov._rating)

console.log(mov1)
mov1.getPG();


