require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const Villager = require('../models/Villager')
const Item = require('../models/Item')

const alphineSofa = new Item ({
    name: 'Alphine Sofa',
    category: 'Furniture',
    sellsFor: 2350,
    location: 'Nookling Shops / Gift',
    itemImg: 'https://i.pinimg.com/originals/e6/07/c7/e607c7e5086f26f543912777c4c51e5c.jpg'
})

const coelacanth = new Item ({
    name: 'Coelacanth',
    category: 'Ocean Fish',
    sellsFor: 15000,
    location: `Island's Ocean`,
    itemImg: 'https://vignette.wikia.nocookie.net/animalcrossing/images/0/09/Coelacanth_new_leaf.png/revision/latest?cb=20130618002151'
})

const eunice = new Villager ({
    name: 'Eunice',
    species: 'Sheep',
    gender: 'Female',
    service: 'Villager',
    birthday: 'April 3rd',
    coffee: 'Blue Mountain, with a little milk and 1 sugar',
    img: "https://nookipedia.com/w/images/thumb/8/8f/Eunice_NLa.png/175px-Eunice_NLa.png",
    timeAwake: '6AM to Midnight',
    items: []
})

const isabelle = new Villager ({
    name: 'Isabelle',
    species: 'Shih Tzu',
    gender: 'Female',
    service: 'Town Hall Secretary',
    birthday: 'December 20th',
    coffee: 'Mocha, with lots of milk and 3 sugars',
    img: "https://vignette.wikia.nocookie.net/animalcrossing/images/2/26/Isabelle_AF.png/revision/latest/scale-to-width-down/175?cb=20161008142729",
    timeAwake: '24 Hours a Day',
    items: []
})

const jack = new Villager ({
    name: 'Jack',
    species: 'Pumpkin (???)',
    gender: '???',
    service: 'Halloween Event',
    birthday: 'October 31st',
    coffee: 'Does not drink coffee',
    img: "https://vignette.wikia.nocookie.net/animalcrossing/images/7/75/Acnl-jack.png/revision/latest/scale-to-width-down/200?cb=20130707122138",
    timeAwake: 'All Day on halloween',
    items: []
})

Villager.deleteMany({})
    .then(() => Item.deleteMany({}))
    .then(() => Villager.create(eunice, isabelle, jack))
    .then(() => Item.create(alphineSofa, coelacanth))
    .then(() => console.log(eunice.name + " has been added"))
    .then(() => console.log(isabelle.name + " has been added"))
    .then(() => console.log(jack.name + " has been added"))
    .then(() => console.log(alphineSofa.name + " has been added"))
    .then(() => console.log(coelacanth.name + " has been added"))
    .catch((err) => console.log(err))
    .then(() => mongoose.connection.close())