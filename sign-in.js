let signBtn = document.querySelector('#sign-btn');
signBtn.addEventListener('click', () => {
    let login = document.querySelector('#login').value;
    let password = document.querySelector('#password').value;
    let fail = false;

    login == '' || login == ' ' ? fail = 'Введите логин!' :
        password == '' || password == ' ' ? fail = 'Введите пароль!' :
        login == 'andrey' && password == 'andrey' ? window.location.href = 'main.html' : fail;

    if (fail) alert(fail);
});