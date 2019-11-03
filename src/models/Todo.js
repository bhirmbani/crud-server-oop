const Sequelize = require('sequelize')
const { sequelize } = require('../models/database')
const Model = Sequelize.Model

class Todo extends Model {}

Todo.init({
  name: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'todo'
})

module.exports = Todo