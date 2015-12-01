(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1000,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/map1116.jpg", id:"map1116"},
		{src:"images/startscreen.png", id:"startscreen"},
		{src:"images/Start.png", id:"Start"}
	]
};



// symbols:



(lib.map1116 = function() {
	this.initialize(img.map1116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5760,5760);


(lib.startscreen = function() {
	this.initialize(img.startscreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2029,1708);


(lib.Start = function() {
	this.initialize(img.Start);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,338,125);


(lib.Whole_Map = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.map1116();
	this.instance.setTransform(-4388.4,-3661.6,0.656,0.787);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4388.4,-3661.6,8778,7317);


(lib.Start_Screen = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.startscreen();
	this.instance.setTransform(0,0,0.5,0.48);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1014.5,819.8);


(lib.start_button = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Start();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,169,62.5);


// stage content:
(lib.StartScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		var stage = this;
		stage.stop();
		stage.start_button.addEventListener("click", startClicked);
		function startClicked() {
			stage.play();
			//window.open("http://www.adobe.com", "_blank");
		}
	}
	this.frame_119 = function() {
		window.open("http://www.adobe.com", "_blank");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(60).call(this.frame_119).wait(1));

	// Layer 1
	this.instance = new lib.Whole_Map();
	this.instance.setTransform(509,394.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-1508.4,regY:-781.7,x:-999.4,y:-387},0).wait(59).to({scaleX:0.99,scaleY:0.99,x:-976.8,y:-374.6,alpha:0.017},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-954.3,y:-362.1,alpha:0.033},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-931.8,y:-349.7,alpha:0.05},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-909.3,y:-337.2,alpha:0.067},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-886.7,y:-324.8,alpha:0.083},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-864.1,y:-312.3,alpha:0.1},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-841.6,y:-299.8,alpha:0.117},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-819.1,y:-287.4,alpha:0.133},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-796.5,y:-274.9,alpha:0.15},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-774,y:-262.4,alpha:0.167},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-751.5,y:-250,alpha:0.183},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-728.9,y:-237.5,alpha:0.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-706.3,y:-225,alpha:0.217},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-683.8,y:-212.6,alpha:0.233},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-661.3,y:-200.1,alpha:0.25},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-638.8,y:-187.6,alpha:0.267},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-616.3,y:-175.2,alpha:0.283},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:-593.7,y:-162.7,alpha:0.3},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-571.1,y:-150.3,alpha:0.317},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:-548.6,y:-137.8,alpha:0.333},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-526.1,y:-125.3,alpha:0.35},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-503.5,y:-112.9,alpha:0.367},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-481,y:-100.4,alpha:0.383},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-458.5,y:-87.9,alpha:0.4},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-435.9,y:-75.5,alpha:0.417},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:-413.3,y:-63,alpha:0.433},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-390.8,y:-50.6,alpha:0.45},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:-368.3,y:-38.1,alpha:0.467},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-345.8,y:-25.6,alpha:0.483},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:-323.2,y:-13.2,alpha:0.5},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-300.7,y:-0.7,alpha:0.517},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:-278.1,y:11.8,alpha:0.533},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-255.6,y:24.2,alpha:0.55},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-233.1,y:36.7,alpha:0.567},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:-210.5,y:49.2,alpha:0.583},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:-188,y:61.6,alpha:0.6},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:-165.4,y:74.1,alpha:0.617},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:-142.9,y:86.5,alpha:0.633},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-120.3,y:99,alpha:0.65},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-97.8,y:111.5,alpha:0.667},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-75.3,y:123.9,alpha:0.683},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-52.7,y:136.4,alpha:0.7},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-30.2,y:148.9,alpha:0.717},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-7.7,y:161.3,alpha:0.733},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:14.9,y:173.8,alpha:0.75},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:37.4,y:186.3,alpha:0.767},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:59.9,y:198.7,alpha:0.783},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:82.5,y:211.2,alpha:0.8},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:105,y:223.7,alpha:0.817},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:127.6,y:236.1,alpha:0.833},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:150.1,y:248.6,alpha:0.85},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:172.7,y:261,alpha:0.867},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:195.2,y:273.5,alpha:0.883},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:217.7,y:286,alpha:0.9},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:240.3,y:298.4,alpha:0.917},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:262.8,y:310.9,alpha:0.933},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:285.4,y:323.4,alpha:0.95},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:307.9,y:335.8,alpha:0.967},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:330.4,y:348.2,alpha:0.983},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:353,y:360.8,alpha:1},0).wait(1));

	// Start
	this.start_button = new lib.start_button();
	this.start_button.setTransform(454.4,559.5,1,1,0,0,0,84.5,31.2);
	this.start_button._off = true;

	this.timeline.addTween(cjs.Tween.get(this.start_button).wait(59).to({_off:false},0).wait(61));

	// Start_Screen
	this.instance_1 = new lib.Start_Screen();
	this.instance_1.setTransform(492.7,409.9,1,1,0,0,0,507.2,409.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.017},0).wait(1).to({alpha:0.034},0).wait(1).to({alpha:0.051},0).wait(1).to({alpha:0.068},0).wait(1).to({alpha:0.085},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.119},0).wait(1).to({alpha:0.136},0).wait(1).to({alpha:0.153},0).wait(1).to({alpha:0.169},0).wait(1).to({alpha:0.186},0).wait(1).to({alpha:0.203},0).wait(1).to({alpha:0.22},0).wait(1).to({alpha:0.237},0).wait(1).to({alpha:0.254},0).wait(1).to({alpha:0.271},0).wait(1).to({alpha:0.288},0).wait(1).to({alpha:0.305},0).wait(1).to({alpha:0.322},0).wait(1).to({alpha:0.339},0).wait(1).to({alpha:0.356},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.39},0).wait(1).to({alpha:0.407},0).wait(1).to({alpha:0.424},0).wait(1).to({alpha:0.441},0).wait(1).to({alpha:0.458},0).wait(1).to({alpha:0.475},0).wait(1).to({alpha:0.492},0).wait(1).to({alpha:0.508},0).wait(1).to({alpha:0.525},0).wait(1).to({alpha:0.542},0).wait(1).to({alpha:0.559},0).wait(1).to({alpha:0.576},0).wait(1).to({alpha:0.593},0).wait(1).to({alpha:0.61},0).wait(1).to({alpha:0.627},0).wait(1).to({alpha:0.644},0).wait(1).to({alpha:0.661},0).wait(1).to({alpha:0.678},0).wait(1).to({alpha:0.695},0).wait(1).to({alpha:0.712},0).wait(1).to({alpha:0.729},0).wait(1).to({alpha:0.746},0).wait(1).to({alpha:0.763},0).wait(1).to({alpha:0.78},0).wait(1).to({alpha:0.797},0).wait(1).to({alpha:0.814},0).wait(1).to({alpha:0.831},0).wait(1).to({alpha:0.847},0).wait(1).to({alpha:0.864},0).wait(1).to({alpha:0.881},0).wait(1).to({alpha:0.898},0).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.932},0).wait(1).to({alpha:0.949},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.983},0).wait(1).to({alpha:1},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.5,skewY:-0.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:-1,skewY:-0.7},0).wait(1).to({scaleX:1.02,scaleY:1.01,skewX:-1.5,skewY:-1.1,x:492.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,skewX:-2,skewY:-1.4,x:492.7},0).wait(1).to({scaleX:1.03,scaleY:1.03,skewX:-2.5,skewY:-1.8,x:492.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,skewX:-2.9,skewY:-2.1,x:492.7},0).wait(1).to({scaleX:1.04,scaleY:1.04,skewX:-3.4,skewY:-2.5,x:492.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,skewX:-3.9,skewY:-2.9,x:492.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,skewX:-4.4,skewY:-3.2,x:492.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,skewX:-4.9,skewY:-3.6},0).wait(1).to({scaleX:1.06,scaleY:1.06,skewX:-5.4,skewY:-3.9,x:492.7},0).wait(1).to({scaleX:1.06,scaleY:1.06,skewX:-5.9,skewY:-4.3,x:492.8},0).wait(1).to({scaleX:1.07,scaleY:1.07,skewX:-6.4,skewY:-4.6,x:492.7},0).wait(1).to({scaleX:1.08,scaleY:1.07,skewX:-6.9,skewY:-5,x:492.8},0).wait(1).to({scaleX:1.08,scaleY:1.08,skewX:-7.4,skewY:-5.4,x:492.7},0).wait(1).to({scaleX:1.09,scaleY:1.08,skewX:-7.8,skewY:-5.7},0).wait(1).to({scaleX:1.09,scaleY:1.09,skewX:-8.3,skewY:-6.1},0).wait(1).to({scaleX:1.1,scaleY:1.09,skewX:-8.8,skewY:-6.4,x:492.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,skewX:-9.3,skewY:-6.8},0).wait(1).to({scaleX:1.11,scaleY:1.1,skewX:-9.8,skewY:-7.1,x:492.7},0).wait(1).to({scaleX:1.11,scaleY:1.11,skewX:-10.3,skewY:-7.5,x:492.8},0).wait(1).to({scaleX:1.12,scaleY:1.11,skewX:-10.8,skewY:-7.8,x:492.7},0).wait(1).to({scaleX:1.12,scaleY:1.12,skewX:-11.3,skewY:-8.2},0).wait(1).to({scaleX:1.13,scaleY:1.12,skewX:-11.8,skewY:-8.6,x:492.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,skewX:-12.3,skewY:-8.9},0).wait(1).to({scaleX:1.14,scaleY:1.13,skewX:-12.8,skewY:-9.3,x:492.7},0).wait(1).to({scaleX:1.14,scaleY:1.14,skewX:-13.2,skewY:-9.6},0).wait(1).to({scaleX:1.15,scaleY:1.14,skewX:-13.7,skewY:-10},0).wait(1).to({scaleX:1.16,scaleY:1.15,skewX:-14.2,skewY:-10.3},0).wait(1).to({scaleX:1.16,scaleY:1.15,skewX:-14.7,skewY:-10.7,x:492.8},0).wait(1).to({scaleX:1.17,scaleY:1.16,skewX:-15.2,skewY:-11.1,x:492.7},0).wait(1).to({scaleX:1.17,scaleY:1.16,skewX:-15.7,skewY:-11.4},0).wait(1).to({scaleX:1.18,scaleY:1.17,skewX:-16.2,skewY:-11.8},0).wait(1).to({scaleX:1.18,scaleY:1.17,skewX:-16.7,skewY:-12.1},0).wait(1).to({scaleX:1.19,scaleY:1.18,skewX:-17.2,skewY:-12.5,y:410},0).wait(1).to({scaleX:1.19,scaleY:1.19,skewX:-17.7,skewY:-12.8,y:409.9},0).wait(1).to({scaleX:1.2,scaleY:1.19,skewX:-18.2,skewY:-13.2},0).wait(1).to({scaleX:1.2,scaleY:1.2,skewX:-18.6,skewY:-13.6},0).wait(1).to({scaleX:1.21,scaleY:1.2,skewX:-19.1,skewY:-13.9},0).wait(1).to({scaleX:1.21,scaleY:1.21,skewX:-19.6,skewY:-14.3},0).wait(1).to({scaleX:1.22,scaleY:1.21,skewX:-20.1,skewY:-14.6},0).wait(1).to({scaleX:1.22,scaleY:1.22,skewX:-20.6,skewY:-15},0).wait(1).to({scaleX:1.23,scaleY:1.22,skewX:-21.1,skewY:-15.3},0).wait(1).to({scaleX:1.24,scaleY:1.23,skewX:-21.6,skewY:-15.7},0).wait(1).to({scaleX:1.24,scaleY:1.23,skewX:-22.1,skewY:-16.1},0).wait(1).to({scaleX:1.25,scaleY:1.24,skewX:-22.6,skewY:-16.4},0).wait(1).to({scaleX:1.25,scaleY:1.24,skewX:-23.1,skewY:-16.8},0).wait(1).to({scaleX:1.26,scaleY:1.25,skewX:-23.5,skewY:-17.1},0).wait(1).to({scaleX:1.26,scaleY:1.25,skewX:-24,skewY:-17.5},0).wait(1).to({scaleX:1.27,scaleY:1.26,skewX:-24.5,skewY:-17.8,y:410},0).wait(1).to({scaleX:1.27,scaleY:1.26,skewX:-25,skewY:-18.2,y:409.9},0).wait(1).to({scaleX:1.28,scaleY:1.27,skewX:-25.5,skewY:-18.6},0).wait(1).to({scaleX:1.28,scaleY:1.27,skewX:-26,skewY:-18.9},0).wait(1).to({scaleX:1.29,scaleY:1.28,skewX:-26.5,skewY:-19.3},0).wait(1).to({scaleX:1.29,scaleY:1.28,skewX:-27,skewY:-19.6},0).wait(1).to({scaleX:1.3,scaleY:1.29,skewX:-27.5,skewY:-20},0).wait(1).to({scaleX:1.3,scaleY:1.29,skewX:-28,skewY:-20.3,x:492.8,y:410},0).wait(1).to({scaleX:1.31,scaleY:1.3,skewX:-28.5,skewY:-20.7,x:492.7,y:409.9},0).wait(1).to({scaleX:1.32,scaleY:1.3,skewX:-28.9,skewY:-21.1,y:410},0).wait(1).to({scaleX:1.32,scaleY:1.31,skewX:-29.4,skewY:-21.4,y:409.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3379.4,-2867,8778,7317);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;