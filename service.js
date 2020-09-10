const data = require('./data.json');
const path = require('path');
const fs = require('fs');
const connection = require('./dao')
//连接数据库
connection.connect();

// 关闭数据库
//   connection.end();

//实时数据查询
exports.getBoxData = (req, res) => {
    let data = connection.query('select * from `case_data` order by `LOG_ID` desc limit 0,1;', function (error, results, fields) {
        if (error) {
            console.log(error)
        };
        results = JSON.stringify(results)
        results = JSON.parse(results);
        res.json(results)
    });
}


//日表查询
exports.getDailyData = (req, res) => {
    let data = connection.query('SELECT * FROM `day_data`', function (error, results, fields) {
        if (error) {
            console.log(error)
        };
        results = JSON.stringify(results)
        results = JSON.parse(results);
        res.json(results)
    });
}

//周表查询
exports.getWeeklyData = (req, res) => {
    let data = connection.query('SELECT * FROM `week_data`', function (error, results, fields) {
        if (error) {
            console.log(error)
        };
        results = JSON.stringify(results)
        results = JSON.parse(results);
        res.json(results)
    });
}

//月表查询
exports.getMonthlyData = (req, res) => {
    let data = connection.query('SELECT * FROM `month_data`', function (error, results, fields) {
        if (error) {
            console.log(error)
        };
        results = JSON.stringify(results)
        results = JSON.parse(results);
        res.json(results)
    });
}

//年表查询
exports.getYearlyData = (req, res) => {
    let data = connection.query('SELECT * FROM `year_data`', function (error, results, fields) {
        if (error) {
            console.log(error)
        };
        results = JSON.stringify(results)
        results = JSON.parse(results);
        res.json(results)
    });
}



