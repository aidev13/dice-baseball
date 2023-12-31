let call_on_field = document.getElementById("call_on_field");
call_on_field.innerText = "Play Ball!";

const balls = document.getElementById("balls");
const strikes = document.getElementById("strikes");
const outs = document.getElementById("outs");
const rollButton = document.querySelector("#roll_dice");

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

    if (even_true === true) {
        call_on_field.innerText = "strike";
        strikes.innerText = `Strikes: ${strikeCount + 1}`;
        strikeCount++;
        out();
        strikeOut();
        setInterval(() => {
            strikes.innerText = `Strikes: ${strikeCount}`;
        }, "4000");
    } else if (even_true === false) {
        call_on_field.innerText = "ball";
        balls.innerText = `Balls: ${ballCount + 1}`;
        ballCount++;
        walk();
        setInterval(() => {
            balls.innerText = `Balls: ${ballCount}`;
        }, "4000");
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
