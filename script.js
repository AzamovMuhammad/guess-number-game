let secretNumber = Math.floor(Math.random() * 100 + 1);
console.log(secretNumber);
let lives = 5;
let max = 100;
let min = 1;

const game = () => {
  let title = document.getElementById("result");
  let userGuess = document.getElementById("number").value;

  if (userGuess == secretNumber) {
    title.innerText = "Siz yutdingiz!!";
  } else {
    lives--;
    if(userGuess < secretNumber){
        min = userGuess
        document.getElementById('min').innerText = min
    }else{
        max = userGuess
        document.getElementById('max').innerText = max
    }
    if( lives === 0 ){
        title.innerText = `Game Over!!! ${secretNumber} edi.`;
    }else{
        title.innerText = `sizda ${lives} ta jon qoldi.`;
    }
  }
};
