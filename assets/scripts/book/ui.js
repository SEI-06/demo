const booksTemplate = require(../templates/books.handlebars)

const onGetBooksSuccess = data => {
  const booksHtml = booksTemplate({ books: data.books})
  $('#Demo').html(booksHtml)
}
const onGetBooksFailure = () => {
  $('#Demo').html('TRY AGAIN')
}

module.exports = {
  onGetBooksFailure,
  onGetBooksSuccess
}