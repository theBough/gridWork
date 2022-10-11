function Boxes(x, y, w, h, r, g, b) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.r = r;
  this.g = g;
  this.b = b;
  this.display = function () {
    push();
    let c = color(this.r, this.g, this.b);
    fill(c);
    rect(this.x, this.y, this.w, this.h);
    pop();
  };
  
  this.getColor = function () {
    if (gameOn) {
      if (
        mouseY > this.y &&
        mouseY < this.y + this.h &&
        mouseX > this.x &&
        mouseX < this.x + this.w
      ) {
        //This mouse should be in a box
        activeR = this.r;
        activeG = this.g;
        activeB = this.b;
        
      } //end if
    } //end GameOn
  }; //end getColor
  this.mouseOver = function () {
    if (gameOn) {
      if (
        mouseY > this.y &&
        mouseY < this.y + this.h &&
        mouseX > this.x &&
        mouseX < this.x + this.w
      ) {
        this.r = activeR
        this.g = activeG
        this.b = activeB
        
        
      } //end if
    } //end GameOn
  }; //end mouseOver
}
