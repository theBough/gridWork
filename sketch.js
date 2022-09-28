var startBtn;
var b = [];
function setup() {
  createCanvas(400, 400);
  startBtn = createButton("Click to Start");
  startBtn.position(10, 10);
  startBtn.mousePressed(makeGrid);
  makeGrid();
} //end setup
function draw() {
  background(220);

  for (i = 0; i < b.length; i++) {
    for (j = 0; j < b[i].length; j++) {
      b[i][j].display();
    } //endj loop
  } //end i loop
  console.log(b)
} //end draw
function makeGrid() {
  /*
  the value that follow i< will be the number
  of boxes in each row
  */
  for (i = 0; i < 10; i++) {
    /*
    the value that follows the i* is how far apart each
    box is.
    */
    b[i] = [];
    //b.push(new Boxes(i * 16, 50, 15, 15, 25, 225, 31));
    
    for (j = 0; j < 10; j++) {
      b[i][j] = new Boxes(i * 16, j * 16, 15, 15, 25, 225, 31);
    } //end j loop
  } //end i loop
} //end makeGrid
