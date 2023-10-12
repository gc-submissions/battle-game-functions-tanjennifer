"use strict";

// TODO - write your code here.
const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};

//range is 2, 0 and 1
const chooseOption = (opt1, opt2) => {
  // if (randNum ===0) {
  //     return opt1
  // }  else {
  //     return opt2
  // }
  const randNum = Math.floor(Math.random() * 2);

  return randNum === 0 ? opt1 : opt2;
};

//no parameter in the random function
const attackPlayer = function (health) {
  //given number - health
  //returns number
  return health - randomDamage();
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => {
  return health <= 0;
};

//   console.log(isDead(5));
fight("Bill", "Jen", 100, 200);
function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    console.log("NEW ROUND");
    const attacker = chooseOption(player1, player2);
    console.log(attacker + " is attacker");

   

    if (attacker === player1) {
      console.log("player1 attacks p2");
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        console.log("player2 is dead");
        logDeath(player1, player2);
        break;
      }
      }
       else {
        console.log("player2 attacks p1");
        player1Health = attackPlayer(player1Health);
        logHealth(player1, player1Health);
        if (isDead(player1Health)) {
          console.log("player1 is dead");
          logDeath(player2, player1);
          break;
        }
      }
    
    console.log("attack over");
  }
}

// //Lastly, call the fight function with the required four parameters.
// You pick the names and starting health. For example: player1: “Mitch”, player2: “Adam”,
// player1Health: 100, player2Health: 100.
