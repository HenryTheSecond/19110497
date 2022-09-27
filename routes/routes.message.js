const express = require('express')
const controllers = require('../controllers/controllers.messagecontroller')
const router = express.Router()

router.get('/:id?', controllers.getMessage)
module.exports = router