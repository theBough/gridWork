var startBtn;
var b = [];
function setup() {
  createCanvas(1000, 1000);
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
      b[i][j].mouseOver();
    
    } //endj loop
  } //end i loop
  
} //end draw
function makeGrid() {
  /*
  the value that follow i< will be the number
  of boxes in each row
  */
  
  for (i = 0; i < 10; i++) {
    b[i] = [];
      /*
      The value after the j<
      is the amount columns
      */
    for (j = 0; j < 10; j++) {
      /*
      The value that follows the i* is how far apart each
      box is.
      The number that follows the j* determines the space between each 
      box. As far as the heght.
      The values "15" are the width and height
      The last 3 values are the rgb values.
      */
      b[i][j] = new Boxes(i * 31, j * 31, 30,30,256, 183, 3);
   
    } //end j loop
  } //end i loop
} //end makeGrid


