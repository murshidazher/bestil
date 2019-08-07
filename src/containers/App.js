import React, {Component} from 'react';
import Library from '../components/Library';
import SearchBox from '../components/SearchBox';
// import { books } from './books';
import './App.css';
import logo from '../img/logo.png';

class App extends Component{

    constructor() {
      super();
      this.state = {
        books: [],
        searchfield: 'fiction'
      }
      this.timer = null;
      this.api = 'https://www.googleapis.com/books/v1/volumes?q=';
    }

    /*
     * Triggered when a new value is entered in the search bar
     */
    onSearchChange = (event) => {

      // Cancel the fetch timer to process the current request
      clearTimeout(this.timer);


      if(event.target.value !== '') {
        this.setState({searchfield: event.target.value});
      }
      else {
        this.setState({searchfield: 'fiction'});
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
      fetch(`${this.api}${this.state.searchfield}`)
      .then(response => response.json())
      .then(book => this.setState({books: book.items}));
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
    filterBooks(name) {
      this.state.books.filter( book => {
        return book.volumeInfo.title.toLowerCase().includes(name.toLowerCase());
      } );
    }

    render() {
      return(
          <div>
            <div className="container" >
              <div className="pr">
                <div className="pt">
                  <img className="logo" src={logo} alt="My Pic"></img>
                  <h1 className="inter">Search a book</h1>
                  <p className="lead">Search a book by name and find books similar to it</p>
                  <SearchBox searchChange={this.onSearchChange}/>
                </div>
                
              </div>
              <div className="tc">
              <Library books={this.state.books}/>
            </div> 
            </div>

            <div className="footer_div tc">
              <footer className="footer">
                Designed and Developed by <a href="https://github.com/murshidazher">@murshidazher </a><br></br> Design inspired from <a href="https://dribbble.com/shots/6490873-Dating-app-search-by-photo-and-settings-updated-source">@prakharsharma </a>
              </footer>
            </div>
          </div>
           
      );
    }
    
}

export default App;
