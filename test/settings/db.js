const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'кщще',
    database: 'forum'
});

connection.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Подключение установлено')
    }
});

module.exports = connection;