const responseFactory = require('../services/ResponseFactory')
const DataCreator = require('../services/DataCreatorSQL')
const TodoModel = require('../models/Todo')

const todoCreator = new DataCreator(TodoModel)

class TodoController {
  // create
  create = async (req, res, next) => {
    const { body } = req
    console.log('111', body)
    const data = await todoCreator.create(body)
    const response = responseFactory.base({ code: 201, message: 'todo created' }).insertData(data)
    res.status(response.code).json(response.build())
  }

  // update

  // delete

  // read
  read = async (req, res, next) => {
    const data = await todoCreator.read()
    const response = responseFactory.base({ code: 200, message: 'test' }).insertData(data)
    res.status(response.code).json(response.build())
  }
}

module.exports = new TodoController()