
var b = [];
function setup() {
  createCanvas(500, 500);
  makeGrid();
  loadColours();
} //end setup
function draw() {
  background(255);

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
      b[i][j] = new Boxes(i * 80, j * 80, 75,75,0, 0,0);
   
    } //end j loop
  } //end i loop
} //end makeGrid
function loadColours(){
  //the first value is the column
  //the second value is the row
  b[3][0].r = 255
  b[3][0].g = 0
  b[3][0].b = 0
  
  b[1][3].r = 255
  b[1][3].g = 0
  b[1][3].b = 0
}//end loadColours



