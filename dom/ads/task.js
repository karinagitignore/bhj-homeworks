const rotatorCases = document.querySelectorAll('.rotator__case');
let currentIndex = 0;

function showNext() {
    rotatorCases[currentIndex].classList.remove('rotator__case_active');

    currentIndex = (currentIndex + 1) % rotatorCases.length;

    const currentCase = rotatorCases[currentIndex];
    currentCase.classList.add('rotator__case_active');

    currentCase.parentElement.style.color = currentCase.dataset.color;

    const speed = parseInt(currentCase.dataset.speed, 10);

    setTimeout(showNext, speed);
}

rotatorCases.forEach(el => el.classList.remove('rotator__case_active'));
rotatorCases[0].classList.add('rotator__case_active');
rotatorCases[0].parentElement.style.color = rotatorCases[0].dataset.color;

setTimeout(showNext, parseInt(rotatorCases[0].dataset.speed, 10));