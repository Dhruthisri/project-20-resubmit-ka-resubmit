var car,wall;
var speed,weight;

function setup() {
  createCanvas(1000,1000);

  car=createSpritre(50,200,50,50);
  wall=CreateSprite(1500,200,60,height/2);

  speed=random(55,90);
  weight=random(400,1500);
 
}

function draw() {

  car.velocityX=speed;

  if(wall.x-car.x<(speed.width+wall.width)/2){

    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;

    if (deformation>180){

      car.shapeColor=color(255,0,0);

    }

    if(deformation<180 && deformation>100){

      car.shapecolor=color(230,230,0)

    }

    if(deformation<100){

      car.shapeColor=color(0,255,0);

    }

  }

  if(car.isTouching(wall)){

      car.velocityX=0;
      
  }
  background(0);  

  drawSprites();
}