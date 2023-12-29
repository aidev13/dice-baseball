let diceball = [1, 2, 3, 4, 5, 6];
let call_on_field = "";
const balls = document.getElementById("balls");

let dice_result = Math.floor(Math.random() * diceball.length + 1);
let ballCount = 0;

const call = () => {
    const even_true = dice_result % 2 === 0;
    if (even_true === true) {
        call_on_field = "strike";
    } else if (even_true === false) {
        call_on_field = "ball";
        ballCount++;
    }

    return call_on_field;
};
console.log(dice_result);
console.log(call());
console.log(ballCount);
