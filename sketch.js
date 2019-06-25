var time = 0;

function setup() {
  createCanvas(600,600);
  background(80);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  var i = 0;
  var radius=250;
  
  time = time + 1;
  translate(300,300);
  //var sc = map(sin(time),1,-1,0,20);
  //scale(sc);
  noStroke();
  fill(225,151,68,50);
  
  while(i<30){
    rotate(360/30);
    var s = map(sin(i*4 +time), -1, 1, 0, 40 )
    ellipse(i * 2,0,s,s);
    
    
    i=i+1;
  }
  
}