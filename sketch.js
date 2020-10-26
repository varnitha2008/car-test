var ground;
var car,wall;
var speed,weight;

function setup() {
  createCanvas(1200,400);
  //ground=createSprite(700,400,650,200);
  //ground.shapeColor="black";
  
  wall = createSprite(1100, 200, 30, 100);
  wall.shapeColor = "grey";
  wall.debug = true;

  car=createSprite(200,200,30,20);
  car.shapeColor="white";
  car.debug=true;

  speed=random(55,90);
  weight=random(400,1500);
  
  car.velocityX = speed;
  

}
  

   function draw () {
    background("lightblue");

    if (wall.x - car.x < (car.width + wall.width / 2)) {
    
    car.velocityX =0;

    var deformation = 0.5 * weight * speed * speed / 22509;
    if (deformation > 180) {
      car.shapeColor = color(255, 0, 0);
    }
    if (deformation < 180 && deformation > 100) {
      car.shapeColor = color(230, 230, 0);
    }
    if (deformation < 100) {
      car.shapeColor = color(0, 255, 0);
    }
  }

    drawSprites();

  }