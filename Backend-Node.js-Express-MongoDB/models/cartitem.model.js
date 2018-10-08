const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Schema
const CartitemSchema = new Schema({
    productid: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    amount: {
        type: Number,
        required: true
    },
    generalprice: {
        type: Number,
        required: true
    },
    cartid: {
        type: Schema.Types.ObjectId,
        ref: 'Shoppingcart'

    }

})


module.exports = mongoose.model('Cartitem', CartitemSchema);