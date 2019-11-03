const Sequelize = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})

const database = require('../services/DatabaseConnector')

database.make(sequelize)

module.exports = { database, sequelize }