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
  this.mouseOver = function () {
    if (gameOn) {
      if (
        mouseY > this.y &&
        mouseY < this.y + this.h &&
        mouseX > this.x &&
        mouseX < this.x + this.w
      ) {
        //This mouse should be in a box
        this.r = 0;
        this.g = 0;
        this.b = 0;
      } //end if
    } //end GameOn
  }; //end mouseOver
}
