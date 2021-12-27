const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground
var rope
var fruit
var link

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(250,670,700,20)
  rope = new Rope(6,{x:220,y:40});
  
 
  var fruit_option={
    density:0.001
  }
fruit=Bodies.circle(300, 300,17, fruit_option)
Matter.Composite.add(rope.body,fruit);
 link=new Link(rope,fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(fruit.position.x,fruit.position.y,17,17);
  ground.show();
  rope.show();

   
}




