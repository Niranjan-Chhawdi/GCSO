var car,wall;
var weight,speed;


function setup() {
  createCanvas(1600,400); 
  car = createSprite(50, 200, 50, 50);
 

  wall = createSprite(1300,200,60,60/2);
  


  car.velocityX = 6;

   speed = (55,90); 
  weight = (400,1500); 

}

function draw() {
  background(255,255,255);

  car.shapeColor = ("green"); 
  wall.shapeColor = ("green");
  

 
  
    if(wall.x-car.x < (car.width + wall.width)/2){

      car.velocityX = 0;
      var deformation = 0.5 * weight * speed * speed/22509;

      if(deformation > 180){
         car.shapeColor = color(255,0,0);   
      }
       
      if (deformation < 180 && deformation > 100){
        car.shapeColor = color(230,230,0);
      }

      if(deformation < 100){
         car.shapeColor = color(0,255,0);
      }
    }

  drawSprites();
}