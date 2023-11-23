const diceOutput = document.getElementById('dice')
const rollBtn = document.getElementById('rollBtn')
let playText = document.getElementById('play')

class Die {
  sides = [1, 2, 3, 4, 5, 6]
  
  roll() {
    return Math.floor(Math.random() * (this.sides.length) + 1)
  }
}


// pitchers dice roll

rollBtn.addEventListener('click', () => {
  const diceRolled = new Die
  const output = diceRolled.roll()

  if(output === 1 || output === 3 || output === 5) {
    playText.innerText = "Strike!"
  }
  else
  playText.innerText = 'Ball!'

  return diceOutput.innerText = `The pitcher rolled a ${output}`

})
