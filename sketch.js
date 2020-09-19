var car
var carImage
var cone
var coneImage


function preload()
{
  carImage = loadImage("images/car.png");
  coneImage = loadImage("images/cone.png");
  
}

function setup() {
    createCanvas(500, 500);
    car = createSprite(420,250,10,10);
    car.addImage(carImage)
    car.scale = 0.3
    cone = createSprite(50,250,10,10);
    cone.addImage(coneImage)
    cone.scale = 0.14
    
}


function draw() {  
  background("lightgreen")
  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
}
  cone.display();
  car.display();
  drawSprites();
}
function writePosition(x,y){
  database.ref('car/position').set({
      x:position.x+x,
      y:position.y+y,        
}
)
}