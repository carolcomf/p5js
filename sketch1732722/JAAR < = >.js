let font1;
let font2;
let color1;
let color2;
let symbols=[" >"," ="," <"];
let currentSymbolIndex=0;
let flickr

function preload(){
	font1= loadFont('Neon Future.ttf')
	font2= loadFont('MyriadPro-Regular.otf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(RGB, 255, 255, 255, 100);
	color1=color(255,0,0,100);
	color2=color(240,248,255, 100);
	flickr=color(240,248,255, 100);
	frameRate(30);
}

function draw() {
	background(0)
	textNeon()
	textHow()
}

function textHow(){
	textAlign(CENTER, CENTER);
	textFont(font2);
  textSize(20);
	fill(flickr);
	stroke(flickr);
	strokeWeight(.5);
	glow(flickr,30);
	flickr.setAlpha(128 + 128 * sin(millis() / 500));
	text('click anywhere',width/2,100);
}

function textNeon(){
	textAlign(CENTER, CENTER);
	textFont(font1);
  textSize(100);
	fill(color2);
	stroke(color1);
	strokeWeight(2);
	glow(color1,36);
	text('Culture '+ symbols[currentSymbolIndex] + '  Capital',width/2,height/2);
	if(frameCount%3 ==0){
	currentSymbolIndex += 1;
	}
	if(currentSymbolIndex == symbols.length) 
	currentSymbolIndex = 0
}

function glow(glowColor,bluriness){
	drawingContext.shadowColor=glowColor;
	drawingContext.shadowBlur=bluriness;
}

function mousePressed() {
	save("imagem_jaar" + frameCount + ".jpg");
}