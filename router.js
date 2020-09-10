/*
  路由模块
*/
const express = require('express');
const router = express.Router();
const service = require('./service.js');

//查询实时数据
router.get('/box-data',service.getBoxData);

//查询日表
router.get('/daily',service.getDailyData);

//查询周表
router.get('/weekly',service.getWeeklyData);

//查询月表
router.get('/monthly',service.getMonthlyData);

//查询年表
router.get('/yearly',service.getYearlyData);

module.exports = router;