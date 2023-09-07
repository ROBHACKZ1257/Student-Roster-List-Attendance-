const express = require('express')
const router = express.Router()
const { authorize } = require('../middleware/Middleware')

const studentControl = require('../controllers/studentControllers')


router.get('/', studentControl.index)
router.delete('/:id', studentControl.delete)
router.get('/:id', studentControl.show)
router.post('/', studentControl.create)
// router.get('/', studentControl.show)

module.exports = router


//Had to tweek some things around just added several more 
//router posts if anything doesn't look right let me know