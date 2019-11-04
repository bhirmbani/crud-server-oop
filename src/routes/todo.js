const express = require('express')
const todoController = require('../controllers/todo')


const router = express.Router()

router.get('/', todoController.read)
router.post('/', todoController.create)
router.put('/', todoController.update)
router.delete('/', todoController.delete)

module.exports = router
