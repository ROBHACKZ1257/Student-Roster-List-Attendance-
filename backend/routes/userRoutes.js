const express = require('express')
const router = express.Router()

const userControl = require('../controllers/userControllers')

router.get('/', userControl.show)

module.exports = router