let call_on_field = document.getElementById("call_on_field")
call_on_field.innerText = "Play Ball!"

const balls = document.getElementById("balls")
const strikes = document.getElementById("strikes")
const outs = document.getElementById("outs")
const rollButton = document.querySelector("#roll_dice")
const awayScore = document.getElementById('awayScore')
const homeScore = document.getElementById('homeScore')


//
const counterReset = () => {
   strikeCount = 1
   ballCount = 3
}

let ballCount = 3
let strikeCount = 1
let outCount = 0

// DOM bases
const firstBase = document.querySelector("#first_base")
const secondBase = document.querySelector("#second_base")
const thirdBase = document.querySelector("#third_base")

const call = () => {
    let diceball = [1, 2, 3, 4, 5, 6]
    let dice_result = Math.floor(Math.random() * diceball.length + 1)
    const even_true = dice_result % 2 === 0
    const diceRolled = document.querySelector("#diceRolled")
    diceRolled.innerText = dice_result

    if (even_true === true) {
        call_on_field.innerHTML = "<i>Strike</i>"
        //   call_on_field.style = "color: red; font-weight: bold;"
        strikes.innerText = `Strikes: ${strikeCount + 1}`
        strikeCount++
        out()
        setInterval(() => {
            strikes.innerText = `Strikes: ${strikeCount}`
         }, "4000")
         strikeOut()
      } else if (even_true === false) {
         call_on_field.innerText = "Ball"
        balls.innerText = `Balls: ${ballCount + 1}`
        ballCount++
        setInterval(() => {
           balls.innerText = `Balls: ${ballCount}`
         }, "4000")
         walk()
    }
}

let homeRuns = 0
let awayRuns = 0
let onFirst = false
let onSecond = false
let onThird = false
awayScore.textContent = `Away: ${awayRuns}`
homeScore.textContent = `Home: ${homeRuns}`
const walk = () => {

    if (ballCount === 4 && !onFirst) {
        balls.innerText = "Walk"
        counterReset()
        strikes.innerText = `Strikes: ${strikeCount}`
        firstBase.style.backgroundColor = 'red'
        onFirst = true
      } else if(ballCount === 4 && onFirst && !onSecond) {
         counterReset()
         onSecond = true
         secondBase.style.backgroundColor = 'red'
      } else if (ballCount === 4 && onFirst && onSecond && !onThird) {
         counterReset()
         onThird = true
         thirdBase.style.backgroundColor = 'red'
      } else if (ballCount === 4 && onFirst && onSecond && onThird) {
         awayRuns++
         awayScore.textContent = `Away: ${awayRuns}`
         counterReset()

      }
      
   }

const strikeOut = () => {
    if (strikeCount === 3) {
        strikes.innerText = "Strike out!"
        counterReset()
        balls.innerText = `Balls: ${ballCount}`
    }
}


const out = () => {
    if (strikeCount === 3) {
        outCount++
        outs.innerText = `Outs: ${outCount}`
        call_on_field.innerText = "OUT!"
    }

    if (outCount === 3) {
        firstBase.style = "background-color: white;"
        secondBase.style = "background-color: white;"
        thirdBase.style = "background-color: white;"
        outCount = 0
        outs.innerText = `Outs: ${outCount}`
        call_on_field.innerText = "Switching sides!"
        setInterval(() => {
            call_on_field.innerText = "Play Ball!"
        }, "4000")
    }
}

// rolling the dice button

rollButton.addEventListener("click", (e) => {
    e.preventDefault();
    call()
})



// ----- EXPERIMENTIAL BALL MOVEMENT CODE ----- //

// const ball = document.querySelector("#ball");
// const screenBody = document.body;
// let posX = 0;
// let posY = 0;
// const step = 20;

// const moving = (e) => {
//     console.log(e.key);
//     if (e.key === "ArrowUp") {
//         posY -= step;
//     } else if (e.key === "ArrowDown") {
//         posY += step;
//     } else if (e.key === "ArrowRight") {
//         posX += step;
//     } else if (e.key === "ArrowLeft") {
//         posX -= step;
//     }

//     on_base();

//     ball.style.transform = `translate(${posX}px, ${posY}px)`;
// };

// const on_base = () => {
//     if (posX >= 205 && posX <= 225 && posY >= 203&& posY <= 223) {
//         document.querySelector("h1").textContent = "Man on second!";
//     } else {
//       document.querySelector("h1").textContent = "DiceBall";
//     }
// };

// screenBody.addEventListener("keydown", moving);
// screenBody.addEventListener("click", (e) => {
//     console.log(e.clientX, e.clientY);
// });

// ----- END OF BALL MOVEMENT CODE SNIPPENT ----- //
