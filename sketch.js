var tom,jerry,bgImg;
var catImg,catImg2,catImg3,catImg4;
var ratImg,ratImg2,ratImg3,ratImg4;

function preload() {
    //load the images here
bgImg=loadImage("images/garden.png");
catImg=loadAnimation("images/tomOne.png");
catImg2=loadAnimation("images/tomTwo.png");
catImg3=loadAnimation("images/tomThree.png");
catImg4=loadAnimation("images/tomFour.png");
ratImg=loadAnimation("images/jerryOne.png");
ratImg2=loadAnimation("images/jerryTwo.png");
ratImg3=loadAnimation("images/jerryThree.png");
ratImg4=loadAnimation("images/jerryFour.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(900,700,20,20);
tom.addAnimation("sitting",catImg);
tom.scale=0.1;

jerry=createSprite(100,700,20,20);
jerry.addAnimation("standing",ratImg);
jerry.scale=0.1;


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
keyPressed();
    drawSprites();


if(tom.x-jerry.x < (tom.width-jerry.width)/2){
tom.velocityX=0;
tom.changeAnimation(catImg4);

jerry.addAnimation(ratImg3,ratImg4);
jerry.scale=0.15;
jerry.changeAnimation(ratImg4);

}}


function keyPressed(){
 

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
  tom.velocityX=-5;
  tom.addAnimation("Running",catImg2);
  tom.changeAnimation("Running");
  jerry.addAnimation("standing",ratImg2);
  jerry.changeAnimation("standing");

  
}

}