var express = require('express');
var router = express.Router();

require('../models/connection');
const Cart = require('../models/cartSchema');
const Trip = require('../models/tripSchema');

router.post('/', function (req, res) {
    new Cart({
    }).save().then(data => {
        res.json({ id: data.id, trips: data.trips })
    })
})

router.get('/:id', function (req, res) {
    const { id } = req.params
    Cart.findById(id)
        .populate("trips")
        .then(data =>
            res.json(data)

        )

})

module.exports = router;
//69de0bfe475b44cb89d6ecab