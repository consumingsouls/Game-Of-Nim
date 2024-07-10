let currentPlayer = 1;

function removeItem(pileElement) {
    pileElement.parentNode.removeChild(pileElement);
    checkWinCondition();
    switchPlayer();
}

function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    document.querySelector('.game-players .game-player:nth-child(' + currentPlayer + ')').classList.add('active');
    document.querySelector('.game-players .game-player:nth-child(' + (3 - currentPlayer) + ')').classList.remove('active');
}

function checkWinCondition() {
    const remainingPiles = document.querySelectorAll('.pile');
    if (remainingPiles.length === 0) {
        alert('Player ' + currentPlayer + ' wins!');
    }
}
