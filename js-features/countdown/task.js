const timerElement = document.getElementById('timer');

let seconds = Number(timerElement.textContent);

const intervalId = setInterval(function () {
    seconds -= 1;
    timerElement.textContent = seconds;

    if (seconds === 0) {
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!');
    }
}, 1000);