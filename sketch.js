const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon_img;
var slingShot;

function preload(){
    polygon_img = loadImage("polygon.png")
}

function setup(){
var canvas = createCanvas(1200,600);
engine = Engine.create();
world = engine.world;

platform1 = new Ground(600,300,200,10);
platform2 = new Ground(900,150,100,10);
box1 = new Box(525,275,50,50);
box2 = new Box(575,275,50,50);
box3 = new Box(625,275,50,50);
box4 = new Box(675,275,50,50);
box5 = new Box(875,135,50,50);
polygon = Bodies.circle(50,200,20);
World.add(world,polygon);
slingShot = new Slingshot(polygon,{x:90,y:190});
}

function draw(){
    background("black");
    Engine.update(engine);
    platform1.display();
    platform2.display();
    fill("grey");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    slingShot.display();

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}
function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}