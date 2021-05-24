
var bg, backgroundImg,ironman,imImage,stoneImg,stonesGroup;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  imImage = loadImage("images/iron.png");
  stoneImg = loadImage("images/stone.png");
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale = 2;

  ironman = createSprite(500,300,20,20);
  ironman.addImage(imImage);
  ironman.scale = 0.3;
  ironman.debug = true;
  ironman.setCollider("rectangle",100,0,200,400);

  stonesGroup = new Group();
}

function draw() {
  
  if(keyDown("up")){
    ironman.velocityY = -10;
  }

  if(keyDown("left")){
    ironman.x = ironman.x -5;
  }

  if(keyDown("right")){
    ironman.x = ironman.x +5;
  }
 
  ironman.velocityY = ironman.velocityY + 0.5;
    
    drawSprites();

    spawnStone();
    for(var i=1;i<stonesGroup.length;i++){
      var temp = stonesGroup.get(i);
      ironman.collide(temp);
      
    }
   
}

function spawnStone(){
  if(frameCount%50==0){
    var stone = createSprite(random(100,900),100);
    stone.addImage(stoneImg);
    stone.velocityY = +5;
    stonesGroup.add(stone);
  }
}