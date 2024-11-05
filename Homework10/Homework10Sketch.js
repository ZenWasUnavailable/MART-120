var Head1X = 180;
var Head2X = 105;
var FirstY = 173;
var SecondY = 173;
var diag1X = 125;
var diag1Y = 180;
var diag2X = 235;
var diag2Y = 180;
var textsize = 32;

var movement; 

function setup() {
    createCanvas(400,400);
    movement1 = floor(random() * 10) + 1;
    movement2 = floor(random() * 10) + 1;
    movement3 = floor(random() * 10) + 1;
    movement4 = floor(random() * 10) + 1;
    movement5 = floor(random() * 10) + 1;
    movement6 = floor(random() * 10) + 1;
    movement7 = floor(random() * 10) + 1;
    movement8 = floor(random() * 10) + 1;
  }
  
function draw() 
{
  
  background(220);
  //head
  fill(123, 107, 50);
  //this is the first bouncing along x shape
  circle(Head1X,150,250);
  if(Head1X >= 400 || Head1X <= 0)
    {
      movement1 *= -1;
    }
  
    Head1X += movement1;
  fill(251, 228, 197);
  //This is the second shape moving x
  rect(Head2X,220,150,200);
  if(Head2X >= 400 || Head2X <= 0)
    {
      movement2 *= -1;
    }
  
    Head2X += movement2;
  circle(180,200,230);
  //chin and jaw line
  square(150,270,60)
  //left side
  triangle(70, 260, 150, 270, 150, 330);
  triangle(70, 260, 150, 270, 100, 200);
  triangle(70, 260, 60, 180, 100, 200)
  //right side
  triangle(290, 260, 210, 270, 210, 330);
  triangle(290, 260, 210, 270, 260, 200);
  triangle(290, 260, 300, 180, 260, 200);
  //nose
  triangle(180,170,180,230,160,250)
  triangle(180,170,180,230,200,250)
  triangle(160,250,180,230,200,250)
  //mouth
  line(140, 270, 180, 260);
  line(180,260,220,270)
  //left eye
  fill(241, 215, 178)
  // this is the first part to move diagonally

  ellipse(diag1X,diag2Y,90,60);
  if(diag1X >= 400 || diag1X <= 0)
    {
      movement5 *= -1;
    }
  
  diag1X += movement5;
  if(diag1Y >= 400 || diag1Y <= 0)
    {
      movement6 *= -1;
    }
  
  diag1Y += movement6;

  fill(255, 255, 255)
  ellipse(127,176,75,45)
  fill(101, 91, 50)
  //this is the first shape moving along y
  circle(150,FirstY,38)
  if(FirstY >= 400 || FirstY <= 0)
    {
      movement3 *= -1;
    }
  
  FirstY += movement3;
  fill(0,0,0)
  circle(130,173,20)

  //right eye
  fill(241, 215, 178)
  ellipse(diag2X,diag2Y,90,60)
  // this is the second part to move diagonally
  if(diag2X >= 400 || diag2X <= 0)
    {
      movement7 *= -1;
    }
  
  diag2X += movement7;
  if(diag2Y >= 400 || diag2Y <= 0)
    {
      movement8 *= -1;
    }
  
  diag2Y += movement8;
  fill(255, 255, 255)
  ellipse(233,176,75,45)
  fill(101,91,50)
  // This is the second shape moving along y
  circle(SecondY,SecondY,38)
  if(SecondY >= 400 || SecondY <= 0)
    {
      movement3 *= -1;
    }
  
  SecondY += movement3;
  fill(0,0,0)
  circle(230,173,20)

  //Title
  textSize(textsize);
  text('The Aspiring Artist', 10, 30);
  textsize *= 5(textsize)
  textsize *= -1
  textSize(18)
  text('By Jonah Rohde' , 260,390)

  //reference points for measurements
  point(10,173);
  point(10,290)
  point(10,220)
}

  rgb(251, 228, 197)
rgb(123, 107, 50)
