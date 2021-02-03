var C1, C2, C3;
var O1, O2, O3, O4;
var D1, D2, D3, D4; 
var V1, V2, V3;
var I1, I2, I3;
var boundary1, boundary2, boundary3, boundary4;
var player, playerImg;

function preload(){
  playerImg = loadImage("Images/Carapace.jpg");
}

function setup() {
  createCanvas(1900,800);

  player = createSprite(20, 20, 80, 80);
  player.shapeColor = "green"
  player.addImage("Tikki", playerImg);
  player.scale = 0.2;

  C1 = createSprite(150, 350, 50, 400);
  C1.shapeColor = "red";
  C2 = createSprite(250, 150, 250, 50);
  C2.shapeColor = "red";
  C3 = createSprite(250, 550, 250, 50);
  C3.shapeColor = "red";

  O1 = createSprite(690, 350, 50, 400);
  O1.shapeColor = "red";
  O2 = createSprite(490, 350, 50, 400);
  O2.shapeColor = "red";
  O3 = createSprite(590, 150, 250, 50);
  O3.shapeColor = "red";
  O4 = createSprite(590, 550, 250, 50);
  O4.shapeColor = "red";

  V1 = createSprite(884, 350, 50, 450);
  V1.shapeColor = "red";
  V1.rotation = -16;
  V2 = createSprite(1004, 350, 50, 450);
  V2.shapeColor = "red";
  V2.rotation = 16;
  V3 = createSprite(944, 548, 50, 50);
  V3.shapeColor = "red";

  I1 = createSprite(1304, 350, 50, 400);
  I1.shapeColor = "red";
  I2 = createSprite(1300, 165, 250, 50);
  I2.shapeColor = "red";
  I3 = createSprite(1300, 545, 250, 50);
  I3.shapeColor = "red";
 
  D1 = createSprite(1554, 350, 50, 450);
  D1.shapeColor = "red";
  D2 = createSprite(1634, 207, 50, 200);
  D2.shapeColor = "red";
  D2.rotation = -50;
  D3 = createSprite(1704, 351, 50, 196);
  D3.shapeColor = "red";
  D4 = createSprite(1634, 494, 50, 200);
  D4.shapeColor = "red";
  D4.rotation = 51;
  
  boundary1 = createSprite(1000, 10, 2100, 20);
  boundary1.shapeColor = "yellow";
  boundary2 = createSprite(10, 300, 20, 1000);
  boundary2.shapeColor = "yellow";
  boundary3 = createSprite(1000, 790, 2100, 20);
  boundary3.shapeColor = "yellow";
  boundary2 = createSprite(1890, 300, 20, 1000);
  boundary2.shapeColor = "yellow";
}

function draw() {
  background("WHite");
  if(keyDown("left")){
    player.x = player.x - 3;
  } 
  if(keyDown("right")){
    player.x = player.x + 3;
  } 
  if(keyDown("up")){
    player.y = player.y - 3;
  } 
  if(keyDown("down")){
    player.y = player.y + 3;
  }  
  drawSprites();
}