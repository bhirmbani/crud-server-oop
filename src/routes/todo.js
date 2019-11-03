const express = require('express')
const todoController = require('../controllers/todo')


const router = express.Router()

router.get('/todo', todoController.read)
router.post('/todo', todoController.create)

module.exports = router
