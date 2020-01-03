'use strict'

const config = require('../config')

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET'
  })
}

module.exports = {
  index
}
