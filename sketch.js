var load = 0, loading, form1, form2, form3, game, level1, l1p2, level1game;
var gs =0;
var player, player2;
var standingImg, walkingDown, WalkingUp, walkingRight, walkingLeft;

var l1 = 4, l2=5,l3=6,l4=7,l5=8,l6=9,l7=10,l8=11;
var p2 = 44;
var bgImg;
//actual games begin from 100;
var l1g = 100;

//bgImages
var tacgen_bgImg, tacgen_bgImg2;

//buttons - play, exit, option
var level1Image, level3Image, level4Image, level5Image, level6Image, level7Image, level8Image, backbuttonImg, playbuttonImg, campaignImg, multiplayerImg, survivalImg;
var optionsButtonImg, storylineButtonImg, tacHeaderImg, creditsbuttonImg, tutorialbuttonImg;
var bg1Img;


function preload() {
  standingImg = loadImage("images/TacGenics_SpriteAnimations/standing.png");
  
  walkingRight = loadAnimation("images/TacGenics_SpriteAnimations/WalkingRight/Walking_right1.png",
                            "images/TacGenics_SpriteAnimations/WalkingRight/Walking_right2.png",
                            "images/TacGenics_SpriteAnimations/WalkingRight/Walking_right3.png",
                            "images/TacGenics_SpriteAnimations/WalkingRight/Walking_right4.png",
                            "images/TacGenics_SpriteAnimations/WalkingRight/Walking_right5.png",
                            "images/TacGenics_SpriteAnimations/WalkingRight/Walking_right6.png",
                            "images/TacGenics_SpriteAnimations/WalkingRight/Walking_right7.png",
                            "images/TacGenics_SpriteAnimations/WalkingRight/Walking_right8.png",
                            "images/TacGenics_SpriteAnimations/WalkingRight/Walking_right9.png")
  walkingLeft = loadAnimation("images/TacGenics_SpriteAnimations/WalkingLeft/Walking_left1.png",
                            "images/TacGenics_SpriteAnimations/WalkingLeft/Walking_left2.png",
                            "images/TacGenics_SpriteAnimations/WalkingLeft/Walking_left3.png",
                            "images/TacGenics_SpriteAnimations/WalkingLeft/Walking_left4.png",
                            "images/TacGenics_SpriteAnimations/WalkingLeft/Walking_left5.png",
                            "images/TacGenics_SpriteAnimations/WalkingLeft/Walking_left6.png",
                            "images/TacGenics_SpriteAnimations/WalkingLeft/Walking_left7.png",
                            "images/TacGenics_SpriteAnimations/WalkingLeft/Walking_left8.png",
                            "images/TacGenics_SpriteAnimations/WalkingLeft/Walking_left9.png")
  form3_images();
  sounds();


}
function setup() {

  createCanvas(windowWidth,windowHeight);

  //playerSprite
  player = createSprite(255, 460, 30, 30);
  player.visible = false;
  player.addAnimation("standing", standingImg);
  player.addAnimation("walkRight", walkingRight);
  player.addAnimation("walkLeft", walkingLeft);  
  player.scale = 1.5;
  World.frameRate = 60; 
  
  game = new Game();

  
    if(gameSound){
      userStartAudio();
      gameSound.play();
    }
    
  
  
  
  
}

function draw() {
  if(gs === 1){background(tacgen_bgImg);}
  else if (gs === 2){background(tacgen_bgImg2)}
  else if(gs === l1g){background(bg1Img); gameSound.stop();}
  else{background("#9B0000")}

  

  if (gs === 0){
  fill("black");
  stroke("black")
  strokeWeight(2);  
  textAlign(CENTER);
  textSize(30);
  textFont("Georgia")
}
  else{
    fill("white");
  stroke("white")
  strokeWeight(2);  
  textAlign(CENTER);
  textSize(30);
  textFont("Georgia")
  }
  
  game.gamePlay();
  
  drawSprites();
  if(gs === l1g){
    text("→ to move left", (1092/1365)*width, (86/665)*height);
    text("← to move right", (1092/1365)*width, ((86+30)/665)*height);
  }
}

function form3_images() {  
  tacgen_bgImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/TacGenics_Background1.jpg");
  tacgen_bgImg2 = loadImage("images/TacGenics_SpriteAnimations/Buttons/TacGenics_Background2.jpg");
  tacHeaderImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/TacGenics_Header.png");
  playButtonImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/Start_button.png");
  optionsButtonImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/Options_button.png");
  storylineButtonImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/Storyline_button.png");
  backbuttonImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/Back_button.png");
  creditsbuttonImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/Credits_button.png");
  tutorialbuttonImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/Tutorial_button.png");
  bg1Img = loadImage("images/TacGenics_SpriteAnimations/Buttons/bg1.png");

  campaignImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/Campaign_image.jpg");
  multiplayerImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/Multiplayer_image.jpg");
  survivalImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/Survival.jpg");
  level1Image = loadImage("images/TacGenics_SpriteAnimations/LevelSelector/Level1_image.png");
  level2Image = loadImage("images/TacGenics_SpriteAnimations/LevelSelector/Level2_image.png");
  level3Image = loadImage("images/TacGenics_SpriteAnimations/LevelSelector/Level3_image.png");
  level4Image = loadImage("images/TacGenics_SpriteAnimations/LevelSelector/Level4_image.png");
  level5Image = loadImage("images/TacGenics_SpriteAnimations/LevelSelector/Level5_image.png");
  level6Image = loadImage("images/TacGenics_SpriteAnimations/LevelSelector/Level6_image.png");
  level7Image = loadImage("images/TacGenics_SpriteAnimations/LevelSelector/Level7_image.png");
  level8Image = loadImage("images/TacGenics_SpriteAnimations/LevelSelector/Level8_image.png");  
}

function sounds() {
  gameSound = loadSound("sounds/gameMusic.mp3");
}



