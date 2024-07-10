document.getElementById('player-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const player1Name = document.getElementById('player1-name').value;
    const player1Icon = document.getElementById('player1-icon').files[0];
    const player1Color = document.getElementById('player1-color').value;

    const player2Name = document.getElementById('player2-name').value;
    const player2Icon = document.getElementById('player2-icon').files[0];
    const player2Color = document.getElementById('player2-color').value;

    const reader1 = new FileReader();
    const reader2 = new FileReader();

    reader1.onload = function(e) {
        const player1IconData = e.target.result;
        reader2.onload = function(e) {
            const player2IconData = e.target.result;
            localStorage.setItem('player1', JSON.stringify({ name: player1Name, icon: player1IconData, color: player1Color }));
            localStorage.setItem('player2', JSON.stringify({ name: player2Name, icon: player2IconData, color: player2Color }));
            window.location.href = 'GameBoard.html'; // Redirect to the game board page
        };
        reader2.readAsDataURL(player2Icon);
    };
    reader1.readAsDataURL(player1Icon);
});
