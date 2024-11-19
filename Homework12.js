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

Enemy1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
Enemy1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
Enemy2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
Enemy2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

function setup() {
  createCanvas(800, 600);
  createHero(24, 200, 32,Herox, Heroy,40);
  
}
function draw() {
  background(0);
  
  drawHero(24, 200, 32,Herox, Heroy,40);

  //Create badguys
  createBadguys(173, 44, 65,Enemy1X,Enemy1Y,60, 255, 188, 64,Enemy2X,Enemy2Y,80);

  //Call Create Borders
  createBorders(0,0,780,580,20,800,);

  //creates exit
  createExit(64, 255, 112,770,450,30,150,'EXIT',750,400);

  //Conditional statement for Enemies
  moveEnemies();


  //Move Hero
  controlHero();
  

  //Mouse Shape

  mousePressed(mouseShapeX,mouseShapeY,100);
  
  
  
}

//Create Hero Function
function createHero(heroRed,heroGreen,heroBlue,x,y,d)
{
//creates Hero
  fill(heroRed,heroGreen,heroBlue);
  circle(x,y,d);
}

function drawHero(heroRed,heroGreen,heroBlue,x,y,d)
{
    fill(heroRed,heroGreen,heroBlue,)
    circle(x,y,d);
}

function createBadguys(Bad1red,Bad1Green,Bad1Blue,Enemy1X,Enemy1Y,d,Bad2red,Bad2green,Bad2blue,Enemy2X,Enemy2Y,d2)
{
  //Badguy 1
  fill(Bad1red,Bad1Green,Bad1Blue)
  square(Enemy1X,Enemy1Y,d)

  //badguy 2
  fill(Bad2red,Bad2green,Bad2blue)
  circle(Enemy2X,Enemy2Y,d2)
}

function controlHero()
{
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

//Move enemeies
function moveEnemies()
{
    //Make Enemies move
  Enemy1X += Enemy1XSpeed;
  Enemy1Y += Enemy1YSpeed;
  Enemy2X += Enemy2XSpeed;
  Enemy2Y += Enemy2YSpeed;
  if(Enemy1X >= 720)
    {
  
      Enemy1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1) * -1;
    }
    if(Enemy1X <=20)
    {
      Enemy1XSpeed = Enemy1XSpeed *= -1
    }
    if(Enemy1Y >= 520)
    {
  
      Enemy1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1) * -1;
    }
    if(Enemy1Y <=20)
      {
        Enemy1YSpeed = Enemy1YSpeed *= -1
      }
    if(Enemy2X >= 740)
    {
  
      Enemy2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1) * -1;
    }
    if(Enemy2X <=60)
      {
        Enemy2XSpeed = Enemy2XSpeed *= -1
      }
    if(Enemy2Y >= 540)
    {
      Enemy2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1) * -1;
    }
    if(Enemy2Y <=60)
      {
        Enemy2YSpeed = Enemy2YSpeed *= -1
      }
}

//Create Borders Function
function createBorders(topX,topY,lowerX,lowerY,SmallThick,LargeThick,)
{
  //Top
  rect(topX,topY,LargeThick,SmallThick)
  //Left
  rect(topX,topY,SmallThick,LargeThick)
  //Bottom
  rect(topX,lowerY,LargeThick,SmallThick)
  //Right
  rect(lowerX,topY,SmallThick,LargeThick)
}

//Create Function for Exit
function createExit(exitRed,exitGreen,exitBlue,exitX,exitY,exitLengh,exitHeight,exitText,exitTextX,exitTextY)
{
  fill(exitRed,exitGreen,exitBlue)
  rect(exitX,exitY,exitLengh,exitHeight)
  text(exitText,exitTextX,exitTextY)
}

function mousePressed(mouseShapeX,mouseShapeY,d)
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
    circle(mouseShapeX,mouseShapeY,d)
}

rgb(64, 255, 112)