const express = require('express')
const controllers = require('../controllers/controllers.mygroupcontroller')
const router = express.Router()

router.get('/', controllers.getAllMyGroup)
module.exports = router