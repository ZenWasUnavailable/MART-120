

var treeTriangle1X = 0
var treeTriangle1Y = 0
var treeTriangle2X = 50
var treeTriangle2Y = 120
var treeTriangle3X = 50
var treeTriangle3Y = 120

var MyXs = [];
var MyYs = [];

 


function setup() {
    fill(0, 0, 0);
    createCanvas(1250, 800);
    MyXs[0] = 100;
    MyYs[0] = 100;
    MyXs[1] = 300;
    MyYs[1] = 160;
    MyXs[2] = 250;
    MyYs[2] = 330;
    MyXs[3] = 160;
    MyYs[3] = 270;
    MyXs[4] = 210;
    MyYs[4] = 140;

}

function draw() {
    background(20, 22, 48);
    
    groundEllipse(24, 31, 58,400,400,2000,700);
    groundEllipse(31, 34, 67,400,400,1300,400);
    
    fill(255, 255, 255);
    for(var i = 0; i < MyXs.length; i++)
        {
            point(MyXs[i],MyYs[i]);
        }
    
    
    darkTree(160,340);
    darkTree(250,380);
    darkTree(100,300);
    darkTree(370,360);
    darkTree(740,390);
    darkTree(830,350);
    darkTree(320,330);
    darkTree(1200,360);
    darkTree(1000,330);
    darkTree(1080,310);
    darkTree2(220,350);
    darkTree2(40,390);
    darkTree2(440,280);
    darkTree(620,260);
    darkTree(780,360);
    darkTree2(900,270);
    darkTree3(530,330);
    darkTree2(690,380);
    darkTree2(1150,340);
    darkTree3(1030,320)
    
    


}

function groundEllipse(r,g,b,x,y,w,h) {
    fill(r,g,b);
    ellipse(x,y,w,h);
}

function darkTreeLeaf(r,g,b,x,y,x2,y2,x3,y3) {
    fill(r,g,b);
    triangle(x,y,x2,y2,x3,y3);
}

function darkTreeLeaf2(r,g,b,x,y,x2,y2,x3,y3) {
    fill(r,g,b);
    triangle(x,y,x2,y2,x3,y3)
}

function darkTreeLog(r,g,b,x,y,w,h) {
    fill(r,g,b);
    rect(x,y,w,h);
}


function darkTree(x,y) {
    darkTreeLog(47, 59, 71,x - 20, y + 60, 40,800);
    darkTreeLeaf2(10, 16, 22,x,y + 240, x - 90, y + 210 + 240, x + 90, y + 190 + 240);
    darkTreeLeaf(10, 16, 22, x,y + 120,x - 80,y + 190 + 120,x + 80, y + 210 + 120);
    darkTreeLeaf2(10, 16, 22, x,y,x - 70,y + 210,x + 70, y + 190);
    
}

function darkTree2(x,y,) {
    darkTreeLog(47, 59, 71,x - 20, y + 60, 40,800);
    darkTreeLeaf2(19,29,41,x,y + 240, x - 90, y + 190 + 240, x + 90, y + 210 + 240);
    darkTreeLeaf(19, 29, 41, x,y + 120,x - 80,y + 210 + 120,x + 80, y + 190 + 120);
    darkTreeLeaf2(19, 29, 41, x,y,x - 70,y + 190,x + 70, y + 210);
}

function darkTree3(x,y,) {
    darkTreeLog(47, 59, 71,x - 20, y + 60, 40,800);
    darkTreeLeaf2(19,29,41,x,y + 240, x - 90, y + 210 + 240, x + 90, y + 190 + 240);
    darkTreeLeaf(19, 29, 41, x,y + 120,x - 80,y + 190 + 120,x + 80, y + 210 + 120);
    darkTreeLeaf2(19, 29, 41, x,y,x - 70,y + 210,x + 70, y + 190);
}