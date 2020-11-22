class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg=loadImage("sprites/smoke.png");
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200)
    {
    var xpos=this.body.position.x;
    var ypos=this.body.position.y;
    var position=[xpos,ypos];
    this.trajectory.push(position);
    }
    for(var i=0;i<this.trajectory.length;i++)
    {
      var birdPos=this.trajectory[i]

      image(this.smokeImg,birdPos[0],birdPos[1])
    }
  }
}
