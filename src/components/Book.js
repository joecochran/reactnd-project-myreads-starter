import React from 'react';
import PropTypes from 'prop-types';

const Book = props => (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${typeof props.book.imageLinks !== 'undefined' && props.book.imageLinks.smallThumbnail}")`,
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={props.book.shelf}
            onChange={e => props.onShelfUpdate(props.book, e.target.value)}
          >
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{typeof props.book.authors !== 'undefined' && props.book.authors.join(', ')}</div>
    </div>
  </li>
);
Book.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfUpdate: PropTypes.func.isRequired,
};

export default Book;
