import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import { Route } from 'react-router-dom';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';

class BooksApp extends React.Component {
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books });
      });
  }
  state = {
    books: []
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks />
        )} />

        <Route exact path="/search" render={() => (
          <SearchBooks />
        )} />
          
      </div>
    )
  }
}

export default BooksApp
