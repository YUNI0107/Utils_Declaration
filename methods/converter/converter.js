class Converter {
  jsonParse(value) {
    if (value === null) {
      return null
    }
    try {
      return JSON.parse(value)
    } catch (error) {
      console.log(error)
      return null
    }
  }
}

module.exports = { Converter }
