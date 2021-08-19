let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.velocityY=5;


  ground = createSprite(500,600,1000,10);
  ground.visible=false;
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();
  lander.collide(ground);
  //if(lander.isTouching(ground)){
   // lander.position.y=540;
   
  //}

  //fall down
  // vy +=g;
  // lander.position.y+=vy;
  drawSprites();
}


