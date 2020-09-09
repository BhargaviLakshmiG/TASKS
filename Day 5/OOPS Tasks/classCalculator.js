

class calc
{
  add(x,y)
  {
  console.log("Sum of "+x+" and "+y+" is "+(x+y));
  }

  sub(x,y)
  {
  	console.log("Difference  of "+x+" and "+y+" is "+(x-y));
  }

  mul(x,y)
  {
  	console.log("Product of "+x+" and "+y+" is "+(x*y));
  }

  div(x,y)
  {
  	console.log("Division of "+x+" and "+y+" is "+(x/y));
  }

	
}

let c=new calc();
c.add(1,2);
c.sub(3,5);
c.mul(10,5);
c.div(10,2);