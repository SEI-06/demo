const booksTemplate = require('../templates/books.handlebars')

const getBooksSuccess = data => {
  const booksHtml = booksTemplate({ books: data.books })
  console.log(data)
  $('#bookList').html(booksHtml)
}
const getBooksFailure = () => {
  $('#bookList').html('TRY AGAIN')
}

module.exports = {
  getBooksFailure,
  getBooksSuccess
}
