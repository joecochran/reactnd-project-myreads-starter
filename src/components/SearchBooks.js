import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI.js';
import Book from './Book';

class SearchBooks extends Component {
  state = {
    query: '',
    results: []
  }
  handleInput = (e) => {
    this.setState({
      query: e.target.value
    }, () => {
      if (this.state.query) {
        BooksAPI.search(this.state.query)
          .then(results => {
            if (results.error) {
              this.setState({results: []})
            } else if (results && results.length) {
              results.forEach(result => {
                const existing = this.props.books.find(b => b.id === result.id);
                result.shelf = existing ? existing.shelf : 'none';
              });
              this.setState({
                results
              });
            }
          });
      } else {
        this.setState({
          results: []
        });
      }
    })
  }
  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onInput={this.handleInput}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.length > 0 && (
              this.state.results.map((result) => (
                <Book book={result} key={result.id} onShelfUpdate={this.props.onShelfUpdate} />
              ))
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;
