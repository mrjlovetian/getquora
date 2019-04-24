var express = require('express');
var app = express();
var router = express.Router();
var mysql = require('mysql');

app.use(router);
router.get('/allcaipaio', function(req, res){
    var con = mysql.createConnection({
        'host':'localhost',
        'user':'root',
        'password':'897011805',
        'database':'yhj'
    })

    con.connect()
    con.query('SELECT title FROM quora limit 40000', function(err, results){
        if (err) throw err;
        var datas = [];
        for (var i=0; i<results.length;i++) {
            var va = results[i];
            // var value = {"period": va.period, 'one':va.one, 'two':va.two, 'three':va.three, 'four':va.four, 'five':va.five, 'six':va.six, 'seven':va.seven}
            datas.push(va.title);
        }
        var jsonVal = {}
        jsonVal['data'] = datas;
        jsonVal['error'] = '0';
        jsonVal['message'] = 'success';
        console.log('result', jsonVal)
        res.send(JSON.stringify(jsonVal))
    })
})

app.listen(3000, function(err){
    if (err) throw err;
    console.log('server starting!!')
})
