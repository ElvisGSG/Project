
function searchGames(event) {
  if (event.key === 'Enter') {
    gamesG();
  }
}

function gamesG(){
  seachGame = document.querySelector('.srch1').value;
  seachGame = seachGame.toLowerCase();
  if (seachGame === '') {
    document.querySelector('.srch1').placeholder = 'Please enter a game name';
    return;
  }
  else if (seachGame === 'coin game'){
    window.location.href = 'FlipCoin.html';
    document.querySelector('.srch-link').href = 'FlipCoin.html';
  }
  else if (seachGame === 'rock paper scissors') {
    window.location.href = '10-rock-paper-sicssors.html';
    document.querySelector('.srch-link').href = '10-rock-paper-sicssors.html';
  }
  else if (seachGame !== 'coin game' && seachGame !== 'rock paper scissors') {
    document.querySelector('.srch1').placeholder = 'Game not found';
    document.querySelector('.srch1').value = '';
  }
}
