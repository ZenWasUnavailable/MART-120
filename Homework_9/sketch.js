function setup() {
    createCanvas(400,400);
  }
  
  function draw() {
    background(220);
    //head
    fill(123, 107, 50)
    circle(180,150,250)
    fill(251, 228, 197);
    rect(105,220,150,200);
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
    ellipse(125,180,90,60);
    fill(255, 255, 255)
    ellipse(127,176,75,45)
    fill(101, 91, 50)
    circle(130,173,38)
    fill(0,0,0)
    circle(130,173,20)

    //right eye
    fill(241, 215, 178)
    ellipse(235,180,90,60)
    fill(255, 255, 255)
    ellipse(233,176,75,45)
    fill(101,91,50)
    circle(230,173,38)
    fill(0,0,0)
    circle(230,173,20)

    //Title
    textSize(32);
    text('The Aspiring Artist', 10, 30);
    textSize(18)
    text('By Jonah Rohde' , 260,390)

    //reference points for measurements
    point(10,173);
    point(10,290)
    point(10,220)
  }

  rgb(251, 228, 197)
rgb(123, 107, 50)
