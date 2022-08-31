var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var box1=createSprite(25,75,50,50);
var box2=createSprite(75,75,50,50);
var box3=createSprite(125,75,50,50);
var box4=createSprite(175,75,50,50);
var box5=createSprite(225,75,50,50);
var box6=createSprite(275,75,50,50);
var box7=createSprite(325,75,50,50);
var box8=createSprite(375,75,50,50);


var box9=createSprite(25,125,50,50);
var box10=createSprite(75,125,50,50);
var box11=createSprite(125,125,50,50);
var box12=createSprite(175,125,50,50);
var box13=createSprite(225,125,50,50);
var box14=createSprite(275,125,50,50);
var box15=createSprite(325,125,50,50);
var box16=createSprite(375,125,50,50);

var ball=createSprite(200,230,20,20);
var paddle=createSprite(200,350,70,20);



box1.shapeColor="pink";
box3.shapeColor="pink";
box5.shapeColor="pink";
box7.shapeColor="pink";
box10.shapeColor="pink";
box12.shapeColor="pink";
box14.shapeColor="pink";
box16.shapeColor="pink";


box2.shapeColor="purple";
box4.shapeColor="purple";
box6.shapeColor="purple";
box8.shapeColor="purple";
box11.shapeColor="purple";
box13.shapeColor="purple";
box15.shapeColor="purple";
box9.shapeColor="purple";

ball.shapeColor="white";
paddle.shapeColor="pink";


var score=0;

var gameState="serve";






function draw(){
  background("black")
  createEdgeSprites();
ball.bounceOff(leftEdge);
ball.bounceOff(rightEdge);
ball.bounceOff(paddle);
ball.bounceOff(topEdge);




  drawSprites();
  
  if(ball.isTouching(box1))
  {
    score=score+1;
    box1.destroy();
  }
  
  if(ball.isTouching(box2))
  {
    score=score+1;
    box2.destroy();
  }
  
  if(ball.isTouching(box3))
  {
    score=score+1;
    box3.destroy();
  }
  
  if(ball.isTouching(box4))
  {
    score=score+1;
    box4.destroy();
  }
  
  if(ball.isTouching(box5))
  {
    score=score+1;
    box5.destroy();
  }
  
  if(ball.isTouching(box6))
  {
    score=score+1;
    box6.destroy();
  }
  
  if(ball.isTouching(box7))
  {
    score=score+1;
    box7.destroy();
  }
  
  if(ball.isTouching(box8))
  {
    score=score+1;
    box8.destroy();
  }
  
  if(ball.isTouching(box9))
  {
    score=score+1;
    box9.destroy();
  }
  
  if(ball.isTouching(box10))
  {
    score=score+1;
    box10.destroy();
  }
  
  if(ball.isTouching(box11))
  {
    score=score+1;
    box11.destroy();
  }
  
  if(ball.isTouching(box12))
  {
    score=score+1;
    box12.destroy();
  }
  
  if(ball.isTouching(box13))
  {
    score=score+1;
    box13.destroy();
  }
  
  if(ball.isTouching(box14))
  {
    score=score+1;
    box14.destroy();
  }
  
  if(ball.isTouching(box15))
  {
    score=score+1;
    box15.destroy();
  }
  
  if(ball.isTouching(box16))
  {
    score=score+1;
    box16.destroy();
  }
  
  textSize(20);
stroke("white");
text("Puntos:",300,30);
text(score,372,30);
  
  
  if (gameState==="serve")
  {
    textSize(20);
    text("¡Hola! Para comenzar presiona enter.",30,270);
  }
  
  
  if (gameState==="play")
  {
    paddle.x=World.mouseX;
  }
  
  
  if (ball.isTouching(bottomEdge) || score==16)
  {
    gameState="end";
  }
  

if (gameState==="end")
{
  ball.velocityX=0;
  ball.velocityY=0;
  textSize(30);
  stroke("orange");
  text("¡Terminado!",120,250);
}


if (keyDown("space")){
  ball.velocityX=2;
  ball.velocityY=4;
  gameState="play";
  
}



}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
