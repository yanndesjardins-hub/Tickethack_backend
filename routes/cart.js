var express = require('express');
var router = express.Router();

require('../models/connection');
const Cart = require('../models/cartSchema');
const Trip = require('../models/tripSchema');

router.post('/mycart', function (req, res) {
    new Cart({
    }).save().then(data => {
        res.json({ id: data.id, trips: data.trips })
    })
})

router.get('/:cartId', function (req, res) {
    const { cartId } = req.params
    Cart.findById(cartId)
        .populate("trips")
        .then(data =>
            res.json(data)
        )
})
router.post('/content', function (req, res) {
    const { cartId } = req.body;
    const { id } = req.body;
    Trip.findById(id)
        .then(data => {
            Cart.findByIdAndUpdate(cartId, { $push: { trips: [data] } }).then(data => res.json(data)
            )
        })

})

router.post('/:cartId', function (req, res) {
    const { id } = req.body;
    const { cartId } = req.params;
    Trip.findById(id)
        .then(() => {
            Cart.findByIdAndUpdate(cartId, { $pull: { trips: id } }).then(data => res.json(data)
            )

        })
})



module.exports = router;
//69de0bfe475b44cb89d6ecab