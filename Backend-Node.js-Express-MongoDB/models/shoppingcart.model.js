const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Schema
const ShoppingcartSchema = new Schema({
    userid: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('Shoppingcart', ShoppingcartSchema);