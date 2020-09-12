//TV class-Inheritance

class TV{
   constructor(brd,ch,pr,inch,sta,vol)
   {
   	this.brand=brd;
   	this.chn=1;
   	this.price=pr;
   	this.in=inch;
   	this.st=sta;
   	this.volume=vol;

    console.log("TV brand "+this.brand);
       }	
       
  incrVol(v)
  {
  	if(v==100) 
  		this.volume=v;
  	else
  	  this.volume++;
  }

  decrVol(v)
  {
  	if(v==0) 
  		this.volume=v;
  	else
  	  this.volume++;
  }

  setChnl(c)
  {
  	if(c>50)
  		this.chn=chn;
  	else
  		this.chn=c;
  }

  resetTV(c,v)
  {
  	this.ch=1;
  	this.vol=50;
  }



}

class LED_TV extends TV{
	 constructor(brd,ch,pr,inch,sta,vol,th,ener,lsp,rr)
  {
    super();
    this.thick=th;
    this.energy=ener;
    this.lfsp=lsp;
    this.refrate=rr;
      } 

}

class Plasma_TV extends TV{
 
  constructor(brd,ch,pr,inch,sta,vol,th,ener,lsp,rr)
  {
  	super();
  	this.thick=th;
  	this.energy=ener;
  	this.lfsp=lsp;
  	this.refrate=rr;
  	  }	

  	  getDisplayDetails()
  	  {
  	  	console.log(brd +" has life span of "+lfsp +"years")
  	  }

}
 
  tv_new= new TV("SONY",25,40000,46,"OFF",32);



