const express = require('express');
const router = express.Router();

//import model

const Order = require('../models/order.model')

//get all
router.get('/', (req, res, next) => {
    Order.find({})
        .then(data => {
            res.json({
                data: data
            })
        })

});

//get all sinle
router.get('/:id', function(req, res, next) {
    console.log(req.params.id)
    id = req.params.id;

    Order.find({
            _id: id
        })
        .then(data => {
            res.json({
                data: data
            })
        })
});

//add
router.post('/', (req, res, next) => {
    if (!req.body) return res.sendStatus(400)
    const newOrder = {
        userid: req.body.userid,
        cartid: req.body.cartid,
        finalprice: req.body.finalprice,
        city: req.body.city,
        street: req.body.street,
        shippingdate: req.body.shippingdate,
        orderdate: req.body.orderdate,
        digits: req.body.digits
    }
    new Order(newOrder).save().then((data) => {
        res.json({
            userid: data.userid,
            cartid: data.cartid,
            finalprice: data.finalprice,
            city: data.city,
            street: data.street,
            shippingdate: data.shippingdate,
            orderdate: data.orderdate,
            digits: data.digits
        });
    })
});
//PUT
router.put('/:id', (req, res) => {
    Order.findOne({
            _id: req.params.id
        })
        .then(order => {
            order.userid = req.body.userid;
            order.cartid = req.body.cartid;
            order.finalprice = req.body.finalprice;
            order.city = req.body.city;
            order.street = req.body.street;
            order.shippingdate = req.body.shippingdate;
            order.orderdate = req.body.orderdate;
            order.digits = req.body.digits;
            order.save().then(order => {
                res.json({
                    userid: order.userid,
                    cartid: order.cartid,
                    finalprice: order.finalprice,
                    city: order.city,
                    street: order.street,
                    shippingdate: order.shippingdate,
                    orderdate: order.orderdate,
                    digits: order.digits
                });
            })
        })
})

//delete 
router.delete('/:id', (req, res) => {
    Order.findByIdAndRemove({
            _id: req.params.id
        })
        .then(() => {
            console.log('delete')
            res.send('delete')
        })
})
module.exports = router;