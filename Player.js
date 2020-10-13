function Player() {
this.pos = createVector(width/2, height/2)
this.vel = (0,0);
this.dir = 0
this.show function(){
push();
translate(this.pos.x, this.pos.y);
rect(0, 0, 20, 50)
pop();
}
}
