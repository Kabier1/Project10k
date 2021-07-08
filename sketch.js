

var ship, ship_running, edges;
var sea;
var ground;

function preload(){
  ship_running = loadAnimation("ship-1.png","ship-2.png");
  sea = loadImage("sea.png")
}

function setup(){
  createCanvas(600,600);
  ground = createSprite(10,180)
  ground.addImage(sea)
  ground.x = ground.width/2
  ground.velocityX = -5
  //ground.scale = 0.5


  ship = createSprite(80,270,20,50);
  ship.addAnimation("running", ship_running);
  edges = createEdgeSprites();
  
  ship.scale = 0.2;
  ship.x = 50


}


function draw(){
  background("white");
  ground.velocityX = -5
if (ground.x<0){
  ground.x = ground.width/2
}
  drawSprites();
}
