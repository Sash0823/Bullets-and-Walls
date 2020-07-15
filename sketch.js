var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200, 200, thickness,height/2);
  wall.shapeColor = "white";
  wall.debug = true;
  bullet = createSprite()
  bullet.shapeColor = "white";
  bullet.debug = true;
  

  bullet.velocityY = -5;
  
}

function draw() {
  background(0,0,0);  
function hasCollided(LBullet, LWall)
{
  BulletRightEdge=lBullet.x +lBullet.width;
  wallleftEdge=1wall.x;
  if (bulletRightEdge>=wallleftedge)
  {
    return true
  }
  return false;

  if(hasCollided(bullet.wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    |
    if(damage>10)
    {
      wall.shapeColor=color(225,0,0);

    }



    if(damage<10)
    {
      wall.shapeColor=color(0,225,0);
    }
  
  }
  drawSprites();
}