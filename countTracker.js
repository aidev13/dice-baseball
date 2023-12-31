let counter = 0;
let x = 1;

function count() {
   if(x === 1) {
      counter++
   }
   reset()
}




function reset() {
   if(counter === 4) {
      counter = 0;
      console.log(`Take your base`)
   }
}


console.log(ballCounter)
