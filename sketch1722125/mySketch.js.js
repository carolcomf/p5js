let font;
let slider;
let valor;
let neonColor;

function preload(){
	font= loadFont('Neon Future.ttf')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(RGB, 255, 255, 255, 100);
	slider = createSlider(0, 100, 0, 0);
	slider.position(width/2-150, height-height/5);
	slider.style('width','300px');
}

function draw() {
	background(0);
	textNeon()
	textSlider()
}

function textNeon(){
	valor=slider.value();
	neonColor=color(255,0,0,valor);
	textAlign(CENTER, CENTER);
	textFont(font);
  textSize(100);
	fill(240,248,255, valor);
	stroke(neonColor);
	strokeWeight(2);
	glow(neonColor,36);
	text('Culture = Capital',width/2,height/2-50);
}

function glow(glowColor,bluriness){
	drawingContext.shadowColor=glowColor;
	drawingContext.shadowBlur=bluriness;
}

function textSlider(){
	color0=color(255,0,0,60);
	color1=color(255,0,0,100);
	
	fill(color0);
	stroke(color0);
	strokeWeight(1);
	glow(color0,20);
	textAlign(CENTER, BASELINE);
	textSize(70);
	text('-',width/2-180, height+25-height/5);
	
	fill(color1);
	stroke(color1);
	strokeWeight(1);
	glow(color1,20);
	textSize(50);
	text('+',width/2+180, height+25-height/5);
	
}