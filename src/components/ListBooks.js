import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
const ListBooks = (props) => {
  const shelves = [...new Set(props.books.map(book => book.shelf))];
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf, index) => (
            <BookShelf onShelfUpdate={props.onShelfUpdate} key={index} title={shelf} books={props.books.filter(book => book.shelf === shelf)} />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default ListBooks;
