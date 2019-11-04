
class DataCreator {
  constructor(model) {
    this.model = model
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

  async update(newValues, where) {
    try {
      const data = await this.model.update(newValues, { where })
      return data
    } catch (error) {
      return error
    }
  }

  async delete(where) {
    try {
      const data = await this.model.destroy({ where })
      return data
    } catch (error) {
      return error
    }
  }
}

module.exports = DataCreator
