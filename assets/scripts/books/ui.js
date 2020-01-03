'use strict'

const getBooksFailure = error => {
  console.error(error)
}

const getBooksSuccess = response => {
  const books = response.books

  let bookHtml = ''

  books.forEach(book => {
    bookHtml += `
    <h4>${book.title}</h4>
    <h5>${book.author}</h5>
    <p>${book.id}</p>
    `
  })
  $('#results').html(bookHtml)
}

module.exports = {
  getBooksFailure,
  getBooksSuccess
}
