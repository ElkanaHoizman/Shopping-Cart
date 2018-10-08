const express = require('express');
const router = express.Router();

//import model

const Cartitem = require('../models/cartitem.model')
const Product = require('../models/product.model')

//get all
router.get('/', (req, res, next) => {
    Cartitem.find({}).populate('productid ').populate('cartid').exec((err, data) => {
        res.json({
            data: data
        })
    });

});

//get all sinle
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    id = req.params.id;

    Cartitem.find({
        _id: id
    }).populate('productid').populate('cartid').exec((err, data) => {
        res.json({
            data: data
        })
    });
});

//add
router.post('/', (req, res, next) => {
    if (!req.body) return res.sendStatus(400)
        //get Product
    id = req.body.productid
    Product.find({
        _id: id
    }).then((data) => {
        let price = data[0].price

        const newCartitem = {
            productid: req.body.productid,
            amount: req.body.amount,
            generalprice: req.body.amount * price,
            cartid: req.body.cartid
        }
        new Cartitem(newCartitem).save().then((data) => {
            res.json({
                productid: data.productid,
                amount: data.amount,
                generalprice: data.generalprice,
                cartid: data.cartid
            });
        })
    });
});
//PUT
router.put('/:id', (req, res) => {
        id = req.body.productid
        Product.find({
            _id: id
        }).then((data) => {
            let price = data[0].price

            Cartitem.findOne({
                    _id: req.params.id
                })
                .then(cartitem => {
                    cartitem.productid = req.body.productid;
                    cartitem.amount = req.body.amount;
                    cartitem.generalprice = req.body.amount * price;
                    cartitem.cartid = req.body.cartid;
                    cartitem.save().then(cartitem => {
                        res.json({
                            productid: cartitem.productid,
                            amount: cartitem.amount,
                            generalprice: cartitem.generalprice,
                            cartid: cartitem.cartid
                        });
                    })
                })
        })
    })
    //delete 
router.delete('/:id', (req, res) => {
    Cartitem.findByIdAndRemove({
            _id: req.params.id
        })
        .then(() => {
            console.log('delete')
                // res.send('delete')
        })
})
module.exports = router;