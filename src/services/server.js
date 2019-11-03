const express = require('express')
const app = express()
const port = 3000

const router = require('../routes')
const { database, sequelize } = require('../models/database')

app.use(express.json()) // for parsing application/json

sequelize.sync()
database.SQL().connect()

app.use('/api', router.todoRoutes)

app.listen(port, () => console.log('Server running at port 3000'))