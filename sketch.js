var fixedRect,movingRect;
var fixedRect1,movingRect2;

function setup() {
  createCanvas(400,400);
  
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.velocityX = -5;

  movingRect = createSprite(0, 200, 70, 50);
  movingRect.velocityX = 5;

  fixedRect1 = createSprite(200,200,30,30);

  movingRect2 = createSprite(100,150,30,30);
}

function draw() {
  background(0);  

  movingRect2.x = mouseX;
  movingRect2.y = mouseY;

  bounceOff(fixedRect,movingRect);
  if(isTouching(fixedRect1,movingRect2)){
    fixedRect1.shapeColor = "red";
    movingRect2.shapeColor = "red";
  }else{
    fixedRect1.shapeColor = "green";
    movingRect2.shapeColor = "green";
  }

  drawSprites();
}