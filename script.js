const firstBase = document.getElementById("first_base");
firstBase.style = "background-color: yellow;"


const pitch = () => {
    let diceball = [1, 2, 3, 4, 5, 6];
    let dice_result = Math.floor(Math.random() * diceball.length + 1);

    console.log(dice_result);
    if (dice_result === 2) {
        console.log("strike");
    }
    // console.log("ball")
};

console.log(pitch());

