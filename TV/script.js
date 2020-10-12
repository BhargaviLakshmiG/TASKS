var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var isPlaying = false;
var channels = {
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
    50: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
};
var TV_class = /** @class */ (function () {
    function TV_class(setDetails) {
        this.channel = 1;
        this.details = setDetails;
        this.setChannel(this.channel);
        this.setVolume(this.details.volume);
        var resetButton = document.querySelector("#reset");
        resetButton.onclick = this.resetTv();
        var video_size = document.querySelector("#video");
        video_size.style.width = "80%";
        video_size.style.height = "80%";
        var chnDown = document.querySelector("#chn_down");
        chnDown.onclick = this.previousChannel();
        var chnUp = document.querySelector("#chn_up");
        chnUp.onclick = this.nextChannel();
        var volUp = document.querySelector("#vol_up");
        volUp.onclick = this.increaseVol();
        var volDown = document.querySelector("#vol_down");
        volDown.onclick = this.decreaseVol();
    }
    TV_class.prototype.increaseVol = function () {
        var _this = this;
        console.log("Increase Volume");
        return function () {
            if (_this.details.volume < 100) {
                _this.setVolume(_this.details.volume + 1);
            }
            else {
                console.log("Maximum volume is 100");
            }
        };
    };
    TV_class.prototype.decreaseVol = function () {
        var _this = this;
        console.log("Decrease volume");
        return function () {
            if (_this.details.volume > 0) {
                _this.setVolume(_this.details.volume - 1);
            }
            else {
                console.log("Minimum volume is 0");
            }
        };
    };
    TV_class.prototype.previousChannel = function () {
        var _this = this;
        return function () {
            _this.setChannel(_this.channel - 1);
        };
    };
    TV_class.prototype.nextChannel = function () {
        var _this = this;
        return function () {
            _this.setChannel(_this.channel + 1);
        };
    };
    TV_class.prototype.setChannel = function (chn) {
        console.log("changing channel to " + (chn + 1));
        if (chn > 0 && chn <= 50) {
            this.channel = chn;
            var dispScreen = document.querySelector("#screen");
            dispScreen.innerHTML = "";
            var video_el = document.createElement("video");
            video_el.setAttribute("id", "video");
            video_el.setAttribute("controls", "true");
            video_el.style.width = "80%";
            video_el.style.height = "90%";
            var video_src = document.createElement("source");
            video_src.setAttribute("src", channels[this.channel]);
            video_src.setAttribute("id", "videoPlayer");
            video_src.setAttribute("type", "video/mp4");
            video_el.appendChild(video_src);
            dispScreen.appendChild(video_el);
            isPlaying = false;
            //playVideo();
            document.querySelector("video").play();
            this.displayTVInfo();
        }
    };
    TV_class.prototype.setVolume = function (vol) {
        if (vol >= 0 && vol <= 100) {
            this.details.volume = vol;
            var video = document.querySelector("#video");
            video.volume = this.details.volume / 100;
            this.displayTVInfo();
        }
    };
    TV_class.prototype.resetTv = function () {
        var _this = this;
        return function () {
            _this.setChannel(1);
            _this.setVolume(50);
        };
    };
    TV_class.prototype.displayTVInfo = function () {
        var textInfo = document.querySelector("#text_dis");
        textInfo.innerHTML = "You are watching " + this.details.brand + " TV at channel  " + this.channel + " with Volume  " + this.details.volume;
    };
    return TV_class;
}());
var LED_TV = /** @class */ (function (_super) {
    __extends(LED_TV, _super);
    function LED_TV(tvDetails) {
        var _this = _super.call(this, tvDetails) || this;
        console.log("LED TV INFO : " + tvDetails.brand + " TV with life span of " + tvDetails.lifeSpan + " , refreshrate of " + tvDetails.refresh_rate + ",energy usage of " + tvDetails.energyusage);
        return _this;
    }
    return LED_TV;
}(TV_class));
var Plasma_TV = /** @class */ (function (_super) {
    __extends(Plasma_TV, _super);
    function Plasma_TV(tvDetails) {
        var _this = _super.call(this, tvDetails) || this;
        console.log("PLASMA TV INFO : " + tvDetails.brand + "TV with life span of " + tvDetails.lifeSpan + " , refreshrate of " + tvDetails.refresh_rate + ",energy usage of " + tvDetails.energyusage);
        return _this;
    }
    return Plasma_TV;
}(TV_class));
/*let playVideo = () => {
  if (!isPlaying) {
    isPlaying = !isPlaying;
    (<HTMLVideoElement>document.querySelector("video")).play();
  } else {
    isPlaying = !isPlaying;
    (<HTMLVideoElement>document.querySelector("video")).pause();
  }
};*/
/*window.onload=()=>{new TV_class({
  brand: "SONY",
  inches:32,
  price:15000,
  volume:50
});}*/
var tv_basic = new TV_class({
    brand: "SONY",
    inches: 32,
    price: 15000,
    volume: 50
});
var led = new LED_TV({
    brand: "SONY",
    inches: 46,
    price: 30000,
    volume: 50,
    lifeSpan: 10,
    screenthickness: 12,
    energyusage: "200W",
    refresh_rate: "100Hz"
});
var plasma = new Plasma_TV({
    brand: "Panasonic",
    inches: 42,
    price: 40000,
    volume: 50,
    lifeSpan: 8,
    screenthickness: 12,
    energyusage: "230W",
    refresh_rate: "110Hz"
});
