const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const VillagerSchema = new Schema ({
    name: {
        type: String,
        default: 'Villager Name'
    },
    species: {
        type: String,
        default: 'Animal'
    },
    gender: {
        type: String,
        default: 'M/F'
    },
    service: {
        type: String,
        default: 'Villager'
    },
    birthday: {
        type: String,
        default: Date.now()
    },
    coffee : {
        type: String,
        default: 'Coffee'
    },
    img : {
        type: String,
        default: 'Villager Image'
    },
    timeAwake: {
        type: String,
        default: '8 AM to 5 PM'
    },
    items: [{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }]
})

module.exports = mongoose.model('Villager', VillagerSchema)