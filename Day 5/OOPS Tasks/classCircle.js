class Circle{

constructor(r,c)
{
   this.rad=r;
   this.col=c;
}

set radius(r)
{
	this.rad=r;
}

set color(c)
{
	this.col=c;
}

get radius()
{
	return this.rad;
}

get color()
{
	return this.col;
}

get area()
{
	return 3.14*rad*rad;
}
}

cir=new Circle(1.0,"red");
console.log(cir);