class Umbrella{
    constructor(x,y){
        var option = {
            isStatic:true
        }

        this.image = loadImage("images/walking_1.png");
        this.body = Bodies.circle(x,y,50,option);
        this.radius = 50;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y+70,300,300);
    }
}