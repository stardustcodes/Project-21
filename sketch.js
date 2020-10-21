var bullet, wall;
var speed, weight;
var thickness;



function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  
  speed=random(223, 321);
  weight=random(30, 52);

  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80, 80, 80);

  bullet.velocityX=speed;

  thickness=random(22,83);

}

function draw() {
  background(255,255,255);  
  drawSprites();
  
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=(255, 0, 0);
    } 
    
    if(damage<10){
      wall.shapeColor=(0, 255, 0);
    }
  }

}

function hasCollided(bullet,wall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
 if(bulletRightEdge>=wallLeftEdge){
   return true;
 }else{
 return false;
 }
}
