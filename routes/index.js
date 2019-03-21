const express = require('express')
const router = express.Router() 

const villagerController = require('../controllers/villagerController')

router.get('/', villagerController.index)
router.get('/:id', villagerController.show)
router.post('/', villagerController.create)
router.put('/:id', villagerController.update)
router.delete('/:id', villagerController.delete)

module.exports = router