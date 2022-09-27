const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllers.19110497controller')

router.post('/', controllers.addToMyGroup)
router.get('/:id', controllers.getById)

module.exports = router
