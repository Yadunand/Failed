
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	bobObject1 = createSprite (400,500,30,30)
	bobObject2 = createSprite (300,500,30,30)
	bobObject3 = createSprite (500,500,30,30)
	bobObject4 = createSprite (600,500,30,30)
	bobObject5 = createSprite (200,500,30,30)

	roof = createSprite(400,100,500,30)
con1 = createSprite(300,100,50,30)
con2 = createSprite(500,100,50,30)
con3 = createSprite(600,100,50,30)
con4 = createSprite(200,100,50,30)
con5 = createSprite(400,100,50,30)

chain1 = new Rope(bobObject1.body,con5.body);


	
	Engine.run(engine);
  
}


function draw() {



  rectMode(CENTER);
  background(255,182,193);
  
  drawSprites();
 
}



