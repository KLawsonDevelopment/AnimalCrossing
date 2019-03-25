const express = require('express')
const router = express.Router() 

const villagerController = require('../controllers/villagerController')
const itemController = require('../controllers/itemController')

router.get('/characters', villagerController.index)
router.get('/characters/:characterId', villagerController.show)
router.post('/characters', villagerController.create)
router.put('/characters/:characterId', villagerController.update)
router.delete('/characters/:characterId', villagerController.delete)

router.get('/items', itemController.index)
router.get('/items/:itemId', itemController.show)
router.post('/items', itemController.create)
router.put('/items/:itemId', itemController.update)
router.delete('/items/:itemId', itemController.delete)



module.exports = router