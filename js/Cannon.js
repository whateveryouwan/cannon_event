class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    //BY default the angle is measured in radians in p5.js
    this.angle = angle;
    this.image = loadImage("assets/cannonBase.png")
    this.canonimage = loadImage("assets/canon.png")
  }
  display() {
    console.log(this.angle)
        if(keyIsDown(RIGHT_ARROW)&&this.angle<70){
            this.angle+=1
        }
        if(keyIsDown(LEFT_ARROW)&& this.angle>-30){
            this.angle-=1
        }
    push()
    translate(this.x,this.y)
    rotate(this.angle)
    imageMode(CENTER)
    image(this.canonimage,0,0,this.width,this.height)
    pop()
    image(this.image, 70, 20, 200, 200)
    
  }
}
