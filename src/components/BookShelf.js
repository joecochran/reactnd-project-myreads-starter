import React from 'react';
import startCase from 'lodash/startCase';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{startCase(props.title)}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map(book => (
          <Book key={book.id} onShelfUpdate={props.onShelfUpdate} book={book} />
        ))}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onShelfUpdate: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookShelf;
