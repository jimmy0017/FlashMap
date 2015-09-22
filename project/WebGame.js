(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 500,
	fps: 24,
	color: "#000000",
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"sounds/bgm.mp3", id:"bgm"},
		{src:"sounds/done.mp3", id:"done"},
		{src:"sounds/pickup.mp3", id:"pickup"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,641,100);


(lib.StartScreen = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEC98").s().p("AP1EFQgbgGgYgTQgMgLgLgQQgKgQgFgXIBYAAQADAJAFAGQAFAGAFADQAIAFAJACIASABQARAAAKgEQAJgFAEgEQAIgIAEgKQADgKABgJIAAgPIAAgcQgEAIgJAIQgJAJgOAGQgPAGgXAAQgdAAgXgJQgWgJgRgRQgQgPgKgYQgKgXgBggQABgfAKgZQAKgZAQgRQAIgIAMgIQANgIARgGQASgGAXAAQAXAAAPAHQAOAGAJAJQAJAIAEAIIAAgdIBRAAIAADoQAAASgCATQgBASgHASQgGASgPAQQgPAQgTAIQgUAIgSACQgTADgOgBIgHABQgWAAgYgHgAQRgqQgMAEgIAHQgJAKgFAMQgFALAAAMQAAAMAFAMQAEAMAIAJQAJAJALAEQAMAFAOAAQAQgBALgFQAKgEAHgGQAJgKAFgMQAFgMAAgOQAAgNgFgMQgGgMgIgHQgJgIgMgEQgLgEgMAAQgNAAgLAFgAuECUQgggBgYgKQgYgKgRgRQgPgOgMgXQgMgYAAgiQAAgeAMgZQALgZASgRQAWgTAYgIQAYgIAaAAQAQAAAPADQAQAEAQAHIAABKQgPgMgOgEQgOgEgKAAQgTABgLAGQgMAHgEAEQgIAIgFAMQgFALAAAOQAAAOAEAMQAFALAHAIQAKAKANAFQANAFANAAQALABANgEQAOgFAOgLIAABJQgQAIgQADQgOAEgPAAIgDAAgALuCUQgcAAgZgHQgZgIgWgVQgQgQgKgZQgLgYAAgfQAAgaAJgZQAKgaATgUQAXgWAagHQAZgHAWAAQAOAAARADQARACASAJQARAIAQAQQAVAYAHAbQAHAbAAAVIAAAJIi6AAQAAAKADAMQAEALAIAJQAJAKALADQAMADAJAAQAJAAAIgCQAJgCAHgEIAGgFQAGgFAFgKIBMAIQgJAagOAPQgOAPgLAGQgSALgUAEQgSAEgTAAIgEAAgAMmgSQAAgCgDgJQgEgJgJgJQgGgGgKgEQgKgEgMAAQgPAAgKAFQgKAFgGAGIgIAMQgEAHgCAIIBtAAIAAAAgA28CUQg0gBgkgPQgkgPgXgYQgagYgQgkQgQgiAAgtQAAgtAQgjQAQgkAagZQAZgYAjgPQAkgOArgBQATAAAWAFQAWAEAbAMIAABkQgOgQgWgMQgWgMgdAAQgYAAgTAHQgTAIgOAOQgQAPgKAWQgJAWgBAbQABAdAJATQAKAVANAMIAOALQAKAIARAGQARAGAXAAQARABAVgIQAWgIAZgXIAABiQgZANgUAEQgSAEgQAAIgDAAgAhhCIQgcgMgRgRQgTgTgJgYQgKgZAAgZQAAgWAKgZQAJgYATgTQARgSAcgLQAbgLAlgBQAjABAbALQAcALARASQATATAJAYQAKAZAAAWQAAAZgKAZQgJAYgTATQgRARgcAMQgbALgjABQglgBgbgLgAg6gsQgLAFgJAIQgJAJgFAMQgFAKAAAOQABASAFALQAFALAIAIQAHAHALAFQAMAFAQAAQANAAALgEQAKgFAIgIQAJgJAFgMQAFgLAAgQQAAgOgFgKQgFgMgJgJQgIgIgKgFQgLgFgOAAQgOAAgLAFgAG7CLIiNAAIAAlzIByAAQALgBARACQAQACASAGQATAGAOANQAMAMAGANQAGANACAMQACANgBAIQABALgDAMQgDAMgHANQgHALgJAHQgIAGgHADQANACAOAGQAOAHAKAKQAKAJAHARQAHAOAAAZQAAAcgJASQgJATgLAKQgQAPgSAHQgSAHgRACIgYACIgFgBgAGDBIIAVAAQARABARgDQARgDANgKQAGgGADgHQADgIAAgKQAAgMgEgHQgDgHgFgDQgHgHgMgDQgKgDgMAAIgUgBIgYAAgAGDhRIAOAAQAKABAMgCQAMgDAKgGQAGgEAEgJQAFgIAAgMQAAgMgFgIQgEgIgFgDQgKgHgMgCQgLgBgMAAIgOAAgAY5CLIAAiAQABgLgDgNQgCgOgJgKQgFgFgHgDQgIgDgLAAQgMAAgJAEQgIAEgFAFQgJALgDAMQgDAMAAALIAACAIhRAAIAAj3IBRAAIAAAdQATgXAUgHQAUgHASABQARgBATAFQATAFARAQQARASAEAUQAFAUgBAPIAACcgAT2CLIAAj3IBRAAIAAD3gAlNCLIAAi2IgcAAIAAhBIAcAAIAAhRIBRAAIAABRIAyAAIAABBIgyAAIAAC2gApbCLIhghrIAABrIhRAAIAAmWIBRAAIAAD6IBahbIBqAAIh3BvICACIgAyVCLIAAj3IBRAAIAAD3gA0sCLIAAmWIBRAAIAAGWgAT9i2QgNgNgBgUQABgUANgNQANgOAVAAQAUAAANAOQANANABAUQgBAUgNANQgNANgUABQgVgBgNgNgAyOi2QgNgNgBgUQABgUANgNQANgOAVAAQAUAAANAOQANANABAUQgBAUgNANQgNANgUABQgVgBgNgNg");
	this.shape.setTransform(-0.4,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC98").s().p("EgjCgPtMAjCAASMAjKAAQIgpgpIgLfOIA0g0IozgDIoygFYl3gDl3gEl3AAYl1gBl3ABl3ADIozAFIoyAHIAzA0IgIn0IgEj6IgGj4IgFj6IgHj6IgHj6IgIjzEgjPgP6IgIEAIgHD6IgGD6IgGD6IgFD4IgFD6IgIH0IgBAzIA1ABIIyAHIIzAFYF3ADF3ACF1gBYF3gBF3gEF3gDIIygEIIzgEIA0AAIAAg0IgM/OIAAgpIgoAAMgjKAAQMgjPAAT");
	this.shape_1.setTransform(0,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().dr(-225,-100,450,200);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-230.2,-104.1,460.5,210.8);


(lib.OverScreen = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEC98").s().p("AuMDDQgbAAgXgIQgXgJgVgVQgTgWgJgXQgIgYAAgZQAAggALgZQAKgYARgSQARgQAWgJQAWgJAaAAQALAAAOADQAOACAOAIQAOAIAMAPIAAgbIBQAAIAAD3IhQAAIAAgeQgMARgNAIQgNAIgNADQgLADgJAAIgDAAgAuVADQgMAEgIAJQgGAGgGALQgGALAAARQAAARAFALQAGALAFAGQAJAJAMAFQANAFAOAAQAMAAALgEQALgFAIgIQAIgIAGgLQAGgMAAgQQAAgOgFgMQgFgLgJgJQgJgJgMgEQgMgCgMAAQgNAAgLADgAz3DDQgXAAgXgEQgXgEgXgLQgXgLgWgWQgLgLgNgUQgMgTgJgcQgJgbgBglQABgtAOgjQAPgkAYgYQAXgYAagMQAZgLAZgEQAagEAWAAQAXAAAcAGQAbAFAaARQAUANAPASQAQASAKASIhOAqQgFgLgIgLQgJgKgLgIQgMgKgPgEQgOgEgQAAQgZAAgUAIQgTAIgNAOQgQARgIAWQgIAXAAAZQAAAfAKAVQAJAWAMALQAQARAUAGQASAHAWgBQAbAAAQgHQAQgHAGgGIAGgGQAFgFAGgKQAGgJAEgOIhbAAIAAhDIC6AAIAAADQAAAWgGAcQgGAcgNAcQgMAcgVAWQgVAVgWALQgWALgXAEQgUAEgUAAIgFAAgARMDDQgcAAgYgHQgZgIgWgVQgRgQgKgZQgKgYgBgfQAAgcAKgZQAKgYASgUQAYgWAZgHQAagHAVAAQAOAAASADQARACARAJQASAIAPAQQAWAYAHAZQAHAbgBAXIAAAJIi6AAQAAAKAEAMQAEALAHAJQAKAKALADQALADAKAAQAJAAAIgCQAJgCAGgEIAHgFQAFgFAGgKIBMAIQgJAagOAPQgOAPgMAGQgSALgUAEQgSAEgTAAIgEAAgASFAbQAAgCgEgJQgEgJgIgHQgHgGgKgEQgJgEgMAAQgQAAgKAFQgJAFgGAEIgJAMQgDAHgCAIIBtAAIAAAAgAheDDQgcAAgZgHQgZgIgWgVQgQgQgKgZQgLgYAAgfQAAgcAJgZQAKgYATgUQAXgWAagHQAZgHAWAAQAOAAARADQARACASAJQARAIAOAQQAVAYAHAZQAHAbAAAXIAAAJIi4AAQAAAKADAMQAEALAIAJQAJAKALADQAMADAJAAQAJAAAIgCQAJgCAHgEIAGgFQAGgFAFgKIBKAIQgJAagOAPQgMAPgLAGQgSALgUAEQgSAEgTAAIgEAAgAgmAbQAAgCgDgJQgEgJgJgHQgGgGgKgEQgKgEgMAAQgPAAgKAFQgKAFgGAEIgIAMQgEAHgCAIIBtAAIAAAAgAFeC7QgcgIgVgNQgVgNgNgNQgcgagPgkQgPgkgBgpQABgnAQgmQAPglAagaQANgNAUgMQATgNAdgIQAcgIAlgBQAsAAAkAOQAkANAdAcQAaAZAQAkQAQAkAAAqQAAAmgOAkQgOAkgeAeQgaAZgkAPQgkAOgvABQgjgBgbgHgAFuhqQgVAJgPAPQgNALgKAVQgKAVAAAdQAAAaAIAVQAJAVARAQQASARAUAHQAUAHAWAAQAdAAAUgJQAVgJANgOQALgKALgUQAKgVAAggQAAgbgKgWQgJgVgNgMQgOgOgWgJQgVgJgaAAQgYAAgVAIgAUCC6IAAj3IBRAAIAAAnQAFgLAJgJQAHgJAKgGQAKgGALgCQAKgDAMAAIAOABIANADIgFBKQgIgEgJgDQgJgCgKAAQgNAAgKAEQgKAFgHAIQgOAOgDASQgEASABARIAABlgAL+C6Ih/j3IBZAAIA/CDIA/iDIBZAAIh/D3gAlrC6IAAh+QABgKgCgOQgCgOgHgLQgGgGgHgEQgIgBgIAAQgKAAgJACQgIAEgFAHQgHAKgDANQgCAOAAAMIAAB8IhRAAIAAiCQABgMgDgOQgCgNgJgJQgGgHgHgBQgHgBgGABQgJAAgGAAQgIACgGAGQgHAHgDAKQgDALgBAJIgBAOIAAB/IhRAAIAAj3IBRAAIAAAdQALgQAMgHQAMgIANgCQAMgDAKAAQAIAAANACQANACANAIQAJAFAIAJQAIAJAFALQAFgHAHgJQAIgIAMgIQANgHANgEQANgDAOAAQAXABASAGQASAGALALQAMAMAGAOQAFANACALQABANAAAJIAACeg");
	this.shape.setTransform(1.1,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC98").s().p("EgjCgPtMAjCAASMAjKAAQIgpgpIgLfOIA0g0IozgDIoygFYl3gDl3gEl3AAYl1gBl3ABl3ADIozAFIoyAHIAzA0IgIn0IgEj6IgGj4IgFj6IgHj6IgHj6IgIjzEgjPgP6IgIEAIgHD6IgGD6IgGD6IgFD4IgFD6IgIH0IgBAzIA1ABIIyAHIIzAFYF3ADF3ACF1gBYF3gBF3gEF3gDIIygEIIzgEIA0AAIAAg0IgM/OIAAgpIgoAAMgjKAAQMgjPAAT");
	this.shape_1.setTransform(0,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().dr(-225,-100,450,200);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-230.2,-104.1,460.5,210.8);


(lib.Star_anim = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEC98").s().rr(-29.25,-29.25,58.5,58.5,-29.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0A535").s().p("AjvAAQABgmAMgkQAMgkAWgeQAWgeAegWQAegWAkgMQAkgMAmgBQAnABAkAMQAkAMAeAWQAeAWAWAeQAWAeAMAkQAMAkAAAmQAAAngMAkQgMAkgWAeQgWAegeAWQgeAWgkAMQgkAMgnAAQgxAAgrgSQgrgTghghQghghgTgrQgSgrgBgygAjPAAQABAiAKAfQALAfATAaQATAaAaATQAaATAfALQAfAKAhABQAigBAfgKQAfgLAagTQAagTATgaQATgaALgfQAKgfABgiQgBgqgQglQgQgmgcgdQgdgcgmgQQglgQgrgBQghABgfAKQgfALgaATQgaATgTAaQgTAagLAfQgKAfgBAhg");
	this.shape_1.setTransform(0,0,0.75,0.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0A535").s().p("AjvAAQABgmAMgkQAMgkAWgeQAWgeAegWQAegWAkgMQAkgMAmgBQAnABAkAMQAkAMAeAWQAeAWAWAeQAWAeAMAkQAMAkAAAmQAAAngMAkQgMAkgWAeQgWAegeAWQgeAWgkAMQgkAMgnAAQgxAAgrgSQgrgTghghQghghgTgrQgSgrgBgygAjqAAQAAAnAMAjQAMAjAWAdQAVAeAeAVQAdAWAjAMQAjAMAmAAQAnAAAjgMQAjgMAdgWQAegVAVgeQAWgdAMgjQAMgjAAgnQgBgwgSgqQgSgrggggQgggggrgSQgqgSgxgBQgmAAgjAMQgjAMgdAWQgeAVgVAeQgWAdgMAjQgMAjAAAmg");
	this.shape_2.setTransform(0,0,0.938,0.938);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.2,-29.2,58.5,58.5);


(lib.Phantom = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF00").s().de(-18,-18,36,36);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18,-18,36,36);


(lib.Mouth = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0A535").s().p("AGFBIIgfAYYgFAEgFAEgGAEIgQAKYgLAHgKAHgLAHYgLAFgMAGgLAGYgKAHgNAEgLAFYgMAEgLAGgMADIgkALYgMADgNACgMADYgGABgGABgGABIgTACYgMABgNACgMABIglABIgIAAIgCAAIgBAAIgBAAYACAAgBAAAAAAIAAAAIgFAAIgUgBIgTgBYgHgBgGAAgGgBIgkgGIgJgBIgJgCIgSgEYgMgDgMgDgMgEIgjgMYgLgEgLgGgMgEYgGgDgGgCgFgDIgQgJIgRgJYgFgDgGgCgFgEIgfgVIgIgFYgDgCgCgCgDgCIgOgMIgPgMIgHgGIgHgHYgJgJgKgJgJgJIgZgdYgIgHgHgLgHgLYgIgKgGgLgGgLYgDgGgEgFgDgGIgIgRIgHgSYgDgGgCgGgCgGYgEgMgFgMgCgMYgDgNgEgMgCgNIgFglIgPALIBDAbIBEAYYAWAIAXAGAYAIYAXAGAXAGAYAGYAXAFAYAEAYAFYAYAEAYADAYADIBIAHIBJADIBHgBYAYgBAYgBAYgCYAZgDAYgCAYgEYAYgEAYgEAYgEYAXgGAYgFAYgGYAXgGAXgHAXgHIBFgXIBEgaIghgaIgGArIgJAqYgEAOgEAOgEAOIgIAUYgDAHgCAHgDAHIgKATYgDAHgDAHgDAGIgLATYgEAHgEAGgEAEIgMATYgFAGgEAGgEAGYgKAMgJAMgJALIAAAAAGJBNYALgLAMgKALgKYAFgFAFgGAGgGIAPgRYAFgFAFgHAFgEIAOgSYAFgGADgHAFgGIAMgUYAEgHADgHAEgHIALgUYAGgPAGgOAGgPIANgtIAKguYADgMgIgNgNgCYgEgBgEAAgDABIgDABIhEAVIhDATIhFAQIhEANIhFALIhGAJIhFAGIhEACIhGAAIhGgEIhGgGIhGgKIhFgLYgXgFgXgFgXgFIhFgRIhDgWIgCAAYgFgCgGADgCAGYgBACAAACABABIAHAnYADANAEANADANYADANAGAMAEAMYACAHACAGADAGIAIASIAIASYADAGADAGADAGYAHALAFAMAIALYAHALAHAKAIALIAXAgYAJAKAIAKAJAKIAGAIIAHAHIAOAOIAOAPYADACACACACADIAIAGIAfAaYAKAJAMAHALAHIARAMYAGADAGADAGAEYAMAGAMAGANAGIAmAPYANAFANADANADIAUAFIAKACIAKACIAqAFYAHABAGAAAHAAIATABIATABIAFAAIACAAIABAAIABAAIADgBIAIAAIAogDYAOgBANgDANgCIAUgEYAHgBAGgCAHgCYANgEANgDANgEIAmgPYAMgFAMgHAMgGYALgHANgFAKgJYALgHALgIALgIYALgIAKgJAKgJIAPgNYAEgFAFgEAEgFIAagdIAAAA");
	this.shape.setTransform(0.6,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmNBLQiIiFgYi2QItDSIujSQgYC2iICFQilCmjpAAQjoAAilimg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57,-26.6,115.3,53.2);


(lib.Body = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0A535").s().p("ATVAHYAAAAgBAHAAAPYgBAPABAWgDAcYgEA4gKBSgdBmYgEAMgDANgEANYgFAOgFANgEAOYgFANgGAOgFAOYgGAOgFAPgHAOYgaA6ggA9gpA8YhRB6hyB7iWBkYhLAxhTArhbAiYhaAihiAWhmAMYgNABgNABgNABYgNABgNABgNABYgNAAgNAAgNAAIgTABYgGAAgGgBgGAAYgNAAgNgBgOAAYgNgBgNgBgNgBYgbgBgagFgbgDYg1gJg1gKg1gQYgagHgagKgagJYgNgFgNgFgNgFIgTgIIgTgJYhmgthhg+hXhJYgsglgpgpgngrYgngrgjgvgggxYgggwgdg0gZg1YgZg1gUg4gSg4YgRg4gMg7gIg6YgJg7gDg7gBg7YABgbAAggADgcYACgPAAgOACgPIAGgsYAKg6AMg6ASg4YASg4AUg3Aag1YAag0AcgzAhgwYCCjBC4iWDJhZIATgIIATgIYANgFANgFANgFYAagIAZgKAagHYA0gPA1gLA0gIYAbgDAagFAagBYANgBANgBANgBYANAAANgBANAAIARgBIAUABYANAAANAAANAAYANABANABAMABYANABAMAAANACYBlAMBgAWBaAhYBaAhBSAqBLAxYCVBhByB5BRB4YApA8AhA8AaA5YAHAOAFAOAGAOYAGAOAGAOAFAOYAEANAFANAFANYAEAOAEAMAEANYAeBkALBTAFA4YAEAcAAAVABAPYAAANABAHAAAAIAAAAATbAHYAAAAAAgHAAgNYgBgPACgWgCgcYgDg5gHhTgahoYgbhngth7hRh+Ygog/gwhAg6g9Yg5g9hDg7hMg0YhNg0hVgthdgkYhdglhlgZhpgNYgOgCgNAAgOgCYgNgBgNgBgOgBYgNAAgNgBgOAAIgTgBYgBAAgCAAgBAAIgCAAIgFAAIgJABYgNAAgOAAgOABYgNAAgOABgOABYgbACgcAEgcADYg3AIg3ALg3AQYgcAIgaAKgcAJYgNAFgOAFgNAFIgUAIIgUAJYhqAvhlBAhbBMYguAngrAqgoAtYgoAtgkAxgiAyYgiAzgdA2gaA3YgaA4gVA5gSA7YgRA7gNA8gJA9IgGAuYgCAPAAAQgCAPYgCAgAAAcgBAeYABA+AEA9AKA9YAJA8ANA9ASA6YATA6AVA6AbA3YAbA2AdA2AiAyYAiAyAlAwAoAsYAoAsArAqAuAlYBbBMBkA+BpAtIAUAJIAUAIYANAFAOAFANAFYAbAJAbAKAbAHYA2AQA3AKA3AIYAbAEAbAEAcABYANABAOABANABYAOAAANAAANAAYAHAAAEABAIAAIAUgBYANAAAOgBANAAYANgBANgBAOgBYANgBANgBANgCYBogNBkgYBcgkYBcgjBUgtBMgzYCYhnByh/BQh8YAog+Ahg+AZg7YAHgOAFgPAFgOYAGgPAFgNAFgOYAEgOAFgOAEgNYAEgOAEgNADgNYAchmAJhTADg5YACgcAAgWAAgPYABgOAAgIAAAAIAAAA");
	this.shape.setTransform(-1.1,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC98").s().de(-123,-123,246,246);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-125.3,-125.9,248.7,250.4);


(lib.Arm = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0A535").s().p("AEFnHYAAAAAEAiAHA7YAEAeAEAkAGApYACAUADAWADAXYABAMACAMABAMYACAMABAMABANYADAZADAbADAbYACAbACAaACAdYAAAEAAAEAAADIAAALYAAAHAAAIAAAHYABAPgCAOgBAPYAAAIgBAHgBAHYgBAIgBAHgCAIYgBAHgCAHgBAHYgDAIgCAHgCAHYgDAIgDAHgDAHIgEAKYgCADgBADgCAEYgEAGgEAHgEAHYgEAGgEAGgFAHIgHAJIgHAJYgFAGgGAGgFAHYgMAJgJALgOAJYgMAJgOAHgOAHYgOAFgOAHgQACIgLADIgGABIgGABIgXACYgIABgIgBgIAAIgMAAIgBAAIgBAAYAAAAgCAAACABIgDgBIgGAAIgYgDIgXgEYgDgBgEgBgEgBIgLgDYgIgCgIgCgHgDYgPgGgPgFgOgIYgOgGgNgJgNgIYgHgFgGgFgHgEYgGgFgGgEgGgGIgSgPIgEgEIgBAAYAAAAgBgBACABIgBgBIgDgCYgCgDgEgDgBgCYgCgDgCgBgCgDIgFgIYgDgGgEgGgDgHYgFgMgFgOgEgOYgPg4gDg9gBg5IAAgKIAAgKYABgHAAgHAAgIYABgMAAgOABgNYAAgcADgaACgZYACgZACgYACgXYADgXADgWACgUYACgVACgTACgSYADgRACgRACgOYAEgeADgXACgQYACgQABgJAAAAIAAAAYAAgBgBgCgCAAYgBAAgCABAAABYAAAAgDAIgEAQYgFAPgHAWgIAdYgEAPgFAQgFARYgEASgEATgFAUYgFAUgEAWgFAXYgFAXgEAZgEAZYgEAagFAbgCAbYgBAOgBAOgCAOYAAAFgBAHgBAHIAAAGIAAACIgBACIAAACIAAALYgCA8ABBBASBDYAEAQAGARAJARYADAIAFAIAFAIIAJAMYACAEAEAEAEAEYAEAFACACADADIADACIABABYACACgBgBAAABIABAAIAFAEYAHAGAHAFAHAGYAGAFAIAFAHAFYAIAEAHAGAIAEYAPAJAQAJAQAHYAQAIASAFARAGYAIADAJACAJACIANADYAEABAFABAFABYAJABAJACAJABIAYABIAGABIADAAYADAAgCAAABAAIABAAIACAAIANAAYAJgBAJABAJgBIAcgEIAGgBIAHgCIANgDYASgEARgIARgHYAQgJAQgIAOgMYAPgKANgOANgMYAFgHAFgGAFgHIAEgEIACgDIABgBIABgBIABgBIAHgLYAFgHAFgHAEgIYAEgIAEgHAEgIYACgDACgEABgFIAFgMYADgIAEgIABgIYAUg/gBhCgFg6YgDgegDgbgDgbYgEgbgEgbgEgZYgCgNgCgMgCgMYgCgMgCgMgCgLYgEgXgDgWgEgVYgHgogGgkgFgdYgKg7gGgiAAAAYgBgBgBgBgCAAYgBAAgBACAAAB");
	this.shape.setTransform(-0.7,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC98").s().p("AANG+QiQgGh5hrQhOhFAGjfQAFi+BDkoIH8AAIAtErQAUCJADBIQAFBZgPA9QgQBAgqA4QhUBxiQAAIgPAAg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.4,-44.9,69.5,91.9);


(lib.Sky = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#292B3F","#15131C"],[0,1],0.1,-303.4,0.1,303.5).s().p("Eg+eAu3MAAAhdtMB89AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-400,-300,800,600);


(lib.Mountains = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0E0E").s().p("EhOMAVaYA9gtA+gtA9guYA9gtA9gtA8gvIC2iJIC0iLYA8gvA9guA7gvIC0iMICziNICyiOICyiOICyiNYB2hgB2hfB1hhYA7gwA6gwA7gxYA6gxA6gxA6gxYA6gxA5gxA6gyYA6gyA5gxA6gyIhGgBID2DLYBSBDBSBEBSBEIB7BmIB6BmIB5BoIB5BnIAOAMIAOgJYB4hHB4hGB4hFIC0hoIC1hnIgbAAICFBUICGBVYBZA5BYA6BXA5IAVAOIAXgQIGGkEIDCiCIDCiDYCBhYCBhYCAhZIGCkKIhcgEIFOEoIFQEnYDgDDDiDDDiDBIAmAgIAsgSIGiiqIGhisIhMgTIFDFwICiC2ICiC3ICkC3YA2A9A3A8A3A8IClC2YAbAeAcAeAcAeIBTBaIAMgKIhLhhYgYghgZgggZggIiXjCYgyhAgyhBgyhAIiYjBIiYi/IiZi+Ikzl9IgeglIgvARImnCfImlCgIBRAOYjfjFjhjEjhjCIlUkiIlUkhIgugnIguAiIl8ESYh/Bch+Bbh+BdIi8CLIi8CLIl4EYIAtgBYhZg1hcg1hbg1IiJhQIiIhQIgOgIIgOAIIizBrIizBqYh3BGh4BGh5BGIAcACIh3hqIh2hrIh2hrIh1hsYhPhIhOhJhNhIIjqjZIgggeIgmAcYg8Avg8Avg8AuYg8Avg8Avg7AvYg8Avg7Avg8AwYg7Avg7Awg7AwYh1Bgh1Bhh1BhIivCQIivCSIiuCTIitCUIitCUYg6Ayg5Axg6AyIisCWIirCXYg5Ayg4Azg5AyYg5Azg3A0g5AzIAKAM");
	this.shape.setTransform(-4.4,-71.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#352415").s().p("EhOVAb4Igox0MAsEgkDIPANIILPmkIIcFKIX4w4IVGSSINIlKITsXaIBaZxg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-505.9,-208.9,1011.4,408.5);


(lib.Building_Tall = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape.setTransform(20.6,117.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_1.setTransform(1.5,117.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_2.setTransform(-17.6,117.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_3.setTransform(20.6,85.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_4.setTransform(1.5,85.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_5.setTransform(-17.6,85.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_6.setTransform(20.6,54.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_7.setTransform(1.5,54.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_8.setTransform(-17.6,54.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_9.setTransform(20.6,22.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_10.setTransform(1.5,22.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_11.setTransform(-17.6,22.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_12.setTransform(20.6,-9.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_13.setTransform(1.5,-9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_14.setTransform(-17.6,-9.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_15.setTransform(20.6,-42.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_16.setTransform(1.5,-42.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_17.setTransform(-17.6,-42.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_18.setTransform(20.6,-75.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_19.setTransform(1.5,-75.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_20.setTransform(-17.6,-75.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_21.setTransform(20.6,-108.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_22.setTransform(1.5,-108.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_23.setTransform(-17.6,-108.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1C1C1C").s().p("AliW7IANi0IAHhZYACgeADgeABgeIAJi2IAEhaIACguIABgtIAFi1YABg8ACg8gBg8IAAi1YAAg8ABg9gCg8IgEiyYgCg9AAg8gEg8IgIi0IgEhbIgCgtIgDgtIgLi0YgFg8gDg8gFg8IgelnIg0AuIBzARIByALIBzAHIByABIBzgEIBzgJIBygOIBxgTIgmglIgSC0IgJBaIgFBaIgLC0YgCAfgBAegBAeIgCBaIgFC0IAAC1YAAA8gBA8ABA8IAECyIAFC0IAIC0IAHC0YADA8AFA8ADA8IALC0IAGBaIAHBZIAbFnIAAAAIgTlnIgFhaIgDhaIgHi0YgCg8gEg8gBg8IgDi0IgEizIAAi0IAAiyYAAg8ACg8ABg8IAFi0IAJizIAEhaYACgeABgeADgdIAPizIAHhaIALhZIAVixIAGgsIgsAHIhvAPIhwALIhvAHIhwABIhugEIhvgJIhvgNIhugTIg3gJIADA4IAXFmYADA8ACA8ADA8IAHCzIACAtIABAtIACBaIAECzYACA8gBA8AAA7IAACyYABA7gCA8gCA8IgECzYAAA8gEA8gDA7IgICzIgCAtIgDAsIgHBZIgMCzYgCAdgEAegCAeIgJBaIgSCzICaAN");
	this.shape_24.setTransform(-1.9,-2.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3F3F3F").s().p("AnCWeQCC0diC4eQHCBQHDhQQiHQJCHcyg");

	this.addChild(this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.8,-149.1,101.9,293.6);


(lib.Building_Squat = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape.setTransform(77.5,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_1.setTransform(59.9,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_2.setTransform(42.3,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_3.setTransform(24.7,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_4.setTransform(7.1,20.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_5.setTransform(-10.3,20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_6.setTransform(-27.9,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_7.setTransform(-45.5,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_8.setTransform(-63.1,20.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_9.setTransform(-80.7,20.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_10.setTransform(77.5,-11.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_11.setTransform(59.9,-11.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_12.setTransform(42.3,-11.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_13.setTransform(24.7,-11.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_14.setTransform(7.1,-11.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_15.setTransform(-10.3,-11.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#232323").s().p("Ag6BoIAAjPIB1AAIAADPg");
	this.shape_16.setTransform(-27.9,-11.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_17.setTransform(-45.5,-11.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_18.setTransform(-63.1,-11.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#232323").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_19.setTransform(-80.7,-11.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#0E0E0E").ss(8.2,0,0,3).p("AwuGiQA6mlg6l9QO3AMSmgMQhCG+BCFk");
	this.shape_20.setTransform(0,-1.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#313131").s().p("AwuGSQA6mmg6l9QO3AMSmgMQhCG/BCFkg");

	this.addChild(this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.8,-44.3,223.7,88.6);


(lib.Building_Regular = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape.setTransform(34.2,104.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_1.setTransform(16.4,104.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_2.setTransform(-1.1,104.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_3.setTransform(-18.8,104.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_4.setTransform(-36.2,104.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_5.setTransform(34,72.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_6.setTransform(16.4,72.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_7.setTransform(-1.2,72.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_8.setTransform(-18.4,72.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_9.setTransform(-36.3,72.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_10.setTransform(34.2,39.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_11.setTransform(16.4,39.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_12.setTransform(-0.9,39.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_13.setTransform(-18.4,39.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_14.setTransform(-36.1,39.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_15.setTransform(34,5.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_16.setTransform(16.4,5.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_17.setTransform(-0.8,6.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_18.setTransform(-18.6,6.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_19.setTransform(-36.2,6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_20.setTransform(34.1,-26.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_21.setTransform(16.4,-26.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_22.setTransform(-1.1,-26.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_23.setTransform(-18.4,-27);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_24.setTransform(-36.1,-27);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_25.setTransform(34,-59.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_26.setTransform(16.6,-59.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_27.setTransform(-1.1,-59.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_28.setTransform(-18.9,-59.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_29.setTransform(-36.4,-59.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_30.setTransform(34.2,-92.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_31.setTransform(16.5,-92.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_32.setTransform(-0.9,-92.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_33.setTransform(-18.5,-92.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2A2A2A").s().p("Ag7BoIAAjPIB2AAIAADPg");
	this.shape_34.setTransform(-36,-92.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#151515").ss(8.2,0,0,3).p("AqBT/QB3ydh305QI6AkLHgkQiWTqCWTs");
	this.shape_35.setTransform(0.1,-1.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#383838").s().p("AqATrQB3ych305QI5AkLIgkQiWTqCWTrg");

	this.addChild(this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.6,-130.2,137.3,260.3);


(lib.BlackFog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mist
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EiPlALAIAA1/QEQAPF8BPQDCAoH2B7QHFBvD/AwQGDBJEmAGQDjAED/g6QCagkEphhQEuhiCcglQEHg+DsgBQEZAAF6AhQC6AQHzA4QG3AxD+ATQF+AcEugJQDUgGD7gsQCbgcEmhEIDig0QCNgfBXgQQECgvDZgKQEPAPF8BPQDCAoH2B7QHFBvD/AwQGDBJEmAGQDjAED+g6QCbgkEphhQEuhiCcglQEHg+DtgBQEYAAF6AhQC6AQHzA4QG3AxD+ATQF+AcEugJQDUgGD7gsQCbgcEmhEQExhHCVgcQECgvDbgKIAAV/g");
	this.shape.setTransform(440.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("EiQJALAIgGmgIAAvfQDIALEDAuQBdAQBlAVQBqAWDBAuIGRBhIBwAbQEUBCDCAoQBFAOA7ALQBnATBgAOQCpAZCXAKQBWAGBQABQBVABBYgHQCWgMCgglIAsgKQCYgmEChSIAmgNQERhXCVghQETg+DjAAIAPAAQDZABEQATICdAMIC0ARIFEAhIC3AUICUAPQC7ATCUAOQB3ALBfAHQB4AJBxAGQD0ALDSgEIAhgBQDIgIDogoIBWgQQCQgbDdgzIB1gbIBugYQCFgdBVgQIAKgCQCigdCTgQQBYgKBSgDQBQAEBcAKQCjARDAAkIB8AYQB1AXDeA1IFqBXIBnAZQEcBDDFApIB+AZQC2AiCiATQCvAVCXADIAPAAQCPADCcgXQBagNBegWQA+gOBUgXQCAglCzg6IAYgIQEXhZCYgjIAGgBQD4g6DkgCIAaAAQDdAAEXAVICgANQByAKDjAYIFXAlIAEAAQCpASCQAOQDEATCPAKIAsADQCfALCSAGQDMAHCygEIBKgDQC1gLDSgkIBOgOQCSgcDjg0IB4gbQDZgwB3gWQBDgNBBgJQCrgaCYgIIAYgBIAEEhIACCiIAAO5g");
	this.shape_1.setTransform(435.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("EiQuALAIgMmbIAAvkQDJALEEAuQBdARBmAVQBqAWDCAuIGTBhIBwAbQEVBDDEAnQBFAOA8ALQBmASBhAOQCpAYCYAJQBXAGBQABQBVAABZgHQCWgNChgkIAsgLQCZglEDhRIAngMQEPhXCZggQEUg8DkAAIAPAAQDaABERATICdAMQBFAFBwALIFFAfIC4ATICVAPIFQAgIDXATQB4AJByAGQD0AMDUgEIAhgBQDKgGDngnIBXgQQCSgaDcgzIB2gaIBvgYQCEgdBXgQIAKgCQCigeCUgQQBYgKBTgEQBRAEBcAJQCjARDBAjIB9AYQB1AXDfA1IFrBWIBoAZQEdBEDGAoIB/AZQC3AhCiATQCwAVCYADIAOAAQCQACCdgXQBbgOBegVQA+gOBUgYQCCgkCzg6IAYgIQEXhYCaghIAGgBQD4g5DngCIAZAAQDgACEWAVQBOAGBTAHQBzALDjAXIFYAkIAEAAQCqASCRAMQDEASCQAKIAsADQCgALCSAFQDNAHCzgEIBLgDQC0gKDVgjIBOgPQCTgaDkg0IB3gbQDagvB5gWQBDgMBBgJQCrgaCZgJIAYgBQADCQAGCOIAECgIgBO8g");
	this.shape_2.setTransform(430.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("EiRTALAIgSmXIAAvoQDKALEFAuQBeARBmAWQBrAWDDAuIGUBhIBwAbQEXBDDEAnQBFAOA8AKQBoASBgANQCpAYCaAIQBXAFBRABQBVAABZgHQCXgOChgjIAtgLQCaglEEhQIAmgMQEQhVCbggQEWg7DkAAIAPAAQDcACERASICeAMIC1AQIFHAeIC5ASICVAOIFSAgQB3ALBhAHQB4AKBzAGQDzAMDXgCIAhgBQDLgGDogmIBYgPQCSgaDdgxIB3gaIBugYQCFgdBXgQIALgCQChgeCVgRQBagKBSgFQBSADBcAKQCkAQDBAiIB9AYQB3AXDfA0IFtBWIBoAZQEgBEDGAoICAAZQC3AhCjATQCwAUCaACIAOAAQCQACCegXQBbgOBegWQBAgOBTgXQCDglCzg5IAZgIQEWhXCcggIAHgBQD3g4DpAAIAaAAQDiADEWAVIChANQB1ALDiAXIFaAkIAEAAQCqARCSALQDGAQCPAKIAtADQCgAKCTAFQDNAHC1gEIBLgCQC0gKDWgjIBPgOQCVgaDkgzIB4gaQDagvB6gVQBDgMBCgKQCrgZCagJIAYgBQAFCNAICNIAHCdIgBPAg");
	this.shape_3.setTransform(425.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.498)").s().p("EiR4ALAIgYmTIAAvsQDLALEGAvQBeAQBnAWQBrAXDEAuIGWBhIBwAcQEYBCDFAnQBHAOA8AKQBnASBhAMQCqAXCaAIQBYAEBRAAQBWAABZgIQCXgNCigkIAtgKQCbglEEhPIAogLQENhVCggeQEYg6DkAAIAPAAQDeACERASICeAMQBGAFBwAKIFIAdQBYAHBhAKICXAOIFTAeIDZATQB5AJBzAHQDyAMDZgBIAigBQDNgEDngmIBYgOQCVgZDcgxIB3gZIBwgYQCFgdBYgQIAKgCQChgeCXgSQBagLBSgEQBTACBcAKQCmAODBAjIB+AYQB3AWDgA0IFvBWIBoAZQEhBDDHAoQBFAOA7AKQC5AiCjASQCwAUCbACIAPAAQCPABCggYQBcgNBegWQBAgPBTgXQCEglC0g4IAYgIQEXhWCegfIAHgBQD3g3DsABIAaABQDjADEWAWICiANQB2ALDiAYQCXAPDFATIADAAQCpARCVAKQDGAPCQAJIAtADQChAJCUAFQDNAHC3gEIBKgCQC1gKDYghIBPgOQCXgaDjgyIB4gaQDbguB7gVQBFgMBBgJQCrgZCbgKIAZgBQAGCMALCKIAJCbIgCPEg");
	this.shape_4.setTransform(420.6,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.498)").s().p("EiSdALAIgemPIAAvwQDLALEIAvQBeARBoAWQBsAWDEAvIGXBiIByAbQEYBDDGAmQBHAOA8AKQBoARBiAMQCpAXCdAGQBYAEBQAAQBYgBBYgIQCZgOCigjIAtgKQCcgkEFhOIAogMQENhTCigeQEag5DkABIAPAAQDgACESASICeALIC3APIFJAbIC6ARICXANIFUAdIDaATQB6AKB0AGQDxANDcAAIAiAAQDPgEDngkIBYgPQCWgYDdgwIB3gZIBwgXQCGgdBZgQIAKgDQChgdCYgTQBagLBTgFQBTACBcAJQCmAODCAiIB/AYQB4AWDgA0IFxBVIBpAZQEiBDDIAoICBAYQC5AhCkASQCxAUCcABIAOAAQCQACChgZQBcgOBfgWQBAgOBTgXQCFglC1g4IAYgIQEWhVChgeIAHgBQD2g2DvADIAZAAQDmAFEWAWICiANIFaAjQCXAPDFASIAEAAQCqAQCVAJQDIAOCQAJIAtACQCiAJCUAFQDOAHC3gDIBMgDQC0gJDaghIBPgNQCZgZDjgyIB5gZQDbgtB8gVQBFgMBCgJQCsgZCcgKIAYgBQAICKANCIIAMCZIAAOlIgDAig");
	this.shape_5.setTransform(415.6,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.498)").s().p("EiTBALAIglmKIAAv1QDMALEKAwQBdAQBpAXQBtAWDEAvIGZBiIByAbQEZBDDIAmQBHAOA9AKQBoARBiALQCpAWCeAFQBYAEBRgBQBYgBBZgIQCZgOCjgjIAtgLQCdgjEGhNIAogMQEMhSCmgcQEbg4DlABIAPAAQDhACESASICgAKIC3APIFKAaIC7AQICXAMIFWAdIDbATQB6AKB1AGQDxAODeABIAiAAQDQgDDogkQAogFAwgJQCXgXDdgvIB4gZIBxgXQCFgdBagRIALgCQChgeCagTQBZgLBUgFQBTABBcAJQCoANDCAiIB/AXQB5AWDhA0IFyBVIBqAYQEkBDDIAoICBAYQC7AhCkASQCyATCcABIAPAAQCQABCigZQBdgOBegWQBBgPBUgXQCGglC0g3IAZgIQEWhUCkgdIAGAAQD2g1DxADIAaABQDoAGEVAWICjAOIFbAiQCYAPDGARIAEAAQCpAQCXAIIFZAVIAtACQCjAICVAFQDOAHC4gDIBMgCQC0gJDdggIBPgOQCagYDjgwIB6gZQDbgtB+gVQBEgLBDgKQCsgYCdgLIAZgBQAJCIAQCGQAIBMAGBLIAAOpIgEAig");
	this.shape_6.setTransform(410.6,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.498)").s().p("EiTmALAIgrmGIAAv5QDNALELAwQBdARBqAWQBuAXDEAvIGaBiIBzAcQEbBDDIAlQBHAOA9AJQBpARBjALQCoAVCgAEQBZADBRgBQBYgBBZgIQCagPCjgjIAtgKQCfgjEHhMIAogLQELhRCpgcQEeg3DkABIAQAAQDiADETARICgALIC4AOIFMAZIC7APICXALIFXAcIDdATQB7AKB1AHQDwAODhACIAiAAQDSgCDngiIBZgOQCZgWDcgvIB6gYIBwgXQCGgdBbgRIAKgCQChgeCcgUQBZgMBUgFQBUABBcAIQCpANDCAhICAAXQB7AWDgAzIF0BVIBqAYQEmBDDJAoICCAYQC7AgCmASQCxATCeABIAOgBQCRABCjgZQBdgPBfgVQBCgPBTgXQCHglC1g3IAYgIQEXhTClgbIAHgBQD1g0D0AFIAaAAQDqAHEVAWICjAPIFdAiQCYAPDHARIAEAAQCpAPCYAGIFaAUIAuACQCjAHCVAFQDQAHC6gDIBLgCQC1gJDdgfIBRgNQCbgXDjgwIB6gZQDdgsB+gUQBFgMBDgJQCsgYCegLIAZgBQAKCGATCEQAKBKAGBLIAAOsIgDAig");
	this.shape_7.setTransform(405.6,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.498)").s().p("EiULALAIgwmCIAAv9QDNALEMAwQBdARBrAXQBuAXDGAvIGbBjIBzAbQEcBDDJAlQBIAOA9AJQBqAQBjALQCpAVCgACQBaADBRgBQBZgCBYgIQCbgQClgiIAtgKQCfgjEIhLIAogLQEKhQCtgbQEeg1DlABIAQAAQDlADETARICgAKQBIAFBwAJIFNAXIC8AOICZAMIFYAaIDeAUQB7AKB2AHQDvAODkAEIAiAAQDUgBDngiIBZgNQCagWDdguIB6gYIBwgXQCHgcBbgRIALgCQChgeCdgVQBagMBTgGQBWABBbAIQCqAMDDAhICBAWQB6AWDiAzIF2BUIBrAZQEnBCDJAnICCAYQC8AhCnARQCxATCfAAIAQAAQCPAAClgaQBegOBegWQBDgPBTgXQCJglC0g2IAZgIQEWhSCogaIAHgBQD0gzD4AGIAZABQDsAIEUAWIClAPIFeAiQCZAQDHAPIAEAAQCpAOCaAGIFcASIAtACIE6ALQDPAHC7gCIBNgCQC0gJDggeIBRgNQCdgXDigvIB7gYQDdgsB/gUQBFgLBEgJQCtgZCfgLIAYgBQANCFAVCCQALBJAHBJIAAOxIgEAhg");
	this.shape_8.setTransform(400.6,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.498)").s().p("EiUwALAIg2l+IAAwBQDOALENAxQBdARBsAWQBvAYDFAvIGeBjIBzAbQEdBDDLAlQBHAOA+AJQBqAQBkAKQCoAUCjACQBZACBSgCQBZgCBZgIQCcgQCkgiIAtgKQChgjEJhJIAogLQEJhPCwgaQEhg1DlACIAPAAQDnADETARIChAKIC5ANIFPAWQBaAFBiAIICZALIFaAaIDfATQB7AKB2AIQDwAODmAFIAiAAQDVAADoggIBZgNQCbgVDegtIB5gYIBygXQCHgcBcgRIAKgCQChgeCegWQBbgMBUgGQBVAABcAIQCrAKDDAhICBAXQB9AVDhAzIF4BUIBrAYQEpBCDKAnICDAYQC9AgCnASQCyASCgAAIAPgBQCQAACmgaQBegPBfgVQBDgQBTgWQCKglC1g3IAYgHQEXhRCqgZIAHgBQD0gyD5AIIAaAAQDvAJEUAXIClAPIFeAjQCaAPDIAOIAEAAQCpAOCcAFIFcAQIAuABIE7AMQDQAGC9gCIBMgCQC0gIDigeIBRgMQCfgXDiguIB8gYQDdgqCAgUQBGgMBDgIQCugZCggLIAZgBQAOCDAYB/QALBIAJBJIAAO0IgFAhg");
	this.shape_9.setTransform(395.6,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.498)").s().p("EiVVALAIg8l5IAAwGQDPALEOAxQBeARBsAXQBwAXDGAvIGeBkIB1AcQEeBDDLAkQBIANA/AJQBpAQBlAKQCoATCkABQBaABBSgBQBagDBYgJQCdgQClgiIAtgKQCigiEKhIIAogLQEIhOCzgZQEjgzDmACIAPAAQDoADETARICjAJIC5AMQCGAKDKALIC9ANQBSAFBIAFQDBANCaAMIDgAUQB7AKB3AIQDvAODpAHIAiAAQDXABDnggQAqgFAwgHQCdgUDdgtIB6gXIBzgXIDkgtIAKgCQChgfCfgWQBcgNBUgGQBVAABcAHQCsAKDEAgICCAXQB9AWDiAxIF5BUIBsAYQEqBDDLAmQBHAOA9AKQC+AgCnARQCzASCggBIAQAAQCQAACngbQBfgPBfgWQBDgPBTgXQCLglC2g2IAYgHQEWhPCtgZIAHgBQD0gwD8AIIAaABQDwAKEUAXIClAPIFgAjQCbAPDJAOIAEgBQCoAOCdADIFeAPIAuABIE9ALQDQAGC+gCIBNgCQCzgIDlgcIBRgMQCggWDjguIB8gXQDdgqCCgUQBGgLBDgJQCugYChgLIAZgCQAQCBAaB+QANBHAKBHIAAO4IgFAhg");
	this.shape_10.setTransform(390.6,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.498)").s().p("EiV5ALAIhDl1IAAwKQDPALEQAxQBeARBtAYQBwAXDHAvIGgBkIB0AcQEgBDDNAkQBHANBAAJQBqAQBlAJQCnASCmAAQBbABBSgCQBagDBZgJQCdgRCmghIAtgKQCjgiEKhHIApgKQEHhNC3gYQElgyDlABIAPAAQDrAEETAQICjAKIC6ALQCHAJDKALQBbAFBjAHICaAJQDCANCbALIDgAUQB8ALB4AIQDuAPDsAHIAjAAQDYADDnggQApgEAxgIQCegTDdgsIB7gXIBzgWIDlgtIAKgDQChgeChgXQBcgNBUgHQBXAABcAHQCsAJDFAgICBAWQB/AWDiAxIF8BUIBsAYQErBCDLAmICFAYQC/AgCoAQQCzASCigBIAQgBQCQAACngbQBggQBggVQBEgQBSgWQCMglC2g2IAZgHQEWhOCvgYIAHAAQDzgwD+AKIAaAAQDzAMEUAXICmAPIFgAjQCdAPDJANIADAAQCpANCfACIFfAMIAuACIE+AKQDQAGDAgBIBNgCQCzgIDngcIBRgMQCigVDigtIB9gXQDegpCDgTICJgUQCvgYCjgMIAZgBQAQB/AeB7QAOBGALBGIAAO9IgGAgg");
	this.shape_11.setTransform(385.7,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.498)").s().p("EiWfALAIhIlxIAAwOQDQALERAyQBeARBuAXQBxAYDHAvIGiBlIB1AbQEgBDDOAkQBIANA/AJQBrAPBmAJQCnASCogCQBaABBTgDQBagDBagJQCegRCmghIAtgKQCkghEMhGIAogLQEGhMC6gXQEngxDlACIAQAAQDsAEETAQICkAJQBKAEBxAHQCGAJDMAKQBcAEBjAHQBTAEBIAFQDCAMCcALIDiAUID0ATQDuAPDuAIIAjABQDZADDogeQAqgFAwgHQCfgSDegrIB8gXIBzgWIDmguIAKgCQChgeCigYQBdgNBUgHQBWgBBdAGQCuAJDEAfICDAWQB/AWDjAxIF9BTIBsAYQEuBCDLAmICGAYQDAAfCoAQQC0ASCigCIAQAAQCQgBCqgbQBggQBfgWQBFgPBTgXQCMglC3g1IAZgHQEVhNCygXIAGAAQDzgvECALIAaABQD1AMESAYICoAPIFhAjQCeAPDJAMIAEAAQCoAMChACIFfAKIAvACIFAAJQDQAGDBgBIBOgCQCzgHDogbIBSgMQCkgUDigtIB9gWQDegpCEgTQBHgLBEgIQCvgYCjgMIAZgCQASB+AhB5QAPBFAMBFIAAPAIgHAgg");
	this.shape_12.setTransform(380.7,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.498)").s().p("EiXDALAIhPltIAAwSQDRALESAyQBeARBvAYQBxAYDIAvIGjBlIB2AcQEhBDDPAjQBIANBBAJQBqAOBnAJQCnARCpgDQBbABBSgDQBcgEBZgJQCfgSCmghIAugJQClghEMhFIApgKQEGhLC9gXQEogvDmACIAQAAQDtAEEUAQICkAJIC8AKQCGAIDNAJQBdAEBiAHQBTADBJAFQDDALCdALIDiAUID2AUQDtAPDxAKIAiAAQDcAFDngeIBbgLQCggRDegrIB8gWIB0gWIDnguIALgCQCggeCkgZQBdgOBUgHQBYgBBbAGQCvAHDGAgICDAVQCAAWDkAxIF+BSIBtAYQEvBCDMAmICHAXQDAAgCpAQQC0ARCkgCIAQgBQCQgBCqgcQBhgPBggWQBFgQBTgWQCOgmC2g0IAZgHQEWhMC0gVIAHgBQDyguEEANIAaABQD3ANESAYICoAQIFjAjQCeAODKALIAEAAQCoAMCiAAQDRAFCQAEIAvABIFBAJQDRAGDCgBIBOgBQCzgIDqgaIBSgLQCmgUDigrIB9gWQDfgoCFgTQBHgLBEgJQCwgXCkgNIAZgCQAUB8AjB4QARBDANBEIAAPEIgHAgg");
	this.shape_13.setTransform(375.7,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.498)").s().p("EiXoALAIhVloIAAwXQDSALETAzQBeARBwAYQByAYDJAvIGkBlIB2AcQEjBDDPAjQBJANBAAIQBrAPBoAHQCnARCpgDQBdgBBSgDQBcgEBZgJQCggSCnghIAugJQCmghENhEIAqgKQEDhKDBgVQEqgvDnACIAPABQDvAEEVAQICkAIQBLADBxAHQCHAIDOAIQBdADBjAGQBUAEBIAEQDEALCdAKIDkAVID3AUQDsAPD0ALIAjABQDcAFDogcQArgEAvgHQCigRDfgqIB8gVIB1gWIDnguIAMgCQCggfClgZQBdgOBUgHQBZgCBcAGQCvAGDGAfQBAAKBEAMQCBAVDkAwIGABTIBuAYQEwBBDNAmICHAXQDCAfCpAQQC0ARCmgDIAPAAQCRgCCrgcQBhgQBggWQBGgPBTgXQCPglC2g0IAagHQEVhLC3gUIAHgBQDxgsEHANIAaABQD5APESAYICpAQQCEAODgAVQCeAODLALIAEAAQCoALCkgBQDRADCRAEIAvABQCoADCaAFQDRAGDEgBIBPgBQCygHDtgZIBSgLQCngUDigqIB+gWQDggnCFgTQBIgKBEgJQCwgXClgNIAZgCQAWB6AlB1QASBCAPBEIAAPIIgIAfg");
	this.shape_14.setTransform(370.7,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.498)").s().p("EiYNALAIhalkIAAwbQDSALEVAzQBeARBwAYQBzAZDJAvIGmBlIB2AcQEkBEDRAjQBIAMBCAIQBrAOBnAHQCoARCrgFQBcgBBTgDQBdgGBZgJQCggSCnggIAvgKQCnggEOhDIApgJQEEhJDEgVQErgtDnACIAQAAQDwAFEVAPIClAJQBMADBxAGQCHAHDPAHQBeAEBjAFQBUADBIAEQDFAKCeALIDlAUID4AVQDsAQD1AMIAkABQDeAGDngcQAsgEAwgGQCjgQDegpIB9gWIB1gVIDpguIALgCQCggfCngaQBdgOBVgIQBZgDBcAGQCwAGDHAeICEAWQCCAVDkAwIGDBSIBuAYQEyBBDNAmICIAXQDCAfCrAPQC0ARCmgDIAQgBQCRgCCsgcQBigQBggWQBGgQBUgWQCPgmC3gzIAagHQEVhKC4gTIAIAAQDxgsEJAPIAaABQD8APERAZICpAQQCGAODgAVQCfAODLAKIAFAAQCnALClgDQDTACCRAEIAvABQCpACCaAFQDSAGDFAAIBPgBQCzgHDtgZIBUgLQCogSDigqIB/gVQDggnCHgSQBHgLBFgIQCxgXClgOIAagCQAXB5AoBzQATBBAQBCIAAPMIgJAfg");
	this.shape_15.setTransform(365.7,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.498)").s().p("EiYyALAIhglgIAAwfQDTALEVAzQBeARByAZQBzAYDKAwIGnBmIB3AcQElBDDSAjQBJAMBBAIQBsAOBoAGQCnAQCtgGQBdgBBTgEQBdgGBZgJQChgTCoggIAvgJQCoggEPhBIApgKQEDhIDHgUQEugsDnADIAPAAQDzAFEVAPIClAIIC+AJQCIAHDPAGQBfADBjAFQBUADBJAEQDFAJCfAKQB7AKBrALID5AVQDrAQD4ANIAjABQDgAHDogaIBcgKQCkgPDfgpIB9gVIB2gVIDqguIALgCQCggfCogbQBdgPBVgIQBagDBcAGQCxAFDHAeICFAVQCDAVDlAwIGEBSIBvAXQEzBBDOAmICIAXQDDAeCsAQQC1AQCmgEIAQAAQCSgCCtgdQBigRBggWQBIgQBSgWQCSglC3gzIAZgHQEWhJC6gSIAHAAQDxgrEMAQIAaABQD+ARERAYICqARQCHAODgAVQCfAODNAJIAEAAQCnAKCngDQDUABCRADIAvABQCqACCbAEQDSAGDGAAIBPgBQCygHDxgXIBTgLQCqgSDigpIB/gVQDhgmCIgSQBIgKBFgJQCxgWCngOIAZgCQAZB3ArBwQAUBAAQBCIAAPQIgIAeg");
	this.shape_16.setTransform(360.7,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.498)").s().p("EiZWALAIhnlcIAAwjQDUALEXA0QBeARByAYQB0AZDKAwIGpBmIB4AcQEmBDDSAjQBKAMBCAHQBsAOBoAGQCnAPCugHQBdgCBUgEQBegGBYgJQCjgTCoggIAvgJQCpggEQhAIAqgKQEBhGDKgTQEwgrDnADIAQAAQD0AFEVAPICnAHIC+AJQCIAGDRAGQBeACBkAFQBUACBJAEQDGAICgAKIDnAVID6AWQDqAQD7APIAkABQDhAIDogaIBcgKQCmgODegnIB+gVIB2gVIDrguIALgCQChgfCpgdQBegOBVgIQBagEBcAFQCzAFDHAdICFAVQCFAVDlAwIGFBRIBvAYQE2BADOAmICJAWQDEAfCsAPQC1AQCogEIAQgBQCRgCCvgeQBjgQBggWQBIgQBTgWQCSgmC3gyIAagHQEVhIC+gRIAGAAQDxgqEOARIAbACQD/ARERAZICqARQCJAPDgAUQCgAODNAJIAEgBQCnAKCogEQDVgBCSADIAvAAQCrACCbAEQDSAGDIAAIBQgBQCygGDygXIBUgKQCsgRDhgpICAgUQDhglCJgSQBJgLBFgIQCxgWCogPIAagCQAaB1AtBvQAWA/ARBAIAAPUIgJAeg");
	this.shape_17.setTransform(355.7,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.498)").s().p("EiZ8ALAIhslXIAAwoQDUALEYA0QBfARByAZQB1AZDLAwIGrBmIB4AcQEmBEDVAiQBKAMBBAHQBtANBpAGQCnAOCvgIQBegCBUgEQBegHBZgJQCjgUCpgfIAugJQCrggERg/IApgJQEBhGDOgSQExgqDnADIAQABQD2AFEVAPICoAHIC/AIQCHAGDSAEQBgACBjAFQBWACBJADQDHAICfAKIDoAUID7AXQDqAQD+AQIAjABQDkAJDngZQAsgDAwgGQCogNDfgnIB+gVIB3gVIDsgtIAKgDQChgfCqgdQBfgOBVgJQBbgEBcAFQCzADDJAeICFAUQCGAVDlAvIGHBRIBwAYQE3BBDPAlICKAWQDFAfCsAOQC1AQCqgEIAQgBQCRgDCwgeQBjgRBggWQBJgQBSgWQCUglC4gyIAagHQEVhHC/gPIAIgBQDvgpERATIAbABQEBATERAZICrARQCKAPDfAVQCiANDNAIIAEAAQCnAJCqgGQDWgBCRACIAxAAQCqABCcAEQDTAGDJABIBQgBQCygGD1gWIBTgKQCugRDhgoICAgUQDigkCLgSICOgSQCxgXCpgOIAagCQAcBzAvBtQAXA9ATA/IAAPYIgKAeg");
	this.shape_18.setTransform(350.8,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.498)").s().p("EiagALAIhzlTIAAwsQDVAMEaAzQBeASB0AZQB1AZDLAwIGtBnIB4AcQEoBDDVAiQBKAMBCAHQBuANBpAFQCnAOCxgKQBegCBUgFQBfgHBYgJQClgVCogeIAwgKQCrgeERg+IArgKQEAhEDQgRQE0gpDnADIAQAAQD4AGEVAOICoAHIDAAIQCIAFDTAEQBgABBjAFQBWABBJADQDHAHChAKIDpAVID8AXIHqAhIAjACQDlAKDogYQAsgDAxgGQCogNDfgmICAgUIB3gVIDsguIALgCQCggfCsgeQBfgPBWgIQBbgFBcAFQC1ACDIAdICGAUQCHAVDmAvIGIBRIBxAXQE5BBDPAkQBKANBBAKQDFAeCtAPQC3APCpgFIAQgBQCSgDCxgeQBkgRBhgWQBIgQBTgWQCUgmC5gxIAZgHQEWhGDBgOIAIgBQDvgnETATIAbACQEDAUERAZICrARQCMAQDfAUQCiAODOAGIAFAAQCnAICqgGQDXgDCSACIAxAAQCrAACdAEQDTAGDKABIBQgBQCygFD2gWIBVgJQCvgRDhgnICCgTQDhgkCMgRICOgTQCzgWCqgPIAZgCQAeByAyBqQAYA9AUA+IAAPcIgLAdg");
	this.shape_19.setTransform(345.8,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.498)").s().p("EibFALAIh5lPIAAwwQDWAMEbA0QBeARB1AZQB2AaDLAwIGuBnIB5AcQEpBEDWAhQBKAMBEAHQBtAMBqAFQCmANCzgKICygIQBggIBZgKQCkgUCqgfIAwgJQCsgeESg9IArgJQD+hEDVgQQE1goDoAEIAQAAQD5AGEWAOICoAHIDBAHQCIAFDUACQBgABBkAFQBWABBJADQDJAGChAJIDqAVID9AYIHsAjIAkABQDmALDogXQAsgDAxgFQCqgMDfglIB/gUIB4gVIDuguIALgCQCggfCtgfQBggPBWgJQBbgFBcAEQC2ACDIAdICHAUQCIAUDmAvIGLBQIBxAYQE6BADQAkICLAXQDGAeCuAOQC3APCrgFIAQgBQCSgECygeQBkgRBhgWQBKgRBSgWQCWgmC4gxIAagGQEVhFDEgNIAHAAQDvgnEWAVIAbACQEGAUEQAaICsARQCNAQDfAUQCjAODPAFIAEAAQCmAICtgIQDYgECSACIAwAAQCtgBCdAEQDUAGDLABIBRAAQCxgGD5gUIBUgKQCxgPDhgnICCgTQDigjCNgRQBJgKBGgIQCzgWCrgPIAagCQAeBvA2BpQAZA7AVA9IAAPgIgLAdg");
	this.shape_20.setTransform(340.8,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.498)").s().p("EibqALAIh/lLIAAw0QDXAMEcA0QBeASB2AZQB3AaDMAwIGvBnIB5AcQErBEDXAhQBKAMBEAGQBtANBrAEQCmAMC0gLQBfgEBUgFQBggIBZgKQCmgVCqgeIAwgJQCtgeETg8IArgJQD+hCDXgQQE3gmDoAEIAQAAQD7AGEWAOICqAGIDBAHQCIAEDVACQBhABBkADQBXABBJADQDJAGCiAJQB8AKBvALID+AYIHuAkIAkACQDoAMDngWQAtgDAxgFQCrgLDfglICAgUIB5gUIDvguIALgCQCggfCuggQBggPBWgKQBcgFBcAEQC3ABDJAcICHAUQCJAUDnAuIGMBRIByAXQE7BADRAkQBKANBCAJQDHAeCvAOQC2APCsgGIARgBQCRgEC0gfQBlgRBhgWQBKgRBSgVQCXgmC5gxIAZgGQEWhEDGgMIAHAAQDugmEaAWIAbACQEHAWEQAaICtASQCOAPDfAUQCkAODPAFIAEgBQCnAICugJQDZgFCSABIAxgBQCsgBCeAFQDUAFDOACIBQgBQCygFD6gUIBVgJQCzgPDhglICCgTQDjgiCOgRQBJgKBGgIQCzgWCsgQIAagCQAgBuA5BmQAaA7AWA8IAAPjIgMAdg");
	this.shape_21.setTransform(335.8,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.498)").s().p("EicPALAIiElHIAAw4QDXAMEdA1QBeARB3AaQB3AZDNAxIGwBnIB7AdQErBDDYAhQBKAMBFAGQBuAMBrAEQCmAMC1gNQBggEBUgGQBggIBZgKQCngVCrgeIAwgJQCvgeETg7IArgIQD9hCDagOQE5gmDpAEIAPABQD9AGEXANQBSAEBXADIDDAGQCIAEDWABQBhAABlADQBXABBJACQDKAFCiAJQB9AKBwALID/AZIHwAmIAkABQDpANDogVQAsgCAygGQCtgKDfgkICAgTIB5gUIDwguIALgCIFQhAQBhgQBWgJQBcgGBcADQC4AADKAcICIAUQCJAUDoAuIGOBQIByAXQE8BADSAkQBKANBCAJQDIAeCvAOQC4APCtgHIARgBQCRgEC0ggQBmgRBhgWQBLgRBTgWQCYgmC4gwIAagGQEWhDDIgLIAHAAQDuglEcAYIAbACQEJAXEQAaICtASQCQAQDeATQClAODQAEIAEAAQCnAHCvgKQDagHCTABIAwgBQCugCCfAFQDUAFDPACIBRgBQCxgED8gTIBWgJQC0gODhglICCgSQDkgiCOgRICRgRQCzgWCugQIAagCQAhBsA7BkQAcA5AWA7IAAPoIgMAcg");
	this.shape_22.setTransform(330.8,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.498)").s().p("EiczALAIiMlCIAAw9QDZAMEeA1QBfARB3AaQB4AaDNAxIGyBoIB7AcQEsBEDZAgQBLAMBEAGQBvALBsAEQClALC4gOQBggEBUgGQBhgJBZgKQCngWCsgeIAvgIQCwgeEVg5IArgJQD8hADegOQE7gkDpAEIAPAAQD+AHEYANICqAGIDCAGQCJADDXAAQBiAABkADQBYAABJACQDLAFCkAIQB8AKBxAMIEAAZQDmAREMAWIAkACQDrAODogUQAtgDAwgFQCvgJDfgjICCgTQA+gKA6gKQCKgZBogVIALgCQCgggCxghQBhgQBWgKQBegGBbADQC6gBDKAcICHATQCLAUDoAuQCaAfD2AwIByAYQE/A/DSAkICNAWQDJAdCwAOQC4APCtgIIARgBQCSgEC2ggQBmgSBhgWQBMgRBSgVIFShWIAagGQEVhCDLgJIAIgBQDsgjEfAYIAbACQEMAYEPAbICtASQCSAQDeAUQCmANDRADIADAAQCnAGCxgLQDbgHCTAAIAwgBQCvgCCfAEQDVAFDPACIBSAAQCxgFD+gSIBWgIQC2gODhgkICDgSQDkghCQgQICRgSQC0gVCugRIAagCQAkBrA9BiQAdA4AYA6IAAPrIgNAcg");
	this.shape_23.setTransform(325.8,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.498)").s().p("EidYALAIiRk+IAAxBQDZAMEfA1QBfASB3AaQB5AaDOAxIG0BoIB7AcQEtBEDaAgQBMALBFAGQBuAMBsADQCmAKC5gPQBggFBVgGQBigJBZgKQCogXCrgdIAwgJQCxgdEWg4IArgIQD7hADhgMQE9gkDpAFIAQAAQEAAHEXANICrAGIDDAEQCJAEDYgBQBjgBBkADQBYAABKACQDLADCkAJQB9AKByALIEBAaQDmARENAYIAlACQDsAODogTQAtgCAxgFQCwgIDfgjICCgTIB6gTQCKgZBogVIALgDIFThBQBhgQBXgLQBegGBbADQC6gCDLAbICJATQCLAUDoAuIGSBPIBzAXQFAA/DTAkQBLAMBCAKQDKAdCxANQC4APCvgIIARgBQCSgFC2ggQBngSBigWQBMgRBSgWIFThVIAagGQEVhBDOgIIAHgBQDtgiEhAaIAbACQEOAZEPAbICuASQCTARDeATQCmANDRADIAEgBQCnAGCygMQDdgJCSAAIAxgBQCvgDCgAEQDVAFDSADIBRgBQCxgEEBgRIBWgJQC3gNDhgjICDgRQDlghCRgQICSgRQC0gVCvgRIAagCQAlBoBABgQAfA3AYA5IAAPvIgNAcg");
	this.shape_24.setTransform(320.8,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.498)").s().p("Eid9ALAIiXk6IAAxFQDaAMEgA2QBfARB4AbQB6AaDPAxIG0BoIB8AdQEvBEDaAfQBNALBEAGQBvALBtACQCmAKC7gPQBggGBVgHQBigJBZgLQCpgWCsgdIAwgJQCzgcEWg4IArgIQD6g+DlgMQE+giDpAEIARABQEBAHEXANQBUADBZACIDDAEQCJAEDagCQBigCBlADQBYgBBKACQDMADClAIQB+AKBxAMIECAZQDmATERAYIAkACQDuAQDogTQAtgBAygFQCwgIDggiICCgSIB6gTQCKgZBqgVIALgDIFUhCQBigRBWgKQBegHBcACQC7gCDLAbQBDAIBGALQCOATDoAtIGTBPIBzAXQFDA/DTAkQBMAMBCAKQDLAdCxAMQC5APCvgJIASgBQCRgFC4ggQBogTBhgWQBNgRBSgVQCbgmC5gvIAbgHQEVg/DQgHIAHAAQDsgiEkAbIAbACIIfA1ICvATQCUARDeATQCnANDSACIADAAQCnAFC0gOQDdgKCTgBIAxgBQCwgDChAEQDVAFDTADIBSAAQCxgEECgRIBWgIQC5gMDhgjICEgRQDlgfCTgRICRgQQC1gVCwgRIAbgDQAmBnBCBeQAhA2AZA3IAAP0IgOAbg");
	this.shape_25.setTransform(315.9,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.498)").s().p("EieiALAIidk2IAAxJQDbAMEiA2QBeASB6AaQB6AbDPAxIG3BpIB7AcQEwBEDcAfQBMALBGAGQBvALBtABQCmAKC8gRQBhgGBVgHQBjgKBZgLQCpgXCtgdIAxgIQCzgcEXg3IAsgHQD5g9DogMQFAghDpAFIAQABQEEAHEXAMQBUAEBZACIDEADQCKADDagDQBkgBBkACQBZgBBKABQDNACClAIQB+AKBzAMIEDAaQDlATETAZIAkADQDwAQDogRQAtgCAygEQCygHDgghICDgSQA/gJA7gKQCLgZBqgWIALgCIFVhDQBigRBXgLQBfgHBcACQC8gDDLAaQBDAIBHALQCOATDpAtIGVBPIB0AXQFEA/DTAjICPAVQDMAdCyANQC4AOCxgJIASgBQCSgGC5ghQBngSBigWQBNgRBTgWIFWhUIAagHQEVg+DSgGIAHAAQDsghEmAdIAcACIIgA2ICwATQCVASDeASQCoANDSABIAEAAQCmAEC2gOQDfgLCSgCIAygBQCwgEChAEQDWAFDUADIBSAAQCxgEEFgPIBWgIQC7gMDggiICFgQQDmgfCTgQICTgRQC1gUCxgSIAagCQAoBlBGBcQAhA0AaA3IAAP3IgOAbg");
	this.shape_26.setTransform(310.8,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.498)").s().p("EifGALAIijkxIAAxOQDbAMEiA2QBfASB6AbQB8AaDPAyIG4BpIB9AcQExBEDcAfQBNALBGAGQBvAKBuABQCmAJC9gSIC3gOIC8gVQCrgYCtgcIAwgIQC1gcEYg1IArgIQD4g8DsgKQFCggDqAFIAQAAQEFAIEYAMICtAFIDFADQCKADDbgEQBkgCBlABQBagBBJABQDOACCmAIQB+AKBzAMIEEAaQDlATEVAbIAlACQDyASDngRQAugBAygEQCzgGDgghICDgRQBAgJA8gKQCKgZBrgWIALgCIFXhEQBigSBYgKQBfgJBcACQC9gEDMAaICKATQCPATDqAtIGWBOIB1AXQFFA/DUAjICQAVQDMAdCyAMQC6AOCxgKIASgBQCSgFC6giQBpgSBigXQBNgRBTgVIFXhUIAbgHQEUg9DVgFIAIAAQDqgfEqAdIAbADIIiA3ICwATQCXASDeASQCoANDUAAIADAAQCmAEC3gPQDggNCSgCIAzgBQCxgFChAEQDXAFDVADIBSABQCxgEEHgPIBXgHQC8gLDggiICFgQQDngeCUgQICUgQQC1gUCygSIAbgDQApBjBIBaQAiA0AbA1IAAP8IgOAag");
	this.shape_27.setTransform(305.9,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.498)").s().p("EifrALAIiqktIAAxSQDdAMEkA3QBfARB6AbQB8AbDQAyIG6BpIB8AdQEzBEDeAeQBNALBGAFQBwAKBuABQClAIDAgTIC3gOIC9gWQCrgYCtgcIAygJQC1gbEYg0IAtgIQD3g6DvgKQFDgfDqAGIARAAQEGAIEYAMQBUADBaABIDFADQCLACDcgFQBlgCBkABQBagBBLABQDOABCnAHQB+AKB0AMIEFAbQDlATEYAcIAkADQD0ASDngPQAugCAygEQC1gFDgggICEgRQA/gJA8gKQCLgYBsgWIALgCIFYhFQBjgSBXgLQBhgJBbACQC+gFDNAaICKASQCQATDqAsQCaAfD/AvIB1AXQFGA/DVAjQBNAMBDAJQDOAcCzAMQC6AOCygKIASgBQCSgGC8giQBpgTBhgWQBPgSBSgVIFZhTIAbgHQEUg8DXgEIAHAAQDrgeErAfIAcACIIkA5ICxAUQCYARDdATQCqAMDUAAIADgBQCmAEC5gRQDhgNCSgDIAzgBQCxgGCjAEIGuAJIBSAAQCxgDEIgOIBXgHQC+gLDgggICGgQQDngeCWgPICTgQQC2gVCzgSIAbgCQArBhBLBYQAjAyAcA1IAAP/IgPAag");
	this.shape_28.setTransform(300.9,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.498)").s().p("EigQALAIivkpIAAxWQDcAMEmA3QBfASB8AbQB8AbDQAyIG8BpIB9AdQEzBEDfAeQBNALBHAFQBwAKBvAAQClAIDAgVIC4gPIC+gWQCsgZCugcIAxgIQC3gbEZgzIAtgHQD2g6DygIQFFgeDrAFIAQABQEIAIEZAMQBUADBaABIDGACQCLACDdgGQBmgDBkABQBbgCBKABQDPAACoAHQB+AKB1ANIEGAbQDkAUEaAdIAlACQD1AUDogPQAugBAxgEQC3gEDggfICEgRQBBgJA8gKQCLgYBsgWIAMgCIFZhGQBjgSBXgMQBjgJBaACQC/gGDNAZICLASQCRATDqAsQCbAeD/AwIB2AWQFJA/DVAiICRAWQDOAcC0AMQC6ANC0gKIARgCQCTgGC8giQBqgTBigXQBPgRBSgVIFahTIAbgHQEVg7DZgCIAHAAQDqgeEvAgIAbADIImA6ICxAUQCaASDdASQCrANDUgCIAEAAQClADC6gSQDigPCTgDIAzgCQCygGCjAEIGvAJIBTAAQCxgDEKgNIBYgHQDAgKDggfICGgPQDngdCXgQICUgQIFrgmIAagDQAtBgBNBVQAlAyAdAzIAAQDIgPAag");
	this.shape_29.setTransform(295.9,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.498)").s().p("Eig1ALAIi1klIAAxaQDdAMEnA4QBfARB9AcQB9AbDRAyQDWA0DmA2IB+AcQE1BFDgAdQBNALBHAFQBxAJBvAAQClAHDCgVQBigIBWgJIC/gXQCsgYCvgcIAxgIQC4gbEagxIAtgIQD1g4D1gIQFIgcDqAFIARABQEKAIEZALQBUADBbABIDGACQCLABDegGQBmgEBlABQBbgDBKABQDQAACpAHQB+AKB2AMIEHAcQDjAUEdAeIAlADQD3AVDngOQAvgBAygEQC4gEDggeICFgQQBAgJA8gKQCLgYBugWIALgDIFbhGQBjgTBYgLQBjgKBaABQDAgGDNAZICNASQCRASDrAsQCbAeEBAvIB2AXQFKA+DWAiQBNAMBEAJQDQAcC0AMQC6ANC1gLIASgBQCTgHC9gjQBqgTBjgWQBPgSBSgVIFchSIAbgHQEUg6DcgBIAHAAQDqgdExAiIAcACQEaAgENAcICyAUQCbASDdASQCrANDVgDIAEAAQClACC8gTQDjgPCTgEIAzgCQCzgGCkADIGwAJIBUABQCwgDENgMIBYgHQDBgJDggfICHgPQDngcCYgPICVgQIFsgnIAbgCQAuBdBQBUQAmAwAeAzIAAQHIgQAZg");
	this.shape_30.setTransform(290.9,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.498)").s().p("EihZALAIi8kgIAAxfQDeAMEoA4QBfASB9AbQB+AcDRAyQDZA0DmA2IB+AdQE2BEDhAdQBNALBIAEQBxAKBwgBQClAGDDgWIC5gRIC/gYIFdg0IAxgIQC4gbEcgwIAtgHQD0g4D5gHQFJgbDqAGIARAAIIlAUQBVADBbABIDHABQCLABDfgIQBngDBlAAQBbgDBKAAQDRgBCpAHQB/AKB3ANIEIAcQDiAUEgAgIAlACQD4AWDogNQAugBAzgDQC5gDDggeICFgQIB+gSQCLgYBvgWIALgDIFchHQBjgTBZgMQBkgKBZABQDBgHDOAYQBEAIBJAKQCTASDqAsIGeBNIB2AWQFNA+DWAiQBNAMBFAJQDQAcC1ALQC6ANC3gLIASgCQCSgHC/gjQBqgTBjgWQBQgSBTgVIFchTIAcgGQEUg5DdAAIAIAAQDpgcE0AjIAbADQEeAgELAdICzAUQCdATDdARQCrANDWgDIAEgBQClACC+gUQDkgRCTgEIAzgCQCzgHClADIGzAKIBTAAQCwgCEPgMIBYgGQDDgJDggeICHgOQDpgcCYgPICVgPIFugnIAbgDQAvBcBTBSQAoAvAfAxIAAQLIgRAZg");
	this.shape_31.setTransform(285.9,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.498)").s().p("Eih/ALAIjBkcIAAxjQDfAMEpA4QBfASB+AcQB/AcDSAyQDaA1DmA1IB+AdQE3BEDiAdQBOALBIAEQBxAJBxgBQCkAFDFgXIC6gSIC/gYIFeg1IAygIQC6gZEcgwIAtgHQDzg2D8gGQFLgaDrAGIAQAAIInAUQBWADBbAAIDIABQCLAADggIQBngEBlAAQBdgEBKABQDRgCCqAGQB/AKB4ANQCDAOCGAPQDhAUEjAhIAlADQD6AXDogNQAuAAAygDQC7gCDggdICGgQQBBgIA9gKQCMgYBvgWIALgDQCgggC9goQBlgTBYgMQBkgLBaAAQDCgIDOAZQBFAHBJAKQCTASDsArQCbAeEEAvIB3AWQFOA+DXAiICSAVQDSAcC1ALQC7AMC3gMIASgBQCTgIDAgjQBrgUBjgWQBRgSBRgVIFfhSIAbgGQEUg4DgABIAIAAQDogaE3AkIAcACQEfAiEMAdICzAUQCeATDdASQCsAMDWgEIAEgBQClACC/gVQDlgTCUgEIAzgCQC0gIClADIG0AKIBUABQCwgDERgKIBZgGQDEgIDggeICIgOQDogbCagOICWgPIFvgoIAbgCQAxBaBWBPQApAuAgAwIAAQPIgRAZg");
	this.shape_32.setTransform(280.9,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.498)").s().p("EiijALAIjIkYIAAxnQDgAMEqA5QBfASB/AcQB/AbDTAzIHBBrIB/AcQE4BFDjAcQBOALBJAEQByAIBxgBQCkAFDGgZIC7gSIDAgZIFfg1IAygIQC7gZEdgvIAtgGQDyg2EAgFQFMgZDsAGIAQABIIpAUQBWACBbABIDJAAQCLAADigKQBngEBlgBQBdgDBKAAQDSgDCrAHQB/AJB5AOQCDANCHAQQDhAUElAiIAlAEQD7AXDogLQAvAAAygDQC9gCDggcQBGgHBAgIQBBgIA+gKQCMgYBwgXIALgCQCfggC/gpQBlgUBYgMQBmgLBZAAQDDgJDPAYICOARQCVASDsArQCaAdEHAvIB3AXQFPA9DYAiICTAVQDSAbC2ALQC8AMC4gMIASgCQCTgHDBgkQBsgUBigWQBSgTBSgUIFfhSIAcgGQEUg3DiACIAIAAQDogZE5AlIAcADQEhAjEMAdIC0AUQCfATDcASQCuAMDXgFIADAAQClAADBgWQDmgTCTgFIA0gDQC1gICmAEIG2AJIBUABQCwgCESgKIBZgGQDGgHDggdICIgNQDqgaCbgPICWgPIFxgnIAbgDQAyBZBZBNQAqAtAhAvIAAQTIgSAYg");
	this.shape_33.setTransform(275.9,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.498)").s().p("EijJALAIjMkUIAAxrQDfAMEtA5QBeASCBAcQB/AcDTAzQDdA1DmA2IB/AdQE6BEDkAcQBOALBJAEQByAIBygCQCkAEDHgaIC8gTIDAgZIFhg1IAygIQC7gZEfgtIAtgHQDyg0ECgFQFPgXDrAGIAQAAIIrAUQBXADBbAAIDJAAQCMgBDjgKQBogFBlgBQBdgEBKAAQDTgDCsAGQB/AKB5ANQCEAOCHAQQDhAVEoAjIAlADQD9AZDogLQAvAAAygDQC+AADggcQBHgHBBgIQBBgIA+gJQCLgYBxgXIALgCQCgggDAgqQBlgUBZgNQBmgLBZAAQDEgKDQAXICOARQCVASDtArQCaAdEJAvIB4AWQFRA+DYAhQBOAMBFAJQDTAbC4AKQC7AMC5gNIASgBQCUgIDBgkQBtgVBjgWQBSgSBSgVIFhhRIAbgGQEVg2DkAEIAIAAQDogZE7AnIAcACQEjAkEMAdIC0AVQChAUDcARQCuAMDXgGIAFAAQClAADBgXQDngVCUgFIA0gDQC1gJCnAEIG4AKIBUABQCvgCEWgJIBZgGQDHgHDggcICJgNQDqgZCcgOICXgPIFygoIAbgCQA0BWBbBLQAsAsAiAuIAAQXIgTAYg");
	this.shape_34.setTransform(271,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.498)").s().p("EijtALAIjUkPIAAxwQDhAMEuA6QBfARCBAdQCAAcDTAzQDfA2DmA1ICAAdQE6BFDlAcQBOAKBKADQByAIBygCQClADDJgaIC8gVIDAgZIFjg2IAygHQC9gZEegsIAugGQDwg0EGgDQFRgXDsAHIAQAAIItAUQBWADBcAAIDLgBQCLgBDkgLQBpgGBkgBQBfgEBKgBQDUgDCsAFQB/AKB6AOQCFAOCHAQQDhAVEpAkIAmAEQD+AZDogJQAwAAAygDQDAABDfgbICIgPQBCgIA+gJQCMgXBygYIALgCQCgghDBgqQBmgUBYgNQBngMBZgBQDGgKDPAXICPARQCXARDtArIGkBLIB5AWQFSA+DZAhICUAUQDVAbC2ALQC9ALC6gNIATgCQCTgIDDglQBtgUBjgWQBTgTBRgUQCngnC8gqIAbgGQEUg1DnAFIAIAAQDngYE+AoIAcADQElAlELAdQBbAMBbAKQCiATDcARQCvAMDYgGIAEgBQClAADDgZQDogVCUgGIA0gDQC3gKCmAEIG6AKIBUABQCwgCEXgIIBZgFQDKgGDggbICJgNQDqgZCdgOICYgOQC5gTC7gVIAbgDQA1BVBeBJQAtArAjAtIAAQaIgTAYg");
	this.shape_35.setTransform(266,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.498)").s().p("EikSALAIjZkLIAAx0QDhAMEuA6QBgASCBAcQCBAdDUAzQDhA2DlA1ICBAdQE7BFDmAcQBPAKBKADQBzAIBygEQCkAEDLgcIC8gVIDCgbIFjg1IAzgHQC+gZEfgrIAugGQDwgyEJgDQFSgVDsAGIARABIIvAUQBWACBdAAIDKgBQCMgCDlgMQBpgGBlgBQBfgFBKAAQDUgFCtAGQCAAJB7AOQCFAOCJARQDfAVEsAmIAmADQEAAbDogJQAwAAAygCQDBABDggaQBHgHBBgHQBCgIA+gJQCNgXBygYIAMgDQCfggDDgrQBmgVBZgNQBngMBZgBQDHgMDPAXQBGAHBKAKQCYARDtAqQCbAdELAvIB6AWQFTA9DaAhICVAUQDVAbC4AKQC8ALC7gOIATgBQCTgJDFglQBtgUBjgXQBUgSBRgVQCognC8gpIAbgGQEVg0DpAGIAIAAQDmgWFBApIAdADQEnAlEKAeIC2AWQCkAUDcAQQCwAMDYgHIAEAAQCkgBDFgaQDqgXCUgGIA0gEQC3gJCnADIG8AKIBVABQCvgBEZgHIBagFQDLgGDfgaICKgNQDrgYCegNICZgPQC5gSC7gWIAcgCQA3BTBgBHQAuApAkAsIAAQfIgTAXg");
	this.shape_36.setTransform(261,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.498)").s().p("Eik3ALAIjfkHIAAx4QDiAMEwA6QBfASCCAdQCCAdDVAzQDiA2DlA2ICBAdQE9BEDnAcQBPAJBKAEQBzAHBzgEQCkADDMgdIC9gWIDDgbQCygcCygZIAzgIQC/gYEggpIAugGQDvgyEMgBQFVgVDsAHIAQABIIxAUQBXACBdAAIDLgDQCMgBDmgNQBqgGBlgCQBfgFBLgBQDUgFCuAFQCAAKB8AOQCFAOCKARQDeAVEvAnIAmAEQECAbDogHQAwAAAygCQDCACDhgaICIgNICBgRQCNgXBzgYIAMgDQCeggDFgsQBmgVBagOQBngMBZgCQDIgMDQAXQBGAHBKAJQCZARDuAqQCbAcENAvIB5AWQFWA9DaAhQBPALBHAJQDVAaC5AKQC9ALC8gOIATgCQCTgJDGglQBugVBjgWQBUgTBSgUQCognC8gpIAcgGQEUgzDsAHIAIAAQDmgVFDAqIAdADQEpAnEKAeIC3AWQClAUDcARQCwALDZgIIAEAAQClgCDGgaQDrgZCUgGIA0gEQC4gKCoADIG9AKIBWACQCvgBEagHIBbgEQDMgFDggaICKgMQDrgXCggOICZgOQC6gSC8gWIAbgDQA5BRBjBFQAvApAlArIAAQiIgTAXg");
	this.shape_37.setTransform(256,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.498)").s().p("EilcALAIjlkDIAAx8QDjAMExA7QBfASCDAdQCCAdDVAzQDlA3DlA1ICBAdQE+BFDoAbQBPAJBLAEQBzAGB0gEQCkACDNgeIC+gWIDDgcQCzgcCzgaIAygHQDBgXEhgpIAugGQDugwEQgBQFWgTDsAHIARAAQEXAMEbAIQBYADBdgBIDMgDQCNgCDmgOQBqgGBmgCQBfgGBLgBQDWgGCuAFQCAAKB9AOQCFAPCLARQDdAWEyAoIAnADQEDAdDngHQAxABAygCQDEADDggZICJgOQBDgHA+gKQCNgWB1gYIALgDQCfggDGgtQBngVBZgOQBogOBagBQDIgNDQAWICRAQQCaARDuAqQCbAcEPAuIB6AWQFXA9DaAhICXAUQDWAaC6AJQC9ALC9gPIAUgBQCSgKDIglQBugVBjgXQBVgTBSgUQCpgnC9goIAcgGQEUgyDuAIIAIABQDlgVFGAsIAdADQEsAoEJAeQBcAMBcAKQCmAUDcARQCxALDagJIADAAQClgCDHgcQDtgZCTgHIA1gEQC4gLCpADQDaAEDlAHIBWABQCugBEdgFIBbgFQDPgEDegZICMgLQDrgXChgNICagOQC6gTC9gWIAbgDQA7BQBlBDQAxAnAmAqIAAQnIgUAWg");
	this.shape_38.setTransform(251,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.498)").s().p("EimAALAIjsj+IAAyBQDkAMEyA7QBfASCEAdQCEAdDVA0QDlA3DlA1ICDAdQE+BFDpAbQBQAJBLADQB0AHB0gFQCkABDPgfIC+gXIDDgcQC0gdC0gZIAzgHQDBgXEigoIAvgGQDsgvETAAQFYgSDtAIIARAAQEZAMEcAIQBXACBegBIDMgDQCMgCDpgPQBrgHBlgDQBggFBLgCQDWgGCvAFQCBAJB9APQCGAOCLASQDcAWE1ApIAnAEQEEAdDogGQAxABAygBQDFADDggYQBJgGBCgHQBCgHA/gKQCNgWB1gYIAMgDQCfghDHgtQBngWBZgOQBpgOBZgCQDKgNDSAVICRAQQCaARDvApQCaAcERAvIB7AWQFZA8DaAhICYATQDYAbC6AJQC9AKC+gPIATgCQCTgJDJgnQBvgVBjgWQBVgTBSgUQCrgnC8goIAdgGQEUgxDwAKIAIAAQDkgUFKAtIAcADQEuApEKAfIC3AWQCoAVDbAQQCzALDagJIAEgBQCkgCDKgdQDsgbCUgIIA1gDQC5gMCqADQDaAEDmAHIBXACQCugBEfgFIBbgEQDQgDDfgZICMgLQDrgWCjgNICZgOQC7gSC+gWIAcgDQA8BOBoBAQAyAmAnApIAAQrIgVAWg");
	this.shape_39.setTransform(246,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.498)").s().p("EimlALAIjyj6IAAyFQDlAMEzA7QBfATCFAdQCEAdDWA0QDnA4DlA1ICCAdQFABFDrAaQBPAJBMADQB0AGB1gFQCjABDRggIC/gZIDEgcQC1geCzgYIAzgHQDDgXEjgnIAugFQDsguEXABQFZgRDtAHIARABQEbAMEcAIQBXACBegBIDOgEQCNgDDogPQBsgIBlgDQBhgGBLgBQDXgICwAFQCAAJB/APQCGAPCLASQDdAWE3AqIAmAEQEHAfDogFQAxABAygCQDGAFDhgYICKgMQBDgIBAgJQCNgWB1gZIAMgCQCfghDJguQBngWBagOQBpgPBagCQDKgODSAVICRAQQCcAQDvApQCbAcESAuIB8AWQFaA8DbAgQBRAMBHAIQDZAaC6AJQC+AKC/gPIAUgCQCTgKDJgnQBwgVBkgXQBWgTBRgUQCsgnC9gnIAcgGQEUgwDzALIAIAAQDkgSFMAuIAcADQEwAqEJAfIC5AWQCpAVDbAQQCzAMDbgLIAEAAQCkgEDLgeQDugbCUgJIA1gEQC6gMCqADQDbAEDnAHIBXACQCuAAEhgEIBbgEQDSgDDfgYICMgKQDtgWCjgMICagOQC7gSDAgXIAbgDQA+BNBrA+QAzAlAoAoIAAQuIgWAWg");
	this.shape_40.setTransform(241,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.498)").s().p("EinKALAIj4j2IAAyJQDmAME0A8QBgASCFAeQCFAdDWA0QDpA4DlA1ICDAdQFBBFDrAaQBQAJBMADQB1AGB1gGQCjAADSghIDAgZIDEgeQC2gdC0gZIAzgHQDEgWEkglIAvgGQDrgtEZACQFcgQDtAIIARABQEcAMEdAHQBXACBfgBIDOgEQCNgDDqgRQBsgIBlgDQBhgGBLgCQDYgICwAEQCCAKB/APQCGAOCMATQDcAWE6AsIAnAEQEHAfDogEQAyACAygCQDHAGDhgXQBJgGBCgHQBDgHBAgJQCOgWB2gZIAMgCQCfghDKgvQBogWBagPQBpgPBagCQDLgQDSAVQBHAHBMAJQCdAQDvApQCbAbEUAvIB8AVQFbA8DcAgICZAUQDZAaC8AIQC+AKDAgQIATgCQCUgKDKgnQBwgWBlgWQBWgTBRgUQCtgnC+gnIAcgGQEUgvD1AMIAIAAQDkgRFOAvIAdADQExAsEJAfIC5AWQCrAWDbAPQC0AMDbgMIAEAAQCkgEDMgfQDvgdCVgJIA1gEQC7gNCqADQDcAEDoAIIBXABQCuAAEjgDIBcgDQDTgDDfgXICNgKQDtgUCkgNICbgNQC8gSDAgXIAcgDQA/BKBtA9QA1AjApAnIAAQzIgWAVg");
	this.shape_41.setTransform(236,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.498)").s().p("EinvALAIj+jyIAAyNQDnAME1A8QBgASCGAeQCFAeDXA0QDrA4DlA1ICCAdQFDBFDsAaQBRAJBMACQB1AGB2gGQCjgBDUgiIDAgaIDFgeQC2geC1gYIA0gHQDEgWEkgkIAvgFQDrgsEcADQFegPDtAIIARAAQEeANEdAHQBYACBfgBIDOgFQCNgEDsgRQBsgIBmgEQBigHBKgCQDZgICxAEQCBAJCBAPQCGAPCNATQDcAWE8AtIAmAFQEKAgDogDQAxABAzgBQDJAGDhgWQBJgFBCgHQBDgHBBgJQCNgWB4gZIALgDQCfggDLgwQBpgXBagPQBqgPBagDQDMgQDTAVQBHAGBLAJQCfAQDwApIGwBJIB8AWQFdA8DeAfICZAUQDaAZC8AJQC+AJDCgQIATgCQCTgLDMgnQBxgWBkgXQBXgTBRgUQCvgnC9gnIAdgFQETguD4ANIAIAAQDjgQFRAxIAdADQEzAsEJAgIC6AWQCsAWDaAQQC1ALDdgMIADgBQCkgEDOggQDwgfCUgJIA2gEQC7gOCrADQDcAEDqAIIBXACIHTgCIBcgEQDWgBDegXICNgJQDugUClgMICcgNQC8gSDBgXIAcgEQBABJBxA6QA2AjApAmIAAQ2IgWAVg");
	this.shape_42.setTransform(231.1,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.498)").s().p("EioTALAIkEjuIAAyRQDnAME2A9QBgASCHAeQCGAeDYA0QDrA5DlA0ICEAeQFDBFDtAZQBRAJBNACQB2AFB2gGQCjgBDVgkIDBgbIDGgeQC2geC2gYIAzgHQDGgWEmgjIAvgFQDpgrEgAEQFfgODuAJIARAAQEgANEdAHQBYACBfgCIDPgFQCOgEDsgSQBtgJBmgEQBigHBLgDQDZgJCyAEQCCAJCAAQQCHAPCOATQDbAXE/AuIAmAEQELAhDpgCQAyACAygBQDKAHDhgWQBKgFBDgGQBCgHBBgJQCOgWB5gZIALgDQCeggDNgxQBpgXBbgPQBrgQBZgDQDOgRDSAUICUAPQCfAQDwAoQCbAbEXAuIB9AWQFfA8DeAfQBQALBKAIQDbAaC8AIQC/AJDCgRIAUgCQCUgLDMgoQBxgVBlgXQBXgTBSgUQCvgoC+gmIAdgFQETgtD6AOIAIABQDigQFUAyIAdAEQE2AtEIAfIC6AYQCuAWDbAPQC1ALDdgNIADgBQCkgEDPgiQDygfCVgKIA1gEQC8gOCsACQDcAEDrAIIBYACQCuABEngCIBcgDQDXgBDegVICOgKIGVgfICcgNQC8gRDCgYIAcgDQBCBHB0A4QA3AhAqAlIAAQ6IgXAVg");
	this.shape_43.setTransform(226.1,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.498)").s().p("Eio4ALAIkKjpIAAyWQDnANE4A8QBgASCIAfQCGAdDZA1QDtA5DlA1ICEAdQFFBFDuAZQBRAJBNACQB2AFB2gHQCjgCDXglIDBgbIDHgfQC4gfC1gYIA0gGQDHgWEmgiIAwgEQDogqEjAEQFhgMDuAIIARABQEiANEdAHQBZABBfgBIDQgGQCOgFDtgTQBugJBmgEQBigIBLgCQDagKCzADQCCAKCBAPQCIAPCOAUQDaAXFCAvIAnAFQEMAiDogBQAyACAzgBQDLAHDigUQBJgFBDgHQBEgGBBgJQCOgWB5gZIAMgDQCeghDOgxQBqgXBagQQBsgQBZgEQDOgRDUATICUAPQCgAQDxAoQCaAbEaAuIB9AVQFgA8DeAfICbATQDcAZC9AIQC/AJDEgRIATgCQCUgLDOgpQBygWBkgWICqgoQCwgnC+gmIAdgFQETgsD8APIAJABQDigPFWA0IAdADQE4AvEIAfIC7AYQCvAWDaAPQC2ALDegOIAEAAQCjgGDRgiQDyghCVgKIA2gFQC9gOCsADQDdADDsAJIBYACIHXAAIBdgDQDYAADegVICOgJQDvgTCogLICdgNQC8gRDEgYIAcgEQBDBFB2A2QA4AhAsAkIAAQ+IgXAUg");
	this.shape_44.setTransform(221.1,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.498)").s().p("EipdALAIkQjlIAAyaQDoANE5A8QBgATCJAeQCHAeDZA1QDvA6DkA0QBHAQA+ANQFGBFDvAZQBRAJBOACQB2AEB3gHQCjgDDYglIDCgdQBtgSBagNQC5ggC2gXIA0gGQDIgVEnghIAvgFQDogpEnAGQFigMDvAJIARABQEjANEeAGQBYACBggCIDQgGQCPgFDugUQBugKBmgFQBjgHBMgDQDagLC0AEQCCAJCCAQQCIAPCPATQDZAYFFAxIAmAEQEOAjDpAAQAyACAyAAQDNAIDigUQBKgFBDgGQBDgGBCgJQCPgWB5gZIAMgDQCeghDRgyQBpgYBbgPQBsgRBZgEQDQgTDTAUQBIAGBNAJQChAPDxAoQCbAaEaAuIB+AWQFiA7DfAfQBRALBLAIQDcAZC+AIQDAAIDEgSIAUgCQCUgLDPgpQBygWBlgXICqgnQCxgoC/glIAdgFQETgrD+ARIAJAAQDhgNFZA0IAdAEQE6AvEIAgQBeANBdALQCxAWDaAPQC3ALDegPIADAAQCkgGDSgjQD0giCVgLIA2gFQC9gPCuADQDcADDvAJIBYACIHYABIBdgCQDaAADegUICPgJIGXgdICegMQC+gRDEgZIAcgDQBFBDB4A0QA6AfAtAjIAARCIgYAUg");
	this.shape_45.setTransform(216.1,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.498)").s().p("EiqCALAIkWjhIAAyeQDpANE6A9QBhASCJAfQCIAeDZA1QDxA6DlA0ICEAeQFIBFDvAYQBSAJBOABQB2AFB4gIQCjgEDagmIDCgdQBugTBagOQC5gfC3gXIA0gHIHxg0IAwgEQDmgoErAGQFkgKDuAJIASAAQEkAOEeAGQBZACBggCIDSgHQCOgGDvgVQBvgKBmgFQBkgIBLgDQDbgLC1ADQCCAJCDAQQCIAQCQATQDZAYFGAyIAnAFQERAkDnAAQAzADAzgBQDOAKDigUQBJgEBEgGQBEgGBBgJQCPgWB7gZIAMgDQCeghDSgzQBpgYBbgQQBtgRBZgEQDQgUDVATQBIAGBNAJQCiAPDxAnQCcAbEcAuIB+AVQFkA7DfAfQBSALBKAIQDeAZC+AHQDBAIDFgSIAUgCQCUgMDQgpQBygXBlgWICrgoQCzgnC+glIAdgFQETgqEBASIAJAAQDggMFcA2IAeADQE8AxEHAgQBeANBeALQCyAXDaAPQC3AKDfgPIAEgBQCjgGDUglQD0gjCWgLIA2gFQC+gQCuADQDdADDvAJIBZADIHaACIBegCQDcAADdgTICQgIQDwgRCpgLICegNQC+gQDFgZIAdgEQBGBCB7AyQA7AeAuAhIAARGIgZAUg");
	this.shape_46.setTransform(211.1,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.498)").s().p("EiqnALAIkcjdIAAyiQDqANE7A9QBhASCKAfQCIAfDaA1QDyA6DlA1ICFAdQFIBFDyAYQBRAJBPABQB3AEB4gJQCjgDDbgoIDDgeQBugTBagOQC7ggC3gXIA0gGIHzgzIAwgEQDlgnEuAIQFmgKDvAJIARABQEmAOEfAGQBZABBhgCIDRgHQCPgGDwgWQBvgKBngGQBkgIBLgEQDcgMC1ADQCDAKCEAQQCIAPCQAUQDZAYFJAzIAoAFQERAlDoACQAzACAzAAQDPAKDigSICOgKQBEgHBCgIQCPgVB7gbIAMgCQCfghDSg0QBqgYBbgRQBugRBZgFQDSgUDVATQBHAGBOAIQCjAPDyAnIG5BIIB/AVQFlA7DgAfICdATQDeAYC/AHQDBAIDGgTIAUgCQCUgMDSgpQBzgXBlgXQBagUBRgTQC0goC/gkIAdgFQETgpEDATIAJAAQDggLFeA3IAeAEQE+AxEHAhQBfANBdALQC0AXDZAPQC5AKDfgQIAEAAQCjgIDWglQD1glCVgLIA3gFQC/gRCuADQDeADDwAJIBZADIHdADIBdgCQDdACDegTICQgHIGbgcICfgMQC+gQDGgaIAdgDQBIA/B9AwQA9AdAvAhIAARKIgZATg");
	this.shape_47.setTransform(206.1,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.498)").s().p("EirMALAIkijYIAAynQDrANE9A9QBgATCLAfQCJAfDbA1QDzA7DlA0ICGAdQFJBGDyAXQBSAJBPABQB3ADB5gJQCigEDdgpIDEgfQBvgTBZgOQC8ghC3gWIA1gGIH1gxIAwgEQDkgmExAIQFogIDvAJIARABQEpAOEeAGQBaABBhgCIDSgIQCPgHDxgWQBwgLBngGQBkgJBMgDQDcgNC2ADQCDAJCFAQQCJAQCQAUQDYAZFMA0IAoAFQETAmDoACQAzADAzAAQDRALDigSQBKgEBEgGQBEgGBDgJQCPgUB8gbIAMgDQCeghDUg0QBrgZBbgQQBugSBZgFQDTgVDVASICWAOQCkAPDzAnQCbAaEgAtIB/AWQFnA6DgAfQBTAKBKAIQDgAZDAAHQDBAHDHgTIAUgCQCUgNDTgqQB0gXBlgWQBagUBSgUQC0gnC/gkIAegFQETgoEFAUIAJABQDggLFgA5IAeADQFAAzEHAhQBfANBeALQC1AYDZAOQC6AKDggRIADAAQCjgIDXgnQD3glCVgMIA3gGQDAgRCvADQDdADDzAKIBZACIHeAFIBegCQDfACDegSICQgHIGdgaICfgMQC+gRDIgZIAcgEQBKA+CAAuQA+AcAwAfIAAROIgaATg");
	this.shape_48.setTransform(201.1,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.498)").s().p("EirwALAIkpjUIAAyrQDrANE+A+QBhASCMAgQCJAfDbA1QD2A7DkA0ICHAeQFKBFD0AXQBRAJBQAAQB3AEB5gKQCjgFDegqIDFgfQBvgUBZgOQC9ghC4gWIA0gGIH3gwIAxgEQDjglE0AJQFqgHDvAKIASABQEqAOEfAFQBaACBhgDIDTgIQCPgHDygYQBxgLBngGQBkgJBMgEQDdgOC3ADQCDAJCGARQCJAPCRAVQDYAZFOA1IAoAFQEUAnDoAEQA0ADAzAAQDSAMDigSQBLgEBEgFQBFgGBCgJQCQgUB9gbIALgDQCfghDVg1QBrgZBbgRQBvgSBZgGQDUgVDVASQBJAFBOAIQCmAPDyAnQCbAZEiAuICAAVQFoA6DhAfQBTAKBLAIQDgAYDBAHQDBAHDIgUIAVgCQCUgNDUgqQB0gXBmgXQBbgUBQgTQC2goDAgjIAdgFQETgnEIAVIAJABQDfgJFkA5IAdAEQFDA0EFAhQBgANBeALQC3AYDZAOQC6AKDhgRIAEgBQCigIDZgoQD4gnCVgMIA3gGQDAgSCwADQDeADD0AKIBZADIHgAFIBegBQDhADDdgSICRgGIGfgaICggMQC+gQDJgaIAcgDQBMA8CCArQA/AbAyAfIAARSIgbASg");
	this.shape_49.setTransform(196.2,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.498)").s().p("EisWALAIktjQIAAyvQDrANFAA+QBgATCNAfQCKAfDcA1QD3A8DkA0ICHAeQFLBFD0AXQBTAIBQABQB5ADB5gKQCigFDfgrIDFghQBxgUBZgOQC+giC4gWIA1gGIH5guIAwgEQDigjE4AKQFsgGDvAKIASAAQErAPEfAFQBbABBhgDQBdgDB3gGQCQgHDygYQBxgMBngGQBlgKBMgEQDfgOC2ACQCEAJCHARQCJAQCSAVQDXAZFRA3IAoAFQEWAoDoAEQAzADAzABQDVAMDigQQBKgEBGgFQBEgGBDgJQCPgUB+gbIAMgDQCfghDWg2QBrgZBcgSQBvgTBZgFQDVgXDWASICXAOQCnAPDzAlIG+BHICBAVQFpA7DiAdQBTALBLAIQDiAYDBAGQDCAIDJgVIAUgDQCUgMDVgrQB1gXBmgXICtgnQC3gpC/giIAegFQETglEKAWIAJAAQDfgIFlA6IAfAFQFEA0EGAiQBgANBfAMQC3AXDZAOQC7ALDhgTIAEgBQCjgIDagpQD4goCWgNIA3gGQDBgSCwACQDfAED1AJIBZADIHjAHIBegBQDiADDegQICRgHIGggYICggMQDAgQDKgaIAcgEQBNA7CFApQBAAaAyAdIAARWIgbASg");
	this.shape_50.setTransform(191.2,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.498)").s().p("Eis6ALAIk0jMIAAyzQDsANFBA/QBgASCOAgQCLAfDcA1QD5A9DkA0ICHAdQFNBGD1AWQBTAIBQABQB5ADB6gLQCigGDhgsIDFghQBxgVBagPQC+ghC5gWIA1gGIH7gtIAwgDQDigjE6ALQFugEDwAJIARABQEtAPEgAFQBbABBhgDIDVgKQCPgHD1gaQBxgMBngGQBmgLBLgEQDggOC3ABQCEAKCIAQQCJARCTAVQDWAZFUA4IAoAGQEXApDpAFQAzADAzAAQDWAODigQQBLgDBFgGQBFgFBDgJQCQgUB/gbIAMgDQCeghDYg3QBsgaBbgRQBwgUBZgFQDWgYDXARQBJAGBOAIQCoAPDzAlIHABHICBAUQFsA7DiAdQBTALBMAIQDiAXDCAGQDCAIDKgVIAVgDQCUgNDWgrQB2gYBmgXICtgnQC4goDAgiIAdgFQETgkENAXIAIAAQDfgHFpA8IAdAEQFHA2EGAiQBgANBfAMQC5AYDZAOQC8AKDhgUIAEAAQCigKDcgqQD6gpCWgNIA3gGQDCgTCwACQDgAED2AKIBaADIHkAHIBfgBQDjAEDegPQBPgDBDgDIGhgYIChgLQDAgQDLgbIAdgDQBOA4CIAoQBBAYAzAdIAARZIgbASg");
	this.shape_51.setTransform(186.2,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.498)").s().p("EitfALAIk6jHIAAy4QDtANFCA/QBgATCPAgQCMAfDcA1QD7A9DkA0ICHAeQFOBFD2AWQBTAIBRABQB5ACB7gLQChgHDjgtIDGgiQBygVBZgPQC/giC5gVIA2gGIH9grIAwgEQDhghE+ALQFvgDDwAKIASABQEvAPEfAFQBcABBigEQBegDB3gHQCQgID1gaQBygNBngHQBmgKBMgEQDggQC4ACQCEAJCJARQCKAQCTAWQDVAaFXA5IAoAFQEZAqDoAGQA0AEAzAAQDXAPDigQQBMgDBFgFQBFgFBEgJQCQgUB/gbIANgDQCdgiDag3QBsgaBcgSQBwgUBagGQDWgYDXARQBKAFBPAIQCoAPD0AlIHCBGICBAVQFtA6DjAdQBUALBMAHQDjAYDCAGQDDAHDLgWIAVgDQCUgNDXgsQB2gXBmgXICugnQC6gpDAghIAdgFQETgjEPAYIAIABQDegHFsA9IAeAFQFJA3EFAhQBhAOBfAMQC6AYDZAOQC8AKDjgVIADAAQCigKDegrQD7gqCWgOIA3gHQDDgTCxACQDfAED4AKIBaADIHmAJIBggBQDlAFDdgPICTgGIGjgWIChgMQDAgPDMgbIAdgEQBQA3CLAlQBCAYA0AbIAAReIgcARg");
	this.shape_52.setTransform(181.2,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.498)").s().p("EiuEALAIlAjDIAAy8QDtANFEA/QBhATCOAgQCNAgDdA1QD8A+DkAzICIAeQFPBGD4AVQBSAIBSAAQB5ACB7gLQCigHDkgvIDGgjQBzgVBZgPQDAgjC6gVIA2gFQDQgSEvgYIAwgDQDgghFBANQFxgCDxAKIARABQExAPEgAEQBbABBjgDIDVgLQCRgID2gbQBygNBogIQBmgLBMgEQDhgQC5ABQCEAJCKARQCKARCUAWQDUAaFaA6IAoAGQEbArDoAHQA0ADA0ABQDYAPDigOQBMgDBFgFQBFgGBEgIQCQgUCBgcIAMgCQCegiDbg4QBsgaBcgSQBygVBZgGQDXgZDYAQICZANQCpAPD1AlIHDBFICCAVQFuA6DkAdICgASQDkAXDDAGQDDAHDNgWIAVgDQCUgODYgsQB3gYBmgXICugnQC7goDAgiIAegEQETgiERAZIAJABQDdgFFuA+IAeAEQFLA4EFAiQBhAOBfAMQC8AZDYANQC+AKDigVIAFgBQCigKDegtQD9grCVgOIA5gHQDCgUCyACQDgAED5AKIBbADIHnAKIBgAAQDnAFDdgOICTgFIGlgWICigLQDAgPDNgcIAdgDQBSA1CNAjQBDAWA2AbIAARhIgdARg");
	this.shape_53.setTransform(176.2,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.498)").s().p("EiupALAIlGi/IAAzAQDvANFFBAQBgASCPAhQCOAgDeA1QD9A+DkA0ICIAdQFQBGD5AVQBTAIBSAAQB6ACB8gMQChgIDlgwIDHgjQB0gWBZgPQDBgjC6gVIA1gGQDSgREvgXIAygDQDegfFFANQFzgBDwALIASAAQEyAQEgAEQBdABBigEQBfgEB3gHQCRgJD3gcQBzgNBngIQBngLBMgFQDigRC6ABQCFAKCKARQCKARCVAWQDUAaFcA7IAoAGQEdAsDoAIQA0AEAzABQDaAQDjgOQBLgDBHgFQBFgFBEgIQCQgUCCgcIAMgCQCegiDcg5QBtgbBcgSQBxgVBagHQDYgZDYAQQBKAFBQAHQCqAPD1AkIHGBGICCAUQFwA6DkAdQBUAKBNAIQDlAXDDAFQDEAHDNgXIAVgDQCVgODZgsQB3gYBngXICugnQC8gpDBghIAegEQESghEUAaIAJABQDcgEFxA/IAeAFQFNA5EEAiQBjAOBfAMQC9AZDYANQC/AKDjgWIAEgBQCigLDggtQD9gtCWgPIA5gGQDDgVCyACQDhAED6ALIBbADIHpALIBhAAQDoAGDegOICTgEIGmgVICjgLQDBgPDNgcIAegEQBSAzCRAhQBFAWA2AZIAARlIgdARg");
	this.shape_54.setTransform(171.2,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.498)").s().p("EivOALAIlMi7IAAzEQDvANFGBAQBhATCRAgQCOAhDeA1QD/A+DkA0ICJAeQFRBFD5AWQBUAHBSAAQB6ABB8gMQCigJDngwIDHglQB0gXBZgOQDCgkC7gUIA1gGQDTgREwgVIAxgDQDegfFIAPQF1AADxAKIARABQE0AQEhAEQBcABBjgEIDXgMQCRgJD4gdQB0gOBngIQBogMBMgFQDigRC7ABQCEAJCLARQCLARCVAXQDUAaFeA9IApAGQEeAtDoAIQA1AEAzACQDbARDjgOQBMgCBGgFQBGgFBEgIQCRgUCCgcIAMgDQCeghDeg6QBtgbBdgTQBxgVBagHQDagbDYAQQBKAFBQAIQCrAOD1AkIHHBFICEAVQFxA5DlAdQBUAKBOAIQDlAXDFAFQDDAGDOgXIAWgDQCUgPDbgsQB4gZBmgXICwgnQC8goDBghIAegEQETggEVAcIAJAAQDdgDFzBBIAeAEQFPA6EEAjQBjAPBfALQC/AaDYAMQC/AKDkgXIAEAAQCigMDhguQD/guCWgQIA4gGQDFgWCzACQDgAED8ALIBbADIHsAMIBgABQDqAGDdgNICVgEIGngUICkgKQDBgPDPgdIAdgDQBUAxCTAfQBGAUA4AYIAARqIgeAQg");
	this.shape_55.setTransform(166.2,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.498)").s().p("EivzALAIlRi2IAAzJQDvANFHBAQBhATCSAhQCOAgDeA2QEBA/DkAzICJAeQFTBGD7AVQBTAHBTgBQB6ACB9gNQChgKDpgxIDIglQB0gYBagOQDCglC7gUIA2gFQDUgRExgUIAxgDQDdgdFLAPQF3ABDxALIASABQE2AQEgAEQBdAABkgEQBfgEB4gIQCQgKD6geQB0gOBogIQBogMBMgFQDjgTC8ABQCEAJCMASQCMARCVAXQDTAaFhA+IApAGQEfAuDpAKQA0AEA0ACQDdARDigMQBNgDBGgEQBGgFBFgIQCRgUCCgcIANgDQCdgiDfg6QBugbBdgTQBzgWBZgHQDagcDZAPQBLAFBPAIQCtAOD2AkIHJBFICDAUQFzA5DmAdICiASQDnAWDEAFQDEAGDQgYIAVgDQCVgODcgtIDegwICxgnQC9gpDBggIAfgEQESgfEYAdIAJAAQDcgCF2BCIAfAFQFRA7EDAjQBiAPBhALQDAAaDXANQDAAJDlgXIAEgBQCigMDjgwQD/gvCWgQIA6gHQDEgWC0ADQDhADD9ALIBcAEQCsADFBAKIBgAAQDtAHDcgMICVgDIGpgTICkgLQDDgODPgdIAdgEQBWAwCVAdQBIATA4AXIAARtIgeAQg");
	this.shape_56.setTransform(161.3,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.498)").s().p("EiwXALAIlYiyIAAzNQDwANFJBBQBgATCTAhQCPAgDfA2QECA/DkAzICKAeQFTBGD8AVQBUAHBTgBQB7ABB9gNQChgKDqgzIDJgmQB0gYBbgPQDCgkC8gUIA2gFQDVgREygTIAxgCQDdgdFOAQQF4ADDyALIASABQE3AQEhADQBdABBkgEQBggFB4gIQCRgKD7gfQB0gPBngIQBpgNBMgFQDkgTC9AAQCEAJCNASQCMARCWAYQDSAbFkA/IApAGQEhAvDpAKQA0AFA0ABQDeATDigMQBOgCBGgFQBHgEBFgJQCRgTCDgcIAMgDQCegiDgg7QBvgcBcgTQB0gWBZgIQDcgcDZAPQBLAFBQAHQCtAOD2AjIHLBFICEAUQF1A5DmAdQBVAKBOAHQDoAXDFAEQDEAGDRgYIAVgDQCVgPDdguIDfgvICxgoQC/goDBggIAfgEQESgeEaAeIAJABQDbgCF5BEIAeAEQFUA9EEAjQBiAPBgAMQDCAZDYANQDAAJDmgYIADgBQChgMDlgxQEBgwCXgRIA5gHQDFgWC0ACQDiADD+AMIBcADQCsAEFDAKIBhABQDuAIDcgLICWgEQD1gJC2gJICkgKQDDgPDQgdIAegDQBXAuCYAaQBJASA6AWIAARxIgfAQg");
	this.shape_57.setTransform(156.3,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.498)").s().p("Eiw8ALAIleiuIAAzRQDxANFJBBQBhATCTAhQCQAhDgA2QEEBADjAzICLAeQFVBGD8AUQBVAHBTgBQB7AAB+gOQChgKDrg0IDKgnQB1gYBagPQDDglC9gTIA2gFQDWgQEzgTIAxgCQDbgbFSARQF7ADDxALIASABQE5AREhADQBeABBkgFQBggFB4gIQCSgLD7gfQB2gPBngKQBpgMBNgGQDkgTC9AAQCFAJCOASQCMARCXAYQDSAbFmBAIApAGQEjAwDoAMQA1AEA0ACQDfATDjgLQBNgCBHgEQBGgEBGgJQCRgTCEgcIANgDQCdgiDig8QBvgcBdgTQB0gXBZgIQDdgdDaAOQBKAFBRAHQCuAOD3AjIHMBEICFAVQF2A5DnAcQBVAKBOAHQDpAWDGAFQDFAFDRgZIAWgDQCVgPDeguQB5gZBngXICxgnQDAgpDCgfIAegFQESgcEdAfIAJABQDbAAF7BEIAfAFQFVA9EDAkQBjAPBhAMQDDAaDXAMQDCAJDmgZIADAAQCigODmgyQECgxCWgRIA5gHQDHgXC1ACQDhADEAAMIBcAEQCsAEFFALIBiABQDvAIDdgKICVgDIGtgRIClgKQDDgPDRgdIAegEQBZAsCbAZQBKARA6AVIAAR1IgfAPg");
	this.shape_58.setTransform(151.3,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.498)").s().p("EixhALAIlkiqIAAzVQDyANFLBCQBhASCTAiQCRAhDgA2QEGBADjAzQBLARBAANQFWBGD9AUQBVAHBUgBQB8AAB+gPQChgLDsg1IDLgnQB2gZBZgPQDFglC9gUIA2gFQDXgPE0gRIAygCQDagbFVASQF8AFDyALIASABQE6AREiADQBeAABkgEQBhgFB4gJQCSgLD9ghQB2gPBngKQBqgNBMgGQDlgUC+AAQCGAJCOASQCMASCYAYQDRAbFpBCIApAGQEkAxDpAMQA1AFA0ACQDhAUDjgKQBNgCBHgEQBHgEBFgJQCSgSCFgdIANgDQCdgiDjg9QBvgdBegTQB0gXBZgJQDegeDaAPQBLAEBRAHQCwAOD3AjIHOBEICFAUQF4A5DnAcICkARQDpAWDHAEQDFAFDTgZIAVgDQCVgQDgguQB6gZBngXICygoQDBgpDBgeIAfgFQESgbEfAgIAJABQDbABF9BGIAfAFQFYA+ECAkQBkAPBgAMQDFAaDXAMQDCAJDngaIAEAAQChgODogzQECgzCXgRIA5gHQDIgYC1ACQDiADEBAMIBdAEQCrAEFIAMIBiACQDwAJDdgKQBRgBBFgCQD3gIC3gIICmgKQDDgODTgdIAegEQBaAqCdAXQBMAPA7AUIAAR5IgfAPg");
	this.shape_59.setTransform(146.3,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.498)").s().p("EiyGALAIlqimIAAzZQDyANFMBCQBhATCVAiQCSAhDgA2QEIBADjAzICLAeQFXBGD/AUQBUAHBVgCQB8AAB+gPQChgLDvg2QBugXBcgSQB3gZBZgPQDGgmC9gTIA3gFQDYgPE1gQIAxgCQDZgZFZATQF/AFDxAMIASABQE9AREhACQBeABBlgFQBigFB4gJQCSgMD+ghQB2gQBngKQBrgNBNgGQDmgVC9gBQCHAJCOATQCNARCZAZQDQAbFsBDIApAHQEmAxDoAOQA2AFA0ACQDiAVDjgKQBOgBBHgEQBHgFBGgIQCSgSCGgeIAMgCQCegiDkg+QBwgdBdgUQB1gXBbgJQDdgfDbAOQBKAFBSAHQCxAND3AjIHQBDICGAUQF5A5DnAbQBXAKBPAIQDqAVDHAEQDFAFDUgaIAWgDQCVgQDgguQB7gaBngXICygnQDCgpDDgeIAfgFQERgaEhAhIAKABQDaACGABHIAfAFQFaBAECAkQBkAPBhAMQDGAbDXALQDDAKDngbIAEgBQCggODqg0QEEg0CXgSIA5gIQDIgYC3ACQDiADEDAMIBcAEQCsAFFIANIBjABQDyAKDdgJICXgCQD3gIC4gHICngKQDDgODUgeIAegEQBbApChAUQBNAPA8ATIAAR9IggAOg");
	this.shape_60.setTransform(141.3,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.498)").s().p("EiyqALAIlxihIAAzeQDzANFOBCQBhATCVAiQCSAhDiA3QEIBBDjAzICNAeQFXBGEAATQBWAHBUgCQB9AAB+gQQChgMDwg3IDLgqQB3gZBagPQDGgnC+gSIA3gFQDZgPE1gPIAzgCQDYgYFcAUQGAAHDyAMIARABQE/AREjACQBdAABlgFQBjgFB4gJQCSgMD/giQB3gRBogKQBqgOBNgGQDngWC+AAQCGAJCQASQCNASCaAZQDQAbFuBEIApAHQEnAzDpAOQA2AFA0ADQDjAVDjgJQBPgBBHgEQBHgEBGgIQCSgSCHgeIANgDQCdgiDmg+QBwgdBegUQB1gYBbgJQDeggDbAOQBMAEBSAHQCxAND4AiIHRBEICHAUQF7A4DnAbQBXAKBQAHQDqAWDIAEQDGAEDVgaIAVgDQCWgQDigwQB6gZBogXICzgoQDDgpDCgdIAfgFQESgZEkAjIAJAAQDZADGEBJIAeAFQFcBAECAkQBkAQBhAMQDIAbDWAMQDFAJDogcIADgBQChgPDrg1QEFg1CXgSIA5gIQDJgZC3ACQDiADEEANIBdAEQCsAFFLANIBjACQD0AKDcgIICYgCQD3gGC6gIICngJQDEgODVgeIAdgEQBdAmCkATQBNANA+ASIAASBIghAOg");
	this.shape_61.setTransform(136.3,0);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.498)").s().p("EizPALAIl3idIAAziQD0ANFPBDQBhATCWAiQCTAhDiA3QEKBBDjAzQBMARBBANQFZBGEAATQBWAHBVgCQB9gBB/gQQChgNDxg4IDMgqQB4gaBZgQQDHgmC/gTIA3gEQDagPE2gOIAzgBQDXgXFfAUQGCAIDyAMIASABQFAASEjACQBeAABmgFQBigGB5gJQCSgNEAgjQB4gRBngKQBrgOBNgHQDogWC/gBQCHAJCQATQCOASCZAZQDQAcFxBFIApAHQEpAzDpAPQA2AGA0ADQDkAWDkgIQBOgBBIgEQBHgEBHgIQCSgSCIgeIAMgDQCegiDng/QBwgeBegUQB2gZBbgJQDfggDcANQBLAEBSAHQCzAND4AiIHTBDICHAUQF9A4DoAbICnARQDsAWDIADQDHAEDVgaIAWgEQCWgQDigwIDkgxICzgnQDEgpDDgdIAfgFQESgYEmAkIAJABQDZAEGGBJIAfAFQFdBCECAkQBlAQBhAMQDJAbDWAMQDFAJDpgdIADAAQChgQDsg2QEGg2CXgTIA6gIQDKgaC3ACQDjADEGANIBdAEQCrAFFNAPIBjACQD2ALDcgIICYgBQD4gGC7gHQBXgEBRgGQDEgNDWgfIAegEQBeAlCmAQQBPAMA/ARIAASFIgiAOg");
	this.shape_62.setTransform(131.3,0);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.498)").s().p("Eiz0ALAIl9iZIAAzmQD1ANFQBDQBhATCXAjQCUAhDiA3QEMBBDjAzICNAeQFaBHECASQBWAGBVgCQB9gBCAgQQChgODyg5IDNgrQB4gaBagQQDIgnC/gSIA3gFQDbgOE3gMIAzgCQDWgWFjAWQGDAJDzAMIASABQFBASEjACQBfAABmgGQBjgFB5gLQCSgMEBgkQB4gRBogLQBsgPBNgHQDogXDAgBQCHAJCRATQCOASCaAaQDPAcF0BGIApAHQErA1DoAQQA3AGA0ACQDmAYDjgIQBPgBBIgDQBIgEBHgIQCSgSCIgeIANgDQCdgiDphAQBxgeBegVQB2gZBbgJQDgghDdAMQBLAFBTAGQCzAND5AiIHVBCICHAUQF+A4DpAbQBYAKBQAHQDsAVDKADQDGAEDXgbIAWgDQCWgRDjgwIDkgxIC0goQDGgpDDgcIAfgFQERgXEpAlIAJABQDYAFGJBLIAfAFQFgBDEBAkQBlAQBiAMQDKAcDWALQDGAJDpgdIAEgBQCggQDug4QEHg3CXgTIA7gIQDJgbC5ACQDjADEHANIBeAFQCqAFFQAPIBjADQD3ALDcgHICZAAQD4gGC9gHICogJQDEgNDXgfIAegFQBgAkCpAOQBQALBAAQIAASJIgiANg");
	this.shape_63.setTransform(126.3,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.498)").s().p("Ei0ZALAImCiVIAAzqQD1ANFRBDQBhAUCYAiQCUAiDjA3QEOBCDjAyICNAfQFcBGECASQBWAGBWgCQB+gBCAgRQCggOD0g7QBwgYBegTQB5gbBZgQQDJgoC/gRIA4gFQDcgOE4gLIAzgBQDVgVFmAWQGGAKDyANIASABQFEASEjABQBfAABmgFQBjgGB5gLQCTgNECglQB5gRBogMQBsgOBNgHQDogYDCgBQCHAICSAUQCOASCbAaQDOAcF3BIIApAHQEtA1DoARQA3AGA0ADQDnAYDkgHQBOAABJgEQBHgDBIgIQCSgSCKgeIAMgDQCegiDphBQBygeBegVQB3gaBbgKQDigiDcANQBMAEBSAGQC1AND5AhIHXBDICHAUQGBA3DpAbQBXAKBRAHQDuAVDKACQDHAEDXgbIAWgEQCWgRDlgwIDlgyIC1gnQDGgpDDgdIAfgEQESgWEqAmIAKABQDXAGGMBMIAfAFQFiBEEBAlQBmAQBhAMQDMAcDWALQDGAJDqgeIAEgBQCggQDwg5QEHg5CYgTIA7gJQDKgaC5ABQDkADEHAOIBfAEQCqAGFRAQIBkADQD5AMDcgHICZAAQD6gFC8gGICqgJQDEgNDYggIAegEQBiAiCrAMQBSAJBAAPIAASNIgiANg");
	this.shape_64.setTransform(121.4,0);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.498)").s().p("Ei09ALAImKiQIAAzvQD3ANFSBEQBiATCYAjQCVAiDkA3QEOBCDjAzQBNARBBANQFdBGEDASQBXAGBWgCQB+gCCBgRQCggPD2g7IDOgtQB5gbBagQQDJgoDAgSIA3gEQDfgNE4gLIAzgBQDUgUFqAYQGHALDzANIASABQFFASEkABQBeAABogGQBjgGB5gLQCTgNEEgmQB5gSBogMQBtgPBMgHQDqgYDCgCQCHAJCTATQCPASCbAaQDOAdF5BJIAqAHQEtA3DpASQA3AGA0ADQDpAZDjgGQBQgBBIgDQBIgDBIgIQCTgSCJgeIAOgDQCdgjDrhBQBxgfBfgVQB3gaBbgKQDjgjDdAMQBMAEBTAHQC2AMD5AhIHYBCICIAUQGCA3DqAbICpAQQDvAVDKADQDHADDZgcIAWgDQCWgSDngxQB8gaBogXIC1goQDIgpDEgcIAfgEQERgVEtAnIAKABQDXAHGOBOIAfAFQFkBFEBAlQBmAQBiANQDNAcDWALQDHAIDqgfIAEgBQCggRDxg5QEKg6CXgUIA7gJQDLgbC5ABQDkADEKAOIBeAEQCrAGFTARIBkADQD7ANDbgFICaAAQD5gEC/gHICpgIQDGgNDYggIAfgFQBkAgCtAKQBTAJBBAOIAASQIgjANg");
	this.shape_65.setTransform(116.4,0);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.498)").s().p("Ei1jALAImOiMIAAzzQD3ANFTBEQBiATCZAjQCWAjDkA3QEQBDDjAyICOAeQFeBHEFARQBWAGBXgCQB+gCCCgSQCggQD3g8IDPguQB5gbBagQQDKgpDBgRIA4gEQDegNE6gJIAzgBQDUgTFsAYQGJAMDzANIASABQFHATEkABQBfAABngGQBlgHB5gLQCTgOEEgmQB6gTBogMQBugPBNgIQDqgZDDgCQCHAJCUAUQCPASCcAaQDNAeF7BKIAqAHQEwA3DoATQA4AGA0AEQDqAaDkgGQBPAABJgDQBIgEBIgHQCTgSCLgeIANgDQCdgjDthCQBxgfBfgVQB4gbBbgKQDkgkDdAMQBNADBTAHQC2AMD6AhIHaBCICJATQGDA4DrAaQBYAJBRAHQDwAVDLACQDIADDZgcIAXgEQCWgSDngxQB+gaBogYIC2gnQDJgqDDgbIAfgEQESgUEvApIAKABQDXAIGQBOIAfAGQFnBFEAAmQBmAQBiANQDPAcDWALQDIAIDqggIAEAAQCggSDzg7QEKg7CYgUIA7gJQDLgcC6ABQDlADELAOIBfAFQCqAGFVASIBlADQD8ANDbgEICbAAQD6gDC/gGQBYgEBSgFQDGgMDaghIAegEQBlAeCwAIQBVAHBCANIAASVIgjAMg");
	this.shape_66.setTransform(111.4,0);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.498)").s().p("Ei2HALAImViIIAAz3QD4ANFUBFQBiATCaAjQCWAiDlA4QESBDDjAyICOAfQFfBGEGARQBXAGBXgDQB/gCCCgSQCggQD4g+QBygaBegUQB6gcBagRQDLgoDBgRIA4gEQDfgNE7gIIAzgBQDTgSFvAZQGLAOD0ANIASABQFIATElABQBfgBBogGQBlgGB5gMQCUgOEFgoQB6gTBogMQBugQBNgIQDrgZDDgCQCIAICVAUQCPATCdAaQDNAeF9BLIAqAHQExA5DpAUQA4AGA0AEQDrAaDkgFQBQAABJgDQBIgDBJgIQCTgRCMgfIANgDQCcgiDvhDQBygfBfgWQB5gbBbgLQDkgkDeALQBMAEBUAGQC4AMD6AhIHcBBICJAUQGFA3DrAaQBZAJBRAHQDwAUDMACQDIADDbgdIAXgDQCWgSDogyIDngyIC2goQDKgpDEgbIAfgEQESgTExAqIAKABQDWAJGTBQIAgAFQFoBHEAAmQBnAQBiANQDQAcDVALQDJAIDsggIADgBQCggSD0g8QEMg8CXgVIA8gKQDMgcC7ACQDlACEMAPIBfAEQCqAHFYASIBkAEQD+AODcgEICaABQD7gDDBgGQBYgDBSgFQDGgNDbggIAfgFQBmAdCzAFQBWAHBDAMIAASYIgkAMg");
	this.shape_67.setTransform(106.4,0);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.498)").s().p("Ei2tALAImaiEIAAz7QD5ANFVBFQBiATCbAkQCXAiDlA4QEUBDDiAyQBOASBBANQFgBHEHAQQBYAGBXgDQB/gDCDgSQCfgRD6g/IDQgvQB7gcBagRQDMgpDBgRIA4gEQDigME6gHIA0AAQDSgRFzAaQGMAOD1AOIASABQFKATEkAAQBgAABogGQBlgHB6gMQCTgPEGgoQB8gUBogMQBugQBOgIQDrgbDEgCQCIAJCVAUQCQASCeAbQDMAeGABMIArAIQEyA5DpAVQA4AHA0AEQDsAbDkgEQBQAABKgDQBJgDBIgIQCUgRCMgfIANgDQCdgiDwhEQByggBfgWQB5gbBcgLQDlgmDeALQBNAEBUAGQC4AMD8AgIHdBBICKAUQGGA3DsAaICqAQQDyAUDMACQDJACDcgdIAWgEQCXgSDpgyIDogzIC2gnQDLgqDEgaIAggEQERgSE0ArIAKABQDWAKGVBRIAgAGQFqBIEAAmQBmAQBkANQDRAdDVAKQDKAIDsghIAEgBQCfgSD2g+QEMg9CYgWIA7gJQDOgdC7ACQDmACENAPIBgAFQCpAGFZAUIBmAEQD/AODbgDICcABQD7gCDCgFICrgIQDHgNDbghIAfgEQBoAaC1AEQBYAFBEALIAAScIglAMg");
	this.shape_68.setTransform(101.4,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.498)").s().p("Ei3RALAImhh/IAA0AQD5AOFXBEQBiAUCcAjQCXAjDmA4QEWBEDiAyICQAeQFhBHEHAQQBYAGBYgDQB/gDCDgUQCggRD8hAQBygbBegUQB8gdBZgRQDNgqDCgQIA4gEQDigME8gGIA0AAQDRgQF2AbQGPAQD0ANIASABQFLAUElAAQBhAABogHQBmgHB6gMQCTgPEIgqQB7gTBpgNQBugRBOgIQDsgbDFgDQCIAJCWAUQCQATCfAbQDLAeGDBOIAqAIQE0A6DpAVQA4AHA0AEQDvAdDkgEQBQABBKgDQBJgDBJgIQCTgRCNgfIAOgDQCcgjDxhEQBzggBfgWQB7gcBbgMQDmgmDfALQBNADBUAGQC6AMD7AgIHfBBICKATQGIA3DtAaICrAQQDyAUDNABQDJACDdgeIAXgDQCWgTDrgyIDogzIC3goQDMgpDFgaIAfgEQESgRE2AsIAKABQDVALGYBTIAgAFQFsBJEAAnQBnAQBjANQDTAdDVAKQDKAIDtgiIAEAAQCfgUD3g+QEOg/CYgWIA8gJQDNgeC8ACQDmACEPAPIBgAFQCpAHFcAUIBlAEQEBAQDcgDICbACQD8gBDDgGICrgIQDIgMDcghIAfgFQBqAZC4ACQBYAEBGAJIAAShIglALg");
	this.shape_69.setTransform(96.4,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.498)").s().p("Ei32ALAImnh7IAA0EQD6AOFZBFQBhATCdAkQCYAjDmA4QEYBEDiAyICQAfQFiBGEJAQQBYAGBYgEQCAgDCDgUQCggSD9hAIDRgxQB8gdBagRQDNgqDDgQIA4gEQDjgME9gEIA0AAQDQgPF6AbQGQASD0ANIATABQFNAUElAAQBhgBBogGQBngIB6gMQCUgQEIgqQB8gUBogOQBwgRBNgIQDtgcDGgCQCIAICXAVQCQATCgAbQDKAeGGBPIAqAIQE2A8DpAWQA4AHA1AEQDvAdDlgDQBQABBKgCQBJgDBJgIQCUgRCOgfIANgDQCdgjDyhFQB0ggBfgXQB7gcBbgMQDngnDfAKQBOAEBUAGQC7ALD8AgIHhBAICKAUQGKA2DtAaQBZAJBTAGQDzAUDOABQDJACDdgeIAYgEQCWgTDsgzIDpgyIC3goQDOgqDEgZIAggEQERgQE5AtIAKABQDUANGbBTIAgAGQFvBKD/AmQBnARBkANQDUAeDVAKQDLAHDtgiIAEgBQCfgUD5g/QEPhACYgXIA8gJQDOgeC9ABQDmACEQAPIBgAGQCqAHFdAVIBmAEQECAQDcgCQBVACBHAAQD8AADEgFQBZgDBTgFQDIgMDegiIAfgEQBrAXC7gBQBZADBHAJIAASkIgmALg");
	this.shape_70.setTransform(91.4,0);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.498)").s().p("Ei4bALAImth3IAA0IQD7AOFaBFQBhAUCeAkQCYAjDoA4QEYBFDjAxQBOASBCANQFkBHEJAPQBYAGBZgEQCAgDCEgVQCfgSD/hCQBzgcBfgWQB9gdBagRQDOgrDCgQIA5gDQDkgLE+gEIA0AAQDPgOF9AdQGTASD0AOIASABQFPAUElAAQBigBBogHQBngHB6gNQCUgQEKgrQB9gVBogOQBwgRBOgJQDtgcDGgDQCJAJCYAUQCRATCfAcQDKAfGIBQIArAIQE3A8DpAXQA5AIA1AEQDwAeDlgCQBRABBKgDQBJgCBJgIQCUgRCQgfIANgDQCcgjD0hGQB0ghBfgWQB7gdBcgMQDogoDgAKQBNADBVAGQC8ALD8AgIHiBAICMATQGLA2DuAZICsAQQD0AUDOABQDKABDfgfIAXgDQCXgUDtgzIDpgzIC4goQDPgpDFgZIAggEQERgPE6AvIAKABQDUANGfBVIAfAFQFxBMD/AmQBnARBkANQDWAeDVAKQDLAIDvgkIADgBQCfgUD7hBQEPhBCZgXIA7gKQDQgeC9ABQDnACERAQIBgAFQCqAHFgAWIBlAFQEFAQDbgBICcADQD9AADFgFQBZgDBUgEQDIgMDfgiIAfgFQBsAVC+gCQBbACBIAHIAASpIgnAKg");
	this.shape_71.setTransform(86.5,0);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.498)").s().p("Ei5AALAImzhzIAA0MQD8AOFbBGQBhATCfAkQCaAkDnA4QEaBFDiAyICRAeQFlBHELAPQBXAGBagEQCBgECEgVQCfgTEAhDIDTgyQB9geBagSQDPgqDDgQIA5gEQDmgKE+gDIA0AAQDPgMF/AdQGVAUD0AOIATABQFRAUElgBQBhAABqgIQBngHB7gNQCUgREKgsQB+gVBogOQBwgSBOgIQDugeDHgDQCJAJCZAVQCRATCgAcQDKAfGKBRIArAIQE5A+DpAYQA5AHA0AFQDzAeDkgBQBSABBKgCQBKgDBJgHQCVgQCPggIAOgDQCcgjD1hHQB0ghBggXQB8gdBbgNQDpgoDhAJQBOADBUAGQC9ALD8AfIHlBAICMATQGMA2DvAZQBaAJBTAHQD1ATDPABQDKABDggfIAXgEQCWgUDvgzIDqgzIC5goQDPgqDFgYIAhgEQERgOE8AwIAKABQDUAOGgBWIAhAGQFyBMD+AnQBpARBkAOQDXAeDUAJQDNAIDvglIADgBQCggVD8hBQEQhCCZgYIA8gKQDPgfC/ABQDnACESAQIBhAFQCqAIFhAXIBmAFQEGARDbAAICdADQD+AADGgEQBZgDBUgFQDIgLDhgjIAegEQBuATDBgFQBcABBIAHIAASsIgmAKg");
	this.shape_72.setTransform(81.5,0);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.498)").s().p("Ei5kALAIm5huIAA0RQD8AOFcBGQBiATCfAlQCaAjDoA5QEcBFDiAyICRAfQFmBHEMAOQBYAGBagEQCBgFCFgVQCfgUEChEQBzgdBggWQB9geBagSQDQgrDEgPIA5gEQDmgKFAgBIA0AAQDNgMGEAfQGWAUD1AOIASABQFSAVEngBQBhgBBqgHQBogIB6gNQCVgRELgtQB+gWBpgOQBwgSBOgJQDvgeDIgDQCJAICaAVQCRATChAdQDJAfGNBTIArAIQE7A+DpAZQA5AIA0AFQD0AfDlgBQBRACBLgCQBJgDBLgHQCUgQCRggIANgEQCcgjD3hHQB1ghBggYQB8geBbgMQDqgqDhAJQBOAEBVAFQC+ALD9AfIHmA/ICNATQGOA2DvAZQBaAJBUAHQD1ATDQAAQDKABDhgfIAXgEQCXgUDvg0IDrg0IC6goQDRgqDFgXIAggEQERgNFAAxIAKABQDTAPGjBYIAgAGQF1BND9AnQBpARBkAOQDZAeDUAJQDOAIDvgmIADAAQCfgWD+hDQERhDCZgYIA9gKQDQggC/ABQDnACEUAQIBhAGQCpAIFkAXIBnAGQEHARDbABICeADQD+ACDHgFICugHQDJgLDhgjIAfgFQBvASDDgHQBeAABJAFIAASwIgnAKg");
	this.shape_73.setTransform(76.5,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.498)").s().p("Ei6JALAIm/hqIAA0VQD9AOFdBGQBiAUCgAkQCbAkDoA5QEeBGDiAxQBPASBCANQFoBHENAOQBYAGBbgFQCAgECHgWQCegUEDhGQB0gdBggWQB+gfBagSQDRgsDEgPIA5gDQDngKFBAAIA1AAQDMgKGGAfQGYAWD2AOIASABQFUAVEngBQBigBBpgIQBogHB7gOQCVgSENguQB+gVBpgPQBxgTBOgJQDwgeDJgEQCIAICbAWQCRATCiAdQDJAfGQBUIArAIQE8BADpAaIBuANQD1AgDlAAQBRABBLgCQBKgCBKgHQCVgQCRghIAOgDQCdgjD3hIQB1giBggXQB9gfBbgNQDrgqDiAJQBOADBWAFQC+ALD+AfIHoA/ICNATQGPA2DwAYICuAPQD3ATDQABQDLAADiggIAXgEQCXgUDxg1IDsgzIC6goQDRgqDGgXIAggEQERgMFCAyIAKABQDTAQGlBZIAgAGQF3BOD+AoQBpARBkAOQDaAeDUAJQDPAIDvgmIAEgBQCfgWD/hEQEShECZgZIA9gKQDRghDAABQDnACEWARIBhAFQCpAIFlAZIBoAFQEIATDcABQBWADBIABQD/ACDIgEQBagDBUgEQDKgLDigkIAegEQBxAQDHgJQBegCBKAFIAAS0IgnAJg");
	this.shape_74.setTransform(71.5,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.498)").s().p("Ei6uALAInFhmIAA0ZQD+AOFeBHQBiATChAlQCcAkDoA5QEgBGDiAxICSAfQFoBHEOAPQBZAFBagFQCCgFCGgWQCfgVEEhGQB1geBggXQB+ggBagRQDSgsDFgPIA5gDQDpgKFBABIA1ABQDLgJGKAfIKPAmIATABQFVAVEngBQBigBBqgIQBpgIB7gOQCVgSEOgvQB/gWBpgPQBxgTBOgKQDxgfDJgEQCKAJCbAVQCSAUCiAdQDIAgGTBUIArAJQE+BADoAbQA6AIA1AFQD2AhDlABQBSACBLgCQBKgCBLgHQCVgQCSghIAOgDQCcgjD5hJQB2giBggYQB9gfBbgNQDtgrDhAIQBPADBWAGQDAAKD+AeIHpA/ICOATQGRA2DwAYICvAPQD4ATDRAAQDLAADiggIAYgEQCXgVDyg1IDsg0IC7goQDSgqDGgXIAhgDQERgLFEAzIAKACQDSARGoBaIAgAGQF5BPD+AoQBpASBlANQDbAfDUAJQDPAHDxgnIADgBQCfgWEAhFQEUhGCZgZIA9gLQDSghDAABQDoACEXARIBhAGQCpAIFoAZIBnAGQELATDbACICfAEQD+ADDKgEQBagCBVgEQDKgLDigkIAggFQByAODJgLQBggCBLADIAAS4IgoAJg");
	this.shape_75.setTransform(66.5,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.498)").s().p("Ei7TALAInLhiIAA0dQD/AOFgBHQBhAUCiAlQCcAkDqA5QEhBGDhAyICTAfQFpBHEPAOQBZAEBcgEQCBgFCHgXQCegWEHhHQB0gfBggXQCAggBagRQDSgtDGgOIA5gEQDpgJFDACIA1ABQDKgIGNAhIKRAnIATABQFYAVEmgCQBjgBBqgIQBqgIB7gPQCVgREOgwQCAgXBpgQQBzgTBNgJQDyggDKgEQCJAICcAWQCTATCjAeQDIAgGVBWIArAIQE/BCDpAbQA5AJA1AFQD5AiDkABQBTACBLgBQBLgCBKgHQCVgQCTghIAOgDQCcgjD7hKQB1giBigZQB9gfBcgNQDtgsDiAIQBPACBWAGQDAAKD/AeQCcATFPAsICOASQGTA2DxAYQBbAJBUAGQD5ATDSgBQDLAADkghIAYgEQCWgVDzg1IDug0IC6goQDUgqDHgXIAggDQERgKFGA0IAKACQDSASGrBbIAhAGQF6BRD+AoQBpASBmANQDcAfDUAJQDPAHDygoIADgBQCegXEChGQEWhHCYgZIA+gLQDSgiDBABQDoACEZARIBiAGQCoAJFqAaIBoAGQEMATDaADICgAFQD/ADDLgEQBbgCBUgEQDLgKDjgkIAggFQB0AMDLgNQBigEBLACIAAS8IgoAJg");
	this.shape_76.setTransform(61.5,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.498)").s().p("Ei73ALAInShdIAA0iQEAAOFhBHQBhAUCjAlQCdAlDqA5QEiBHDiAxQBQASBDANQFrBHEPAOQBaAEBbgFQCDgFCHgXQCegXEIhIQB2gfBfgXQCBghBagSQDSgtDGgOIA6gDQDqgJFDAEIA2ABQDKgHGQAhIKTAoIATABQFZAWEngCQBjgBBrgIQBqgJB7gPQCVgSEQgxQCAgXBpgQQBzgTBOgKQDyghDLgEQCKAICcAWQCTAUCkAeQDHAgGXBXIAsAJQFBBCDoAdQA7AIA1AGQD5AjDlACQBTACBMgCQBJgBBMgIQCVgPCUghIAOgDQCcgkD8hKQB2gjBhgYQB/ggBagOQDvgsDiAHQBPADBXAFQDCAKD+AeIHuA+ICOATQGVA1DxAYICwAPQD6ASDSgBQDLAADlghIAYgEQCXgWD1g1IDtg1IC8goQDVgqDHgWIAggDQEQgJFJA2IALABQDRATGtBdIAhAGQF9BRD8ApQBrASBlANQDeAgDUAIQDQAHDygoIADgBQCfgYEEhHQEVhICZgaIA+gLQDTgiDBAAQDpACEaASIBiAGQCoAIFsAbIBpAHQENAUDbADQBXAEBJABQD/AFDMgEQBbgCBWgEQDKgLDlgkIAfgFQB2ALDOgQQBjgEBNABIAATAIgpAIg");
	this.shape_77.setTransform(56.5,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.498)").s().p("Ei8cALAInXhZIAA0mQD/AOFjBIQBiATCjAmQCdAkDrA6QEkBHDiAxICTAfQFsBHEQAOQBaAEBcgFQCDgGCIgXQCegXEJhKQB2gfBggYQCBghBagSQDUgtDGgOIA6gDQDsgIFDAEIA2ABQDIgGGUAjIKWApIASABQFbAWEogCQBjgBBrgJQBqgIB7gQQCWgSERgyQCAgYBqgQQBzgUBOgKQDzghDLgFQCLAJCdAWQCTAUClAeQDGAgGaBZIAsAJQFCBDDpAdQA6AJA1AGQD7AjDlADQBTADBMgCQBLgBBLgIQCWgPCVghIANgDQCcgkD+hLQB2gjBhgZQCAggBagOQDwguDjAIQBPACBXAFQDDAKD/AeQCcASFTArICPATQGWA1DyAYICxAPQD6ASDTgBQDMAADmgjIAYgEQCXgVD1g2IDvg1IC8goQDWgqDHgWIAhgDQEQgIFLA3IALABQDQAUGwBeIAhAGQF/BTD8ApQBrASBlANQDgAgDTAIQDSAHDygpIAEgBQCegYEFhIQEXhKCZgaIA+gLQDUgjDCAAQDpACEbASIBiAGQCpAJFtAcIBpAGQEPAVDbAEQBXAEBJACQEBAFDMgEQBcgBBVgEQDLgLDmgkIAggFQB3AIDQgRQBkgGBOAAIAATEIgpAIg");
	this.shape_78.setTransform(51.5,0);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.498)").s().p("Ei9BALAIndhVIAA0qQEAAOFkBIQBiAUCkAmQCeAkDrA6QEmBIDhAxICVAfQFsBHESANQBaAEBcgFQCDgGCJgYQCegYEKhLIDXg4QCBghBagSQDVguDHgNIA6gDQDtgIFEAFIA2ACQDIgFGXAjIKXArIATABQFcAWEogCQBkgCBrgIQBrgJB7gQQCXgTERgyQCBgYBqgRQBzgUBPgLQDzgiDMgEQCLAICeAWQCUAUClAfQDFAgGdBaIAsAJQFEBEDpAfQA6AJA1AGQD9AkDlADQBTADBMgBQBLgCBMgHQCWgPCVghIAOgEQCcgjD/hMQB3gjBhgZQCAghBbgPQDwguDkAHQBPACBXAFQDEAKEAAdQCbATFVArICQASQGYA1DyAYQBcAIBWAGQD7ASDTgBQDNAADmgjIAZgEQCXgWD2g3IDwg1QBtgYBPgQQDYgqDHgVIAggDQERgHFNA4IALABQDQAWGzBfIAgAGQGCBUD8AoQBrATBlAOQDhAfDTAJQDTAGDygqIAEgBQCegZEHhJQEYhKCZgbIA+gMQDVgjDCABQDpABEdASIBjAGQCoAKFwAcIBpAHQERAWDaAFIChAGQEBAFDOgDQBcgCBVgEQDMgKDnglIAfgFQB5AHDTgTQBlgHBPgBIAATHIgqAIg");
	this.shape_79.setTransform(46.5,0);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(0,0,0,0.498)").s().p("Ei9mALAInjhRIAA0uQEBAOFlBJQBiATCkAmQCgAlDrA6QEoBIDhAxQBRASBDANQFvBHESANQBbAEBdgFQCCgHCKgZQCdgYENhLQB3ghBggYQCCgiBZgSQDWguDHgOIA7gCQDugIFFAGIA2ACQDGgEGbAkQGjAdD3APIATACQFeAWEogDQBjgBBtgJQBrgJB7gQQCXgTESg0QCCgYBqgRQBzgVBPgKQD1gjDMgFQCLAICfAXQCUAUClAfQDGAhGfBbIAsAJQFGBFDoAfQA7AJA2AHQD9AlDlAEQBTADBNgBQBLgCBNgHQCWgPCWghIAOgEQCbgjEBhNQB3gkBigZQCAghBagPQDygvDkAGQBQADBXAFQDFAJEAAdQCcASFXArICQATQGZA0DzAYICyAOQD8ASDUgCQDNAADogkIAZgEQCWgWD4g3IDwg1QBugYBQgQQDYgrDHgUIAhgDQEQgGFQA5IAKACQDQAWG1BgIAiAHQGDBUD8ApQBrATBmAOQDiAgDTAIQDTAGDzgrIAEAAQCegaEIhKQEahMCZgbIA+gMQDWgkDCABQDqABEeASIBjAHQCoAJFyAeIBpAHQETAWDaAGICiAGQEBAGDPgDQBcgBBWgEQDMgKDnglIAggFQB7AFDVgWQBngIBQgCIAATMIgqAHg");
	this.shape_80.setTransform(41.6,0);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.498)").s().p("Ei+KALAInqhNIAA0yQECAOFmBJQBjAUClAmQCfAlDsA6QEpBIDhAxICWAfQFvBIETAMQBbAEBdgGQCEgGCJgaQCegYEOhNQB3ghBhgZQCCgiBagSQDXgvDHgNIA7gDQDvgHFGAIIA3ACQDFgDGeAlQGlAdD3AQIASABQFgAXEpgDQBjgBBsgJQBsgKB8gQQCXgUETg0QCCgZBqgRQB1gVBOgLQD1gjDOgGQCLAICgAXQCUAUCmAgQDFAhGiBcIAsAJQFHBGDpAhQA7AJA1AGQD/AmDmAFQBUADBNgBQBKgBBNgHQCWgPCXgiIAPgDQCbgjEChOQB3gkBigaQCBghBbgPQDzgwDkAGQBQACBXAFQDGAJEBAdQCbASFZArICQASQGcA0DzAXQBdAJBWAGQD8ARDWgBQDNgBDogkIAZgEQCYgXD4g3IDxg1QBugZBQgQQDZgqDIgUIAggDQERgFFSA6IAKACQDQAXG4BiIAgAGQGHBWD6ApQBsATBnAOQDjAgDTAIQDUAHD0gsIADgBQCegaEJhMQEbhNCagbIA+gMQDXglDCABQDrABEfATIBjAGQCpAKFzAeIBqAIQEUAWDaAHICjAHQEBAHDRgDQBcgCBWgDQDMgKDpgmIAggFQB8AEDYgYQBogJBRgDIAATPIgrAHg");
	this.shape_81.setTransform(36.6,0);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.498)").s().p("Ei+wALAInvhIIAA03QEDAOFnBJQBiAUCnAnQCgAlDtA6QEqBJDhAwQBSASBEAOQFwBHEVAMQBbAEBdgGQCEgHCKgaQCegZEPhOQB4ghBhgZQCCgjBbgSQDXgwDIgMIA7gDQDwgHFHAJIA2ACQDFgCGhAmQGnAfD3AQIATABQFhAXEpgDQBkgCBtgJQBsgJB8gRQCXgUEUg2QCDgZBqgSQB1gVBPgLQD2gkDOgFQCLAIChAXQCUAUCnAgQDEAhGlBdIAsAKQFJBHDpAhQA7AKA1AGQEBAnDlAFQBUAEBNgBQBMgBBNgHQCWgPCYgiIAOgDQCbgkEDhOQB5gkBhgaQCCgiBbgQQDzgxDlAGQBQACBYAFQDHAJEBAcQCcASFaArICRASQGdA1D0AWQBdAJBWAGQD+ARDWgCQDNgBDqglIAZgEQCXgXD6g3IDxg2QBwgYBPgQQDagrDIgTIAhgDQERgEFUA8IALABQDOAYG7BjIAhAHQGHBXD7ApQBsATBnAOQDlAhDSAHQDVAHD1gtIAEgBQCdgaELhNQEchOCZgdIA/gLQDXgmDEABQDrABEgATIBkAHQCoAKF1AfIBqAIQEWAXDaAHICjAHQECAIDSgDQBcgBBXgEQDMgJDqgmIAggFQB+ABDbgaQBpgKBSgEIAATUIgsAGg");
	this.shape_82.setTransform(31.6,0);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(0,0,0,0.498)").s().p("Ei/UALAIn2hEIAA07QEEAOFoBKQBjAUCnAmQChAmDtA6QEsBJDhAxICWAfQFxBHEWAMQBbAEBfgGQCEgICKgaQCegaEQhPQB4giBigZQCDgjBagTQDYgvDJgMIA7gDQDxgHFIAKIA3ACQDDAAGlAnQGoAfD3ARIATABQFjAXEpgEQBlgBBtgKQBtgJB8gRQCXgVEWg2QCDgaBqgSQB1gVBPgMQD3gkDPgGQCLAICiAXQCVAVCnAgQDDAhGoBfIAsAJQFLBIDoAiQA8AKA1AHQECAnDmAHQBUADBNAAQBMgBBNgHQCXgPCZgiIANgDQCcgkEEhQQB5gkBigaQCCgiBbgQQD1gyDlAGQBQABBZAFQDIAJEBAcQCcASFbAqICSATQGeA0D1AWQBdAIBXAGQD/ASDWgDQDOgBDrglIAZgEQCXgYD7g4IDyg1QBwgZBPgQQDcgqDIgTIAhgDQEQgDFXA9IALABQDNAaG+BjIAhAHQGKBYD6AqQBtATBmAOQDnAhDSAHQDWAHD1guIAEgBQCdgbENhNQEchQCagdIA/gMQDYgmDEABQDrABEiATIBkAHQCoALF4AfIBqAIQEYAYDZAIICkAIQEDAIDSgCQBdgBBXgEQDNgJDrgnIAggFQB/AADdgcQBqgLBUgGIAATYIgtAGg");
	this.shape_83.setTransform(26.6,0);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(0,0,0,0.498)").s().p("Ei/5ALAIn8hAIAA0/QEFAOFpBKQBjAUCoAnQCiAlDtA7QEuBJDgAxICXAfQFzBIEWALQBcAEBegHQCFgHCLgbQCdgbEShQQB5giBhgaQCEgjBagTQDZgwDJgMIA7gCQDzgHFIAMIA4ACQDCAAGoAoQGqAhD4AQIASACQFmAXEpgEQBlgCBtgJQBtgKB8gRQCYgVEWg3QCFgbBpgSQB3gWBOgLQD3gmDRgGQCLAICiAXQCVAVCpAhQDDAhGqBgIAsAKQFMBJDpAjQA7AKA2AHQEEAoDlAHQBUAEBOgBQBMAABNgHQCYgOCZgjIAOgDQCcgkEFhRQB5gkBigbQCDgiBbgRQD2gyDlAFQBRACBZAEQDJAJECAcQCbARFeArICRASQGhA0D1AWQBdAIBYAGQD/ARDXgCQDOgCDsglIAZgFQCYgXD8g5IDzg2IC/goQDdgrDJgSIAhgDQEQgCFZA+IAKABQDOAbHABlIAhAHQGMBZD6AqQBtATBnAOQDoAiDSAHQDWAGD2guIAEgBQCdgcEOhPQEehQCageIA/gMQDYgmDGAAQDrABEjAUIBlAGQCnALF6AhIBrAIQEYAZDaAIIClAIQEDAJDTgCQBegBBWgDQDOgJDsgnIAggFQCBgCDggeQBrgNBUgGIAATbIgtAGg");
	this.shape_84.setTransform(21.6,0);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(0,0,0,0.498)").s().p("EjAeALAIoBg8IAA1DQEEAOFrBKQBjAUCpAnQCiAmDuA7QEvBKDiAwQBSASBFAOQFzBHEYALQBcAEBfgHQCFgICLgbQCdgbEUhSQB4giBigaQCFgkBagTQDZgxDKgLIA7gDQD0gFFKAMIA2ACQDCACGrAoQGtAiD3ARIATABQFnAYEpgEQBmgCBugKQBtgJB9gSQCXgWEYg4QCEgaBqgTQB3gWBPgMQD4gmDRgGQCLAICjAXQCWAVCpAgQDCAjGtBhIAsAJQFOBKDpAkQA7AKA2AIQEFApDmAIQBVADBNAAQBNgBBNgGQCXgOCbgjIAOgDQCbgkEHhSQB6gkBigbQCEgkBagQQD3gzDmAEQBRACBZAEQDKAJECAcQCcARFfAqICSASQGiA0D2AWQBdAIBZAGQEAARDXgDQDPgCDtgmIAZgEQCXgYD+g5IDzg2QBygZBPgQQDdgqDJgSIAhgDQERgBFbA/IAKACQDOAbHCBmIAiAHQGNBaD6ArQBtATBoAOQDpAiDSAHQDXAGD2gvIAFgBQCdgcEPhQQEfhSCageIA/gMQDZgnDGAAQDsABElAUIBkAHQCnALF8AhIBsAJQEaAZDZAJQBbAGBKADQEEAKDUgCQBegBBXgEQDPgIDsgoIAggFQCDgEDjggQBsgNBVgIIAATgIgtAFg");
	this.shape_85.setTransform(16.6,0);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(0,0,0,0.498)").s().p("EjBDALAIoHg3IAA1IQEFAOFsBLQBjAUCqAnQCjAmDuA7QExBKDhAxICYAfQF0BIEZAKQBcAEBfgHQCGgICMgcQCdgcEVhSQB5gkBigaQCFgkBagTQDbgxDKgLQAdgCAegBQD1gFFKANIA4ADQDAACGvAqQGuAjD4ARIATABQFoAYEqgEQBmgCBugKQBugKB8gSQCYgWEZg5QCFgbBqgTQB3gXBPgMQD5gnDRgGQCMAICkAXQCWAWCqAgQDBAjGvBiIAtAKQFPBLDpAlQA9AKA1AHQEGAqDmAJQBVAEBOAAQBMgBBPgGQCXgOCbgjIAOgEQCcgkEIhSQB6glBigbQCEgkBbgQQD4g0DmAEQBSABBZAFQDLAIECAbQCcARFhArICTASQGjAzD3AWQBeAIBYAGQEBAQDYgDQDPgCDugmIAZgFQCYgYD/g5ID0g3QBxgZBQgPQDfgrDIgSIAigCQEQAAFeBAIAKACQDNAcHFBoIAhAHQGRBbD5ArQBuATBnAOQDrAiDSAHQDYAGD3gwIADgBQCdgdEShRQEfhTCbgeIA/gMQDagoDGAAQDsABEnAUIBkAHQCoAMF9AiIBsAJQEcAZDaAKIClAJQEEALDWgCQBeAABXgEQDPgIDtgoIAhgFQCDgGDmgiQBugPBWgIIAATjIguAFg");
	this.shape_86.setTransform(11.6,0);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(0,0,0,0.498)").s().p("EjBoALAIoNgzIAA1MQEGAOFtBLQBjAUCqAoQCkAmDvA7QEzBLDgAwQBTASBGANQF2BIEZAKQBcAEBhgHQCFgJCMgcQCegdEWhTQB6gkBigaQCFglBbgTQDbgyDLgLIA7gCQD1gFFMAOIA3ADQDBAEGxAqQGvAkD6ASIASABQFqAZEqgGQBmgCBvgKQBvgKB8gSQCYgXEag6QCFgbBrgTQB3gXBQgNQD5gnDSgHQCMAIClAYQCWAVCrAhQDAAjGyBkIAtAKQFRBLDoAmQA+ALA1AHQEIArDmAJQBVAFBOgBQBNAABOgHQCYgNCbgjIAPgEQCbgkEKhTQB6glBjgbQCEglBbgRQD5g1DnAEQBRACBaAEQDMAIEDAbQCcARFiAqICUASQGlAzD2AWQBfAIBZAFQECARDYgDQDPgDDwgnIAZgEQCYgZD/g6ID1g2QBzgZBPgQQDggqDJgSIAigCQEQABFfBCIALABQDMAdHIBpIAhAHQGTBdD5ArQBuATBnAPQDtAiDSAGQDYAGD4gxIAEgBQCcgdEThSQEhhUCagfIBAgNQDbgoDHAAQDsABEoAVIBlAHQCnALF/AjIBsAJQEeAbDZALICmAJQEFALDXgBQBegBBYgDQDOgJDvgoIAhgFQCFgHDoglQBvgQBYgJIAATnIgvAFg");
	this.shape_87.setTransform(6.7,0);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(0,0,0,0.498)").s().p("EjCNALAIoTgvIAA1QQEHAOFuBMQBkAUCqAnQClAnDvA7QE1BLDgAwICZAgQF3BHEaAKQBdAEBggIQCHgJCNgcQCdgdEXhVQB6gkBjgbQCGglBagUQDcgxDMgLIA7gCQD3gFFMAQIA4ADQC/AEG1ArQGxAmD5ARIATACQFsAZEqgGQBmgCBvgKQBvgLB9gSQCYgXEbg7QCGgcBqgTQB5gYBPgMQD6goDSgHQCOAIClAXQCWAWCsAhQDAAjG0BlIAtAKQFSBNDqAnIByASQEIAsDnAKQBVAEBPAAQBNAABPgHQCYgNCcgkIAPgDQCagkEMhUQB7glBigcQCFglBbgRQD6g2DoAEQBSABBZAEQDNAIEDAbQCdAQFjAqICVASQGmAzD3AWQBfAIBZAFQEDAQDagDQDPgDDwgnIAZgFQCYgZECg6ID1g3QBzgZBPgPQDigrDJgRIAhgCQEQACFiBDIALABQDLAfHMBqIAhAHQGUBdD5ArQBvAUBnAPQDuAiDSAGQDZAGD4gxIAEgBQCcgeEVhTQEhhWCbgfIBAgNQDbgpDIAAQDtABEoAVIBnAHQCmAMGCAkIBsAJQEgAbDZAMICmAKQEFALDYgBQBfAABYgDQDPgJDwgoIAggGQCHgJDrgmQBwgRBZgKIAATrIgvAEg");
	this.shape_88.setTransform(1.7,0);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(0,0,0,0.498)").s().p("EjCxALAIoagrIAA1UQEIAOFwBMQBiAUCsAoQClAnDxA7QE2BLDgAwICZAgQF4BIEcAJQBdAEBggIQCHgJCOgdQCcgeEahWQB6gkBjgcQCGglBbgUQDcgyDMgKIA8gCQD4gFFNARIA4ADQC+AGG4AsQGzAmD5ASIATABQFuAaErgGQBmgCBvgLQBwgKB9gTQCYgYEcg7QCHgdBqgUQB5gXBPgNQD7gpDTgHQCNAICnAYQCXAVCsAiQC/AkG3BlIAtALQFUBNDpAoQA9ALA2AIQEKAsDmALQBWAFBPAAQBNAABPgHQCYgNCegkIAOgDQCbgkENhVQB7gmBjgcQCGglBagSQD7g2DoADQBSABBaAEQDOAIEEAbQCcAQFmAqICVASQGnAyD4AWIC5ANQEDAQDagEQDRgDDxgoIAZgEQCYgaECg6ID3g3QBzgZBPgQQDigrDKgQIAigCQEQADFkBEIALACQDLAfHNBrIAiAIQGWBeD5ArQBvAUBoAPQDvAjDRAGQDaAFD5gyIAEgBQCcgeEWhVQEjhWCbggIBAgNQDcgqDIAAQDtABErAVIBmAIQCmAMGEAkIBsAKQEiAcDZAMICmAKQEGANDZgBQBfgBBZgDQDPgIDxgpIAhgFQCIgLDugoQBxgTBagLIAATvIgwAEg");
	this.shape_89.setTransform(-3.3,0);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(0,0,0,0.498)").s().p("EjDWALAIoggmIAA1ZQEJAOFxBMQBjAUCsApQCmAmDxA7QE4BNDgAwICZAfQF5BIEdAJQBdADBigHQCGgKCPgdQCcgfEbhXQB7glBjgbQCHgmBagUQDegzDMgKIA8gCQD5gEFOASIA4AEQC9AGG8AtQG1AoD5ASIATABQFvAaErgGQBngDBvgKQBwgLB+gUQCYgXEdg9QCIgcBqgVQB5gYBQgNQD7gpDUgIQCOAICnAYQCXAWCtAiQC+AkG6BnIAtAKQFWBPDpAoQA9AMA2AIQELAtDnALQBWAFBPAAQBNABBQgHQCYgNCfgkIAOgDQCbglEOhVQB7gmBjgcQCHgmBagSQD8g3DpADQBSABBaADQDPAJEFAZQCbAQFoAqICVASQGqAzD4AVQBgAHBZAGQEFAQDbgFQDQgDDygoIAagFQCYgZEDg7ID3g4QB0gZBPgPQDkgrDKgQIAigCQEPAFFnBEIALACQDLAgHQBtIAhAHQGZBgD4ArQBvAUBoAPQDxAjDRAGQDbAFD6gzIADgBQCdgfEXhVQEkhYCbggIBAgNQDdgrDJAAQDtABEsAWIBmAHQCnAMGFAmIBtAKQEjAcDZANICnALQEHANDagBQBfAABYgDQDRgIDygpIAggGQCKgMDwgrQBzgTBbgNIAATzIgwAEg");
	this.shape_90.setTransform(-8.3,0);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(0,0,0,0.498)").s().p("EjD7ALAIolgiIAA1dQEIAOFyBNQBkAUCuAoQCmAnDxA7QE5BNDhAwQBTASBGAOQF6BIEfAIQBdADBigHQCGgKCQgfQCbgfEdhXQB7gmBjgcQCIgmBagUQDfgzDNgKIA8gCQD6gDFPATIA4ADQC8AIG/AuQG3ApD6ARIASACQFxAaErgHQBogCBvgLQBxgLB+gUQCYgYEeg9QCIgdBrgVQB5gZBQgNQD8gqDVgHQCNAHCpAZQCXAWCuAiQC+AkG8BoIAtALQFXBQDpApQA+ALA2AJQENAuDnAMQBWAFBPAAQBNABBRgHQCYgNCfgkIAOgDQCbglEPhWQB8gnBkgcQCGgmBbgTQD9g4DpADQBSABBbAEQDQAIEFAZQCcAQFpAqICWARQGrAzD6AVQBfAHBaAGQEFAPDcgEQDRgEDzgpIAagEQCYgaEEg7ID4g4QB0gaBPgPQDlgrDKgPIAigDQEQAHFpBFIALACQDKAhHSBuIAiAIQGbBgD4AsQBvAUBpAPQDyAjDQAGQDdAFD6g0IADAAQCdggEZhXQEkhZCbggIBCgOQDcgqDKAAQDuAAEtAWIBnAHQClANGJAmIBtALQEkAdDZANICoALQEGAODcAAQBfAABZgDQDRgIDygpIAhgGQCLgOD0gtQB0gVBcgNIAAT3IgxADg");
	this.shape_91.setTransform(-13.3,0);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(0,0,0,0.498)").s().p("EjNLAKiIAA1hQEJAOF0BNQBjAUCvApQCmAnDyA7QE7BODgAvQBUASBGAOQF8BIEfAIQBeADBhgIQCIgKCPgfQCcgfEfhZQB7gmBjgcQCIgnBbgUQDgg0DMgJIA9gCQD7gDFPAUIA5AEQC7AIHCAvQG5AqD6ASIATACQFzAaErgHQBogCBvgLQBygMB9gUQCagYEfg/QCIgdBrgVQB5gZBQgNQD+grDVgIQCNAICqAYQCYAWCuAjQC9AkG/BqIAuAKQFYBRDpAqQA+AMA2AIQEOAvDnANQBWAFBQABQBOAABQgGQCYgNCggkIAPgEQCbgkEQhXQB9gnBjgcQCIgnBagTQD+g5DpACQBUABBbAEQDQAIEGAZQCbAPFsAqICWASQGtAyD6AUQBgAIBZAFQEHAQDcgFQDRgED0gpIAagFQCZgaEFg8ID5g4QB1gZBPgPQDmgrDKgPIAigDQEQAIFrBGIALACQDKAjHVBvIAiAHQGcBiD4AsQBwAUBoAPQD0AkDQAFQDeAGD6g1IAEgBQCcggEahYQEmhaCcghIBBgOQDdgrDLAAQDuAAEuAWIBnAIQCmANGKAnIBuAKQEmAeDZAOICnAMQEIAODcAAQBgAABZgDQDRgHD0gqIAhgGQCNgQD2guQB1gWBdgPIAAT7MmRtAADg");
	this.shape_92.setTransform(-18.3,0);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(0,0,0,0.498)").s().p("EjN2AKmIAA1lQEKAPF1BMQBjAVCvAoQCoAoDyA7QE9BODgAwICbAfQF8BIEgAIQBeADBigIQCIgLCQgfQCcggEghaQB8gnBjgcQCJgnBagVQDgg0DOgJQAegBAfAAQD8gDFQAVIA5AEQC6AKHGAvQG6AsD6ASIAUABQF0AbEsgHQBngDBxgLQBxgLB+gVQCagZEgg/QCIgeBrgVQB7gaBQgNQD9gsDXgIQCOAICpAZQCZAWCuAjQC9AkHCBrIAtALQFbBSDpArIB0AUQEPAwDnANQBXAGBQABQBOAABQgGQCZgNChgkIAOgEQCbgkEShYQB9gnBkgdQCIgnBbgTQD+g6DqACQBTAABbAEQDTAIEFAYQCcAQFtApICXASQGuAyD6AUQBgAIBbAFQEHAPDdgFQDSgED1gqIAagEQCYgbEHg8QCNggBsgYQB2gaBPgPQDngrDKgOIAigDQEQAJFuBIIALABQDJAkHYBwIAiAIQGfBiD3AtQBwAUBpAPQD1AkDQAFQDeAGD7g2IAEgBQCcghEbhYQEohcCbghIBBgOQDfgsDKAAQDvAAEwAWIBnAIQCmANGMAoIBuALQEoAeDYAPQBdAIBMAEQEIAQDdAAQBhAABZgDQDRgHD1gqIAhgGQCPgSD4gxQB3gXBdgPIAAT/MmS8AACg");
	this.shape_93.setTransform(-23.3,0);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(0,0,0,0.498)").s().p("EjOhAKrIAA1qQELAPF2BNQBjAUCwApQCpAoDzA7QE+BODgAwQBVASBGAOQF+BIEhAHQBeADBjgIQCIgLCQggQCcghEhhbQB8gnBkgdQCJgnBbgVQDhg0DOgJIA9gCQD9gCFRAWIA5AEQC5ALHJAxQG9AsD6ATIATABQF2AbEsgHQBogDBxgMQBygLB+gVQCagZEhhAQCJgfBrgVQB7gaBQgOQD/gsDXgIQCOAHCqAZQCZAXCvAjQC9AlHEBsIAtAKQFcBTDpAsIB1AVQERAxDnAOQBXAFBQABQBOABBRgGQCZgNCiglIAOgDQCbglEUhYQB9goBkgdQCIgnBbgUQEAg6DqABQBTABBcADQDTAIEGAYQCcAPFuAqICYARQGvAyD7AUQBhAIBbAFQEIAPDdgFQDSgFD2gqIAbgFQCYgbEIg8QCNghBtgXQB2gaBPgPQDogrDLgOIAigDQEQAKFwBJIALACQDIAkHbByIAiAHQGhBkD3AtQBwAUBqAQQD2AkDQAFQDfAFD8g3IADgBQCcghEdhaQEphcCbgiIBBgOQDggtDLAAQDvAAExAXIBoAIQClANGOApIBvALQEpAfDZAQICpAMQEIAQDfAAQBgABBagDQDSgHD2grIAhgGQCQgTD7gzQB4gYBegRIAAUDMmULAACg");
	this.shape_94.setTransform(-28.3,0);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(0,0,0,0.498)").s().p("EjPMAKvIAA1uQEMAPF3BNQBjAVCxApQCpAnD0A8QE/BPDgAvICcAgQF/BIEhAIQBfACBjgJQCJgLCRggQCbghEjhdQB9gnBkgdQCKgpBagUQDig1DOgIQAfgCAeAAQD/gCFSAYIA5AEQC4AMHNAxQG+AuD6ASIATACQF4AbEtgIQBogCBxgMQBzgMB9gVQCbgaEihBID1g1QB8gaBQgOQD+gtDYgIQCPAICrAZQCZAWCwAkQC8AlHHBtIAuALQFdBUDpAtIB0AVQETAxDnAPQBYAGBQABQBOABBRgGQCZgNCjglIAPgDQCaglEWhZQB9goBkgdQCJgoBagUQEBg7DsABQBTAABbADQDVAIEGAYQCcAPFwApICYARQGxAyD8AUIC8ANQEKAODdgFQDTgFD3gqIAagFQCZgbEJg9QCNghBtgYQB3gaBPgPQDqgrDLgNIAigDQEPALFzBKIALACQDHAlHeBzIAiAIQGkBlD1AtQBxAVBqAPQD4AkDQAFQDfAFD9g3IADgBQCcgiEehbQEqheCcgiIBBgPQDggtDMAAQDwAAEyAXIBoAIQCmAOGQApIBuAMQErAfDYARICqANQEJAQDgABQBgAABagDQDTgGD3grIAhgGQCSgWD9g1QB5gZBggRIAAUGMmVbAACg");
	this.shape_95.setTransform(-33.2,0);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(0,0,0,0.498)").s().p("EjP3AKzIAA1yQENAPF4BOQBkAUCxApQCqAoD0A8QFCBPDfAvQBVATBHANQGABJEjAHQBfACBkgJQCIgLCSghQCbgiElhdQB9goBkgeQCLgpBagUQDjg1DOgJIA+gBQD/gCFTAZIA6AEQC2ANHRAzQG/AuD7ATIATACQF5AbEugIQBogDBygMQBygMB/gVQCagaEjhCQCKgfBsgXQB8gaBQgOQEAguDYgJQCPAICsAZQCZAXCxAkQC7AlHKBuIAtAMQFgBUDpAuIB1AWQETAyDnAPQBYAHBRABQBOABBSgGQCagMCjgmIAPgDQCaglEXhaQB9goBlgeQCJgoBbgVQECg8DrABQBTAABdAEQDVAHEHAYQCcAOFyAqICYARQGzAxD8AUQBhAHBcAFQEKAPDfgGQDSgFD5grIAagFQCZgbEKg+ID7g4QB4gaBOgPQDqgsDMgMIAigDQEQAMF1BLIALACQDIAnHgB0IAiAIQGkBlD3AuQBxAVBqAPQD5AlDQAEQDgAFD9g4IADgBQCcgiEhhdQEqheCcgkIBBgOQDhguDNAAQDwAAE0AXIBnAIQCmAOGSArIBvALQEtAhDYARICqANQEJARDiABQBhABBZgDQDUgGD3gsIAhgGQCTgXEBg3QB6gaBhgTIAAULMmWrAABg");
	this.shape_96.setTransform(-38.2,0);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(0,0,0,0.498)").s().p("EjQiAK3IAA12QEOAPF5BOQBkAUCyAqQCrAoD0A8QFDBPDgAwQBWASBGAOQGBBIEkAHQBfACBkgJQCKgMCSghQCbgjEmheQB9gpBlgeQCLgpBagUQDjg2DQgIIA+gBQEAgCFUAaIA5AFQC3AOHTAzQHBAwD7ATIAUABQF7AcEtgIQBpgDBygMQBzgMB+gWQCbgbEkhCQCLggBrgXQB9gbBQgOQEBguDZgJQCPAHCtAaQCaAWCxAlQC6AlHMBwIAuALQFhBWDpAuIB2AXQEVAyDnARQBYAGBRABQBPACBRgHQCagLCkgmIAPgDQCaglEYhbQB+gpBlgeQCKgpBbgUQEDg9DrAAQBUABBdADQDWAHEHAXQCcAPF0ApICZARQG0AxD9AUQBhAHBdAFQEKAPDggGQDTgGD5grIAbgFQCYgcEMg+ID8g5QB4gaBPgPQDrgrDLgNIAjgCQEPANF4BMIALACQDHAoHiB1IAjAIQGnBnD2AtQBxAWBqAPQD7AlDPAEQDhAFD+g5IAEgBQCbgjEihdQEshgCbgkIBCgOQDigvDNAAQDwAAE1AYIBpAIQClAOGUArIBvAMQEvAhDYASQBeAIBNAGQEKASDhABQBiAABagCQDTgHD5grIAigGQCUgZEDg5QB8gcBigUIAAUPMmX7AABg");
	this.shape_97.setTransform(-43.2,0);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(0,0,0,0.498)").s().p("EjRNAK8IAA17QEPAPF7BOQBjAVCzAqQCrAoD1A8QFFBQDfAvQBXASBGAOQGDBIElAHQBfACBlgJQCJgNCTghQCbgkEnhfQB+gpBlgeQCLgqBbgVQDkg2DQgHIA+gCQEBAAFVAaIA6AFQC1APHWA0QHEAxD7AUIAUABQF8AcEugIQBpgDBygNQB0gMB+gWQCbgbElhEID3g3QB9gbBRgPQEBgvDagJQCPAHCuAaQCaAXCyAlQC6AmHOBwIAvAMQFiBWDpAwQA/ANA3AJQEWA0DoARQBYAHBRABQBPABBSgGQCagLClgmIAPgEQCaglEZhbQB/gpBlgeQCLgqBagUQEEg+DsAAQBUAABdADQDXAHEIAXQCcAOF1ApICaARQG2AyD9ATQBiAHBcAFQEMAODggGQDUgGD6gsIAagFQCZgcENg+ID8g5QB5gbBPgOQDsgsDMgMIAjgCQEPAOF6BOIALACQDGAoHmB3IAiAIQGpBoD2AtQByAWBqAPQD8AlDPAFQDiAED+g6IAEgBQCbgjEkheQEshiCcgkIBDgOQDhgvDOgBQDxAAE3AYIBoAIQClAPGWAsIBwAMQEwAhDYATICrAOQELATDjABQBiABBagCQDUgHD6gsIAhgGQCWgaEGg8QB9gcBjgVIAAUSMmZLAABg");
	this.shape_98.setTransform(-48.2,0);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(0,0,0,0.498)").s().p("EjR4ALAIAA1/QEPAPF9BPQDCAoH2B7QHFBvD/AwQGDBJEmAGQDjAED/g6QCagkEphhQEuhiCcglQEHg+DsgBQEZAAF6AhQC6AQHzA4QG3AxD+ATQF+AcEugJQDUgGD7gsQCbgcEmhEQExhHCVgcQECgvDagKQEQAPF8BPQDCAoH2B7QHFBvD/AwQGDBJEmAGQDjAED+g6QCbgkEphhQEuhiCcglQEFg+DtgBQEYAAF6AhQC6AQHzA4QG3AxD+ATQF+AcEugJQDUgGD7gsQCbgcEmhEQExhHCVgcQECgvDbgKQEPAPF8BPQDCAoH2B7QHFBvD/AwQGDBJEmAGQDiAED/g6QCcgkEohhQEuhiCcglQEHg+DtgBQEYAAF6AhQC6AQHzA4QG3AxD+ATQF+AcEugJQDUgGD7gsQCbgcEmhEIDig0IAAUXg");
	this.shape_99.setTransform(-53.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-478.5,-70.4,1838,140.9);


(lib.Star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Star_anim();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-29.2,58.5,58.5);


(lib.collectible = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Star();
	this.instance.setTransform(0,0,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.51,scaleY:0.51,y:0.5},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.47,scaleY:0.47,rotation:30},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.CharacterAnima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		/* this.gotoAndPlay(1);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Face
	this.instance = new lib.Mouth("synched",0);
	this.instance.setTransform(-30.3,66.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0A535").s().p("AhzAsIAOgTYAFgGAFgHAFgGIAPgQYAFgGAEgGAGgFIAQgSYAFgFAFgGAGgGYAMgKALgMAJgKYAMgLAMgLAMgJIATgPYAGgFAGgFAHgFIATgOYAGgFAHgFAGgEIAogbIgZgMYAGAnAFAoAFAnIADAeYABAKAAAJABAKYABAKABAKAAAKYABAKABAIAAAKYABAUAAATAAAUYAAAKAAAKAAAKYgBAKAAAKgBAKYgBAUgCATgEAUYgCAJgCAKgDAKYgBAFgBAEgCAFIgFAOIAAAAIAGgOYACgEACgFACgEYADgKADgJADgKYAFgUAEgTADgUYACgKABgKABgKYABgKABgKABgKYACgUABgUABgUYAAgKAAgJAAgKYABgKAAgKAAgKYAAgKAAgKgBgKIAAgeYgBgogCgogDgoYgBgNgKgJgMABYgDAAgDABgDACIgCABIgrAYYgHAEgHAEgHAEIgVANYgIAFgGAFgHAEIgVAOYgNAJgMALgNAKYgOAJgMAMgNAKYgHAFgGAGgGAGIgTARYgGAFgGAHgGAGIgSASYgGAHgFAGgGAGIgQAQYgNAPACAWAOANYAPANAWgBANgPYABgBABAAAAgBIABgB");
	this.shape.setTransform(-81.1,-91.5,1.35,1.35,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC98").s().p("AAJBNQgggYh3gWIgLgRQBsiMC2huQAoFhg4B4Qg/h+gxgig");
	this.shape_1.setTransform(-83,-89.9,1.35,1.35,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0A535").s().p("AhzAsIAOgTYAFgGAFgHAFgGIAPgQYAFgGAEgGAGgFIAQgSYAFgFAFgGAGgGYAMgKALgMAJgKYAMgLAMgLAMgJIATgPYAGgFAGgFAHgFIATgOYAGgFAHgFAGgEIAogbIgZgMYAGAnAFAoAFAnIADAeYABAKAAAJABAKYABAKABAKAAAKYABAKABAIAAAKYABAUAAATAAAUYAAAKAAAKAAAKYgBAKAAAKgBAKYgBAUgCATgEAUYgCAJgCAKgDAKYgBAFgBAEgCAFIgFAOIAAAAIAGgOYACgEACgFACgEYADgKADgJADgKYAFgUAEgTADgUYACgKABgKABgKYABgKABgKABgKYACgUABgUABgUYAAgKAAgJAAgKYABgKAAgKAAgKYAAgKAAgKgBgKIAAgeYgBgogCgogDgoYgBgNgKgJgMABYgDAAgDABgDACIgCABIgrAYYgHAEgHAEgHAEIgVANYgIAFgGAFgHAEIgVAOYgNAJgMALgNAKYgOAJgMAMgNAKYgHAFgGAGgGAGIgTARYgGAFgGAHgGAGIgSASYgGAHgFAGgGAGIgQAQYgNAPACAWAOANYAPANAWgBANgPYABgBABAAAAgBIABgB");
	this.shape_2.setTransform(31.6,-92,1.419,1.419);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFEC98").s().p("AAJBNQgggYh3gWIgLgRQBsiMC2huQAoFhg4B4Qg/h+gxgig");
	this.shape_3.setTransform(33.6,-90.4,1.419,1.419);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0A535").s().p("ADWAEYAAAAAAAGgBAJYAAAFgBAGgCAHYAAADgBAEgBADYgBAEgBAEgBAFYgFAQgJAVgOAUYgOAUgTAUgZAQYgaAQgfALghAEYgEAAgFAAgEAAYgEAAgFABgEgBYgHAAgJgBgIgBYgRgDgSgGgQgHYgRgIgPgLgPgMYgOgMgMgOgKgQYgKgQgIgSgGgSYgFgSgCgTAAgTYABgHAAgMACgIYABgJADgJADgJYAGgSAIgRALgPYALgPAMgOAOgLYAOgLAPgKAQgGYAQgHARgFAQgDYAJgBAIgBAGAAIACAAIABAAIAAAAYAAAAgCgBABAAIAEABIAGAAYAFAAAFAAADAAYAIACAHAAAIACYAEABAEAAAEABYADACAEABADABYAPAEANAHANAHYAYAPAUATAOATYAOATAJATAGAQYACAFABAEABADYACAEAAAEABADYACAHABAFABAFYABAIABAFAAAAIAAgBADaAFYAAAAAAgFABgJYAAgEAAgHgBgHYAAgDAAgEgBgEYAAgEgBgFgBgEYgEgTgGgWgOgXYgNgXgTgYgbgTYgOgKgPgJgRgHYgEgBgEgCgFgCYgEgBgFgBgEgCYgJgDgKgBgKgBYgFgBgEAAgFgBIgGAAIgEAAIgBAAIgBAAIgBAAIgBAAYgIAAgKAAgLACYgUACgUAGgUAJYgTAIgSAMgRAOYgQAPgOARgNASYgLATgJAUgGAWYgDAKgDALgBAMYgCAMABAIgBALYABAWADAWAHAVYAHAVAJATAMASYANASAOAQARANYARANARALATAIYATAIATAGAUACYAKABAJAAAHAAYAGABAEgBAFAAYAFgBAEAAAFgBYAlgFAggOAbgSYAagSATgXAOgWYAOgVAHgWAFgSYABgEABgEABgEYAAgEABgEAAgEYABgHABgGAAgFYAAgJAAgFAAAAIAAAA");
	this.shape_4.setTransform(10.5,-16.2,1,1,-105);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().de(-21,-21,42,42);
	this.shape_5.setTransform(10.8,-17,1,1,-105);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0A535").s().p("ADWAEYAAAAAAAGgBAJYAAAFgBAGgCAHYAAADgBAEgBADYgBAEgBAEgBAFYgFAQgJAVgOAUYgOAUgTAUgZAQYgaAQgfALghAEYgEAAgFAAgEAAYgEAAgFABgEgBYgHAAgJgBgIgBYgRgDgSgGgQgHYgRgIgPgLgPgMYgOgMgMgOgKgQYgKgQgIgSgGgSYgFgSgCgTAAgTYABgHAAgMACgIYABgJADgJADgJYAGgSAIgRALgPYALgPAMgOAOgLYAOgLAPgKAQgGYAQgHARgFAQgDYAJgBAIgBAGAAIACAAIABAAIAAAAYAAAAgCgBABAAIAEABIAGAAYAFAAAFAAADAAYAIACAHAAAIACYAEABAEAAAEABYADACAEABADABYAPAEANAHANAHYAYAPAUATAOATYAOATAJATAGAQYACAFABAEABADYACAEAAAEABADYACAHABAFABAFYABAIABAFAAAAIAAgBADaAFYAAAAAAgFABgJYAAgEAAgHgBgHYAAgDAAgEgBgEYAAgEgBgFgBgEYgEgTgGgWgOgXYgNgXgTgYgbgTYgOgKgPgJgRgHYgEgBgEgCgFgCYgEgBgFgBgEgCYgJgDgKgBgKgBYgFgBgEAAgFgBIgGAAIgEAAIgBAAIgBAAIgBAAIgBAAYgIAAgKAAgLACYgUACgUAGgUAJYgTAIgSAMgRAOYgQAPgOARgNASYgLATgJAUgGAWYgDAKgDALgBAMYgCAMABAIgBALYABAWADAWAHAVYAHAVAJATAMASYANASAOAQARANYARANARALATAIYATAIATAGAUACYAKABAJAAAHAAYAGABAEgBAFAAYAFgBAEAAAFgBYAlgFAggOAbgSYAagSATgXAOgWYAOgVAHgWAFgSYABgEABgEABgEYAAgEABgEAAgEYABgHABgGAAgFYAAgJAAgFAAAAIAAAA");
	this.shape_6.setTransform(-73.1,-15.9,0.976,0.976,-90);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().de(-21,-21,42,42);
	this.shape_7.setTransform(-72.6,-16.5,0.976,0.976,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{scaleX:0.976,rotation:-90,x:-72.6,y:-16.5}},{t:this.shape_6,p:{scaleX:0.976,rotation:-90,x:-73.1,y:-15.9}},{t:this.shape_5,p:{scaleX:1}},{t:this.shape_4,p:{scaleX:1,x:10.5,y:-16.2}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regX:0,regY:0,x:-30.3,y:66.1}}]}).to({state:[{t:this.shape_7,p:{scaleX:0.976,rotation:-90,x:-72.6,y:-16.5}},{t:this.shape_6,p:{scaleX:0.976,rotation:-90,x:-73.1,y:-15.9}},{t:this.shape_5,p:{scaleX:1}},{t:this.shape_4,p:{scaleX:1,x:10.5,y:-16.2}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regX:0,regY:0,x:-30.3,y:66.1}}]},8).to({state:[{t:this.shape_7,p:{scaleX:0.715,rotation:-75,x:-72.7,y:-16.6}},{t:this.shape_6,p:{scaleX:0.715,rotation:-75,x:-73.3,y:-16.2}},{t:this.shape_5,p:{scaleX:0.748}},{t:this.shape_4,p:{scaleX:0.748,x:10.4,y:-16.4}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regX:0,regY:0,x:-30.3,y:66.1}}]},1).to({state:[{t:this.shape_7,p:{scaleX:0.976,rotation:-90,x:-72.6,y:-16.5}},{t:this.shape_6,p:{scaleX:0.976,rotation:-90,x:-73.1,y:-15.9}},{t:this.shape_5,p:{scaleX:1}},{t:this.shape_4,p:{scaleX:1,x:10.5,y:-16.2}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regX:-0.1,regY:24.1,x:-30.4,y:90.2}}]},1).wait(31));

	// Armature
	this.instance_1 = new lib.Phantom("synched",0);
	this.instance_1.setTransform(-168.2,73.5,0.996,0.996,89.4);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Phantom("synched",0);
	this.instance_2.setTransform(162.7,68.2,0.995,0.995,5.2);
	this.instance_2.alpha = 0;

	this.ikNode_3 = new lib.Arm();
	this.ikNode_3.setTransform(83.7,21.6,0.993,0.995,-56.7,0,0,-0.4,-38.5);

	this.instance_3 = new lib.Phantom("synched",0);
	this.instance_3.setTransform(-88.1,10.8,0.997,0.997,0,0,0,-4,-3.4);
	this.instance_3.alpha = 0;

	this.instance_4 = new lib.Phantom("synched",0);
	this.instance_4.setTransform(54,4.8,0.997,0.997,0,0,0,-1.6,-4.8);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Body("synched",0);
	this.instance_5.setTransform(-27,5,1,1,0,0,0,-19.2,4);

	this.ikNode_4 = new lib.Arm();
	this.ikNode_4.setTransform(-101.9,14.2,0.994,0.994,47,0,0,-6.7,-34.3);
	this.ikNode_4.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 112, 82.5, 26.5, 0)];
	this.ikNode_4.cache(-37,-47,74,96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{regX:-6.7,rotation:47,x:-101.9,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-56.7,x:83.7,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:5.2,x:162.7,y:68.2}},{t:this.instance_1,p:{rotation:89.4,x:-168.2,y:73.5}}]}).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:52.8,x:-101.9,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-51.1,x:83.7,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:13,x:157.7,y:75.8}},{t:this.instance_1,p:{rotation:86.8,x:-173.9,y:66.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:58.6,x:-101.9,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-45.4,x:83.6,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:20.9,x:152,y:82.9}},{t:this.instance_1,p:{rotation:84.3,x:-178.8,y:58.9}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:64.4,x:-101.9,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-39.7,x:83.7,y:21.7,regX:-0.4}},{t:this.instance_2,p:{rotation:28.8,x:145.7,y:89.4}},{t:this.instance_1,p:{rotation:81.7,x:-183.1,y:51}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:60.1,x:-101.9,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-44,x:83.6,y:21.7,regX:-0.5}},{t:this.instance_2,p:{rotation:22.8,x:150.5,y:84.6}},{t:this.instance_1,p:{rotation:83.6,x:-180,y:57}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:55.7,x:-101.9,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-48.3,x:83.6,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:16.8,x:155,y:79.3}},{t:this.instance_1,p:{rotation:85.5,x:-176.5,y:62.8}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:51.4,x:-101.9,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-52.6,x:83.6,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:10.8,x:159.1,y:73.9}},{t:this.instance_1,p:{rotation:87.5,x:-172.6,y:68.3}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:47,x:-101.8,y:14.3,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-56.8,x:83.7,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:4.8,x:162.8,y:68.1}},{t:this.instance_1,p:{rotation:89.4,x:-168.3,y:73.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.5,rotation:51.3,x:-101.9,y:14.3,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-52.5,x:83.6,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:10.9,x:159.1,y:73.9}},{t:this.instance_1,p:{rotation:87.4,x:-172.5,y:68.4}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:55.6,x:-101.8,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-48.2,x:83.6,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:17,x:155,y:79.5}},{t:this.instance_1,p:{rotation:85.4,x:-176.4,y:63}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.7,rotation:59.9,x:-102,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-43.9,x:83.6,y:21.7,regX:-0.5}},{t:this.instance_2,p:{rotation:23.1,x:150.4,y:84.7}},{t:this.instance_1,p:{rotation:83.4,x:-179.8,y:57.3}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:64.2,x:-102,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-39.5,x:83.6,y:21.7,regX:-0.4}},{t:this.instance_2,p:{rotation:29.2,x:145.5,y:89.6}},{t:this.instance_1,p:{rotation:81.4,x:-182.8,y:51.4}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.7,rotation:59.9,x:-102,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-43.8,x:83.5,y:21.7,regX:-0.5}},{t:this.instance_2,p:{rotation:23.2,x:150.4,y:84.7}},{t:this.instance_1,p:{rotation:83.4,x:-179.8,y:57.3}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:55.6,x:-101.8,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-48.1,x:83.7,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:17.2,x:154.9,y:79.6}},{t:this.instance_1,p:{rotation:85.4,x:-176.4,y:62.9}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:51.3,x:-101.9,y:14.4,regY:-34.2}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-52.4,x:83.6,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:11.2,x:159,y:74}},{t:this.instance_1,p:{rotation:87.4,x:-172.5,y:68.4}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.7,rotation:47,x:-101.9,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-56.7,x:83.7,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:5.2,x:162.7,y:68.2}},{t:this.instance_1,p:{rotation:89.4,x:-168.2,y:73.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:51.3,x:-101.9,y:14.4,regY:-34.2}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-52.4,x:83.6,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:11.2,x:159,y:74}},{t:this.instance_1,p:{rotation:87.4,x:-172.5,y:68.4}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:55.6,x:-101.8,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-48.1,x:83.7,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:17.2,x:154.9,y:79.6}},{t:this.instance_1,p:{rotation:85.4,x:-176.4,y:62.9}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.7,rotation:59.9,x:-102,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-43.8,x:83.5,y:21.7,regX:-0.5}},{t:this.instance_2,p:{rotation:23.2,x:150.4,y:84.7}},{t:this.instance_1,p:{rotation:83.4,x:-179.8,y:57.3}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:64.2,x:-102,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-39.5,x:83.6,y:21.7,regX:-0.4}},{t:this.instance_2,p:{rotation:29.2,x:145.5,y:89.6}},{t:this.instance_1,p:{rotation:81.4,x:-182.8,y:51.4}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.7,rotation:59.9,x:-102,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-43.8,x:83.5,y:21.7,regX:-0.5}},{t:this.instance_2,p:{rotation:23.2,x:150.4,y:84.7}},{t:this.instance_1,p:{rotation:83.4,x:-179.8,y:57.3}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:55.6,x:-101.8,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-48.1,x:83.7,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:17.2,x:154.9,y:79.6}},{t:this.instance_1,p:{rotation:85.4,x:-176.4,y:62.9}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:51.3,x:-101.9,y:14.4,regY:-34.2}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-52.4,x:83.6,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:11.2,x:159,y:74}},{t:this.instance_1,p:{rotation:87.4,x:-172.5,y:68.4}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.7,rotation:47,x:-101.9,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-56.7,x:83.7,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:5.2,x:162.7,y:68.2}},{t:this.instance_1,p:{rotation:89.4,x:-168.2,y:73.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:51.3,x:-101.9,y:14.4,regY:-34.2}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-52.4,x:83.6,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:11.2,x:159,y:74}},{t:this.instance_1,p:{rotation:87.4,x:-172.5,y:68.4}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:55.6,x:-101.8,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-48.1,x:83.7,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:17.2,x:154.9,y:79.6}},{t:this.instance_1,p:{rotation:85.4,x:-176.4,y:62.9}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.7,rotation:59.9,x:-102,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-43.8,x:83.5,y:21.7,regX:-0.5}},{t:this.instance_2,p:{rotation:23.2,x:150.4,y:84.7}},{t:this.instance_1,p:{rotation:83.4,x:-179.8,y:57.3}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:64.2,x:-102,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-39.5,x:83.6,y:21.7,regX:-0.4}},{t:this.instance_2,p:{rotation:29.2,x:145.5,y:89.6}},{t:this.instance_1,p:{rotation:81.4,x:-182.8,y:51.4}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.7,rotation:59.9,x:-102,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-43.8,x:83.5,y:21.7,regX:-0.5}},{t:this.instance_2,p:{rotation:23.2,x:150.4,y:84.7}},{t:this.instance_1,p:{rotation:83.4,x:-179.8,y:57.3}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:55.6,x:-101.8,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-48.1,x:83.7,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:17.2,x:154.9,y:79.6}},{t:this.instance_1,p:{rotation:85.4,x:-176.4,y:62.9}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:51.3,x:-101.9,y:14.4,regY:-34.2}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-52.4,x:83.6,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:11.2,x:159,y:74}},{t:this.instance_1,p:{rotation:87.4,x:-172.5,y:68.4}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.7,rotation:47,x:-101.9,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-56.7,x:83.7,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:5.2,x:162.7,y:68.2}},{t:this.instance_1,p:{rotation:89.4,x:-168.2,y:73.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:51.3,x:-101.9,y:14.4,regY:-34.2}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-52.4,x:83.6,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:11.2,x:159,y:74}},{t:this.instance_1,p:{rotation:87.4,x:-172.5,y:68.4}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:55.6,x:-101.8,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-48.1,x:83.7,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:17.2,x:154.9,y:79.6}},{t:this.instance_1,p:{rotation:85.4,x:-176.4,y:62.9}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.7,rotation:59.9,x:-102,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-43.8,x:83.5,y:21.7,regX:-0.5}},{t:this.instance_2,p:{rotation:23.2,x:150.4,y:84.7}},{t:this.instance_1,p:{rotation:83.4,x:-179.8,y:57.3}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:64.2,x:-102,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-39.5,x:83.6,y:21.7,regX:-0.4}},{t:this.instance_2,p:{rotation:29.2,x:145.5,y:89.6}},{t:this.instance_1,p:{rotation:81.4,x:-182.8,y:51.4}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.7,rotation:59.9,x:-102,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-43.8,x:83.5,y:21.7,regX:-0.5}},{t:this.instance_2,p:{rotation:23.2,x:150.4,y:84.7}},{t:this.instance_1,p:{rotation:83.4,x:-179.8,y:57.3}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:55.6,x:-101.8,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-48.1,x:83.7,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:17.2,x:154.9,y:79.6}},{t:this.instance_1,p:{rotation:85.4,x:-176.4,y:62.9}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.6,rotation:51.3,x:-101.9,y:14.4,regY:-34.2}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-52.4,x:83.6,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:11.2,x:159,y:74}},{t:this.instance_1,p:{rotation:87.4,x:-172.5,y:68.4}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.7,rotation:47,x:-101.9,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-56.7,x:83.7,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:5.2,x:162.7,y:68.2}},{t:this.instance_1,p:{rotation:89.4,x:-168.2,y:73.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:-6.7,rotation:47,x:-101.9,y:14.2,regY:-34.3}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.ikNode_3,p:{rotation:-56.7,x:83.7,y:21.6,regX:-0.4}},{t:this.instance_2,p:{rotation:5.2,x:162.7,y:68.2}},{t:this.instance_1,p:{rotation:89.4,x:-168.2,y:73.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.2,-127.3,366.9,252.8);


(lib.ThickFogGroup = function() {
	this.initialize();

	// Black Fog
	this.instance = new lib.BlackFog();
	this.instance.setTransform(-266.8,56.1);

	// Black Fog
	this.instance_1 = new lib.BlackFog();
	this.instance_1.setTransform(-505.5,3.5);

	// Black Fog
	this.instance_2 = new lib.BlackFog();
	this.instance_2.setTransform(-12.9,3.5);

	// Black Fog
	this.instance_3 = new lib.BlackFog();
	this.instance_3.setTransform(-231.9,-26.1);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-984,-96.5,2330.6,223.1);


(lib.Buildings = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Building_Squat();
	this.instance.setTransform(316.2,129.3,0.791,1);

	this.instance_1 = new lib.Building_Tall();
	this.instance_1.setTransform(387.9,14.5,0.717,0.717,0,0,0,0.3,-0.8);

	this.instance_2 = new lib.Building_Regular();
	this.instance_2.setTransform(319.1,34.7,0.822,0.822,0,0,0,0.1,-0.1);

	this.instance_3 = new lib.Building_Squat();
	this.instance_3.setTransform(-196.1,124.2);

	this.instance_4 = new lib.Building_Tall();
	this.instance_4.setTransform(-79.5,12,1,1,0,0,0,0.3,-0.8);

	this.instance_5 = new lib.Building_Regular();
	this.instance_5.setTransform(-142.9,18.2,1,1,0,0,0,0.1,-0.1);

	this.instance_6 = new lib.Building_Squat();
	this.instance_6.setTransform(213.7,110.3);

	this.instance_7 = new lib.Building_Regular();
	this.instance_7.setTransform(136.8,52.5,0.801,0.801,0,0,0,0.1,-0.1);

	this.instance_8 = new lib.Building_Tall();
	this.instance_8.setTransform(167.9,-26.4,1,1,0,0,0,0.3,-0.8);

	this.instance_9 = new lib.Building_Squat();
	this.instance_9.setTransform(260.9,73,0.68,0.68);

	this.instance_10 = new lib.Building_Tall();
	this.instance_10.setTransform(71.8,26.3,0.775,0.775,0,0,0,0.3,-0.8);

	this.instance_11 = new lib.Building_Regular();
	this.instance_11.setTransform(-33.9,46.1,0.7,0.7);

	this.instance_12 = new lib.Building_Squat();
	this.instance_12.setTransform(-264.9,104.1,0.821,1);

	this.instance_13 = new lib.Building_Tall();
	this.instance_13.setTransform(-247.6,-13.7,0.789,0.789,0,0,0,0.3,-0.8);

	this.instance_14 = new lib.Building_Regular();
	this.instance_14.setTransform(-368.6,25.8,0.801,0.801,0,0,0,0.1,-0.1);

	this.addChild(this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-423.6,-178.8,850.2,352.4);


(lib.player = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CharacterAnima();
	this.instance.setTransform(-0.2,-0.5,0.288,0.288,0,0,0,-2.8,-2.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53,-36.8,106,73.4);


(lib.GameBackground = function() {
	this.initialize();

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg+eAnEMAAAhOHMB8+AAAMAAABOHg");
	mask.setTransform(400,250);

	// Light
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,236,152,0.098)").s().p("EgKDAnmMAI5hPLIB2AAMAJYBPLg");
	this.shape.setTransform(617.8,281.4,1.488,1.384,29.2);

	this.shape.mask = mask;

	// BlackMist
	this.instance = new lib.ThickFogGroup();
	this.instance.setTransform(289.7,486.1);

	this.instance.mask = mask;

	// Buildings
	this.instance_1 = new lib.Buildings();
	this.instance_1.setTransform(394.9,314.6,1,1,0,0,0,1.5,-2.7);

	this.instance_1.mask = mask;

	// Black Fog
	this.instance_2 = new lib.BlackFog();
	this.instance_2.setTransform(315.3,387.5,1,1.682);

	this.instance_2.mask = mask;

	// Mountains
	this.instance_3 = new lib.Mountains();
	this.instance_3.setTransform(372.6,313.8,1,1,0,0,0,-3.9,-4.9);

	this.instance_3.mask = mask;

	// Sky
	this.instance_4 = new lib.Sky();
	this.instance_4.setTransform(400,250,1,0.833);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,800,500);


// stage content:
(lib.WebGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var player = {};
		var collectibles = [];
		var gamestage = this;
		var gamestate = "start";
		var speedmin = 6;
		var speedmax = 22;
		var tickstart = 0;
		var score = 0;
		var gametime = 10;
		
		document.body.style.cursor = "pointer";
		gamestage.over_screen.visible = false;
		createjs.Ticker.on("tick", handleTick, gamestate);
		
		
		function handleTick(event) {
			if(gamestate == "playing"){
				collectiblesMovement();
				gamestage.score_txt.text = score;
				checkTime();
			}
		}
		
		function checkTime(){
			var ticktime = createjs.Ticker.getTime() - tickstart;
			var seconds = gametime-Math.ceil(ticktime/1000);
			if(seconds >= 0){
				gamestage.time_txt.text = seconds;
			}else{
				endGame();
			}
		}
		
		function init(){
			document.body.style.cursor = "none";
			gamestate = "playing";
			createjs.Sound.play("bgm", false, 0, 0, -1, 1);
			generatePlayer();
			generateCollectibles(30);
			tickstart = createjs.Ticker.getTime();
			score = 0;
		}
		
		function generatePlayer(){
			player = new lib.player();
			player.y = 450;
			gamestage.addChild(player);
		}
		
		function generateCollectibles(n){
			for(var i=1; i<=n; i++){
				var c = new lib.collectible();
				c.gotoAndStop(getRandomRange(0,3));
				c.x = getRandomRange(0, stage.canvas.width);
				c.y = getRandomRange(50, 500) * -1;
				c.speed = getRandomRange(speedmin, speedmax);
				collectibles.push(c);
				gamestage.addChild(c);
			}
		}
		
		function collectiblesMovement() {
			for(var i=0; i<collectibles.length; i++){
				collectibles[i].y += collectibles[i].speed;
				collectibles[i].rotation += collectibles[i].speed*2;
				if(collectibles[i].y > stage.canvas.height){
					collectibles[i].y = -100;
				}
				var pt = player.globalToLocal(collectibles[i].x, collectibles[i].y);
				if(player.hitTest(pt.x, pt.y)){
					gamestage.removeChild(collectibles[i]);
					collectibles.splice(i, 1);
					createjs.Sound.play("pickup", true, 0, 0, 0, 0.1);
					score++;
				}
			}
		}
		
		stage.on("stagemousemove", function(evt) {
			if(gamestate == "playing"){
				var px = player.x;
				var mx = evt.stageX;
				if(mx < px){
					player.scaleX = 1;
				}else if(mx >= px){
					player.scaleX = -1;
				}
				player.x = evt.stageX;
		    }
		});
		
		
		gamestage.start_screen.addEventListener("click", startClicked);
		function startClicked() {
			gamestage.start_screen.visible = false;
			init();
		}
		
		function getRandomRange(min, max) {
			return Math.round((Math.random() * max) + min);
		}
		
		function endGame() {
			gamestate = "end";
			destroyCollectibles();
			gamestage.removeChild(player);
			gamestage.over_screen.visible = true;
			createjs.Sound.stop();
			createjs.Sound.play("done");
			document.body.style.cursor = "pointer";
		}
		
		function destroyCollectibles() {
			for(var i=0; i<collectibles.length; i++){
				gamestage.removeChild(collectibles[i]);
			}
			collectibles = [];
		}
		
		gamestage.over_screen.addEventListener("click", overClicked);
		function overClicked() {
			gamestage.over_screen.visible = false;
			init();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Text
	this.time_txt = new cjs.Text("", "44px 'Arial'", "#FFEC98");
	this.time_txt.name = "time_txt";
	this.time_txt.lineHeight = 46;
	this.time_txt.lineWidth = 103;
	this.time_txt.setTransform(4.5,5.2);

	this.score_txt = new cjs.Text("", "44px 'Arial'", "#FFEC98");
	this.score_txt.name = "score_txt";
	this.score_txt.textAlign = "right";
	this.score_txt.lineHeight = 46;
	this.score_txt.lineWidth = 103;
	this.score_txt.setTransform(790,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.score_txt},{t:this.time_txt}]}).wait(1));

	// Menus
	this.start_screen = new lib.StartScreen();
	this.start_screen.setTransform(400,250);

	this.over_screen = new lib.OverScreen();
	this.over_screen.setTransform(400,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.over_screen},{t:this.start_screen}]}).wait(1));

	// BG
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(79.5,0);

	this.instance_1 = new lib.GameBackground();
	this.instance_1.setTransform(31.2,302.1,1,1,0,0,0,31.2,302.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-294.3,219.8,2369.2,664.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;