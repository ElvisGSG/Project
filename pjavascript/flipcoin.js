
result = ''
score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0
};

function playGame(guess){

  let coin = Math.random();

  if (coin <= 0.5 || coin > 1){
      result = 'Heads';
  } else if (coin > 0.5 || coin <= 1){
      result = 'Tails';
  }
  
  if (guess !== 'Heads' && guess !== 'Tails') {
    alert('Invalid input! Please enter "Heads" or "Tails".');
    return;
  }

  guess === result ? score.wins++ : guess !== result ? score.losses++ : '';


  localStorage.setItem('score', JSON.stringify(score));

  resultB = document.querySelector('.js-result')
  movesB = document.querySelector('.js-moves')
  scoreB = document.querySelector('.js-score')

  resultB.innerHTML = `You: ${guess}, computer: ${result}`;
  scoreB.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}`;
  movesB.innerHTML = `Player
  <img src="images/${guess}.png" alt="" class="move-icon1">
          |  |  |  |  |  |  |  |  |  |
  <img src="images/${result}.png" alt="" class="move-icon2">
  Computer`;
}

function resetGame() {
  document.querySelector('.js-score').innerHTML = `wins: ${score.wins}| |losses: ${score.losses}`
}

