const downIcon  = document.querySelector('#question-active > div > div.icon-up > p > i');
const hiddenText = document.querySelector('#answer-text');


downIcon.addEventListener('click', () => {
    hiddenText.classList.remove('hidden');
    hiddenText.classList.add('.hiidentextStyle')
});


