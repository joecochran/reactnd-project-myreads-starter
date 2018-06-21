import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

const ListBooks = (props) => {
  const shelves = ['currentlyReading', 'wantToRead', 'read'];
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map(shelf => (
            props.books.filter(book => book.shelf === shelf).length > 0 && (
              <BookShelf
                onShelfUpdate={props.onShelfUpdate}
                key={shelf}
                title={shelf}
                books={props.books.filter(book => book.shelf === shelf)}
              />
            )
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

ListBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onShelfUpdate: PropTypes.func.isRequired,
};

export default ListBooks;
