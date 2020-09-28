class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.side = 0;
      this.name = null;
      this.rank = null;
    }                                                                                                                                                                            
  //go to firebase and fetch value of playercount....
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    getrank(){
      var playerCountRef = database.ref('score_rank');
      playerCountRef.on("value",(data)=>{
        playerrank = data.val();
      })
    }
    static updaterank(rank){
      database.ref('/').update({
        score_rank: rank
      });
    }
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
    removeplayer(){
      database.ref('players').set({
        allPlayers: []
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        Side:this.side
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }
  