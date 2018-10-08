const express = require('express');
const router = express.Router();

//import model

const Shoppingcart = require('../models/shoppingcart.model')

//get all
router.get('/', (req, res, next) => {
    Shoppingcart.find({}).populate('userid').exec()
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

    Shoppingcart.find({
        _id: id
    }).populate('userid').exec((err, data) => {
        res.json({
            data: data
        })
    });
});

//add
router.post('/', (req, res, next) => {
    if (!req.body) return res.sendStatus(400)
    const newShoppingcart = {
        userid: req.body.userid,
        date: req.body.date,
    }
    new Shoppingcart(newShoppingcart).save().then((data) => {
        res.json({
            userid: data.userid,
            date: data.date,
        });
    })
});
//PUT
router.put('/:id', (req, res) => {
    Shoppingcart.findOne({
            _id: req.params.id
        })
        .then(shoppingcart => {
            shoppingcart.userid = req.body.userid;
            shoppingcart.date = req.body.date;
            shoppingcart.save().then(shoppingcart => {
                res.json({
                    userid: shoppingcart.userid,
                    date: shoppingcart.date,
                });
            })
        })
})

//delete 
router.delete('/:id', (req, res) => {
    Shoppingcart.findByIdAndRemove({
            _id: req.params.id
        })
        .then(() => {
            console.log('delete')
            res.send('delete')
        })
})
module.exports = router;