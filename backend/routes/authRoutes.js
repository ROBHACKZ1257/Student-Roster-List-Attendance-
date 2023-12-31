const express = require('express')
const router = express.Router()

const authControl = require('../controllers/authControllers')

router.post('/register', authControl.register)
router.post('/login', authControl.login)

module.exports = router