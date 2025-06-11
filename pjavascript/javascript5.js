let score =   JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    draw: 0
  }


udateScoreElement();
 /*
if (score === null) {
  score = {
    win: 0,
    lose: 0,
    draw: 0
  }
}*/

/*ComputerMove*/
      function pickComputerMove() {
        const random = Math.random();

          let computerMove = '';

          if (random >= 0 && random < 1/3)
          {
            computerMove = 'rock';
          } else if (random >= 1/3 && random < 2/3)
          {
            computerMove = 'paper';
          } else if (random >= 2/3 && random < 1)
          {
            computerMove = 'scissors';
          } 
            return computerMove;  
        }

/*rock, paper, scissors*/
      function playgame(PlayerMove) {
        computerMove = pickComputerMove();
      
        let result = '';
        
        if (PlayerMove === 'scissors') {
          if (computerMove === 'scissors')
          {
            result = 'draw';
          } else if (computerMove === 'rock')
          {
            result = 'you lose';
          } else if (computerMove === 'paper')
          {
            result = 'you win';
          }

      } else if (PlayerMove === 'rock') {
          if (computerMove === 'scissors')
          {
            result = 'you win';
          } else if (computerMove === 'rock')
          {
            result = 'draw';
          } else if (computerMove === 'paper')
          {
            result = 'you lose';
          } 
            
      } else if (PlayerMove === 'paper') {
          if (computerMove === 'scissors')
          {
            result = 'you lose';
          } else if (computerMove === 'rock')
          {
            result = 'you win';
          } else if (computerMove === 'paper')
          {
            result = 'draw';
          } 
      }

        if (result === 'you win'){
          score.win += 1
        }else if (result === 'you lose'){
          score.lose += 1
        }else if (result === 'draw'){
          score.draw += 1
        }
          localStorage.setItem('score', JSON.stringify(score));
        
        
          udateScoreElement();

          document.querySelector('.js-result').innerHTML = result;
          document.querySelector('.js-moves').innerHTML = `You
      <img src="images/${PlayerMove}-emoji.png"class="move-icon">
      <img src="images/${computerMove}-emoji.png"class="move-icon">
      computer `;
        }

        function udateScoreElement() {
          document.querySelector('.js-score').innerHTML = `wins: ${score.win}, losses: ${score.lose}, draws: ${score.draw}`;
        }




// CSS code moved to a separate file