
// const isEven = (number) => !(number % 2);
// return number % 2 === 0 ? true : false; first variant
// if (number % 2 === 0) { second variant
//   return true;
// } else {
//     return false;
// }

const getNumber = () => Math.round(Math.random() * 100);


const playRound = () => {
  let firtsNum = getNumber();
  let secondNum = getNumber();
  const correctAnswer = firtsNum + secondNum;
  const userAnswer = Number(prompt(`What is the sum ${firtsNum} and ${secondNum} Please, write down the correct answer`));


  let usAnsw = Number(userAnswer);

  console.log((firtsNum + secondNum), correctAnswer);
  console.log(usAnsw);

  if (usAnsw === correctAnswer) {
    alert('You are right!');
    return true;
  } else {
    alert('The answer is wrong!');
    alert('You lose!');
    return false;
  }

};

const playGame = () => {

  for (let i = 0; i < 3; i++) {
    const isCorrect = playRound();
    if (!isCorrect) {
      return;
    }
  }
  alert('You win!');
}


//const button = document.querySelector('game');
//button.addEventListener('game', playGame);


