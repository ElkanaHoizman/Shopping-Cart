const express = require('express');
const router = express.Router();

//import model

const User = require('../models/user.model')

//get all
router.get('/', (req, res, next) => {
    User.find({})
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

    User.find({
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
    const newUser = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        userid: req.body.userid,
        password: req.body.password,
        city: req.body.city,
        street: req.body.street,
        role: req.body.role
    }
    new User(newUser).save().then((data) => {
        res.json({
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            userid: data.userid,
            password: data.password,
            city: data.city,
            street: data.street,
            role: data.role
        });
    })
});
//PUT
router.put('/:id', (req, res) => {
    User.findOne({
            _id: req.params.id
        })
        .then(user => {
            user.name = req.body.name;
            user.lastname = req.body.lastname;
            user.email = req.body.email;
            user.userid = req.body.userid;
            user.password = req.body.password;
            user.city = req.body.city;
            user.street = req.body.street;
            // user.role = req.body.role;
            user.save().then(user => {
                res.json({
                    name: user.name,
                    lastname: user.lastname,
                    email: user.email,
                    userid: user.userid,
                    password: user.password,
                    city: user.city,
                    street: user.street,
                    role: user.role
                });
            })
        })
})

//delete 
router.delete('/:id', (req, res) => {
    User.findByIdAndRemove({
            _id: req.params.id
        })
        .then(() => {
            console.log('delete')
            res.send('delete')
        })
})
module.exports = router;