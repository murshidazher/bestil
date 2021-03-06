import React, { Component } from 'react';

import Library from '../components/Library';
import SearchBox from '../components/SearchBox';
// import { books } from './books';

import './MainContent.css';
import logo from '../img/logo.png';


class MainContent extends Component{

    constructor() {
      super();
      
      this.timer = null;
    }

    /*
     * Triggered when a new value is entered in the search bar
     */
    onSearch = (event) => {

      // Cancel the fetch timer to process the current request
      clearTimeout(this.timer);


      if (event.target.value !== '') {
        this.props.onSearchChange(event);
      }
      else {
        event.target.value = 'fiction';
        this.props.onSearchChange(event);
      }

      // Set a timer for fetch request
      this.timer = setTimeout(() => 
      {
        this.fetchBooks();

      }, 900);
      
    }

    /*
     * Loads the books from google books API      
     */
    fetchBooks() {
      this.props.onRequestBooks(this.props.searchfield);
    }

    /*
     * Load some default books
     */
    componentDidMount() {
      this.fetchBooks();
    }
  
    /*
     * Traverse the book array and returns an array consisting of filered books.
     */
    filterBooks(books) {
      return books.filter( book => {
        return book.volumeInfo.title.toLowerCase().includes(this.props.searchfield.toLowerCase());
      });
    }

    render() {
      const { books } = this.props;
        return(
            <div>
              <div className="container" >
                <div className="pr">
                  <div className="pt">
                    <img className="logo" src={logo} alt="My Pic"></img>
                    <h1 className="inter">Search a book</h1>
                    <p className="lead">Search a book by name and find books similar to it</p>
                    <SearchBox searchChange={this.onSearch}/>
                  </div>
                  
                </div>
                <div className="tc">
                <Library books={books}/>
              </div> 
              </div>

              <div className="footer_div tc">
                <footer className="footer">
                  Developed by <a href="https://github.com/murshidazher">@murshidazher </a><br></br> Design inspired from <a href="https://dribbble.com/shots/6490873-Dating-app-search-by-photo-and-settings-updated-source">@prakharsharma </a>
                </footer>
              </div>
            </div>
            
        );
      }
    
}

export default MainContent;
