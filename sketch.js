const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2= new Box(920,320,70,70);
    box3=new Box(700,250,70,70);
    box4=new Box(920,250,70,70)
    ground1= new Ground(600,390,1200,20)
    pig1= new Pig(810,350)
    log1=new Log(810,260,300,PI/2)
    log2=new Log(810,200,300,PI/2)
    pig2=new Pig(810,220)
    box5=new Box(810,160,70,70);
    log3=new Log(760,120,150,PI/7)
    log4=new Log(870,120,150,-PI/7)
    bird1=new Bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display()
    pig1.display()
    log1.display()
    box3.display()
    box4.display()
    log2.display()
    pig2.display()
    log3.display()
    box5.display()
    log4.display()
    bird1.display()
}