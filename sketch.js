var satellite,planet;
function setup(){
  createCanvas(2000,2000);

  satellite=new particle(500,500,.5,-2*PI/3);
  planet= new particle(600,500,.5,PI/6);
  satellite.mass=5;
}

function draw(){
  background(255,0,255);
  satellite.show();
  planet.show();
  planet.update();
  planet.gravitateby(satellite);
  satellite.gravitateby(planet);
  satellite.update();
}
particle =function(x,y,vel,thita){
  this.position = new vector(x,y);
  this.vel=new vector(0,0);
  this.vel.setR(vel);
  this.vel.setAngle(thita);
  this.mass=100;
  this.gravity=new vector(0,0);
}
particle.prototype.show=function(){
  fill(0);
  ellipse(this.position.x,this.position.y,10,10);
}
particle.prototype.update=function(){
  this.position.x+=this.vel.x;
  this.position.y+=this.vel.y;
}
particle.prototype.gravitateby=function(p2){
  this.gravity.setR(p2.mass/sq(this.distance(p2)));
  this.gravity.setAngle(this.angle(p2));
  this.vel.x+=this.gravity.x;
  this.vel.y+=this.gravity.y;

}
particle.prototype.distance=function(p2){
  var dx=-this.position.x+p2.position.x;
  var dy=-this.position.y+p2.position.y;
  return sqrt(dx*dx+dy*dy) ;
}
particle.prototype.angle=function(p2){
  return atan2(p2.position.y-this.position.y,p2.position.x-this.position.x);
}
