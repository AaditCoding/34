
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;







function setup() {
  createCanvas(1300,700);

  engine = Engine.create();
  world = engine.world;

ground = new Ground(600,690,10000,10)
support = new Ground(802,500,410,30)
support2 = new Ground(995,300,410,30)

//Set1
block1 = new Block(500,680,80,20)
block2 = new Block(581,680,80,20)
block3 = new Block(662,680,80,20)
block4 = new Block(743,680,80,20)
block5 = new Block(544,660,90,20)
block6 = new Block(625,660,80,20)
block7 = new Block(706,660,80,20)
block8 = new Block(588,639,80,20)
block9 = new Block(670,639,80,20)
block10 = new Block(630,618,80,20)

//Set2
block11 = new Block(640,474,80,20)
block12 = new Block(721,474,80,20)
block13 = new Block(802,474,80,20)
block14 = new Block(883,474,80,20)
block15 = new Block(964,474,80,20)
block16 = new Block(680.5,453,80,20)
block17 = new Block(761.5,453,80,20)
block18 = new Block(842.5,453,80,20)
block19 = new Block(923.5,453,80,20)
block20 = new Block(720.5,433,80,20)
block21 = new Block(801,433,80,20)
block22 = new Block(882,433,80,20)
block23 = new Block(761.5,413,80,20)
block24 = new Block(843,413,80,20)
block25 = new Block(802.5,319,80,20)

//Set3
block26 = new Block(837,275,90,20)
block27 = new Block(915,275,80,20)
block28 = new Block(990,275,80,20)
block29 = new Block(1070,275,80,20)
block30 = new Block(1150,275,80,20)
block31 = new Block(869.5,255,80,20)
block32 = new Block(950.5,255,80,20)
block33 = new Block(1030.5,255,80,20)
block34 = new Block(1110.5,255,80,20)
block35 = new Block(910.5,235,80,20)
block36 = new Block(990.5,235,80,20)
block37 = new Block(1070.5,235,80,20)
block38 = new Block(951.5,215,80,20)
block39 = new Block(1030.5,215,80,20)
block40 = new Block(990.5,194,80,20)

ball = new Ball(200,200,10)
rope = new Rope(ball.body,{x:200,y:200})


  
}


function draw() {
  background("blue");
  Engine.update(engine);

  rope.display();
  ball.display();
  ground.display();
  support.display();
  support2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();

  
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseRealeased(){
  rope.fly()
}

function keyPressed(){
  if(keyCode === 32){
    rope.attach(ball.body)
  }
}
