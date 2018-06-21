import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import { Route } from 'react-router-dom';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books });
      });
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf;
        this.setState((currentState) => ({
          books: currentState.books.filter((b) => b.id !== book.id).concat([ book ])
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} onShelfUpdate={this.updateShelf} />
        )} />

        <Route exact path="/search" render={() => (
          <SearchBooks onShelfUpdate={this.updateShelf} books={this.state.books} />
        )} />
      </div>
    )
  }
}

export default BooksApp;
