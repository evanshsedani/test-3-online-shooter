var play   
var play1, play2, play3, play4;
var canvas, backgroundImage;
var car1, car2, car3, car4;
var cars
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var side = 0;
var database;
var icar1, icar2, icar3, icar4, itrack
var playerrank
var map


var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function preload(){
 map = loadImage("map shooter game.png")
 car1 = loadImage("skins/skin1.png")
 car2 = loadImage("skins/skin2.png")
 car3 = loadImage("skins/skin3.png")
 car4 = loadImage("skins/skin4.png")
}



function draw(){
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 2){
    game.end();
    game.update(2)
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}

