
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var kidoImg;
var world, engine;
var kido, stone, tree, ground, slingshot;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;

function preload()
{
	kidoImg = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1420, 687);

	kido = createSprite(205,585,80,140);
	kido.addImage(kidoImg);
	kido.scale = 0.08;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(185, 550, 40, 40);
//	kido = new Kid(200, 580, 80, 140);
	ground = new Ground(width/2,670,width,40);

	slingshot = new SlingShot(stone.body, {x:170, y:550});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  text(mouseX + "," + mouseY, 10, 10);
  drawSprites();
//  kido.display();
  ground.display();
//  kido.display();
  slingshot.display();
  stone.display();
//  kido.display();
//  slingshot.display();
//  drawSprites();
 
}

function mouseDragged() 
{
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}
function mouseReleased() 
{
	slingshot.fly();
}
function keyPressed() 
{
	if (keyCode === 32) 
	{
		Matter.Body.setPosition(stone.body, {x : 185, y : 550});
		slingshot.attach(stone.body);
	}
}
