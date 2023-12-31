const pitchDiceOutput = document.getElementById('pitchDice')
const pitchBtn = document.getElementById('pitcherBtn')
const batterBtn = document.getElementById('batterBtn')
let playText = document.getElementById('play')
const pitchCount = document.getElementById('pitchCount')


const strikes = document.getElementById('calledStrikes')


const balls = document.getElementById('calledBalls')
let totalBalls = balls.innerText
totalBalls = 1

// ------------- //
class Die {
  sides = [1, 2, 3, 4, 5, 6]
  roll() {
    return Math.floor(Math.random() * (this.sides.length) + 1)
  }
}

const ballCount = () => {
  if(playText.innerText === "Ball!") {
    return balls.innerText = "Balls: " + totalBalls ++
  }
};


// pitchers dice roll
const pitchRolled = () => {
  const diceRolled = new Die
  const output = diceRolled.roll()
  
  if(output === 1 || output === 3 || output === 5) {
    playText.innerText = "Strike!"
  }
  else
  playText.innerText = 'Ball!'

    ballCount()

   return pitchDiceOutput.innerText = `${output}`

};


batterBtn.addEventListener('click', () => {
  // balls.innerText = "Balls: " + totalBalls ++
})

pitchBtn.addEventListener('click', () => {
  return pitchRolled()
})


// pitcher rolls dice
  // if dice roll is odd - strike
  // if dice roll is even - ball
// batter rolls 4 dies on opening pitch

// if pitch is even
  // then if any of batter dice matches even
    // dies are called strike in accordence to number of matched dices
  // and if any of the batters dice are odds
    // nothing happens 

// if pitch is odd
  // if batter rolls a matching odd number
    // chose to hit or take balls
    // if choses to hit
      // roll hit dice
        //if roll 1
          //player moves 1 base
        //if roll two
          //player moves 2 bases
        //if rolls 3
          //player moves 3 bases
        //if rolls 4
          //player moves 4 bases and scores 1 point
        // if rolls 5
          //player is out and 1 out is taken for score card
        //if rolls 6 
          //player is out and 1 out is taken for score card
    //if choses to take balls
      // match odd dices
      //count matched dies
      //diplay balls on score card
      //batter has 4 balls
        // player moves 1 base (to first base)

      
