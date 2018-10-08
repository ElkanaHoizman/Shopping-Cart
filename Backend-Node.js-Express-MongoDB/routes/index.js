var express = require('express');
var Account = require('../models/account');
var router = express.Router();
var nodemailer = require('nodemailer');


router.get('/', (req, res, next) => {
    Account.find({})
        .then(data => {
            res.json({
                data: data
            })
        })

});

router.post('/login', (req, res, next) => {
    if (!req.body) return res.sendStatus(400)
    const Login = {
        username: req.body.username,
        role: req.body.role,
        password: req.body.password
    }
    new Account(Login).save().then((data) => {
        res.json({
            password: data.password,
            username: data.username,
            role: data.role
        });
    })
});
//delete 
router.delete('/:id', (req, res) => {
        Account.findByIdAndRemove({
                _id: req.params.id
            })
            .then(() => {
                console.log('delete')
                res.send('delete')
            })
    })
    //send email
var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "elkana34576@gmail.com",
        pass: "0587134576"
    }
}, {
    from: 'example@gmail.com',
});

router.post('/gmail', function(req, res, next) {
    var mailOptions = {
        to: req.body.emailAddress,
        subject: req.body.clientName,
        text: req.body.clientMessage
    };

    console.log('THIS IS THE API HIT:' + 'Email to: ' + mailOptions.to + 'Subject: ' + mailOptions.subject + 'Message: ' + mailOptions.text);

    smtpTransport.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log(error);
            res.json({
                error: "API Error"
            });
        } else {
            console.log("Message sent: " + response.message);
            res.json({
                response: "sent"
            });
        }
    });
});
module.exports = router;