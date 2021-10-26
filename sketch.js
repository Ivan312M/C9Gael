var player; 
function setup() {
  createCanvas(400,400); 
  player = createSprite(200,200,50,50);
  
}

function draw() 
{
  background(200);
  if (keyIsDown(UP_ARROW)) {
  player.position.y = player.position.y-5;

  }
  if (keyIsDown(DOWN_ARROW)) {
    player.position.y = player.position.y+5;

  }
  if (keyIsDown(RIGHT_ARROW)){
    player.position.x = player.position.x+5;
  }
  if (keyIsDown(LEFT_ARROW)){
    player.position.x = player.position.x-5;
  }
  
  drawSprites();
}

//Hola

