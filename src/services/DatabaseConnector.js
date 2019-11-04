
class DatabaseConnector {
  constructor() {
    this.database = null
    this.connection = null
  }

  make(database) {
    this.database = database
    return this
  }

  SQL() {
    this.connection = this.database.authenticate()
    return this
  }

  // noSQL() {

  // }

  connect() {
    try {
      const success = this.connection
      if (success) console.log('Connected to database')
    } catch (error) {
      console.error('Error', error)
    }
  }
}

module.exports = new DatabaseConnector()