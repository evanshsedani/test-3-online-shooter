class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    play1 = createSprite(250, 300)
    play2 = createSprite(400, 400)
    play3 = createSprite(300, 300)
    play4 = createSprite(200, 200)
    play1.addImage(car1)
    play2.addImage(car2)
    play3.addImage(car3)
    play4.addImage(car4)
    cars = [play1, play2, play3, play4] 
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    //player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(map, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y = 175;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
       
        x = displayHeight - allPlayers[plr].side;
      console.log(allPlayers[plr].side);
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
         
        cars[index-1].x = x;
        cars[index-1].y = y;
       console.log(cars[index - 1])

       
        if (index === player.index){
          stroke(10);
         // fill("red");
         // ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance +=10     
    player.update();
    }

    if(keyIsDown(DOWN_ARROW) && player.index !== null){
player.distance -=10
      player.update();}
      
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.side +=10
        player.update();}
        
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.side -=10
                player.update();}

    if(player.distance > 3860){
      gameState = 2;
      player.rank +=1
      Player.updateCarsAtEnd(player.rank)
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}




