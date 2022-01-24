'use strict'

const response = require('./../response');
const db = require('./../settings/db')
exports.users = (req, res) => {
    // const users = [{
    //         'id': 1,
    //         'name': 'Andrey'
    //     },
    //     {
    //         'id': 2,
    //         'name': 'Alex'
    //     }
    // ]

    // response.status(users, res);
    db.query('SELECT * FROM `users`', (error, rows, fields) => { //запрос на получение данных
        if (error) {
            console.log(error)
        } else {
            response.status(rows, res);
        }

    });
};

exports.add = (req, res) => {
    const sql = "INSERT INTO `users`(`login`, `name`, `password`, `email`) VALUES ('" + req.query.login +
        "', '" + req.query.name +
        "', '" + req.query.password +
        "', '" + req.query.email + "')"; // для того, чтобы через postman чекать
    db.query(sql, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            response.status(results, res)
        }
    });
    console.log(req);
};