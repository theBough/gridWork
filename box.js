function Boxes(x,y,w,h,r,g,b){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.r = r;
  this.g = g;
  this.b = b;
  this.display = function(){
    push()
    let c  = color(this.r,this.g,this.b);
    fill(c)
    rect(this.x, this.y, this.w, this.h);
    pop()
  }
}
