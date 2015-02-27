// Mission Description:
// Overall mission: Collect the treasure and move to the next level
// Goals:Avoid the Dragon, collect the treasure
// Characters: Player, Dragon
// Objects:Player(position, health, ammont of gold), Dragon
// Functions:moveUp, moveDown, moveForwad, moveBack

// Pseudocode
//Declare a 'player' object that will have properties as position and success
//Add different methods to 'player' to make it move up, down, forward and backward
//Declare a 'dragon' object and give it a random position
//Move the player, and also assign another random position to Dragon
//Check where player is with respect to the dragon and gold
//If its the same position as gold, success! If the player position is same as dragon,
//game over!


// Solution
var player = {
posX: 0,
posY: 0,
gold: 0,
success: false,

move: function(direction) {
  if(direction === 'forward'){
    this.posX +=10;
  }
  else if(direction === 'back'){
    player.posX -=10;
  }
  else if(direction === 'up'){
    player.posY += 10;
  }
  else if(direction === 'down'){
    player.posY -=10;
  }
//when player moves, dragon moves too
  dragon.posX = Math.floor((Math.random()*100)+1);
  dragon.posY = Math.floor((Math.random()*100)+1);
  console.log("Dragon's position is " + dragon.posX + "," + dragon.posY);

//Display where player is
console.log("Player's position is " + player.posX + "," + player.posY);

//After every move, check if the player is near the dragon or the gold
if(player.posX === dragon.posX && player.posY === dragon.posY){
console.log("You encountered the dragon, Game Over!");
}

else if(player.posX === gold.posX && player.posY === gold.posY){
  player.success = true;
  player.gold = 100;
  console.log("You reached the gold, you win!!");
}

}

};

var gold = {
posX: Math.floor((Math.random()*100)+1),
posY: Math.floor((Math.random()*100)+1)
};

var dragon = {
health: 100,
posX: Math.floor((Math.random()*100)+1),
posY: Math.floor((Math.random()*100)+1)
};


player.move('up');
player.move('forward');
