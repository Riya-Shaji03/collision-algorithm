var moving;
var fixed;
function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  fixed.shapeColor = "blue"
  moving = createSprite(500,250,50,50)
  moving.shapeColor = "red"
  
}

function draw() {
  background(255,255,255);

  if(moving.x - fixed.x <= fixed.width/2 + moving.width/2 &&
    fixed.x - moving.x <= fixed.width/2 + moving.width/2 &&
    moving.y - fixed.y <= fixed.height/2 + moving.height/2 &&
    fixed.y - moving.y <= fixed.height/2 + moving.height/2){
    fixed.shapeColor = "green"
    moving.shapeColor = "yellow"
  } 
  else {
   fixed.shapeColor = "blue" 
   moving.shapeColor = "red"
  }
  
  moving.x = World.mouseX
  moving.y = World.mouseY
  drawSprites();
}