var express = require('express');
var router = express.Router();

require('../models/connection');
const Trip = require('../models/tripSchema');

router.post('/', function (req, res) {
    const { departure, arrival, date } = req.body
    let dayPlusOne = new Date(date)
    dayPlusOne = new Date(dayPlusOne.setDate(dayPlusOne.getDate() + 1))
    Trip.find({
        departure, arrival, date: {
            $gte: new Date(date),
            $lt: dayPlusOne
        }
    }).then(data =>
        res.json(data)

    )
})

module.exports = router