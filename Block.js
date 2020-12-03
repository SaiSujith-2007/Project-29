class Block{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.2,
            'friction':1,
            'density':1.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 225;
        World.add(world, this.body);
      }

      score(){
        if(this.visibility<0&&this.visibility>-105){
          score++;
        }
      }
      display(){
        var angle = this.body.angle;
           
           push();
           this.Visibility=this.Visibility-5;
           tint(255,this.Visiblity);
           translate(this.body.position.x, this.body.position.y);
           rotate(angle);
           rectMode(CENTER);
           rect(0, 0, this.width, this.height);
           pop();

  }
}