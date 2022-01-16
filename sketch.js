
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, basketBall, hoop, goal, loseImg, winImg;
var ground, left, right, roof;
var keyPressed, keyPressed2;


function preload() {
  ball = loadImage('basketBall.png');
  hoop = loadImage('goal.png');
  loseImg = loadImage('gameOver.png');
  winImg = loadImage('win.png');
}

function setup() {
  createCanvas(1500,700);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(750,700,1500,10);
  left = new Ground(0,350,10,700);
  roof = new Ground(750,0,1500,10);
  right = new Ground(1500,350,10,700);

  goal = createImg('goal.png');
  goal.size(100,100)
  goal.position(1400,200);

  /*var options={
    isStatic: true
    //density
  }*/
  //basketBall = Bodies.circle(350,50,50, options);
  //World.add(world, basketBall)

  basketBall = new Ball(200,50,50);


}


function draw() 
{
  background("grey");
  
  Engine.update(engine);

  ground.show();
  left.show();
  roof.show();
  right.show();
  basketBall.show();



  /*if(collide(basketBall, goal)==true){
    console.log("win");
  }*/

  

 /*  if (keyCode === 32) {
    Matter.Body.applyForce(basketBall.body, {x:0, y:0}, {x:0.01, y:-0.01})
  }

 */
  //basketBall.keyPressed();
  //basketBall.keyPressed2();

  /*if(keyCode === 39){
    Matter.Body.applyForce(basketBall.body, {x:0, y:0}, {x:0,y:-0.01});
  }*/

  //ellipse(basketBall.body.position.x, basketBall.body.position.y, 50,50);

  //drawsprites();
}



function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.applyForce(basketBall.body, {x:0, y:0}, {x:0, y:0.02})
    }
    if (keyCode === 39) {
      Matter.Body.applyForce(basketBall.body, {x:0, y:0}, {x:0.02, y:0.02})
      } 
      if (keyCode === 40) {
        Matter.Body.applyForce(basketBall.body, {x:0, y:0}, {x:0, y:-0.02})
        } 
  }



  

