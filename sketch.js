
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  FoodGroup= new Group()
  obstacleGroup= new Group()
  
}



function setup() {
  createCanvas(670, 415);
  score=0
  survivalTime=0
  
  ground=createSprite(0,400,1500,10)
  
   monkey=createSprite(90,370,10,10)
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1
  
  
  

  }
function draw() {
  background("white")
  
  if(keyDown("space")&&monkey.y >= 350){
    monkey.velocityY=-18
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  
  console.log(frameCount)
  ground.velocityX = -7 
 ground.x = ground.width/2;
    
 if(World.frameCount%80===0){
    fruits()
 }
  
  if(World.frameCount%300===0){
    obstacles()
 }
  
  
  
 
 drawSprites()
  fill("white")
  textSize(20)
  text("Score: "+ score, 500,50);
  
  fill("black")
  var survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,100,50)
  
}

function fruits(){
  banana=createSprite(670,Math.round(random(170,230)),10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-4
  banana.lifetime=165
  FoodGroup.add(banana)
}

function obstacles(){
  obstacle=createSprite(670,370,10,10)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-4
  obstacle.scale=0.2
  obstacle.lifetime=170
  obstacleGroup.add(obstacle)
}







