let createBtn = document.querySelector('.create-theme');
let answerBtn = document.querySelector('.answer');
let themeBlock = document.querySelector('.theme');
let readyTheme = document.querySelector('.ready-theme');
let readyThemeAnswer = document.querySelector('#ready-theme-answer');

createBtn.addEventListener('click', () => {
    createBtn.style.display = 'none';
    themeBlock.style.display = 'block';
});

answerBtn.addEventListener('click', () => {
    let themeHeader = document.querySelector('#theme-header').value;
    let themeTxt = document.querySelector('#theme-txt').value;
    let fail = false;
    themeHeader == '' || themeHeader == ' ' ? fail = 'Введите заголовок темы!' :
        themeTxt == '' || themeTxt == ' ' ? fail = 'Введите текст темы!' : fail;
    if (fail)
        alert(fail)
    else {
        themeBlock.style.display = 'none';
        readyTheme.style.display = 'block';
        document.querySelector('.ready-theme-header').textContent = themeHeader;
        document.querySelector('.ready-theme-txt').textContent = themeTxt;
        // let themeHTML = `
        // <p class="ready-theme-header">${themeHeader}</p>
        // <p class="ready-theme-txt">${themeTxt}</p>
        // <div class="answer" id="ready-theme-answer">Ответить</div>`;
        // readyTheme.insertAdjacentHTML('afterbegin', themeHTML);
    }
});

readyThemeAnswer.addEventListener('click', () => {
    document.querySelector('.ready-theme-textarea').style.display = 'block';
    document.querySelector('#ready-theme-answer-2').style.display = 'block';
    readyThemeAnswer.style.display = 'none';
});

document.querySelector('#ready-theme-answer-2').addEventListener('click', () => {
    let answerTxt = document.querySelector('.ready-theme-textarea').value;
    document.querySelector('.ready-theme-textarea').style.display = 'none';
    document.querySelector('.user-answer').style.display = 'block';
    document.querySelector('.user-answer-txt').textContent = answerTxt;
    document.querySelector('#ready-theme-answer-2').style.display = 'none';
});
//ready-theme переделать под insertAdjacentHTML