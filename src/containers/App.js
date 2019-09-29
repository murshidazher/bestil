import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainContent from '../components/MainContent';
import './App.css';

import { setSearchField, requestBooks } from '../actions';

const mapStateToProps = state => {
  return {
    searchfield: state.searchBooks.searchfield,
    books: state.requestBooks.books,
    isPending: state.requestBooks.isPending,
    error: state.requestBooks.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestBooks: (searchfield) => dispatch(requestBooks(searchfield))
  }
}

class App extends Component{

  render() {
      return (
        <MainContent {...this.props} /> 
      )
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
