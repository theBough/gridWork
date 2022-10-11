
var b = [];
var gameOn = false;
var activeR;
var activeG;
var activeB;
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
      if(gameOn){
        b[i][j].mouseOver();
      }
      
    
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
  b[3][0].r = 255
  b[3][0].g = 0
  b[3][0].b = 0
  
  b[1][3].r = 255
  b[1][3].g = 0
  b[1][3].b = 0
  
  b[4][0].r = 255
  b[4][0].g = 127
  b[4][0].b = 0
  
  b[2][3].r = 255
  b[2][3].g = 127
  b[2][3].b = 0
  
  b[2][4].r = 0
  b[2][4].g = 255
  b[2][4].b = 55
  
  
  b[4][3].r = 0
  b[4][3].g = 255
  b[4][3].b = 55
  
  b[1][4].r = 0
  b[1][4].g = 179
  b[1][4].b = 255
  
   
  b[0][0].r = 0
  b[0][0].g = 179
  b[0][0].b = 255
  
  b[2][2].r = 255
  b[2][2].g = 221
  b[2][2].b = 0
  
  b[3][1].r = 255
  b[3][1].g = 221
  b[3][1].b = 0
}
function mousePressed(){
  gameOn = true;
  for (i = 0; i < b.length; i++) {
    for (j = 0; j < b[i].length; j++) {
      b[i][j].getColor();
    } //endj loop
  } //end i loop
  
}//end mousePressed
function mouseReleased(){
  gameOn = false;
  console.log("Boughen")
}



