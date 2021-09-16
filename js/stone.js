class Stone{
    constructor(x,y,w,h){
        var options={
            restitution:0.7,
            isStatic:false
        }
    this.body = Bodies.rectangle(x,y,w,h,options)
    this.w = w;
    this.h = h;

    World.add(world,this.body)
    }
display(){
  var pos = this.body.position
  push()
  ellipseMode(CENTER)
  fill("white")
  ellipse(pos.x,pos.y,this.w,this.h)
  pop()
}
}