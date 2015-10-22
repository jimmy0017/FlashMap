(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"images/alk.jpg", id:"alk"},
		{src:"images/IMG_1567.jpg", id:"IMG_1567"},
		{src:"images/IMG_1568.jpg", id:"IMG_1568"},
		{src:"images/IMG_1569.jpg", id:"IMG_1569"},
		{src:"images/IMG_1570.jpg", id:"IMG_1570"},
		{src:"images/IMG_1571.jpg", id:"IMG_1571"},
		{src:"images/IMG_1572.jpg", id:"IMG_1572"},
		{src:"images/IMG_1573.jpg", id:"IMG_1573"},
		{src:"images/IMG_1574.jpg", id:"IMG_1574"},
		{src:"images/IMG_1575.jpg", id:"IMG_1575"},
		{src:"images/IMG_1577.jpg", id:"IMG_1577"},
		{src:"images/IMG_1578.jpg", id:"IMG_1578"},
		{src:"images/IMG_1579.jpg", id:"IMG_1579"},
		{src:"sounds/Untitled_3_.mp3", id:"Untitled_3_"}
	]
};



// symbols:



(lib.alk = function() {
	this.initialize(img.alk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.IMG_1567 = function() {
	this.initialize(img.IMG_1567);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3264,2448);


(lib.IMG_1568 = function() {
	this.initialize(img.IMG_1568);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3264,2448);


(lib.IMG_1569 = function() {
	this.initialize(img.IMG_1569);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3264,2448);


(lib.IMG_1570 = function() {
	this.initialize(img.IMG_1570);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3264,2448);


(lib.IMG_1571 = function() {
	this.initialize(img.IMG_1571);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3264,2448);


(lib.IMG_1572 = function() {
	this.initialize(img.IMG_1572);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3264,2448);


(lib.IMG_1573 = function() {
	this.initialize(img.IMG_1573);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3264,2448);


(lib.IMG_1574 = function() {
	this.initialize(img.IMG_1574);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3264,2448);


(lib.IMG_1575 = function() {
	this.initialize(img.IMG_1575);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2448,3264);


(lib.IMG_1577 = function() {
	this.initialize(img.IMG_1577);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2448,3264);


(lib.IMG_1578 = function() {
	this.initialize(img.IMG_1578);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3264,2448);


(lib.IMG_1579 = function() {
	this.initialize(img.IMG_1579);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3264,2448);


(lib.wire_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADcAAQAAAjhBAZQhBAZhaAAQhaAAhAgZQhBgZAAgjQAAgiBBgZQBAgZBaAAQBaAABBAZQBBAZAAAig");
	this.shape.setTransform(55,35.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiaA7QhAgZAAgiQAAghBAgZQBAgaBaAAQBbAABAAaQBBAZAAAhQAAAihBAZQhAAahbAAQhaAAhAgag");
	this.shape_1.setTransform(55,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(50));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhbBbQgmglAAg2IAAAAQAAg1AmgmIAAAAQAmgmA1AAIAAAAQA2AAAlAmIAAAAQAnAmAAA1IAAAAQAAA2gnAlIAAAAQglAng2AAIAAAAQg1AAgmgng");
	var mask_graphics_1 = new cjs.Graphics().p("Ah4B4QgygyABhGIAAAAQgBhFAygzIAAAAQAzgyBFAAIAAAAQBGAAAyAyIAAAAQAzAzgBBFIAAAAQABBGgzAyIAAAAQgyAzhGAAIAAAAQhFAAgzgzg");
	var mask_graphics_2 = new cjs.Graphics().p("AiUCVQg+g+AAhXIAAAAQAAhWA+g+IAAAAQA+g+BWAAIAAAAQBXAAA+A+IAAAAQA+A+AABWIAAAAQAABXg+A+IAAAAQg+A+hXAAIAAAAQhWAAg+g+g");
	var mask_graphics_3 = new cjs.Graphics().p("AixCxQhJhJAAhoIAAAAQAAhnBJhKIAAAAQBKhJBnAAIAAAAQBoAABJBJIAAAAQBLBKgBBnIAAAAQABBohLBJIAAAAQhJBLhogBIAAAAQhnABhKhLg");
	var mask_graphics_4 = new cjs.Graphics().p("AjODOQhVhVAAh5IAAAAQAAh4BVhWIAAAAQBWhVB4AAIAAAAQB5AABVBVIAAAAQBWBWAAB4IAAAAQAAB5hWBVIAAAAQhVBWh5AAIAAAAQh4AAhWhWg");
	var mask_graphics_5 = new cjs.Graphics().p("AjrDqQhhhhAAiJIAAAAQAAiIBhhjIAAAAQBjhgCIAAIAAAAQCJAABhBgIAAAAQBjBjAACIIAAAAQAACJhjBhIAAAAQhhBjiJgBIAAAAQiIABhjhjg");
	var mask_graphics_6 = new cjs.Graphics().p("AkHEHQhthtAAiaIAAAAQAAiZBthuIAAAAQBuhtCZAAIAAAAQCaAABtBtIAAAAQBuBuAACZIAAAAQAACahuBtIAAAAQhtBuiaAAIAAAAQiZAAhuhug");
	var mask_graphics_7 = new cjs.Graphics().p("AkkEjQh5h4ABirIAAAAQgBiqB5h6IAAAAQB6h4CqAAIAAAAQCrAAB4B4IAAAAQB6B6AACqIAAAAQAACrh6B4IAAAAQh4B7irgBIAAAAQiqABh6h7g");
	var mask_graphics_8 = new cjs.Graphics().p("AlBFAQiEiEAAi8IAAAAQAAi7CEiGIAAAAQCGiEC7AAIAAAAQC8AACECEIAAAAQCGCGAAC7IAAAAQAAC8iGCEIAAAAQiECGi8AAIAAAAQi7AAiGiGg");
	var mask_graphics_9 = new cjs.Graphics().p("AldFcQiQiQAAjMIAAAAQAAjLCQiSIAAAAQCSiQDLgBIAAAAQDMABCQCQIAAAAQCSCSAADLIAAAAQAADMiSCQIAAAAQiQCTjMAAIAAAAQjLAAiSiTg");
	var mask_graphics_10 = new cjs.Graphics().p("Al6F5QicicAAjdIAAAAQAAjcCcieIAAAAQCeicDcAAIAAAAQDdAACcCcIAAAAQCeCeAADcIAAAAQAADdieCcIAAAAQicCejdAAIAAAAQjcAAieieg");
	var mask_graphics_11 = new cjs.Graphics().p("AmXGWQinioAAjuIAAAAQAAjtCniqIAAAAQCqinDtAAIAAAAQDuAACoCnIAAAAQCpCqAADtIAAAAQAADuipCoIAAAAQioCpjuAAIAAAAQjtAAiqipg");
	var mask_graphics_12 = new cjs.Graphics().p("AmzGyQi0izAAj/IAAAAQAAj+C0i1IAAAAQC1i0D+AAIAAAAQD/AACzC0IAAAAQC2C1AAD+IAAAAQAAD/i2CzIAAAAQizC2j/AAIAAAAQj+AAi1i2g");
	var mask_graphics_13 = new cjs.Graphics().p("AnQHPQi/jAgBkPIAAAAQABkOC/jCIAAAAQDCi/EOAAIAAAAQEPAADAC/IAAAAQDBDCABEOIAAAAQgBEPjBDAIAAAAQjADBkPAAIAAAAQkOAAjCjBg");
	var mask_graphics_14 = new cjs.Graphics().p("AntHrQjLjLAAkgIAAAAQAAkfDLjOIAAAAQDOjLEfAAIAAAAQEgAADLDLIAAAAQDODOAAEfIAAAAQAAEgjODLIAAAAQjLDOkgAAIAAAAQkfAAjOjOg");
	var mask_graphics_15 = new cjs.Graphics().p("AoKIIQjXjXABkxIAAAAQgBkwDXjaIAAAAQDajXEwABIAAAAQExgBDXDXIAAAAQDZDaAAEwIAAAAQAAExjZDXIAAAAQjXDZkxAAIAAAAQkwAAjajZg");
	var mask_graphics_16 = new cjs.Graphics().p("AomIkQjjjiAAlCIAAAAQAAlBDjjlIAAAAQDljjFBAAIAAAAQFCAADiDjIAAAAQDmDlAAFBIAAAAQAAFCjmDiIAAAAQjiDmlCAAIAAAAQlBAAjljmg");
	var mask_graphics_17 = new cjs.Graphics().p("ApDJBQjujvgBlSIAAAAQABlRDujyIAAAAQDyjuFRAAIAAAAQFSAADvDuIAAAAQDxDyABFRIAAAAQgBFSjxDvIAAAAQjvDylSgBIAAAAQlRABjyjyg");
	var mask_graphics_18 = new cjs.Graphics().p("ApgJdQj6j6AAljIAAAAQAAliD6j+IAAAAQD+j6FiAAIAAAAQFjAAD6D6IAAAAQD+D+AAFiIAAAAQAAFjj+D6IAAAAQj6D+ljAAIAAAAQliAAj+j+g");
	var mask_graphics_19 = new cjs.Graphics().p("Ap8J6QkHkGABl0IAAAAQgBlzEHkJIAAAAQEJkHFzAAIAAAAQF0AAEGEHIAAAAQEJEJAAFzIAAAAQAAF0kJEGIAAAAQkGEKl0AAIAAAAQlzAAkJkKg");
	var mask_graphics_20 = new cjs.Graphics().p("AqZKXQkSkSAAmFIAAAAQAAmEESkVIAAAAQEVkSGEAAIAAAAQGFAAESESIAAAAQEVEVAAGEIAAAAQAAGFkVESIAAAAQkSEVmFAAIAAAAQmEAAkVkVg");
	var mask_graphics_21 = new cjs.Graphics().p("Aq2KzQkdkegBmVIAAAAQABmUEdkiIAAAAQEikdGUAAIAAAAQGVAAEeEdIAAAAQEiEiAAGUIAAAAQAAGVkiEeIAAAAQkeEimVgBIAAAAQmUABkikig");
	var mask_graphics_22 = new cjs.Graphics().p("ArTLQQkpkqAAmmIAAAAQAAmlEpkuIAAAAQEukpGlAAIAAAAQGmAAEqEpIAAAAQEtEuAAGlIAAAAQAAGmktEqIAAAAQkqEtmmAAIAAAAQmlAAkuktg");
	var mask_graphics_23 = new cjs.Graphics().p("ArvLsQk2k1AAm3IAAAAQAAm2E2k5IAAAAQE5k1G2AAIAAAAQG3AAE1E1IAAAAQE6E5AAG2IAAAAQAAG3k6E1IAAAAQk1E5m3AAIAAAAQm2AAk5k5g");
	var mask_graphics_24 = new cjs.Graphics().p("AsMMJQlBlBAAnIIAAAAQAAnHFBlFIAAAAQFFlBHHAAIAAAAQHIAAFBFBIAAAAQFFFFAAHHIAAAAQAAHIlFFBIAAAAQlBFFnIAAIAAAAQnHAAlFlFg");
	var mask_graphics_25 = new cjs.Graphics().p("AspMlQlMlNAAnYIAAAAQAAnXFMlSIAAAAQFSlNHXAAIAAAAQHYAAFNFNIAAAAQFRFSAAHXIAAAAQAAHYlRFNIAAAAQlNFRnYABIAAAAQnXgBlSlRg");
	var mask_graphics_26 = new cjs.Graphics().p("AtFNCQlZlZAAnpIAAAAQAAnoFZldIAAAAQFdlZHoAAIAAAAQHpAAFZFZIAAAAQFdFdAAHoIAAAAQAAHpldFZIAAAAQlZFdnpAAIAAAAQnoAAldldg");
	var mask_graphics_27 = new cjs.Graphics().p("AtiNeQlklkgBn6IAAAAQABn5FklpIAAAAQFplkH5AAIAAAAQH6AAFkFkIAAAAQFpFpABH5IAAAAQgBH6lpFkIAAAAQlkFpn6AAIAAAAQn5AAlplpg");
	var mask_graphics_28 = new cjs.Graphics().p("At/N7QlwlwAAoLIAAAAQAAoKFwl1IAAAAQF1lwIKAAIAAAAQILAAFwFwIAAAAQF1F1AAIKIAAAAQAAILl1FwIAAAAQlwF1oLAAIAAAAQoKAAl1l1g");
	var mask_graphics_29 = new cjs.Graphics().p("AucOXQl7l8AAobIAAAAQAAoaF7mCIAAAAQGCl8IaAAIAAAAQIcAAF7F8IAAAAQGCGCgBIaIAAAAQABIbmCF8IAAAAQl7GCocAAIAAAAQoaAAmCmCg");
	var mask_graphics_30 = new cjs.Graphics().p("AvKPGQmPmPAAo3IAAAAQAAo1GPmVIAAAAQGVmPI1AAIAAAAQI3AAGOGPIAAAAQGVGVAAI1IAAAAQAAI3mVGPIAAAAQmOGUo3AAIAAAAQo1AAmVmUg");
	var mask_graphics_31 = new cjs.Graphics().p("Av4P0QmimiAApSIAAAAQAApRGimnIAAAAQGomiJQAAIAAAAQJSAAGiGiIAAAAQGnGnAAJRIAAAAQAAJSmnGiIAAAAQmiGnpSAAIAAAAQpQAAmomng");
	var mask_graphics_32 = new cjs.Graphics().p("AwmQiQm1m2AApsIAAAAQAAprG1m7IAAAAQG7m1JrAAIAAAAQJsAAG2G1IAAAAQG6G7AAJrIAAAAQAAJsm6G2IAAAAQm2G6psAAIAAAAQprAAm7m6g");
	var mask_graphics_33 = new cjs.Graphics().p("AxURQQnJnJAAqHIAAAAQAAqGHJnOIAAAAQHOnIKGAAIAAAAQKIAAHIHIIAAAAQHOHOAAKGIAAAAQAAKHnOHJIAAAAQnIHOqIgBIAAAAQqGABnOnOg");
	var mask_graphics_34 = new cjs.Graphics().p("AyDR+QnbnbAAqjIAAAAQAAqhHbniIAAAAQHinbKhAAIAAAAQKjAAHbHbIAAAAQHhHiAAKhIAAAAQAAKjnhHbIAAAAQnbHhqjAAIAAAAQqhAAninhg");
	var mask_graphics_35 = new cjs.Graphics().p("AyxSsQnunuAAq+IAAAAQAAq8Hun1IAAAAQH1nuK8AAIAAAAQK9AAHvHuIAAAAQH0H1AAK8IAAAAQAAK+n0HuIAAAAQnvH0q9AAIAAAAQq8AAn1n0g");
	var mask_graphics_36 = new cjs.Graphics().p("AzfTaQoBoCAArYIAAAAQAArXIBoIIAAAAQIIoBLXAAIAAAAQLYAAICIBIAAAAQIHIIAALXIAAAAQAALYoHICIAAAAQoCIHrYAAIAAAAQrXAAoIoHg");
	var mask_graphics_37 = new cjs.Graphics().p("A0OUHQoToTgBr0IAAAAQABryITocIAAAAQIcoTLygBIAAAAQL0ABITITIAAAAQIcIcAALyIAAAAQAAL0ocITIAAAAQoTIbr0ABIAAAAQrygBocobg");
	var mask_graphics_38 = new cjs.Graphics().p("A08U1QonomAAsPIAAAAQAAsNInovIAAAAQIvonMNAAIAAAAQMPAAImInIAAAAQIvIvAAMNIAAAAQAAMPovImIAAAAQomIvsPAAIAAAAQsNAAovovg");
	var mask_graphics_39 = new cjs.Graphics().p("A1qVkQo6o7AAspIAAAAQAAspI6pBIAAAAQJCo6MoAAIAAAAQMqAAI5I6IAAAAQJCJBAAMpIAAAAQAAMppCI7IAAAAQo5JBsqAAIAAAAQsoAApCpBg");
	var mask_graphics_40 = new cjs.Graphics().p("A2YWSQpNpNAAtFIAAAAQAAtEJNpUIAAAAQJUpNNEAAIAAAAQNFAAJNJNIAAAAQJUJUAANEIAAAAQAANFpUJNIAAAAQpNJUtFAAIAAAAQtEAApUpUg");
	var mask_graphics_41 = new cjs.Graphics().p("A3GXAQpgpgAAtgIAAAAQAAtfJgpnIAAAAQJnpgNfgBIAAAAQNgABJgJgIAAAAQJnJnAANfIAAAAQAANgpnJgIAAAAQpgJntgABIAAAAQtfgBpnpng");
	var mask_graphics_42 = new cjs.Graphics().p("A31XuQpzp0AAt6IAAAAQAAt6Jzp7IAAAAQJ7pzN6AAIAAAAQN6AAJ0JzIAAAAQJ7J7AAN6IAAAAQAAN6p7J0IAAAAQp0J7t6AAIAAAAQt6AAp7p7g");
	var mask_graphics_43 = new cjs.Graphics().p("A4jYcQqGqHAAuVIAAAAQAAuVKGqOIAAAAQKOqGOVAAIAAAAQOWAAKGKGIAAAAQKOKOAAOVIAAAAQAAOVqOKHIAAAAQqGKOuWAAIAAAAQuVAAqOqOg");
	var mask_graphics_44 = new cjs.Graphics().p("A5RZKQqZqZAAuxIAAAAQAAuvKZqiIAAAAQKhqZOwAAIAAAAQOxAAKZKZIAAAAQKhKiAAOvIAAAAQAAOxqhKZIAAAAQqZKhuxAAIAAAAQuwAAqhqhg");
	var mask_graphics_45 = new cjs.Graphics().p("A5/Z4QqtqsAAvMIAAAAQAAvKKtq1IAAAAQK0qsPLAAIAAAAQPLAAKtKsIAAAAQK0K1ABPKIAAAAQgBPMq0KsIAAAAQqtK1vLgBIAAAAQvLABq0q1g");
	var mask_graphics_46 = new cjs.Graphics().p("A6ualQq/q+AAvnIAAAAQAAvlK/rJIAAAAQLIq/PmAAIAAAAQPnAAK+K/IAAAAQLJLJAAPlIAAAAQAAPnrJK+IAAAAQq+LJvnAAIAAAAQvmAArIrJg");
	var mask_graphics_47 = new cjs.Graphics().p("A7cbTQrSrRAAwCIAAAAQAAwALSrcIAAAAQLcrSQAAAIAAAAQQCAALRLSIAAAAQLcLcAAQAIAAAAQAAQCrcLRIAAAAQrRLcwCAAIAAAAQwAAArcrcg");
	var mask_graphics_48 = new cjs.Graphics().p("A8KcCQrlrlAAwdIAAAAQAAwbLlrvIAAAAQLvrlQbAAIAAAAQQdAALkLlIAAAAQLvLvAAQbIAAAAQAAQdrvLlIAAAAQrkLuwdAAIAAAAQwbAArvrug");
	var mask_graphics_49 = new cjs.Graphics().p("A84cwQr5r5ABw3IAAAAQgBw2L5sCIAAAAQMCr5Q2ABIAAAAQQ3gBL5L5IAAAAQMCMCAAQ2IAAAAQAAQ3sCL5IAAAAQr5MCw3AAIAAAAQw2AAsCsCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_1,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_2,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_3,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_4,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_5,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_6,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_7,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_8,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_9,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_10,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_11,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_12,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_13,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_14,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_15,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_16,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_17,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_18,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_19,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_20,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_21,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_22,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_23,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_24,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_25,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_26,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_27,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_28,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_29,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_30,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_31,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_32,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_33,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_34,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_35,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_36,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_37,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_38,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_39,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_40,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_41,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_42,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_43,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_44,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_45,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_46,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_47,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_48,x:59.9,y:83}).wait(1).to({graphics:mask_graphics_49,x:59.9,y:83}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AVRtvIAkAAAV1NwIgkAAI4WAAIyvAAIAAo6AVRtvIAAbfA1XmtIAAnCISSAAIAAbfAjFtvIYWAA");
	this.shape_2.setTransform(139.8,88);

	this.shape_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32,26,46,70.1);


(lib.Text_Title = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Parrallel Circuits", "50px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.lineWidth = 435;
	this.text.setTransform(217.5,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,438.9,59.4);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.IMG_1578();
	this.instance.setTransform(0,0,0.05,0.05);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,163.2,122.4);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.IMG_1567();
	this.instance.setTransform(0,0,0.2,0.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,652.8,489.6);


(lib.name_text = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Andrew, Matthew, Jimmy", "20px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 226;
	this.text.setTransform(113,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,230,26.2);


(lib.LightBulb_Light_Real = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.IMG_1579();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3264,2448);


(lib.LightBulb_Dark = function() {
	this.initialize();

	// IMG_1575.JPG
	this.instance = new lib.IMG_1575();
	this.instance.setTransform(5.6,7.4,0.02,0.02);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.6,7.4,49,65.3);


(lib.Battery = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.IMG_1577();
	this.instance.setTransform(0,-38.1,0.1,0.1);

	this.instance_1 = new lib.alk();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-38.1,250,326.4);


// stage content:
(lib.ParallelCircuits = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("Untitled_3_");
	}
	this.frame_825 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(825).call(this.frame_825).wait(1));

	// Hiclass
	this.instance = new lib.IMG_1574();
	this.instance.setTransform(-30,-20,0.2,0.2);

	this.instance_1 = new lib.IMG_1573();
	this.instance_1.setTransform(-30,-20,0.2,0.2);

	this.instance_2 = new lib.IMG_1572();
	this.instance_2.setTransform(-30,-20,0.2,0.2);

	this.instance_3 = new lib.IMG_1571();
	this.instance_3.setTransform(-30,-20,0.2,0.2);

	this.instance_4 = new lib.IMG_1570();
	this.instance_4.setTransform(-30,-20,0.2,0.2);

	this.instance_5 = new lib.IMG_1569();
	this.instance_5.setTransform(-30,-20,0.2,0.2);

	this.instance_6 = new lib.IMG_1568();
	this.instance_6.setTransform(-30,-20,0.2,0.2);

	this.instance_7 = new lib.Symbol2();
	this.instance_7.setTransform(296.4,224.8,1,1,0,0,0,326.4,244.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_5}]},16).to({state:[{t:this.instance_6}]},14).to({state:[{t:this.instance_7}]},15).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).to({state:[]},200).wait(476));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(104).to({_off:false},0).wait(1).to({scaleX:1,scaleY:1,x:296.5,y:224.2},0).wait(1).to({scaleX:1,scaleY:1,x:296.6,y:223.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:222.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:296.7,y:222.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:296.8,y:221.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:296.9,y:220.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:220},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:297,y:219.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:297.1,y:218.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:297.2,y:218},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:217.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:297.3,y:216.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:297.4,y:215.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:297.5,y:215.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:214.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:297.6,y:213.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:297.7,y:213.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:297.8,y:212.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:211.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:297.9,y:211.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:298,y:210.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:298.1,y:209.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:209},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:298.2,y:208.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:298.3,y:207.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:298.4,y:206.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:206.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:298.5,y:205.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:298.6,y:204.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:298.7,y:204.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:203.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:298.8,y:202.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:298.9,y:202.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:299,y:201.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:200.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:299.1,y:200},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:299.2,y:199.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:198.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:299.3,y:198},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:299.4,y:197.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:196.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:299.5,y:195.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:299.6,y:195.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:299.7,y:194.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:193.8},0).to({_off:true},1).wait(676));

	// Layer 2
	this.instance_8 = new lib.name_text();
	this.instance_8.setTransform(413,389.5,1,1,0,0,0,115,13.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(260).to({_off:false},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.051},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.103},0).wait(1).to({alpha:0.128},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.179},0).wait(1).to({alpha:0.205},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.256},0).wait(1).to({alpha:0.282},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.359},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.41},0).wait(1).to({alpha:0.436},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.487},0).wait(1).to({alpha:0.513},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.564},0).wait(1).to({alpha:0.59},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.718},0).wait(1).to({alpha:0.744},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.821},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.872},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.949},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:1},0).wait(4).to({y:389.6},0).wait(4).to({y:389.7},0).wait(4).to({y:389.8},0).wait(4).to({y:389.9},0).wait(4).to({y:390},0).wait(4).to({y:390.1},0).wait(4).to({y:390.2},0).wait(4).to({y:390.3},0).wait(4).to({y:390.4},0).wait(4).to({y:390.5},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:426.5,y:396.9,alpha:0.967},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:440,y:403.2,alpha:0.933},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:453.5,y:409.6,alpha:0.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:467.1,y:416,alpha:0.867},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:480.5,y:422.4,alpha:0.833},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:494.1,y:428.8,alpha:0.8},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:507.6,y:435.2,alpha:0.767},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:521.1,y:441.6,alpha:0.733},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:534.6,y:448,alpha:0.7},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:548.1,y:454.3,alpha:0.667},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:561.6,y:460.7,alpha:0.633},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:575.1,y:467.1,alpha:0.6},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:588.6,y:473.5,alpha:0.567},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:602.1,y:479.9,alpha:0.533},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:615.6,y:486.3,alpha:0.5},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:629.2,y:492.7,alpha:0.467},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:642.6,y:499,alpha:0.433},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:656.2,y:505.4,alpha:0.4},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:669.7,y:511.8,alpha:0.367},0).wait(1).to({scaleX:1.67,scaleY:1.67,x:683.2,y:518.2,alpha:0.333},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:696.7,y:524.6,alpha:0.3},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:710.2,y:531,alpha:0.267},0).wait(1).to({scaleX:1.77,scaleY:1.77,x:723.7,y:537.4,alpha:0.233},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:737.2,y:543.8,alpha:0.2},0).wait(1).to({scaleX:1.83,scaleY:1.83,x:750.7,y:550.1,alpha:0.167},0).wait(1).to({scaleX:1.87,scaleY:1.87,x:764.2,y:556.5,alpha:0.133},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:777.7,y:562.9,alpha:0.1},0).wait(1).to({scaleX:1.93,scaleY:1.93,x:791.3,y:569.3,alpha:0.067},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:804.7,y:575.7,alpha:0.033},0).wait(1).to({scaleX:2,scaleY:2,x:818.3,y:582.1,alpha:0},0).wait(31).to({scaleX:1.94,scaleY:1.94,y:582},0).wait(1).to({scaleX:1.89,scaleY:1.89,x:818.2},0).wait(1).to({scaleX:1.83,scaleY:1.83},0).wait(1).to({scaleX:1.77,scaleY:1.77,x:818.3,y:582.1},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:818.2,y:582},0).wait(1).to({scaleX:1.66,scaleY:1.66},0).wait(1).to({scaleX:1.6,scaleY:1.6},0).wait(1).to({scaleX:1.55,scaleY:1.55},0).wait(1).to({scaleX:1.49,scaleY:1.49},0).wait(1).to({scaleX:1.43,scaleY:1.43},0).wait(1).to({scaleX:1.38,scaleY:1.38},0).wait(1).to({scaleX:1.32,scaleY:1.32},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.7,scaleY:0.7},0).wait(1).to({scaleX:0.64,scaleY:0.64},0).wait(1).to({scaleX:0.58,scaleY:0.58},0).wait(1).to({scaleX:0.53,scaleY:0.53},0).wait(1).to({scaleX:0.47,scaleY:0.47},0).wait(1).to({scaleX:0.41,scaleY:0.41},0).wait(1).to({scaleX:0.36,scaleY:0.36,y:581.9},0).wait(1).to({scaleX:0.3,scaleY:0.3,y:582},0).wait(120).to({_off:true},1).wait(276));

	// Layer 1
	this.instance_9 = new lib.Text_Title();
	this.instance_9.setTransform(237.6,56,1,1,0,0,0,219.5,29.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(260).to({_off:false},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.051},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.103},0).wait(1).to({alpha:0.128},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.179},0).wait(1).to({alpha:0.205},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.256},0).wait(1).to({alpha:0.282},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.359},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.41},0).wait(1).to({alpha:0.436},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.487},0).wait(1).to({alpha:0.513},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.564},0).wait(1).to({alpha:0.59},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.718},0).wait(1).to({alpha:0.744},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.821},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.872},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.949},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:1},0).wait(41).to({scaleX:1.03,scaleY:1.03,x:245.2,y:51.2,alpha:0.967},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:252.9,y:46.4,alpha:0.933},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:260.5,y:41.6,alpha:0.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:268.2,y:36.9,alpha:0.867},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:275.9,y:32.2,alpha:0.833},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:283.5,y:27.4,alpha:0.8},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:291.1,y:22.7,alpha:0.767},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:298.8,y:17.9,alpha:0.733},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:306.5,y:13.1,alpha:0.7},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:314.1,y:8.4,alpha:0.667},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:321.8,y:3.6,alpha:0.633},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:329.5,y:-1.1,alpha:0.6},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:337.1,y:-5.9,alpha:0.567},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:344.8,y:-10.7,alpha:0.533},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:352.4,y:-15.5,alpha:0.5},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:360.1,y:-20.2,alpha:0.467},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:367.8,y:-25,alpha:0.433},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:375.4,y:-29.8,alpha:0.4},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:383,y:-34.5,alpha:0.367},0).wait(1).to({scaleX:1.67,scaleY:1.67,x:390.7,y:-39.3,alpha:0.333},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:398.4,y:-44,alpha:0.3},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:406,y:-48.8,alpha:0.267},0).wait(1).to({scaleX:1.77,scaleY:1.77,x:413.7,y:-53.6,alpha:0.233},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:421.4,y:-58.3,alpha:0.2},0).wait(1).to({scaleX:1.83,scaleY:1.83,x:429,y:-63.1,alpha:0.167},0).wait(1).to({scaleX:1.87,scaleY:1.87,x:436.7,y:-67.8,alpha:0.133},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:444.3,y:-72.6,alpha:0.1},0).wait(1).to({scaleX:1.93,scaleY:1.93,x:452,y:-77.4,alpha:0.067},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:459.7,y:-82.1,alpha:0.033},0).wait(1).to({scaleX:2,scaleY:2,x:467.3,y:-86.9,alpha:0},0).wait(31).to({scaleX:1.94,scaleY:1.94,alpha:0.033},0).wait(1).to({scaleX:1.89,scaleY:1.89,alpha:0.067},0).wait(1).to({scaleX:1.83,scaleY:1.83,alpha:0.1},0).wait(1).to({scaleX:1.77,scaleY:1.77,alpha:0.133},0).wait(1).to({scaleX:1.72,scaleY:1.72,alpha:0.167},0).wait(1).to({scaleX:1.66,scaleY:1.66,alpha:0.2},0).wait(1).to({scaleX:1.6,scaleY:1.6,alpha:0.233},0).wait(1).to({scaleX:1.55,scaleY:1.55,alpha:0.267},0).wait(1).to({scaleX:1.49,scaleY:1.49,alpha:0.3},0).wait(1).to({scaleX:1.43,scaleY:1.43,alpha:0.333},0).wait(1).to({scaleX:1.38,scaleY:1.38,alpha:0.367},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.4},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:-87,alpha:0.433},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:467.2,y:-86.9,alpha:0.467},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.5},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:467.3,y:-87,alpha:0.533},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:-86.9,alpha:0.567},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:467.2,y:-87,alpha:0.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.633},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:467.3,y:-86.9,alpha:0.667},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:467.2,y:-87,alpha:0.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,alpha:0.733},0).wait(1).to({scaleX:0.7,scaleY:0.7,alpha:0.767},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:467.3,alpha:0.8},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:467.2,alpha:0.833},0).wait(1).to({scaleX:0.53,scaleY:0.53,alpha:0.867},0).wait(1).to({scaleX:0.47,scaleY:0.47,alpha:0.9},0).wait(1).to({scaleX:0.41,scaleY:0.41,alpha:0.933},0).wait(1).to({scaleX:0.36,scaleY:0.36,alpha:0.967},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:1},0).wait(120).to({_off:true},1).wait(276));

	// Wire
	this.instance_10 = new lib.wire_left();
	this.instance_10.setTransform(112.1,211,1,1,0,0,0,60,88);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(203).to({_off:false},0).wait(1).to({regX:139.8,x:191.9},0).wait(136).to({scaleX:1.03,scaleY:1.03,x:198,y:211.4,alpha:0.967},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:204.2,y:211.8,alpha:0.933},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:210.3,y:212.2,alpha:0.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:216.5,y:212.6,alpha:0.867},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:222.6,y:213,alpha:0.833},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:228.7,y:213.4,alpha:0.8},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:234.8,y:213.9,alpha:0.767},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:241,y:214.2,alpha:0.733},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:247.1,y:214.6,alpha:0.7},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:253.3,y:215.1,alpha:0.667},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:259.4,y:215.4,alpha:0.633},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:265.5,y:215.9,alpha:0.6},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:271.7,y:216.3,alpha:0.567},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:277.8,y:216.7,alpha:0.533},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:284,y:217.1,alpha:0.5},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:290.1,y:217.5,alpha:0.467},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:296.2,y:217.9,alpha:0.433},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:302.4,y:218.3,alpha:0.4},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:308.5,y:218.7,alpha:0.367},0).wait(1).to({scaleX:1.67,scaleY:1.67,x:314.6,y:219.1,alpha:0.333},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:320.8,y:219.5,alpha:0.3},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:326.9,y:219.9,alpha:0.267},0).wait(1).to({scaleX:1.77,scaleY:1.77,x:333.1,y:220.3,alpha:0.233},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:339.2,y:220.7,alpha:0.2},0).wait(1).to({scaleX:1.83,scaleY:1.83,x:345.3,y:221.1,alpha:0.167},0).wait(1).to({scaleX:1.87,scaleY:1.87,x:351.4,y:221.5,alpha:0.133},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:357.6,y:221.9,alpha:0.1},0).wait(1).to({scaleX:1.93,scaleY:1.93,x:363.7,y:222.4,alpha:0.067},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:369.9,y:222.7,alpha:0.033},0).wait(1).to({scaleX:2,scaleY:2,x:376,y:223.2,alpha:0},0).wait(180).to({_off:true},1).wait(276));

	// Battery
	this.instance_11 = new lib.Battery();
	this.instance_11.setTransform(-137.9,191,0.3,0.3,0,0,0,125,125);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(150).to({_off:false},0).wait(1).to({regY:125.1,x:-131.2,y:191.5},0).wait(1).to({x:-124.6,y:192},0).wait(1).to({x:-117.9,y:192.5},0).wait(1).to({x:-111.3,y:193},0).wait(1).to({x:-104.6,y:193.5},0).wait(1).to({x:-98,y:194},0).wait(1).to({x:-91.3,y:194.5},0).wait(1).to({x:-84.7,y:195},0).wait(1).to({x:-78,y:195.5},0).wait(1).to({x:-71.3,y:196},0).wait(1).to({x:-64.7,y:196.5},0).wait(1).to({x:-58,y:197},0).wait(1).to({x:-51.4,y:197.5},0).wait(1).to({x:-44.7,y:198},0).wait(1).to({x:-38.1,y:198.5},0).wait(1).to({x:-31.4,y:199},0).wait(1).to({x:-24.8,y:199.5},0).wait(1).to({x:-18.1,y:200},0).wait(1).to({x:-11.5,y:200.5},0).wait(1).to({x:-4.8,y:201},0).wait(1).to({x:1.9,y:201.5},0).wait(1).to({x:8.5,y:202},0).wait(1).to({x:15.2,y:202.5},0).wait(1).to({x:21.8,y:203},0).wait(1).to({x:28.5,y:203.5},0).wait(1).to({x:35.1,y:204},0).wait(1).to({x:41.7,y:204.5},0).wait(1).to({x:48.4,y:205},0).wait(1).to({x:55,y:205.5},0).wait(161).to({scaleX:0.31,scaleY:0.31,x:56.6,y:205.8},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:58.2,y:206},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:59.8,y:206.2},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:61.3,y:206.4},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:62.9,y:206.7},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:64.5,y:206.9},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:66.1,y:207.1},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:67.6,y:207.3},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:69.2,y:207.5},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:70.8,y:207.8},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:72.4,y:208},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:73.9,y:208.2},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:75.5,y:208.4},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:77.1,y:208.7},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:78.7,y:208.9},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:80.3,y:209.1},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:81.8,y:209.3},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:83.4,y:209.5},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:85,y:209.8},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:86.6,y:210},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:88.1,y:210.2},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:89.7,y:210.4},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:91.3,y:210.6},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:92.9,y:210.9},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:94.4,y:211.1},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:96,y:211.3},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:97.6,y:211.5},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:99.2,y:211.8},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:100.7,y:212},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:102.3,y:212.2},0).wait(31).to({scaleX:0.59,scaleY:0.59,x:96.7,y:213.1},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:91.2,y:213.9},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:85.6,y:214.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:80,y:215.7},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:74.5,y:216.5},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:68.9,y:217.4},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:63.4,y:218.3},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:57.8,y:219.1},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:52.3,y:220},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:46.7,y:220.9},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:41.1,y:221.7},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:35.6,y:222.6},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:30,y:223.5},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:24.4,y:224.3},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:18.8,y:225.2},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:13.3,y:226.1},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:7.7,y:226.9},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:2.1,y:227.8},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-3.4,y:228.7},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-9,y:229.5},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-14.6,y:230.4},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-20.1,y:231.3},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-25.7,y:232.1},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-31.3,y:233},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-36.8,y:233.9},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-42.4,y:234.7},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-48,y:235.6},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-53.5,y:236.5},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-59.1,y:237.3},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-64.7,y:238.2},0).wait(120).to({_off:true},1).wait(276));

	// LightBulb1
	this.instance_12 = new lib.LightBulb_Dark();
	this.instance_12.setTransform(598,328,1,1,0,0,0,30,40);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(180).to({_off:false},0).wait(1).to({rotation:3.9,x:575.8,y:331.3},0).wait(1).to({rotation:7.8,x:553.3,y:334},0).wait(1).to({rotation:11.7,x:530.8,y:336.1},0).wait(1).to({rotation:15.7,x:508.4,y:338},0).wait(1).to({rotation:19.6,x:485.8,y:339.5},0).wait(1).to({rotation:23.5,x:463.2,y:340.6},0).wait(1).to({rotation:27.4,x:440.7,y:341.2},0).wait(1).to({rotation:31.3,x:418,y:341.5},0).wait(1).to({rotation:35.2,x:395.4,y:341.2},0).wait(1).to({rotation:39.1,x:372.8,y:340.2},0).wait(1).to({rotation:43,x:350.2,y:338.2},0).wait(1).to({rotation:47,x:327.7,y:334.4},0).wait(1).to({rotation:50.9,x:307.9,y:336.1},0).wait(1).to({rotation:54.8,x:284.6,y:340.6},0).wait(1).to({rotation:58.7,x:261.7,y:342.9},0).wait(1).to({rotation:62.6,x:238.6,y:342.1},0).wait(1).to({rotation:66.5,x:217.8,y:335.1},0).wait(1).to({rotation:70.4,x:211.1,y:316.1},0).wait(1).to({rotation:74.3,x:212.7,y:292.7},0).wait(1).to({rotation:78.3,x:213.5,y:270},0).wait(1).to({rotation:82.2,x:213.1,y:245.9},0).wait(1).to({rotation:86.1,x:209.3,y:221.4},0).wait(1).to({rotation:90,x:206.1,y:203},0).wait(3).to({y:203.1},0).wait(5).to({y:203.2},0).wait(4).to({y:203.3},0).wait(5).to({y:203.4},0).wait(5).to({y:203.5},0).wait(3).to({x:206.2},0).wait(1).to({y:203.6},0).wait(5).to({y:203.7},0).wait(5).to({y:203.8},0).wait(5).to({y:203.9},0).wait(4).to({y:204},0).wait(5).to({x:206.3,y:204.1},0).wait(5).to({y:204.2},0).wait(4).to({y:204.3},0).wait(5).to({y:204.4},0).wait(9).to({y:204.3},0).wait(5).to({y:204.2},0).wait(4).to({y:204.1},0).wait(5).to({x:206.2,y:204},0).wait(5).to({y:203.9},0).wait(5).to({y:203.8},0).wait(4).to({y:203.7},0).wait(5).to({y:203.6},0).wait(5).to({y:203.5},0).wait(1).to({x:206.1},0).wait(4).to({y:203.4},0).wait(7).to({y:203.3},0).wait(7).to({y:203.2},0).wait(4).to({y:203.1},0).wait(2).to({y:203},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:212.6,y:203.2,alpha:0.967},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:219.3,y:203.5,alpha:0.933},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:225.9,y:203.7,alpha:0.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:232.5,y:203.9,alpha:0.867},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:239.1,y:204.2,alpha:0.833},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:245.7,y:204.4,alpha:0.8},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:252.3,y:204.6,alpha:0.767},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:258.9,y:204.8,alpha:0.733},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:265.5,y:205.1,alpha:0.7},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:272.1,y:205.3,alpha:0.667},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:278.8,y:205.5,alpha:0.633},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:285.4,y:205.7,alpha:0.6},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:291.9,y:205.9,alpha:0.567},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:298.6,y:206.1,alpha:0.533},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:305.2,y:206.3,alpha:0.5},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:311.8,y:206.5,alpha:0.467},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:318.4,y:206.7,alpha:0.433},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:325,y:206.8,alpha:0.4},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:331.6,y:207,alpha:0.367},0).wait(1).to({scaleX:1.67,scaleY:1.67,x:338.2,y:207.2,alpha:0.333},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:344.8,y:207.3,alpha:0.3},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:351.4,y:207.5,alpha:0.267},0).wait(1).to({scaleX:1.77,scaleY:1.77,x:358.1,y:207.6,alpha:0.233},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:364.7,y:207.7,alpha:0.2},0).wait(1).to({scaleX:1.83,scaleY:1.83,x:371.3,y:207.8,alpha:0.167},0).wait(1).to({scaleX:1.87,scaleY:1.87,x:377.9,y:207.9,alpha:0.133},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:384.5,y:208,alpha:0.1},0).wait(1).to({scaleX:1.93,scaleY:1.93,x:391.1,alpha:0.067},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:397.7,y:207.9,alpha:0.033},0).wait(1).to({scaleX:2,scaleY:2,x:404.3,y:207.2,alpha:0},0).wait(3).to({y:207.3},0).wait(2).to({y:207.4},0).wait(2).to({x:404.4},0).wait(1).to({y:207.5},0).wait(2).to({y:207.6},0).wait(3).to({y:207.7},0).wait(2).to({y:207.8},0).wait(3).to({y:207.9},0).wait(2).to({x:404.5,y:208},0).wait(3).to({y:208.1},0).wait(2).to({y:208.2},0).wait(2).to({y:208.3},0).wait(3).to({y:208.4},0).wait(1).to({rotation:87,x:401.7,y:207.9,alpha:0.033},0).wait(1).to({rotation:84,x:398.9,y:207.3,alpha:0.067},0).wait(1).to({rotation:81,x:396.2,y:206.8,alpha:0.1},0).wait(1).to({rotation:78,x:393.4,y:206.3,alpha:0.133},0).wait(1).to({rotation:75,x:390.6,y:205.7,alpha:0.167},0).wait(1).to({rotation:72,x:387.8,y:205.1,alpha:0.2},0).wait(1).to({rotation:69,x:385,y:204.6,alpha:0.233},0).wait(1).to({rotation:66,x:382.2,y:204,alpha:0.267},0).wait(1).to({rotation:63,x:379.5,y:203.4,alpha:0.3},0).wait(1).to({rotation:60,x:376.7,y:202.9,alpha:0.333},0).wait(1).to({rotation:57,x:373.9,y:202.3,alpha:0.367},0).wait(1).to({rotation:54,x:371.1,y:201.7,alpha:0.4},0).wait(1).to({rotation:51,x:368.3,y:201.2,alpha:0.433},0).wait(1).to({rotation:48,x:365.6,y:200.6,alpha:0.467},0).wait(1).to({rotation:45,x:362.8,y:200,alpha:0.5},0).wait(1).to({rotation:42,x:360,y:199.4,alpha:0.533},0).wait(1).to({rotation:39,x:357.2,y:198.7,alpha:0.567},0).wait(1).to({rotation:36,x:354.5,y:198.1,alpha:0.6},0).wait(1).to({rotation:33,x:351.7,y:197.6,alpha:0.633},0).wait(1).to({rotation:30,x:348.9,y:197,alpha:0.667},0).wait(1).to({rotation:27,x:346.1,y:196.4,alpha:0.7},0).wait(1).to({rotation:24,x:343.3,y:195.8,alpha:0.733},0).wait(1).to({rotation:21,x:340.6,y:195.1,alpha:0.767},0).wait(1).to({rotation:18,x:337.8,y:194.5,alpha:0.8},0).wait(1).to({rotation:15,x:335,y:193.9,alpha:0.833},0).wait(1).to({rotation:12,x:332.2,y:193.2,alpha:0.867},0).wait(1).to({rotation:9,x:329.5,y:192.6,alpha:0.9},0).wait(1).to({rotation:6,x:326.7,y:191.8,alpha:0.933},0).wait(1).to({rotation:3,x:323.9,y:191.2,alpha:0.967},0).wait(1).to({rotation:0,x:321.3,y:190.2,alpha:1},0).wait(3).to({y:190.3},0).wait(2).to({y:190.4},0).wait(1).to({x:321.4},0).wait(1).to({y:190.5},0).wait(2).to({y:190.6},0).wait(2).to({y:190.7},0).wait(2).to({y:190.8},0).wait(2).to({y:190.9},0).wait(1).to({y:190.8},0).wait(2).to({y:190.7},0).wait(2).to({y:190.6},0).wait(2).to({y:190.5},0).wait(4).to({y:190.4},0).wait(1).to({x:321.3},0).wait(2).to({y:190.3},0).wait(1).to({y:190.2},0).wait(1).to({scaleX:1.97,scaleY:1.97,rotation:3,x:333.3,y:186.6},0).wait(1).to({scaleX:1.93,scaleY:1.93,rotation:6,x:345.4,y:183},0).wait(1).to({scaleX:1.9,scaleY:1.9,rotation:9,x:357.4,y:179.5},0).wait(1).to({scaleX:1.87,scaleY:1.87,rotation:12,x:369.5,y:176},0).wait(1).to({scaleX:1.83,scaleY:1.83,rotation:15,x:381.5,y:172.4},0).wait(1).to({scaleX:1.8,scaleY:1.8,rotation:18,x:393.6,y:168.9},0).wait(1).to({scaleX:1.77,scaleY:1.77,rotation:21,x:405.7,y:165.3},0).wait(1).to({scaleX:1.73,scaleY:1.73,rotation:24,x:417.7,y:161.7},0).wait(1).to({scaleX:1.7,scaleY:1.7,rotation:27,x:429.7,y:158.2},0).wait(1).to({scaleX:1.67,scaleY:1.67,rotation:30,x:441.7,y:154.6},0).wait(1).to({scaleX:1.63,scaleY:1.63,rotation:33,x:453.8,y:151},0).wait(1).to({scaleX:1.6,scaleY:1.6,rotation:36,x:465.9,y:147.5},0).wait(1).to({scaleX:1.57,scaleY:1.57,rotation:39,x:477.9,y:143.9},0).wait(1).to({scaleX:1.53,scaleY:1.53,rotation:42,x:489.9,y:140.4},0).wait(1).to({scaleX:1.5,scaleY:1.5,rotation:45,x:501.9,y:136.7},0).wait(1).to({scaleX:1.47,scaleY:1.47,rotation:48,x:514,y:133.2},0).wait(1).to({scaleX:1.43,scaleY:1.43,rotation:51,x:526,y:129.6},0).wait(1).to({scaleX:1.4,scaleY:1.4,rotation:54,x:538.1,y:126},0).wait(1).to({scaleX:1.37,scaleY:1.37,rotation:57,x:550.1,y:122.4},0).wait(1).to({scaleX:1.33,scaleY:1.33,rotation:60,x:562.2,y:118.8},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:63,x:574.2,y:115.2},0).wait(1).to({scaleX:1.27,scaleY:1.27,rotation:66,x:586.2,y:111.6},0).wait(1).to({scaleX:1.23,scaleY:1.23,rotation:69,x:598.3,y:108.1},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:72,x:610.3,y:104.5},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:75,x:622.3,y:100.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:78,x:634.3,y:97.2},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:81,x:646.4,y:93.6},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:84,x:658.4,y:89.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:87,x:670.3,y:86.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:90,x:682.3,y:82.2},0).wait(3).to({y:82.3},0).wait(2).to({y:82.4},0).wait(1).to({x:682.4},0).wait(1).to({y:82.5},0).wait(2).to({y:82.6},0).wait(2).to({y:82.7},0).wait(2).to({y:82.8},0).wait(2).to({y:82.9},0).wait(1).to({y:82.8},0).wait(2).to({y:82.7},0).wait(2).to({y:82.6},0).wait(2).to({y:82.5},0).wait(4).to({y:82.4},0).wait(1).to({x:682.3},0).wait(2).to({y:82.3},0).wait(1).to({y:82.2},0).wait(3).to({y:82.3},0).wait(2).to({y:82.4},0).wait(1).to({x:682.4},0).wait(1).to({y:82.5},0).wait(2).to({y:82.6},0).wait(2).to({y:82.7},0).wait(2).to({y:82.8},0).wait(2).to({y:82.9},0).wait(1).to({y:82.8},0).wait(2).to({y:82.7},0).wait(2).to({y:82.6},0).wait(2).to({y:82.5},0).wait(4).to({y:82.4},0).wait(1).to({x:682.3},0).wait(2).to({y:82.3},0).wait(1).to({y:82.2},0).to({_off:true},1).wait(276));

	// LightBulb2
	this.instance_13 = new lib.LightBulb_Dark();
	this.instance_13.setTransform(598,60,1,1,0,0,0,30,40);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(180).to({_off:false},0).wait(1).to({rotation:3.9,x:588.1,y:66.2},0).wait(1).to({rotation:7.8,x:578.2,y:72.5},0).wait(1).to({rotation:11.7,x:568.2,y:78.6},0).wait(1).to({rotation:15.7,x:558.4,y:84.9},0).wait(1).to({rotation:19.6,x:548.4,y:91.1},0).wait(1).to({rotation:23.5,x:538.5,y:97.3},0).wait(1).to({rotation:27.4,x:528.6,y:103.5},0).wait(1).to({rotation:31.3,x:518.7,y:109.8},0).wait(1).to({rotation:35.2,x:508.8,y:116},0).wait(1).to({rotation:39.1,x:498.8,y:122.2},0).wait(1).to({rotation:43,x:489,y:128.4},0).wait(1).to({rotation:47,x:479.1,y:134.6},0).wait(1).to({rotation:50.9,x:469.1,y:140.8},0).wait(1).to({rotation:54.8,x:459.2,y:147},0).wait(1).to({rotation:58.7,x:449.3,y:153.3},0).wait(1).to({rotation:62.6,x:439.4,y:159.5},0).wait(1).to({rotation:66.5,x:429.5,y:165.7},0).wait(1).to({rotation:70.4,x:419.6,y:171.9},0).wait(1).to({rotation:74.3,x:409.7,y:178.2},0).wait(1).to({rotation:78.3,x:399.7,y:184.3},0).wait(1).to({rotation:82.2,x:389.8,y:190.5},0).wait(1).to({rotation:86.1,x:379.9,y:196.8},0).wait(1).to({rotation:90,x:370,y:203},0).wait(137).to({scaleX:1.03,scaleY:1.03,x:382.1,y:203.1,alpha:0.967},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:394.2,y:203.3,alpha:0.933},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:406.2,y:203.4,alpha:0.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:418.3,y:203.6,alpha:0.867},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:430.4,y:203.7,alpha:0.833},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:442.5,y:203.8,alpha:0.8},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:454.5,y:204,alpha:0.767},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:466.6,y:204.1,alpha:0.733},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:478.7,y:204.2,alpha:0.7},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:490.7,y:204.4,alpha:0.667},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:502.8,y:204.5,alpha:0.633},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:514.9,y:204.7,alpha:0.6},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:527,y:204.8,alpha:0.567},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:539.1,y:204.9,alpha:0.533},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:551.1,y:205.1,alpha:0.5},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:563.2,y:205.2,alpha:0.467},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:575.3,y:205.4,alpha:0.433},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:587.4,y:205.5,alpha:0.4},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:599.4,y:205.6,alpha:0.367},0).wait(1).to({scaleX:1.67,scaleY:1.67,x:611.5,y:205.8,alpha:0.333},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:623.6,y:205.9,alpha:0.3},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:635.6,y:206,alpha:0.267},0).wait(1).to({scaleX:1.77,scaleY:1.77,x:647.7,y:206.2,alpha:0.233},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:659.8,y:206.3,alpha:0.2},0).wait(1).to({scaleX:1.83,scaleY:1.83,x:671.9,y:206.5,alpha:0.167},0).wait(1).to({scaleX:1.87,scaleY:1.87,x:684,y:206.6,alpha:0.133},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:696,y:206.7,alpha:0.1},0).wait(1).to({scaleX:1.93,scaleY:1.93,x:708.1,y:206.9,alpha:0.067},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:720.2,y:207,alpha:0.033},0).wait(1).to({scaleX:2,scaleY:2,x:732.3,y:207.2,alpha:0},0).wait(31).to({scaleX:1.97,scaleY:1.97,alpha:0.033},0).wait(1).to({scaleX:1.93,scaleY:1.93,x:732.2,alpha:0.067},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:732.3,alpha:0.1},0).wait(1).to({scaleX:1.87,scaleY:1.87,alpha:0.133},0).wait(1).to({scaleX:1.83,scaleY:1.83,x:732.2,alpha:0.167},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:732.3,alpha:0.2},0).wait(1).to({scaleX:1.77,scaleY:1.77,alpha:0.233},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:732.2,alpha:0.267},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:732.3,alpha:0.3},0).wait(1).to({scaleX:1.67,scaleY:1.67,alpha:0.333},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:732.2,alpha:0.367},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:732.3,alpha:0.4},0).wait(1).to({scaleX:1.57,scaleY:1.57,alpha:0.433},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:732.2,alpha:0.467},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:732.3,alpha:0.5},0).wait(1).to({scaleX:1.47,scaleY:1.47,alpha:0.533},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:732.2,alpha:0.567},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:732.3,alpha:0.6},0).wait(1).to({scaleX:1.37,scaleY:1.37,alpha:0.633},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:732.2,alpha:0.667},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:732.3,alpha:0.7},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.733},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:732.2,alpha:0.767},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:732.3,alpha:0.8},0).wait(1).to({scaleX:1.17,scaleY:1.17,alpha:0.833},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:732.2,alpha:0.867},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:732.3,alpha:0.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.933},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:732.2,alpha:0.967},0).wait(1).to({scaleX:1,scaleY:1,x:732.3,alpha:1},0).wait(120).to({_off:true},1).wait(276));

	// Demo Wire
	this.instance_14 = new lib.Symbol3();
	this.instance_14.setTransform(319.7,186.9,1,1,0,0,0,81.5,61.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(489).to({_off:false},0).wait(1).to({regX:81.6,regY:61.2,x:319.8,y:187,alpha:0.033},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.767},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:1},0).wait(31).to({alpha:0.967},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.767},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.033},0).wait(1).to({alpha:0},0).wait(217).to({_off:true},1).wait(29));

	// Wire
	this.instance_15 = new lib.wire_left();
	this.instance_15.setTransform(112.1,211,1,1,0,0,0,60,88);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(630).to({_off:false},0).wait(1).to({regX:139.8,x:191.9},0).wait(195));

	// Battery
	this.instance_16 = new lib.Battery();
	this.instance_16.setTransform(-124.6,192,0.3,0.3,0,0,0,125,125);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(579).to({_off:false},0).wait(1).to({regY:125.1,x:-117.9,y:192.5},0).wait(1).to({x:-111.3,y:193},0).wait(1).to({x:-104.6,y:193.5},0).wait(1).to({x:-98,y:194},0).wait(1).to({x:-91.3,y:194.5},0).wait(1).to({x:-84.7,y:195},0).wait(1).to({x:-78,y:195.5},0).wait(1).to({x:-71.4,y:196},0).wait(1).to({x:-64.7,y:196.5},0).wait(1).to({x:-58,y:197},0).wait(1).to({x:-51.4,y:197.5},0).wait(1).to({x:-44.7,y:198},0).wait(1).to({x:-38.1,y:198.5},0).wait(1).to({x:-31.4,y:199},0).wait(1).to({x:-24.8,y:199.5},0).wait(1).to({x:-18.1,y:200},0).wait(1).to({x:-11.5,y:200.5},0).wait(1).to({x:-4.8,y:201},0).wait(1).to({x:1.8,y:201.5},0).wait(1).to({x:8.5,y:202},0).wait(1).to({x:15.2,y:202.5},0).wait(1).to({x:21.8,y:203},0).wait(1).to({x:28.5,y:203.5},0).wait(1).to({x:35.1,y:204},0).wait(1).to({x:41.7,y:204.5},0).wait(1).to({x:48.4,y:205},0).wait(1).to({x:55,y:205.5},0).wait(220));

	// Lightup
	this.instance_17 = new lib.LightBulb_Light_Real();
	this.instance_17.setTransform(370,203.1,0.02,0.02,180,0,0,1630.9,1220.7);

	this.instance_18 = new lib.LightBulb_Light_Real();
	this.instance_18.setTransform(206.1,203.1,0.02,0.02,180,0,0,1630.9,1220.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18},{t:this.instance_17,p:{x:370}}]},660).to({state:[{t:this.instance_17,p:{x:206.1}}]},56).to({state:[{t:this.instance_17,p:{x:206.1}}]},109).wait(1));

	// LightBulb1
	this.instance_19 = new lib.LightBulb_Dark();
	this.instance_19.setTransform(598,328,1,1,0,0,0,30,40);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(607).to({_off:false},0).wait(1).to({rotation:3.9,x:575.8,y:331.3},0).wait(1).to({rotation:7.8,x:553.3,y:334},0).wait(1).to({rotation:11.7,x:530.8,y:336.1},0).wait(1).to({rotation:15.7,x:508.4,y:338},0).wait(1).to({rotation:19.6,x:485.8,y:339.5},0).wait(1).to({rotation:23.5,x:463.2,y:340.6},0).wait(1).to({rotation:27.4,x:440.7,y:341.2},0).wait(1).to({rotation:31.3,x:418,y:341.5},0).wait(1).to({rotation:35.2,x:395.4,y:341.2},0).wait(1).to({rotation:39.1,x:372.8,y:340.2},0).wait(1).to({rotation:43,x:350.2,y:338.2},0).wait(1).to({rotation:47,x:327.7,y:334.4},0).wait(1).to({rotation:50.9,x:307.9,y:336.1},0).wait(1).to({rotation:54.8,x:284.6,y:340.6},0).wait(1).to({rotation:58.7,x:261.7,y:342.9},0).wait(1).to({rotation:62.6,x:238.6,y:342.1},0).wait(1).to({rotation:66.5,x:217.8,y:335.1},0).wait(1).to({rotation:70.4,x:211.1,y:316.1},0).wait(1).to({rotation:74.3,x:212.7,y:292.7},0).wait(1).to({rotation:78.3,x:213.5,y:270},0).wait(1).to({rotation:82.2,x:213.1,y:245.9},0).wait(1).to({rotation:86.1,x:209.3,y:221.4},0).wait(1).to({rotation:90,x:206.1,y:203},0).wait(196));

	// LightBulb2
	this.instance_20 = new lib.LightBulb_Dark();
	this.instance_20.setTransform(598,60,1,1,0,0,0,30,40);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(607).to({_off:false},0).wait(1).to({rotation:3.9,x:588.1,y:66.2},0).wait(1).to({rotation:7.8,x:578.2,y:72.5},0).wait(1).to({rotation:11.7,x:568.2,y:78.6},0).wait(1).to({rotation:15.7,x:558.4,y:84.9},0).wait(1).to({rotation:19.6,x:548.4,y:91.1},0).wait(1).to({rotation:23.5,x:538.5,y:97.3},0).wait(1).to({rotation:27.4,x:528.6,y:103.5},0).wait(1).to({rotation:31.3,x:518.7,y:109.8},0).wait(1).to({rotation:35.2,x:508.8,y:116},0).wait(1).to({rotation:39.1,x:498.8,y:122.2},0).wait(1).to({rotation:43,x:489,y:128.4},0).wait(1).to({rotation:47,x:479.1,y:134.6},0).wait(1).to({rotation:50.9,x:469.1,y:140.8},0).wait(1).to({rotation:54.8,x:459.2,y:147},0).wait(1).to({rotation:58.7,x:449.3,y:153.3},0).wait(1).to({rotation:62.6,x:439.4,y:159.5},0).wait(1).to({rotation:66.5,x:429.5,y:165.7},0).wait(1).to({rotation:70.4,x:419.6,y:171.9},0).wait(1).to({rotation:74.3,x:409.7,y:178.2},0).wait(1).to({rotation:78.3,x:399.7,y:184.3},0).wait(1).to({rotation:82.2,x:389.8,y:190.5},0).wait(1).to({rotation:86.1,x:379.9,y:196.8},0).wait(1).to({rotation:90,x:370,y:203},0).wait(86).to({y:203.1},0).wait(1).to({x:381.1},0).wait(1).to({x:392.3},0).wait(1).to({x:403.4},0).wait(1).to({x:414.6},0).wait(1).to({x:425.7},0).wait(1).to({x:436.9},0).wait(1).to({x:448},0).wait(1).to({x:459.2},0).wait(1).to({x:470.3},0).wait(1).to({x:481.5},0).wait(1).to({x:492.6},0).wait(1).to({x:503.8},0).wait(1).to({x:514.9},0).wait(1).to({x:526.1},0).wait(1).to({x:537.2},0).wait(1).to({x:548.4},0).wait(1).to({x:559.5},0).wait(1).to({x:570.7},0).wait(1).to({x:581.8},0).wait(1).to({x:593},0).wait(1).to({x:604.1},0).wait(1).to({x:615.3},0).wait(1).to({x:626.4},0).wait(1).to({x:637.6},0).wait(1).to({x:648.7},0).wait(1).to({x:659.9},0).wait(1).to({x:671},0).wait(83));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270,180,652.8,489.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;