//implementing Physics Engine
//World: game world
//Enigine: run the world
//bodies: bird,box,pig
//how to create them
const World=Matter.World  //namespacing
const Engine = Matter.Engine;
const Bodies=Matter.Bodies;
//create PE and World for game
var engine,world;
var box1,box2;
var ground;

function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  //create bodies are our objects of game pig,bird
  box1=Bodies.rectangle(200,100,50,50)  //body is created in memory not visible on screen
  World.add(world,box1)
  //box2
  var boptions={
    restitution:1.0
  }
  box2=Bodies.circle(300,200,50,boptions)
  World.add(world,box2)

  // ground fixed
  var goptions={
     isStatic:true     //static fix
  }
  ground=Bodies.rectangle(200,390,400,20,goptions);
  //add the box1 in game world
  World.add(world,ground);
  console.log(box1);

  
}

function draw() {
  background(0);
Engine.update(engine)   //on change it will update/modify the engine   
  rectMode(CENTER);
 rect(box1.position.x,box1.position.y,50,50)  //box1 postion x,y to rect
 ellipseMode(RADIUS)
ellipse(box2.position.x,box2.position.y,50,50)
rect(ground.position.x,ground.position.y,400,20)
}