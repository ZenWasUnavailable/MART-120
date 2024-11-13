var Herox = 50;
var Heroy = 50;

var Enemy1X = 200;
var Enemy1Y = 50;

var Enemy2X = 400;
var Enemy2Y = 550;

//speeds
var Enemy1XSpeed;
var Enemy1YSpeed;
var Enemy2XSpeed;
var Enemy2YSpeed;

//controls
var w = 87;
var a = 65;
var s = 83;
var d = 68;

var ExitTextX = 750;
var ExitTextY = 450;
var YayTextX = 1000;
var YayTextY = 1000;

//The mouse shape
var mouseShapeX;
var mouseShapeY


function setup() {
  createCanvas(800, 600);
  Enemy1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  Enemy1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  Enemy2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  Enemy2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  
}
function draw() {
  background(0);
  //creates Hero
  fill(24, 200, 32);
  circle(Herox, Heroy, 40);

  //Badguy 1
  fill(173, 44, 65)
  square(Enemy1X,Enemy1Y,60)

  //badguy 2
  fill(255, 188, 64)
  circle(Enemy2X,Enemy2Y,80)

  
  EnemyYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

  //Make Enemies move
  Enemy1X += Enemy1XSpeed;
  Enemy1Y += Enemy1YSpeed;
  Enemy2X += Enemy2XSpeed;
  Enemy2Y += Enemy2YSpeed;


  //Conditional statement for Enemies
  if(Enemy1X >= 800)
  {

    Enemy1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1) * -1;
  }
  if(Enemy1Y >= 600)
  {

    Enemy1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1) * -1;
  }
  if(Enemy2X >= 800)
  {

    Enemy2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1) * -1;
  }
  if(Enemy2Y >= 600)
  {

    Enemy2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1) * -1;
  }



  //The exit
  fill(64, 255, 112)
  rect(770,450,30,150)
  text('EXIT',750,400)

  //Mouse Shape
  circle(mouseShapeX,mouseShapeY,80)
  
  
  if(Herox > 769 && Heroy >=450)
    {
       
        text('You Win!!',400,300)
    }

  //Press S
  else if(keyIsDown(s)) 
  {
    Heroy += 5;
  } 
  //Press W
  else if (keyIsDown(w)) 
  {
    Heroy -= 5;
  }
  //Press D
  else if (keyIsDown(d)) 
  {
    Herox += 5;
  }
  //Press A
  else if (keyIsDown(a)) 
{
    Herox -= 5;
  }
  
  
  
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
    
}

rgb(64, 255, 112)