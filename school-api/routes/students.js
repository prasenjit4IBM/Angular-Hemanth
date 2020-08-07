

var express = require('express');
var router = express.Router();
const mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'schooldb'
});

connection.connect();

router
    .get('/', function (req, res, next) {
        const sql = "select * from STUDENTS";
        connection.query(sql, function (error, results, fields) {
            if (error) throw error;
            res.json(results)
        });
    })
    .get('/:rno', function (req, res, next) {
        const rno = req.params.rno
        const sql = `select * from STUDENTS where rno=${rno}`;
        connection.query(sql, function (error, results, fields) {
            if (error) throw error;
            res.json(results)
        });
    })
    .put('/:rno', function (req, res, next) {
        const rno = req.params.rno
        const mark = req.body.mark
        const sql = `update STUDENTS set mark=${mark} where rno=${rno}`;
        connection.query(sql, function (error, results, fields) {
            if (error) throw error;
            res.json(results)
        });
    })

module.exports = router;
