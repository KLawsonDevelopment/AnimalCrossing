require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const Villager = require('../models/Villager')
const Item = require('../models/Item')

const bindingBlade = new Item ({
    name: 'Binding Blade',
    category: 'Weapon',
    sellsFor: 0,
    location: 'Inherited',
    itemImg: 'https://vignette.wikia.nocookie.net/fireemblem/images/0/02/Sword_of_Seals.png/revision/latest?cb=20081113214049'
})

const roy = new Villager ({
    name: 'Roy',
    species: 'Human',
    gender: 'Male',
    service: 'Mercenary',
    birthday: 'April 7th',
    coffee : 'Black',
    img : "https://fireemblemwiki.org/w/images/thumb/d/d5/FEA_Roy.png/400px-FEA_Roy.png",
    timeAwake: '8 AM to 5 PM',
    items: [bindingBlade]
})

Villager.deleteMany({})
    .then(() => Item.deleteMany({}))
    .then(() => Villager.create(roy))
    .then(() => Item.create(bindingBlade))
    .then(() => console.log(roy.name + " has been added"))
    .then(() => console.log(bindingBlade.name + " has been added"))
    .catch((err) => console.log(err))
    .then(() => mongoose.connection.close())