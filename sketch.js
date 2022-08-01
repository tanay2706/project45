var ship;
var shipImage;
var meteor;
var meteorImage;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	shipImage = loadImage("spaceship.png");
	meteorImage = loadImage("meteor.png");

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ship = createSprite(400,600);
	ship.addImage(shipImage);
	ship.scale = 0.4;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	if(keyDown(RIGHT_ARROW)){
		ship.velocityX = 10;
	}

	if(keyDown(LEFT_ARROW)){
		ship.velocityX = -10;
	}
  
  drawSprites();
 
}

function spawnMeteor(){
	
		if (frameCount % 60 === 0) {
		   meteor = createSprite(600,120,40,10);
		  meteor.y = Math.round(random(80,120));
		  meteor.addImage(meteorImage);
		  meteor.scale = 0.5;
		  meteor.velocityX = -3;
		  meteor.lifetime = 600;
		  meteor.colour("blue");
		  meteor.velocityY = 10;

		  if(meteor.IsTouching(ship)){
			ship.velocityX = 0;
			meteor.velocityY = 0;
		  }
		  
		  
		  
		  //add each cloud to the group
		  cloudsGroup.add(cloud);
		
	  }


}





