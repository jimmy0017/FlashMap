(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.TextBox = function() {
	this.initialize();

	// Layer 1
	this.label = new cjs.Text("Abcd", "39px 'Times New Roman'");
	this.label.name = "label";
	this.label.lineHeight = 41;
	this.label.lineWidth = 254;
	this.label.setTransform(-124.9,-33.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A2jlsMAtHAAAIAALZMgtHAAAg");
	this.shape.setTransform(1.5,-12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CC66").s().p("A2jFtIAArYMAtHAAAIAALYg");
	this.shape_1.setTransform(1.5,-12.5);

	this.addChild(this.shape_1,this.shape,this.label);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143.9,-50,291,75);


(lib.Button_Submit = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA0gpIAAhVIhnCFIBdB4IAKhk");
	this.shape.setTransform(-11.7,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiIAHIBpiFIAABVICoAAIAABEIioAAIgKBkg");
	this.shape_1.setTransform(-3.2,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AgeBLIAAiVIA9AAIAACV");
	this.shape_2.setTransform(7.4,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeBLIAAiVIA9AAIAACVg");
	this.shape_3.setTransform(7.4,-4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AAfAAIg9AA");
	this.shape_4.setTransform(7.4,4.5);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("ACYAbIioAAIAAhEAjJjJIGTAAIAAGTImTAAg");
	this.shape_5.setTransform(-4.7,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFEC98").s().p("AjJDKIAAmTIGTAAIAAGTgAgQAbICoAAIioAAIAAhEIAABEg");
	this.shape_6.setTransform(-4.7,2.3);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,-19,42.5,42.5);


(lib.Button_Delete = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgQgpIAAhVIhpCFIBfB4IAKhkIAAhEICoAAIAABEIioAAAjJjJIGTAAIAAGTImTAAg");
	this.shape.setTransform(-4.7,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiIAHIBpiFIAABVICoAAIAABEIioAAIAAhEIAABEIgKBkg");
	this.shape_1.setTransform(-3.2,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFEC98").s().p("AjJDKIAAmTIGTAAIAAGTgAh5AHIBfB4IAKhkICoAAIAAhEIioAAIAAhVg");
	this.shape_2.setTransform(-4.7,2.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,-19,42.5,42.5);


(lib.Button_D = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("D", "39px 'Times New Roman'");
	this.text.lineHeight = 41;
	this.text.lineWidth = 34;
	this.text.setTransform(-22.5,-24.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjJjJIGTAAIAAGTImTAAg");
	this.shape.setTransform(-4.7,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC98").s().p("AjJDKIAAmTIGTAAIAAGTg");
	this.shape_1.setTransform(-4.7,2.3);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,-24.7,42.5,48.2);


(lib.Button_C = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("C", "39px 'Times New Roman'");
	this.text.lineHeight = 41;
	this.text.lineWidth = 34;
	this.text.setTransform(-22.5,-24.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjJjJIGTAAIAAGTImTAAg");
	this.shape.setTransform(-4.7,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC98").s().p("AjJDKIAAmTIGTAAIAAGTg");
	this.shape_1.setTransform(-4.7,2.3);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,-24.7,42.5,48.2);


(lib.Button_B = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("B", "39px 'Times New Roman'");
	this.text.lineHeight = 41;
	this.text.lineWidth = 34;
	this.text.setTransform(-22.5,-24.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjJjJIGTAAIAAGTImTAAg");
	this.shape.setTransform(-4.7,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC98").s().p("AjJDKIAAmTIGTAAIAAGTg");
	this.shape_1.setTransform(-4.7,2.3);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,-24.7,42.5,48.2);


(lib.Button_A = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("A", "39px 'Times New Roman'");
	this.text.lineHeight = 41;
	this.text.lineWidth = 34;
	this.text.setTransform(-22.5,-24.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjJjJIGTAAIAAGTImTAAg");
	this.shape.setTransform(-4.7,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC98").s().p("AjJDKIAAmTIGTAAIAAGTg");
	this.shape_1.setTransform(-4.7,2.3);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,-24.7,42.5,48.2);


// stage content:
(lib.Type = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		gamestage = this;
		
		
		this.Button_A.addEventListener("click", Button_A_Clicked);
		function Button_A_Clicked()
		{
			gamestage.Text_Input.text = gamestage.Text_Input.text + "A";
		}
		
		this.Button_B.addEventListener("click", Button_B_Clicked);
		function Button_B_Clicked()
		{
			gamestage.Text_Input.text = gamestage.Text_Input.text + "B";
		}
		
		this.Button_C.addEventListener("click", Button_C_Clicked);
		function Button_C_Clicked()
		{
			gamestage.Text_Input.text = gamestage.Text_Input.text + "C";
		}
		
		this.Button_D.addEventListener("click", Button_D_Clicked);
		function Button_D_Clicked()
		{
			gamestage.Text_Input.text = gamestage.Text_Input.text + "D";
		}
		
		this.Button_Delete.addEventListener("click", Button_Delete_Clicked);
		function Button_Delete_Clicked()
		{
			length = gamestage.Text_Input.text.length-1;
			gamestage.Text_Input.text = gamestage.Text_Input.text.substr(0,length);	
		}
		
		this.Button_Submit.addEventListener("click", Button_Submit_Clicked);
		function Button_Submit_Clicked()
		{
			var newtext = new lib.TextBox();
			newtext.label.text = gamestage.Text_Input.text;
			newtext.x=200;
			newtext.y=200;
			gamestage.addChild(newtext);
			gamestage.Text_Input.text = "";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Button_C
	this.Button_C = new lib.Button_C();
	this.Button_C.setTransform(448.7,221.1);
	new cjs.ButtonHelper(this.Button_C, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Button_C).wait(1));

	// Text_Input
	this.Button_Submit = new lib.Button_Submit();
	this.Button_Submit.setTransform(345,281.8);
	new cjs.ButtonHelper(this.Button_Submit, 0, 1, 1);

	this.Button_Delete = new lib.Button_Delete();
	this.Button_Delete.setTransform(440.7,281.8);
	new cjs.ButtonHelper(this.Button_Delete, 0, 1, 1);

	this.Text_Input = new cjs.Text("Type:", "39px 'Times New Roman'");
	this.Text_Input.name = "Text_Input";
	this.Text_Input.lineHeight = 41;
	this.Text_Input.lineWidth = 232;
	this.Text_Input.setTransform(320,100.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Text_Input},{t:this.Button_Delete},{t:this.Button_Submit}]}).wait(1));

	// Button_D
	this.Button_D = new lib.Button_D();
	this.Button_D.setTransform(499.7,221.1);
	new cjs.ButtonHelper(this.Button_D, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Button_D).wait(1));

	// Button_B
	this.Button_B = new lib.Button_B();
	this.Button_B.setTransform(384.7,221.1);
	new cjs.ButtonHelper(this.Button_B, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Button_B).wait(1));

	// Button_A
	this.Button_A = new lib.Button_A();
	this.Button_A.setTransform(330.7,221.1);
	new cjs.ButtonHelper(this.Button_A, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Button_A).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(579.7,300.3,251.3,205);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;