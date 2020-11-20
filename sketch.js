var square1,square2;

function setup() {
  createCanvas(800,400);
  square1=createSprite(400, 350, 50, 50);
  square1.debug=true;
square1.shapeColor="blue";


  square2=createSprite(700,350,50,50);
  square2.debug=true;
  square2.shapeColor="blue";
  square2.velocityX=-3
  //square2.velocityY=-3

  
}

function draw() {
  background(255,255,255);  
  //square2.y=World.mouseY;
  //square2.x=World.mouseX;

  //if block for isTouching

  /*if(square1.x-square2.x===square1.width/2+square2.width/2 ||square2.x-square1.x===square1.width/2+square2.width/2
    ||square1.y-square2.y===square1.height/2+square2.height/2||square2.y-square1.y===square1.height/2+square2.height/2 ){
  square1.shapeColor="pink";
  square2.shapeColor="green";
  }
  else
  {
    square1.shapeColor="black";
  square2.shapeColor="black";
  }*/

  if(square1.x-square2.x<square1.width/2+square2.width/2 &&square2.x-square1.x<square1.width/2+square2.width/2 ){
  square2.velocityX= square2.velocityX*(-1)
  }

  if(square1.y-square2.y===square1.height/2+square2.height/2 &&square2.y-square1.y===square1.height/2+square2.height/2 ){
    square2.velocityY= square2.velocityY*(-1)
  }
  
  drawSprites();
}