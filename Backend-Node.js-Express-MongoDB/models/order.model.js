const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Schema
const OrderSchema = new Schema({
    userid: {
        type: String,
        required: true
    },

    cartid: {
        type: String,
        required: true
    },
    finalprice: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    shippingdate: {
        type: Date,
        required: true
            // default: Date.now
    },
    orderdate: {
        type: Date,
        default: Date.now
    },
    digits: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Order', OrderSchema);