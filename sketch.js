var startBtn
var b;
function setup() {
  createCanvas(400, 400);
  startBtn = createButton("Click to Start")
  startBtn.position(10,10)
  startBtn.mousePressed(makeGrid);
  makeGrid()
}//end setup
function draw() {
  background(220);
  b.display();
}//end draw
function makeGrid(){
  b=new Boxes(50,50,100,100,25,225,31)
}//end makeGrid
