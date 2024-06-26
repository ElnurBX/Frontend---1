const mongoose = require("mongoose")


const Product = mongoose.model("Product", new mongoose.Schema({
    image: {
        type: String,
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    catagory: {
        type: String
    },
}))

module.exports = { Product }