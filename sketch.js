
var playerimagedown,playerimageforward,playerimageleft,playerimageright,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,
s11,s12,s13,s14,s15,s16,s17,s18,s19,s20,s21,s22,s23,s24,s25,s26,s27,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,
v12,v13,v14,v15,v16,v17,v18,v19,v20,v21,v22,v23,v24,v25,v26,v27,roundtwo ;
function preload(){
  playerimagedown=loadImage("bob down.png")
  playerimageforward=loadImage("bob forward.png")
  playerimageleft=loadImage("bob left.png")
  playerimageright=loadImage("bob right.png")
}
var gamestate = "start"
function setup(){
  createCanvas (800,800)
  player = createSprite(430,600,50,50)
  player.addImage(playerimageforward)
 player.scale = 0.05
 s1 = createSprite(400,400,10,400);
 s2=createSprite(585,200,380,10);
 s3=createSprite(800,410,10,370);
 s4=createSprite(625,600,350,10)
 s5=createSprite(470,280,100,5);
 s6=createSprite(520,330,5,100);
 s7=createSprite(555,380,70,5);
 s8=createSprite(590,330,5,100);
 s9= createSprite(660,280,150,5);
 s10=createSprite(730,255,5,50);
 s11= createSprite(460,410,5,150);
 s12= createSprite(490,430,60,5);
 s13=createSprite(520,480,5,100);
 s14=createSprite(490,530,70,5);
 s15=createSprite(550,480,60,5)
 s16=createSprite(580,510,5,70)
 s17=createSprite(637,544,120,5)
 s18=createSprite(694,435,5,225);
 s19=createSprite(660,321,70,5);
 s20=createSprite(625,367,5,100)
 s21=createSprite(590,416,70,5);
 s22=createSprite(720,436,60,5);
 s23=createSprite(749,496,5,120);
 s24= createSprite(470,220,70,5);
 s25=createSprite(470,244,5,30)
 s26=createSprite(634,470,5,70);
 s27=createSprite(750,370,50,5);
 end=createSprite(782,218,20,20)
end.visible=false;
}
function draw() {
  background(255,255,255); 
  if(gamestate=="start"){

  if(keyDown ("UP_ARROW")) {
player.y=player.y-2
player.addImage(playerimageforward)
  }
if(keyDown ("DOWN_ARROW")) {
  player.y=player.y+2
  player.addImage(playerimagedown)
  }
  if(keyDown ("RIGHT_ARROW")) {
    player.x=player.x+2
    player.addImage(playerimageright)
  }
    if(keyDown ("LEFT_ARROW")) {
      player.x=player.x-2
      player.addImage(playerimageleft)
    }}
    if( player.isTouching(s1) || player.isTouching(s2) ||player.isTouching(s3) ||player.isTouching(s4)
     ||player.isTouching(s5) ||
    player.isTouching(s6) ||player.isTouching(s7) ||player.isTouching(s8) ||
    player.isTouching(s9) ||player.isTouching(s10) ||player.isTouching(s11) ||
    player.isTouching(s12) ||player.isTouching(s13) ||player.isTouching(s14) ||
    player.isTouching(s15) ||player.isTouching(s16) ||player.isTouching(s17) ||
    player.isTouching(s18) ||player.isTouching(s19) ||player.isTouching(s20) ||
    player.isTouching(s21) ||player.isTouching(s22) ||player.isTouching(s23) ||
    player.isTouching(s24) ||player.isTouching(s25) ||player.isTouching(s26) ||
    player.isTouching(s27) ){
      player.x=430
      player.y=600
    }
    if (player.isTouching(end)){
      gamestate = "end"
      end.destroy();
    }
    if (gamestate=="end"){
      roundtwo=createButton("Next Round")
       roundtwo.position(100,100)
       roundtwo.mousePressed(nextlevel)
    }
   
  drawSprites();

      
}
function nextlevel(){
  console.log("Welcome to round two")
}