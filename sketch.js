var  tom , tom2 , tom3 ,background1 , background2 , jerry , jerry2 ,tom4 , jerry4


function preload() {
    //load the images here
   tom2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
   tom3= loadAnimation("images/tomOne.png")
   tom4= loadAnimation("images/tomFour.png")
   background1=loadImage("images/garden.png")
   jerry2=loadAnimation("images/jerryTwo.png","images/jerryThree.png","images/jerryOne.png")
   jerry4=loadAnimation("images/jerryFour.png")
}

function setup(){
    createCanvas(1200,800);
    //create tom and jerry sprites here

    background2=createSprite(500,360,1200,800)
   background2.addImage("b",background1)
   tom = createSprite(700,570,20,20);
   tom.addAnimation("t",tom3)
   tom.scale=0.2
   jerry=createSprite(100,550,20,20)
   jerry.addAnimation("j",jerry2)
   jerry.scale=0.2  
}

function draw() {
       
   background('pink');
    //Write condition here to evalute if tom and jerry collide

  
  
  
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
       tom.velocityX=0
       tom.changeAnimation("stop") 
       tom.addAnimation("stop",tom4)
     
       jerry.changeAnimation("dance")
       jerry.addAnimation("dance",jerry4)
      

    }

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("t",tom2)
    tom.changeAnimation("tomRunning") 
  }

}
