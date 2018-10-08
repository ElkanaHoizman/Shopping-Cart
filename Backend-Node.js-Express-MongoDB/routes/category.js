const express = require('express');
const router = express.Router();

//import model

const Category = require('../models/category.model')

//get all
router.get('/', (req, res, next) => {
    Category.find({})
        .then(data => {
            res.json({
                data: data
            })
        })

});

//get all sinle
router.get('/:name', function(req, res, next) {
    console.log(req.params.name)
    name = req.params.name;

    Category.find({
            name: name
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
    const newCategory = {
        name: req.body.name,
    }
    new Category(newCategory).save().then((data) => {
        res.json({
            name: data.name,
        });
    })
});
//PUT
router.put('/:id', (req, res) => {
    Category.findOne({
            _id: req.params.id
        })
        .then(category => {
            category.name = req.body.name;
            category.save().then(category => {
                res.json({
                    name: category.name,
                });
            })
        })
})

//delete 
router.delete('/:id', (req, res) => {
    Category.findByIdAndRemove({
            _id: req.params.id
        })
        .then(() => {
            console.log('delete')
            res.send('delete')
        })
})
module.exports = router;