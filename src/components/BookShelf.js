import React from 'react';
import startCase from 'lodash/startCase';
import Book from './Book';

const BookShelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{startCase(props.title)}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book => (
            <Book book={book} />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf;
