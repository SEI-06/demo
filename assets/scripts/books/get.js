'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetBooks = () => {
  api.index()
    .then(ui.getBooksSuccess) // return a sucessful results
    .catch(ui.getBooksFailure) // return an unsucessful result
}

module.exports = {
  onGetBooks
}
