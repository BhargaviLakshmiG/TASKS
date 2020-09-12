

class calc
{
  constructor(x,y){
   this.x=x;
   this.y=y;
   console.log("Numbers are "+this.x+" "+this.y)
  }
  add()
  {
  console.log("Sum  is "+(this.x+this.y));
  }

  sub()
  {
  	console.log("Difference is "+(this.x-this.y));
  }

  mul()
  {
  	console.log("Product is "+(this.x*this.y));
  }

  div()
  {
  	console.log("Division is "+(this.x/this.y));
  }

	
}

 c=new calc(12,6);
c.add();
c.sub();
c.mul();
c.div();