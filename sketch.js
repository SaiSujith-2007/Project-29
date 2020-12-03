const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2, ground3;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13;
var block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;
var polygon1;
var launch;
var score=0;
function setup() {
  createCanvas(800,800);
  stroke(255);
  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(400,800,800,20);
  ground2=new Ground(325,700,250,20);
  ground3=new Ground(580,600,180,20);
  //level1-ground2
  block1=new Block(300,698,30,40);
  block2=new Block(310,698,30,40);
  block3=new Block(320,698,30,40);
  block4=new Block(330,698,30,40);
  block5=new Block(340,698,30,40);
  block6=new Block(350,698,30,40);
  block7=new Block(360,698,30,40);
  //level2
  block8=new Block(310,648,30,40);
  block9=new Block(320,648,30,40);
  block10=new Block(330,648,30,40);
  block11=new Block(340,648,30,40);
  block12=new Block(350,648,30,40);
  //level3
  block13=new Block(320,608,30,40);
  block14=new Block(330,608,30,40);
  block15=new Block(340,608,30,40);
  //level4
  block16=new Block(330,588,30,40);
  //level5-ground3
  block17=new Block(600,598,30,40);
  block18=new Block(595,598,30,40);
  block19=new Block(580,598,30,40);
  block20=new Block(575,598,30,40);
  block21=new Block(560,598,30,40);
  //level6
  block22=new Block(550,540,30,40);
  block23=new Block(575,540,30,40);
  block24=new Block(600,540,30,40);
  //level7
  block25=new Block(575,490,30,40);
  //polygon
  polygon1=new Polygon(75,460,50,50);
  launch=new Slingshot(polygon1.body,{x:75,y:460});

}

function draw() {
  background(180);
  Engine.update(engine);
  fill("white");
  textSize(18);
  text("SCORE: "+score,700,40);
  ground1.display();
  ground2.display();
  ground3.display();
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
  polygon1.display();
  launch.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block15.score();

  fill("Black");
  textSize(20);
  text(mouseX+","+mouseY,mouseX,mouseY);
 drawSprites();
}

function mouseDragged(){
      Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launch.fly();
  //launch.attach();
}

function keyPressed (){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon1.body,{x:200, y:50});
        
    launch.attach(polygon1.body);
  }
} 