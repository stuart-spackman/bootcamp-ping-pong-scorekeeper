const p1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1display')
};

const p2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2display')
};


// const player1button = document.querySelector('#p1button');
// const player2button = document.querySelector('#p2button');
// const p1display = document.querySelector('#p1display');
// const p2display = document.querySelector('#p2display');
const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#winningScoreSelect');

// let p1score = 0;
// let p2score = 0;
let winningScore = parseInt(winningScoreSelect.value);
let gameIsOver = false;

function updateScores(player, opponent) {
    if (!gameIsOver) {
        player.score += 1;
        if (player.score === winningScore) {
            gameIsOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
    // if (!gameIsOver) {
    //     p1score += 1;
    //     if (p1score === winningScore) {
    //         gameIsOver = true;
    //         p1display.classList.add('has-text-success');
    //         p2display.classList.add('has-text-danger');
    //         player1button.disabled = true;
    //         player2button.disabled = true;
    //     }
    //     p1display.textContent = p1score;
    // }
});
p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
    // if (!gameIsOver) {
    //     p2score += 1;
    //     if (p2score === winningScore) {
    //         gameIsOver = true;
    //         p2display.classList.add('has-text-success');
    //         p1display.classList.add('has-text-danger');
    //         player1button.disabled = true;
    //         player2button.disabled = true;
    //     }
    //     p2display.textContent = p2score;
    // }
});
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});
resetButton.addEventListener('click', reset);

function reset() {
    gameIsOver = false;
    for (const p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    // p1.score = 0;
    // p2.score = 0;
    // p1.display.textContent = 0;
    // p2.display.textContent = 0;
    // p1.display.classList.remove('has-text-success', 'has-text-danger');
    // p2.display.classList.remove('has-text-success', 'has-text-danger');
    // p1.button.disabled = false;
    // p2.button.disabled = false;
}