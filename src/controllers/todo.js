const responseFactory = require('../services/ResponseFactory')
const DataCreator = require('../services/DataCreatorSQL')
const TodoModel = require('../models/Todo')

const todoCreator = new DataCreator(TodoModel)

class TodoController {
  // create
  create = async (req, res, next) => {
    const { body } = req
    const data = await todoCreator.create(body)
    const response = responseFactory.base({ code: 201, message: 'todo created' }).insertData(data)
    res.status(response.code).json(response.build())
  }

  // update
  update = async (req, res, next) => {
    const { body, query } = req
    const data = await todoCreator.update(body, query)
    const response = responseFactory.base({ code: 200, message: 'todo updated' }).insertData(data)
    res.status(response.code).json(response.build())
  }

  // delete
  delete = async (req, res, next) => {
    const { query } = req
    const data = await todoCreator.delete(query)
    const response = responseFactory.base({ code: 200, message: 'todo deleted' }).insertData(data)
    res.status(response.code).json(response.build())
  }

  // read
  read = async (req, res, next) => {
    const data = await todoCreator.read()
    const response = responseFactory.base({ code: 200, message: 'read todo success' }).insertData(data)
    res.status(response.code).json(response.build())
  }
}

module.exports = new TodoController()