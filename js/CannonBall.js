class CannonBall{
  constructor(x,y,radius){

    this.radius = radius;

    var options={
      resitution : 0.8,
      friction:1.0,
      density:1.0,
      isStatic:true,
    }
    
    this.body= Bodies.circle(x,y,this.radius,options)
    this.image = loadImage("./assets/cannonball.png");
    World.add(world,this.body)

  }

shoot(){
  var velocity = p5.Vector.fromAngle(cannon.angle)
  //console.log(velocity)
  velocity.mult(20)
  Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
  Matter.Body.setStatic(this.body,false)

}

display(){

push()
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
pop()

}

}