const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Schema
const ProductSchema = new Schema({
    productname: {
        type: String,
        required: true
    },

    categoryid: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    price: {
        type: String,
        required: true
    },

    imageurl: {

        // data: Buffer,
        // contentType: String
        type: String
            // required: true
    }

})


module.exports = mongoose.model('Product', ProductSchema);