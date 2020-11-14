const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig,pig2,wood,box2, box3,box4;
var woodX2,wood3,wood4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70)
    ground = new Ground(600,height,1200,20);
    pig= new Pigbruh(810,350);
    pig2 = new Pigbruh(810,220);
    wood= new Woodlog(810,260,300,PI/2);
    woodX2 = new Woodlog(810,180,300,PI/2)
    wood3= new Woodlog(760,120,150,PI/7)
    wood4= new Woodlog(870,120,150,-PI/7)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    pig2.display();
    woodX2.display();
    ground.display();
    pig.display();
    wood.display();
    wood3.display();
    wood4.display();
}