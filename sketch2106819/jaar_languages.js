let font1
let font2
let color1
let color2
let languages=["Cultura = Capital","Culture = Capital","Kultur = Kapital","Cultura = Capitale","Culture = Capitale","文化 = 资本"]
let currentLanguagesIndex=0
let mX
let mY
let m

function preload(){
	font1= loadFont('Neon Future.ttf')
	font2= loadFont('MyriadPro-Regular.otf');
	font3= loadFont ('NotoSansSC-VariableFont_wght.ttf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(RGB, 255, 255, 255, 100);
	color1=color(255,0,0,100);
	color2=color(240,248,255, 100);
}

function draw() {
	background(0)
	textNeon()
}

function textNeon(){
	textAlign(CENTER, CENTER);
	textFont(font1);
  textSize(100);
	fill(color2);
	stroke(color1);
	strokeWeight(2);
	glow(color1,36);
	mX= abs(map(mouseX,0,width, currentLanguagesIndex,languages.length));
	mY= abs(map(mouseY,0,height, currentLanguagesIndex,languages.length));
	mX = Math.floor(mX);
	mY = Math.floor(mY);
	randomIndex=random(languages);
	m=mX+mY;
	m=m%languages.length;
	if (m==5){
		text(textChinese(),width/2,height/2);
	}
	else {
		text('' + languages[m],width/2,height/2);
	}
	
}

function glow(glowColor,bluriness){
	drawingContext.shadowColor=glowColor;
	drawingContext.shadowBlur=bluriness;
}

function textChinese(){
	textAlign(CENTER, CENTER);
	textFont(font3);
  	textSize(100);
	fill(color2);
	stroke(color1);
	strokeWeight(2);
	glow(color1,36);
	text('文化 = 资本',width/2,height/2);
}

function mousePressed() {
	save("imagem_jaar" + frameCount + ".jpg");
}
