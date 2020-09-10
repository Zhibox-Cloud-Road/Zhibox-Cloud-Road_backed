const express = require('express')
const mysql = require('mysql')
const app = express()
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'abc321',
    database : 'mydata'
  });
  

  module.exports = connection