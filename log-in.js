// let btn = document.querySelector('#sign-btn');
// btn.addEventListener('click', () => {
//     console.log('click');
// });
let user = {
    username: '',
    email: '',
    login: '',
    password: ''
};

let logBtn = document.querySelector('#reg-btn');
logBtn.addEventListener('click', () => {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let login = document.querySelector('#login').value;
    let password = document.querySelector('#password').value;
    // console.log(`Name: ${name}\nMail: ${email}\nLogin: ${login}\nPassword: ${password}`);
    let pattern = /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
    let fail = false;

    name == '' || name == ' ' ? fail = 'Введите имя!' :
        email == '' || email == ' ' ? fail = 'Введите E-mail!' :
        pattern.test(email) == false ? fail = 'Вы неправильно указали E-mail!' :
        login == '' || login == ' ' ? fail = 'Введите логин!' :
        password == '' || password == ' ' ? fail = 'Введите пароль!' : fail;
    if (fail)
        alert(fail);
    else {
        user.username = name;
        user.email = email;
        user.login = login;
        user.password = password;
        module.exports = user;
        // export { user };
        // window.location.href = 'index.html';
        // console.log(`Name: ${user.username}\nMail: ${user.email}\nLogin: ${user.login}\nPassword: ${user.password}`);
    }
});