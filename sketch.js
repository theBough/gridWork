var startBtn
var b= [];
function setup() {
  createCanvas(400, 400);
  startBtn = createButton("Click to Start")
  startBtn.position(10,10)
  startBtn.mousePressed(makeGrid);
  makeGrid()
}//end setup
function draw() {
  background(220);
  for(i = 0 ; i<b.length ; i++){
    b[i].display();
  }//end loop
  
}//end draw
function makeGrid(){
  for(i=0; i<5;i++){
    b.push(new Boxes(i*31+50,50,30,30,25,225,31))
  }//end loop
  
}//end makeGrid
