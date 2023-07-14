var canon
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var ball
var canvas, angle, tower, ground, cannon;

var balls=[]

//Examples of Array 
var arr = [2,7,10]
console.log(arr)

arr.push(15)
console.log(arr)

var student = ['Pranav',6,true]
console.log(student)
console.log(arr[2])

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES)
  angle=20

  
  var options = {
    isStatic: true
  }
  
  canon=new Cannon(180, 110, 130, 100, angle)



  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);
  
}



function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  
  canon.display()

  for(var i = 0;i<balls.length;i++) {
    showCannonBalls(balls[i],i); 
  }

}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    ball=new CanonBall(canon.x,canon.y)
    console.log(ball)
    balls.push(ball)
    console.log("DOWN_ARROW",ball.body.position.x,ball.body.position.y)
  }
}

function keyReleased(){
  if(keyCode === DOWN_ARROW){
    balls[balls.length-1].shoot()
  }
}

function showCannonBalls(ball,i){
  if(ball){
    ball.display()
  }
}
