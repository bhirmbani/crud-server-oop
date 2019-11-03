
class DataCreator {
  constructor(model) {
    this.model = model
  }

  initModel(model) {
    this.model = model
    return this
  }

  async create(payload) {
    try {
      const data = await this.model.create(payload)
      return data
    } catch (error) {
      return error
    }
  }

  async read() {
    try {
      const data = await this.model.findAll()
      return data
    } catch (error) {
      return error
    }
    
  }

  update() {

  }

  delete() {

  }
}

module.exports = DataCreator
