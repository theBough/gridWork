var startBtn;
var b = [];
function setup() {
  createCanvas(400, 400);
  startBtn = createButton("Click to Start");
  startBtn.position(10, 10);
  startBtn.mousePressed(makeGrid);
  //makeGrid();
} //end setup
function draw() {
  background(220);

  for (i = 0; i < b.length; i++) {
    for (j = 0; j < b[i].length; j++) {
      b[i][j].display();
    } //endj loop
  } //end i loop
  
} //end draw
function makeGrid() {
  /*
  the value that follow i< will be the number
  of boxes in each row
  */
  
  for (i = 0; i < 5; i++) {
    b[i] = [];
      /*
      The value after the j<
      is the amount columns
      */
    for (j = 0; j < 5; j++) {
      /*
      The value that follows the i* is how far apart each
      box is.
      The number that follows the j* determines the space between each 
      box. As far as the heght.
      The values "15" are the width and height
      The last 3 values are the rgb values.
      */
      b[i][j] = new Boxes(i * 16, j * 16, 15, 15, 0, 225, 255);
    } //end j loop
  } //end i loop
} //end makeGrid
