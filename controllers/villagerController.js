const Villager = require('../models/Villager')

const villagerController = {
    index: async (req, res) => {
        try {
            const villagers = await Villager.find({})
            res.send(villagers)
        }
        catch (err) {
            console.log(err)
        }
    },
    show: async (req, res) => {
        try {
            const villagerId = req.params.id
            const villager = await Villager.findById(villagerId)
            res.json(villager)
        }
        catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    create: async (req, res) => {
        try {
            const newVillager = req.body
            const savedVillager = await Villager.create(newVillager)
            res.json (savedVillager)
        }
        catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    update: async (req, res) => {
        try {
            const villagerId = req.params.id
            const updatedVillager = req.body
            const savedVillager = await Villager.findByIdAndUpdate(villagerId, updatedVillager, {new:true})
            res.json(savedVillager)
        }
        catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        try {
            const villagerId = req.params.id
            await Villager.findByIdAndRemove(villagerId)
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

module.exports= villagerController