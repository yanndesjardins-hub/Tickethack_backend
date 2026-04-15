var express = require('express');
var router = express.Router();

require('../models/connection');
const Trip = require('../models/tripSchema');

router.post('/', function (req, res) {
    const { departure, arrival, date, id} = req.body
    let dayPlusOne = new Date(date)
    dayPlusOne = new Date(dayPlusOne.setDate(dayPlusOne.getDate() + 1))
    if ((departure === undefined) || (arrival === undefined) || (date === undefined)) { res.json("error"); return }
    Trip.find({
        departure: { $regex: new RegExp("^" + departure.toLowerCase(), "i") },
        arrival: { $regex: new RegExp("^" + arrival.toLowerCase(), "i") },
        date: {
            $gte: new Date(date),
            $lt: dayPlusOne
        }
    }).then(data =>
        res.json(data)
    )
})

module.exports = router