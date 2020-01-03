const booksTemplate = require('../templates/books.handlebars')

const getBooksSuccess = data => {
  const booksHtml = booksTemplate({ books: data.books })
  console.log(data)
  $('#Demo').html(booksHtml)
}
const getBooksFailure = () => {
  $('#Demo').html('TRY AGAIN')
}

module.exports = {
  getBooksFailure,
  getBooksSuccess
}
