var express = require('express');
var router = express.Router();

require('../models/connection');
const Trip = require('../models/tripSchema');

router.get('/', function (req, res) {
    Trip.find().then(data =>
        res.json(data));
});

router.post('/', function (req, res) {
    const { departure, arrival } = req.body
    Trip.find({ departure, arrival }).then(data =>
        res.json(data)
    )
})
router.post('/departure', function (req, res) {
    const { departure } = req.body
    Trip.find({ departure }).then(data =>
        res.json(data)
    )
})

router.post('/arrival', function (req, res) {
    const { arrival } = req.body
    Trip.find({ arrival }).then(data =>
        res.json(data)
    )
})

router.post('/date', function (req, res) {
    const { date } = req.body
    Trip.find({ date }).then(data =>
        res.json(data)
    )
})




module.exports = router;
