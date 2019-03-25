const Villager = require('../models/Villager')
const Item = require('../models/Item')

const itemController = {
    index: async (req, res) => {
        try {
            const items = await Item.find({})
            res.send(items)
        }
        catch (err) {
            console.log(err)
        }
    },
    show: async (req, res) => {
        try {
            const itemId = req.params.itemId
            const item = await Item.findById(itemId)
            res.json(item)
        }
        catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    create: async (req, res) => {
        try {
            const newItem = req.body
            const savedItem = await Item.create(newItem)
            res.json (savedItem)
        }
        catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    update: async (req, res) => {
        try {
            const itemId = req.params.itemId
            const updatedItem = req.body
            const savedItem = await Item.findByIdAndUpdate(itemId, updatedItem, {new:true})
            res.json(savedItem)
        }
        catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        try {
            const itemId = req.params.itemId
            await Item.findByIdAndRemove(itemId)
            res.json({
                msg: "Deleted."
            })
        }
        catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}

module.exports= itemController