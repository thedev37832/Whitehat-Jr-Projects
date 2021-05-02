var bullet,wall;

var speed,weight,thickness;



function setup() {
  createCanvas(1600,400);

  createSprite(400, 200, 50, 50);

  speed = random(223,321);

  weight =random(30,52);

  bullet=createSprite(50,200,50,50);

  wall=createSprite(1200,200,thickness,height/2);

  wall.shapeColor= color(80,80,80);

  bullet.velocityX = speed;
  
  thickness=random(20,83)
}

function draw() {

  background(255,255,255);  

if(wall.x - bullet.x < wall.width/2 + bullet.width/2) {

  var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
  bullet.velocityX=0

 if(damage<30){

   bullet.shapeColor = "green";

 } 

 if(damage>50){

   bullet.shapeColor = "red";

 }
}
  drawSprites();
}