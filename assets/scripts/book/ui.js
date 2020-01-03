const booksTemplate = require('../templates/books.handlebars')

const onGetBooksSuccess = data => {
  const booksHtml = booksTemplate({ books: data.books })
  $('#bookList').html(booksHtml)
}
const onGetBooksFailure = () => {
  $('#bookList').html('TRY AGAIN')
}

module.exports = {
  onGetBooksFailure,
  onGetBooksSuccess
}
