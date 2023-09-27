const route = require('express').Router();
const moonData = require('../controller/moonData');

route.post('/insert/data',moonData.insertData);

route.get('/get/data/byDate',moonData.getDataByDate);

route.get('/get/data/byMonth',moonData.getDataByMonth);

route.get('/get/all/data',moonData.getAllData);


module.exports={
    moonDataRoutes :route
}

