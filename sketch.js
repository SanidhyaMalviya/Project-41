const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var thunder1,thunder2,thunder3,thunder4;
var engine,world;
var maxDrops = 100;
var drops = [];
var rand;
var thunderCreatedFrame = 0;

function preload(){
  //Thunderbolt images
  thunder1 = loadImage("images/thunderbolt1.png");
  thunder2 = loadImage("images/thunderbolt2.png");
  thunder3 = loadImage("images/thunderbolt3.png");
  thunder4 = loadImage("images/thunderbolt4.png");    
}

function setup(){
  engine = Engine.create();
  world = engine.World;
  createCanvas(400,windowHeight);

  //creating umbrella
  umbrella = new Umbrella(200,500);

  //creating drops
  if(frameCount%150===0){
    for(var i=0; i<maxDrops; i++);
    drops.push(new Drop(random(0,400),random(0,400)));
  }
}

function draw(){
  Engine.update(engine);
  background(0); 

  //creating thunder
  rand = Math.round(random(1,4));
  if(frameCount%80===0){
    thunderCreatedFrame = frameCount;
    thunder = createSprite(random(10,370), random(10,30), 10, 10);
    switch(rand){
      case 1: thunder.addImage(thunder1);
        break;
      case 2: thunder.addImage(thunder2);
        break; 
      case 3: thunder.addImage(thunder3);
        break;
      case 4: thunder.addImage(thunder4);
        break;
        default: break;
    }
    thunder.scale = random(0.3,0.6)
  }

  if(thunderCreatedFrame+10 === frameCount && thunder){
    thunder.destroy();
  }

  umbrella.display();

  //displaying rain drops
  for(var i = 0; i<maxDrops; i++){
    drops[i].showDrop();
    drops[i].updateY();  
  }

  drawSprites();
}   