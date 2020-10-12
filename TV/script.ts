

interface TV_Details {
  brand: string;
  inches:number;
  price:number;
   volume?:number;
   screenthickness ?:number;
   energyusage?:string;
   lifeSpan?:number;
   refresh_rate?:string;
  }



let channels = {
  //1:"big-buck-bunny_trailer.mp4",
  1: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  2: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  3: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  4: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  5: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  6: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  7: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  8: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  9: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  10: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  11: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  12: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  13: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  14: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  15: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  16: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  17: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  18: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  19: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  20: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  21: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  22: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  23: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  24: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  25: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  26: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  27: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  28: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  29: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  30: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  31: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  32: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  33: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  34: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  35: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  36: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  37: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  38: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  39: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  40: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  41: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  42: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  43: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  44: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  45: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  46: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  47: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  48: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  49: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  50: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
};


class TV_class {
  details: TV_Details;
  channel: number;
  constructor(setDetails: TV_Details) {
    this.channel = 1;
    this.details = setDetails;
    this.setChannel(this.channel);
    this.setVolume(this.details.volume);
    let resetButton = <HTMLAreaElement>document.querySelector("#reset");
    resetButton.onclick = this.resetTv();
    let video_size = <HTMLVideoElement>document.querySelector("#video");
    video_size.style.width = "80%";
    video_size.style.height = "80%";
    let chnDown = <HTMLAreaElement>document.querySelector("#chn_down");
    chnDown.onclick = this.previousChannel();
    let chnUp = <HTMLAreaElement>document.querySelector("#chn_up");
    chnUp.onclick = this.nextChannel();
    let volUp = <HTMLAreaElement>document.querySelector("#vol_up");
    volUp.onclick = this.increaseVol();
    let volDown = <HTMLAreaElement>document.querySelector("#vol_down");
    volDown.onclick = this.decreaseVol();
    
  }
  increaseVol(): () => void {
    console.log(`Increase Volume`)
    return () => {
      if (this.details.volume < 100) {
        this.setVolume(this.details.volume+1);
      } else {
        console.log("ALready at maximum volume is 100");
      }
    };
  }

  decreaseVol(): () => void {
    console.log(`Decrease volume`)
    return () => {
      if (this.details.volume > 0) {
        this.setVolume(this.details.volume-1);
      } else {
        console.log("Already at minimum volume is 0");
      }
    };
  }

  resetTv(): () => void {
    return () => {
      this.setChannel(1);
      this.setVolume(50);
    };
  }

  setVolume(vol: number) {
    if (vol >= 0 && vol <= 100) {
      console.log(`changing volume to ${vol+1}`);
      this.details.volume = vol;
      let video = <HTMLVideoElement>document.querySelector("#video");
      video.volume = this.details.volume / 100;
      this.displayTVInfo();
    } 
  }

  previousChannel(): () => void {
      return () => {
      this.setChannel(this.channel-1);
    };
  }

  nextChannel(): () => void {
    return () => {
      this.setChannel(this.channel+1);
    };
  }

  setChannel(chn: number) {
    console.log(`changing channel to ${chn+1}`);
    if (chn > 0 && chn <= 50) {
      this.channel = chn;
      let dispScreen = <HTMLDivElement>document.querySelector("#screen");
      dispScreen.innerHTML = "";
      let video_el = document.createElement("video");
      video_el.setAttribute("id", "video");
      video_el.setAttribute("controls", "true");
      video_el.style.width = "80%";
      video_el.style.height="90%" ;
       let video_src = document.createElement("source");
       video_src.setAttribute("src", channels[this.channel]);
       video_src.setAttribute("id", "videoPlayer");
       video_src.setAttribute("type", "video/mp4");
      video_el.appendChild(video_src);
      dispScreen.appendChild(video_el);
       (<HTMLVideoElement>document.querySelector("video")).play();
      this.displayTVInfo();
    } 
  }


  

  

  displayTVInfo() {
    let textInfo = <HTMLDivElement>document.querySelector("#text_dis");
    textInfo.innerHTML = `You are watching ${this.details.brand} TV at channel  ${this.channel} with Volume  ${this.details.volume}`;
  }
}



class LED_TV extends TV_class {
  constructor(tvDetails: TV_Details) {
    super(tvDetails);
    console.log(`LED TV INFO : ${tvDetails.brand} TV with life span of ${tvDetails.lifeSpan} , refreshrate of ${tvDetails.refresh_rate},energy usage of ${tvDetails.energyusage}`)
  }
 
}

class Plasma_TV extends TV_class {
  constructor(tvDetails: TV_Details) {
    super(tvDetails);
    console.log(`PLASMA TV INFO : ${tvDetails.brand}TV with life span of ${tvDetails.lifeSpan} , refreshrate of ${tvDetails.refresh_rate},energy usage of ${tvDetails.energyusage}`)

  }
 
}




/*window.onload=()=>{new TV_class({
  brand: "SONY",
  inches:32,
  price:15000,
  volume:50
});}*/

let tv_basic=new TV_class({
  brand: "SONY",
  inches:32,
  price:15000,
  volume:50
});

let led=new LED_TV({
  brand: "SONY",
  inches:46,
  price:30000,
  volume:50,
  lifeSpan:10,
  screenthickness:12,
  energyusage:"200W",
  refresh_rate:"100Hz",
})


let plasma=new Plasma_TV({
  brand: "Panasonic",
  inches:42,
  price:40000,
  volume:50,
  lifeSpan:8,
  screenthickness:12,
  energyusage:"230W",
  refresh_rate:"110Hz",
})

