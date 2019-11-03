class ResponseFactory {
  constructor() {
    this.code = null
    this.message = null
    this.data = null
  }

  base({ code, message }) {
    this.code = code
    this.message = message
    return this
  }

  insertData(data) {
    this.data = data
    return this
  }

  build() {
    return {
      code: this.code,
      message: this.message,
      data: this.data
    }
  }
}

module.exports = new ResponseFactory();