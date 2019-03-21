const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const ItemSchema = new Schema ({
    name: {
        type: String,
        default: 'What am I?'
    },
    category: {
        type: String,
        default: "What TYPE of thing am I?"
    },
    sellsFor: {
        type: Number,
        default: 0
    },
    location: {
        type: String,
        default: 'Village'
    },
    itemImg: {
        type: String,
        default: 'Item thingy'
    }
})

module.exports = mongoose.model('Item', ItemSchema)