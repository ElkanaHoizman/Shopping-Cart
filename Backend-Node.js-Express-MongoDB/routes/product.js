const express = require('express');
const router = express.Router();

//import model

const Product = require('../models/product.model')

//get all
router.get('/', (req, res, next) => {
    Product.find({}).populate('categoryid').exec()
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

    Product.find({
        _id: id
    }).populate('categoryid').exec((err, data) => {
        res.json({
            data: data
        })
    });
});

//add
router.post('/', (req, res, next) => {
    if (!req.body) return res.sendStatus(400)
    const newProduct = {
        productname: req.body.productname,
        categoryid: req.body.categoryid,
        price: req.body.price,
        imageurl: req.body.imageurl
    }
    new Product(newProduct).save().then((data) => {
        res.json({
            productname: data.productname,
            categoryid: data.categoryid,
            price: data.price,
            imageurl: data.imageurl
        });
    })
});
//PUT
router.put('/:id', (req, res) => {
    Product.findOne({
            _id: req.params.id
        })
        .then(product => {
            product.productname = req.body.productname;
            product.categoryid = req.body.categoryid;
            product.price = req.body.price;
            product.imageurl = req.body.imageurl;
            product.save().then(product => {
                res.json({
                    productname: product.productname,
                    categoryid: product.categoryid,
                    price: product.price,
                    imageurl: product.imageurl,
                });
            })
        })
})

//delete 
router.delete('/:id', (req, res) => {
    Product.findByIdAndRemove({
            _id: req.params.id
        })
        .then(() => {
            console.log('llpllpl')
            res.send('elkana')
        })
})
module.exports = router;