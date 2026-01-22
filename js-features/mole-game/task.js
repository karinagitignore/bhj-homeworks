const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function resetGame() {
    deadCounter.textContent = 0;
    lostCounter.textContent = 0;
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            deadCounter.textContent = Number(deadCounter.textContent) + 1;
        } 
        else {
            lostCounter.textContent = Number(lostCounter.textContent) + 1;
        }

        if (Number(deadCounter.textContent) === 10) {
            alert('Вы победили!');
            resetGame();
        }

        if (Number(lostCounter.textContent) === 5) {
            alert('Игра окончена!');
            resetGame();
        }
    };
}