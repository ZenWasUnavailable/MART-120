var Herox = 50;
var Heroy = 50;

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



// The HOMEWORK 13 PART OF THIS CODE

var MyXs = []; // x coords array
var MyYs = []; // y coords array
var MyDs = []; // diameter array



var ShapeXSpeeds = [];
var ShapeYSpeeds = [];



function setup() {
  createCanvas(800, 600);
  
  // HOMEWORK 13 circles loop
}for(var i = 0; i < 5; i++)
  {
    ShapeXSpeeds [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    ShapeYSpeeds [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    MyXs [i] = Math.floor(Math.random() * number) * 10;
    MyYs [i] = Math.floor(Math.random() * number) * 10;
    MyDs [i] = Math.floor(Math.random() * number) * 5;
  }
  createHero(24, 200, 32,Herox, Heroy,40);





function draw() {
  background(0);
  
  drawHero(24, 200, 32,Herox, Heroy,40);

  //Move Hero
  controlHero();

  for(var i = 0; i < MyXs.length; i++)
    {
      fill(Math.floor(Math.random() * number),Math.floor(Math.random() * number),Math.floor(Math.random() * number))
      circle(MyXs[i], MyYs[i], MyDs[i]);
      shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

      MyXs[i] += shapeXSpeeds[i];
      MyYs[i] += shapeYSpeeds[i];

      if(MyXs >= 720)
        {
      
          ShapeXSpeeds = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1) * -1;
        }
        if(MyXs <=20)
        {
          ShapeXSpeeds = ShapeXSpeeds *= -1
        }
        if(MyYs >= 520)
        {
      
          ShapeYSpeeds = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1) * -1;
        }
        if(MyYs <=20)
          {
            ShapeYSpeeds = ShapeYSpeeds *= -1
          }
        }
        

  

  //Call Create Borders
  createBorders(0,0,780,580,20,800,);
  //creates exit
  createExit(64, 255, 112,770,450,30,150,'EXIT',750,400);



  //Conditional statement for Enemies
 




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