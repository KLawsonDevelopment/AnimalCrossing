const express = require('express')
const router = express.Router() 

const villagerController = require('../controllers/villagerController')

router.get('/characters', villagerController.index)
router.get('/characters/:characterId', villagerController.show)
router.post('/characters', villagerController.create)
router.put('/characters/:characterId', villagerController.update)
router.delete('/characters/:characterId', villagerController.delete)



module.exports = router