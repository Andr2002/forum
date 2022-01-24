// require('dotenv').config(); //  импорт для того, чтобы считывать data из файла .env
const express = require('express');
// const sequelize = require('./db')
const mysql = require('mysql');
const PORT = process.env.PORT || 3000;
// const user = require('user')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "forum",
    password: "кщще"
});

connection.connect((error) => {
    if (error) console.log(error)
    else console.log('Соединение с БД установлено!')
})


const app = express();

const urlencodedParser = express.urlencoded({ extended: false });
app.use(express.static(__dirname)); //  для того, чтобы отображались стили и т.д.

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/log-in.html');
});

app.post('/', urlencodedParser, (request, response) => {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.name} - ${request.body.email} - ${request.body.login} - ${request.body.password}`);
    console.log(`${request.body.name} - ${request.body.email} - ${request.body.login} - ${request.body.password}`);
});

//insert
app.post('/insert', (request, response) => {
    let sql = "INSERT INTO `users`(`login`, `name`, `password`, `email`) VALUES('" +
        request.body.login +
        "','" + request.body.name +
        "','" + request.body.password +
        "','" + request.body.email +
        "',)";
    connection.query(sql);
});

app.listen(PORT, (error) => {
    if (error)
        console.log(error);
    else
        console.log('Подключение установлено!')
})

// app.use(express.json());

// const start = async() => {
//     try {
//         //создание соединения
//         const connection = mysql.createConnection({
//             host: "localhost",
//             user: "root",
//             database: "forum",
//             password: "кщще"
//         });
//         // await sequelize.authenticate();
//         // await sequelize.sync();

//         //запуск сервера на порт 3000
//         app.listen(PORT, () => {
//             console.log(`Server started on port ${PORT}`);
//         });
//     } catch (e) {
//         console.log(e);
//     }
// }

// start();

// connection.connect(function(err) {
//     if (err) {
//         return console.error("Ошибка: " + err.message);
//     } else {
//         console.log("Подключение к серверу MySQL успешно установлено");
//     }
// });
//npm run dev - command