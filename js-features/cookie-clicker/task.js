const counterElement = document.getElementById('clicker__counter');
const cookieElement = document.getElementById('cookie');

let isSmall = false;

cookieElement.onclick = function () {
    counterElement.textContent = Number(counterElement.textContent) + 1;

    if (isSmall) {
        cookieElement.width += 20;
    } else {
        cookieElement.width -= 20;
    }

    isSmall = !isSmall;
};