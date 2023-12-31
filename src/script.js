let call_on_field = document.getElementById("call_on_field");
call_on_field.innerText = "Play Ball!";

const balls = document.getElementById("balls");
const strikes = document.getElementById("strikes");
const outs = document.getElementById("outs");
const rollButton = document.querySelector("#roll_dice");

const scoreCardContainer = document.querySelector("#score_card");
//

let ballCount = 0;
let strikeCount = 0;
let outCount = 0;

// DOM bases
const firstBase = document.querySelector("#first_base");

const call = () => {
    let diceball = [1, 2, 3, 4, 5, 6];
    let dice_result = Math.floor(Math.random() * diceball.length + 1);
    const even_true = dice_result % 2 === 0;
    const diceRolled = document.querySelector("#diceRolled");
    diceRolled.innerText = dice_result;

    if (even_true === true) {
        call_on_field.innerHTML = "<i>Strike</i>";
        //   call_on_field.style = "color: red; font-weight: bold;"
        strikes.innerText = `Strikes: ${strikeCount + 1}`;
        strikeCount++;
        out();
        setInterval(() => {
            strikes.innerText = `Strikes: ${strikeCount}`;
        }, "4000");
        strikeOut();
    } else if (even_true === false) {
        call_on_field.innerText = "Ball";
        balls.innerText = `Balls: ${ballCount + 1}`;
        ballCount++;
        setInterval(() => {
            balls.innerText = `Balls: ${ballCount}`;
        }, "4000");
        walk();
    }
};

const walk = () => {
    if (ballCount === 4) {
        balls.innerText = "Walk";
        counterReset();
        strikes.innerText = `Strikes: ${strikeCount}`;
    }
};

const strikeOut = () => {
    if (strikeCount === 3) {
        strikes.innerText = "Strike out!";
        counterReset();
        balls.innerText = `Balls: ${ballCount}`;
    }
};

const counterReset = () => {
    strikeCount = 0;
    ballCount = 0;
};

const out = () => {
    if (strikeCount === 3) {
        outCount++;
        outs.innerText = `Outs: ${outCount}`;
        call_on_field.innerText = "OUT!";
    }

    if (outCount === 3) {
        outCount = 0;
        outs.innerText = `Outs: ${outCount}`;
        call_on_field.innerText = "Switching sides!";
        setInterval(() => {
            call_on_field.innerText = "Play Ball!";
        }, "4000");
    }
};

// rolling the dice button

rollButton.addEventListener("click", (e) => {
    e.preventDefault;
    call();
});

function scoreBoard(awayRuns, homeRuns) {
    const scoreCard = document.createElement("div");
    scoreCard.className = "scoreCardCss";
    scoreCard.textContent = "Score board: ";

    scoreCardContainer.appendChild(scoreCard);

    const awayScore = document.createElement("div");
    awayScore.textContent = `Away: ${awayRuns}`;
    scoreCard.appendChild(awayScore);

    const homeScore = document.createElement("div");
    homeScore.textContent = `Home: ${homeRuns}`;
    scoreCard.appendChild(homeScore);
}

scoreBoard(0, 0);
