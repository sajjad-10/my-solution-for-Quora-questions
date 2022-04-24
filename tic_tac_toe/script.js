const statusDisplay = document.querySelector('.game--status');

let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

function handleCellPlayed(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}

function empty(str){
  if(str==="") return true;
  return false;
}

function handlePlayerChange() {
  var winner = "";
  if(!empty(gameState[0]) && gameState[0]==gameState[1] && gameState[1]==gameState[2]){
    winner=gameState[0];
  }else if(!empty(gameState[3]) && gameState[3]==gameState[4]&&gameState[4]==gameState[5]){
    winner=gameState[3];
  }
  else if(!empty(gameState[6]) && gameState[6]==gameState[7]&&gameState[7]==gameState[8]){
    winner=gameState[6];
  }
  else if(!empty(gameState[0]) && gameState[0]==gameState[3]&&gameState[3]==gameState[6]){
    winner=gameState[0];
  }
  else if(!empty(gameState[1]) && gameState[1]==gameState[4]&&gameState[4]==gameState[7]){
    winner=gameState[1];
  }
  else if(!empty(gameState[2]) && gameState[2]==gameState[5]&&gameState[5]==gameState[8]){
    winner=gameState[2];
  }
  else if(!empty(gameState[0]) && gameState[0]==gameState[4]&&gameState[4]==gameState[8]){
    winner=gameState[0];
  }
  else if(!empty(gameState[2]) && gameState[2]==gameState[4]&&gameState[4]==gameState[6]){
    winner=gameState[2];
  }
  if(!empty(winner)){
    gameActive=false;
    statusDisplay.innerHTML = "Player "+winner+" has won";
    return;
  }
  var fulltable=gameState.includes('');
  if(!fulltable){
    gameActive=false;
    statusDisplay.innerHTML = "Game ended in a draw";
    return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusDisplay.innerHTML = currentPlayerTurn();
}

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute('data-cell-index')
  );

  if (gameState[clickedCellIndex] !== '' || gameActive==false) {
    return;
  }
  
  handleCellPlayed(clickedCell, clickedCellIndex);
  handlePlayerChange();
}

function handleRestartGame() {
  currentPlayer = 'X';
  gameState = ['', '', '', '', '', '', '', '', ''];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll('.cell').forEach(cell => (cell.innerHTML = ''));
  gameActive=true;
}

document
  .querySelectorAll('.cell')
  .forEach(cell => cell.addEventListener('click', handleCellClick));
document
  .querySelector('.game--restart')
  .addEventListener('click', handleRestartGame);