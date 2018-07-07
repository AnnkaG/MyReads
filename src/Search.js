import React from "react"
import * as BooksAPI from "./BooksAPI"
import Book from "./Book"

import {Link} from "react-router-dom"

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      output: []
    }
  }
  
  searchString = (string) => {
    const  stringTrim = string.trim()
    if(!stringTrim.length) {
      this.setState({output:[]})
      return
    }
    if(stringTrim!==0) {
      BooksAPI.search(stringTrim)
      .then(returned => {
         if(!returned|| returned.error){
           this.setState({output:[]})
           return
    }
    console.log(returned)
    const sameBooks = returned.map(returnedItem =>{
      this.props.books.forEach(book => {
        if (book.id === returnedItem.id) returnedItem.shelf = book.shelf})
      return returnedItem
      })
    this.setState ({output: sameBooks})
     })   
   } else{
   this.setState ({output: []})
    return 
}
 }
  
  render() {
    console.log(this.state.output.map((book) => book.shelf))
    return(
      <div className = "search-books">
        <div className = "search-boooks-bar">
          <Link className = "close-search" to = "/">Close </Link>
          <div className = "search-books-input-wrapper">
            <input type ="text" placeholder = "Search by author and title" onChange = {(ev) =>this.searchString(ev.target.value)} />
          </div>
        </div>
        <div className = "search-books-results">
          <ol className = "books-grid">
            {this.state.output.map((book) =>
              <li key = {book.id }>
                <Book 
                  thumb = {book.imageLinks ? book.imageLinks.thumbnail : `http://via.placeholder.com/128x193?text=No%20Cover`}
                  title = {book.title}
                  authors = {book.authors}
                  shelf = {book.shelf}
                  moveBook = {this.props.moveBook}
                  book = {book}
                />
              </li>
             )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search