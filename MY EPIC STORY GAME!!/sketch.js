var player, playerImage;
var guide;
var doggy;
var farmImage, countryImage, cityImage, greenhouseInterior;
var fountainWall;
var bluehouse1, bluehouse2, bluehouse3, bluehouse4;
var redhouse1, redhouse, redhouse3;
var greenhouse1, greenhouseDoor;
var coins = 0;
var bob;
var gameState = cityImage;


function preload() {
  cityImage = loadImage("city.jpg");
  greenhouseInterior = loadImage("houseinterioridea2.png");
  farmImage = loadImage("farm.jpeg");
  countryImage = loadImage("country.jpg");
  playerImage = loadImage("player_transparent.png");
  shopkeeperImage = loadImage("shopkeeper_idea.png");
}


function setup() {
  createCanvas(displayWidth, 725);

  //main player 
  player = createSprite(850, 340);
  player.addImage(playerImage);
  player.scale = 0.1

  //shopkeeper
  bob = createSprite(750, 300);
  bob.addImage(shopkeeperImage);
  bob.scale = 0.1;

  //create boundries for structures
  fountainWall = createSprite(785, 446, 270, 145);
  bluehouse1 = createSprite(1115, 330, 225, 120);
  bluehouse2 = createSprite(320, 520, 330, 120);
  bluehouse3 = createSprite(250, 150, 200, 100);
  bluehouse4 = createSprite(290, 20, 400, 200);
  redhouse1 = createSprite(298, 70, 550);
  redhouse2 = createSprite(1210, 552, 335, 150);
  redhouse3 = createSprite(1400, 320);
  greenhouse1 = createSprite(590, 230, 200);

  greenhouseDoor = createSprite(650,680,250,50);

  //make sprites invisible
  fountainWall.visible = false;
  bluehouse1.visible = false;
  bluehouse2.visible = false;
  bluehouse3.visible = false;
  bluehouse4.visible = false;
  redhouse1.visible = false;
  redhouse2.visible = false;
  redhouse3.visible = false;
  greenhouse1.visible = false;

  //guide  = createSprite
}


function draw() {

 background(gameState);


  if (player.isTouching(greenhouse1)) {
    gameState = "greenhouseInterior"
    background(gameState);
    console.log("Green house");
  }
  else {
    gameState = "cityImage"
    console.log("City");
  }

  if (gameState == "greenhouseInterior") {
    background(gameState);
    gameState = "cityImage"
    cityImage = greenhouseInterior;
  
  
    if (player.isTouching(greenhouseDoor)) {
      gameState = "cityImage"
      background(gameState);
      console.log("City");
    }
    else {
      background(gameState);
      gameState = "greenhouseInterior"
      console.log("Green house");
    }

    if (gameState == "greenhouseInterior") {
      background(gameState);
      gameState = "cityImage"
      cityImage = greenhouseInterior;

    fountainWall.destroy();
    bluehouse1.destroy();
    bluehouse2.destroy();
    bluehouse3.destroy();
    bluehouse4.destroy();
    redhouse1.destroy();
    redhouse2.destroy();
    redhouse3.destroy();
    greenhouse1.destroy();
  }

  //make player collide with sprites
  player.collide(fountainWall);
  player.collide(bluehouse1);
  player.collide(bluehouse2);
  player.collide(bluehouse3);
  player.collide(bluehouse4);
  player.collide(redhouse1);
  player.collide(redhouse2);
  player.collide(redhouse3);
  player.collide(greenhouse1);
  player.collide(greenhouseDoor);

  fill('white');
  textSize(30);
  text("Coins:" + coins, 1300, 130);


  if (keyWentDown(DOWN_ARROW)) {
    player.velocityY = 3;
  }

  if (keyWentDown(UP_ARROW)) {
    player.velocityY = -3;
  }

  if (keyWentDown(LEFT_ARROW)) {
    player.velocityX = -3;
  }

  if (keyWentDown(RIGHT_ARROW)) {
    player.velocityX = 3;
  }

  //---------------------------------------------------------------------------------------------------------------\\

  if (keyWentUp(DOWN_ARROW)) {
    player.velocityY = 0;
  }

  if (keyWentUp(UP_ARROW)) {
    player.velocityY = 0;
  }

  if (keyWentUp(LEFT_ARROW)) {
    player.velocityX = 0;
  }

  if (keyWentUp(RIGHT_ARROW)) {
    player.velocityX = 0;
  }
  drawSprites();
  }
}