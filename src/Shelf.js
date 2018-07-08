import React from "react"
import Book from "./Book"

//BookShelf component - title and books

class Shelf extends React.Component {
  
  render() {
    return (
      <div className = "bookshelf" >
        <h2 className = "bookshelf-title" >{this.props.name}</h2>
        <div className = "bookshelf-books" >
          <ol className = "books-grid" >
            {this.props.books.map((book) => 
                <li key = {book.id}>
                  <Book 
                     thumb={book.imageLinks ? book.imageLinks.thumbnail : `http://via.placeholder.com/128x193?text=Mo%20Cover`}
                     title = {book.title}
                     authors = {book.authors}
                     shelf = {book.shelf}
                     changeShelf = {this.props.changeShelf}
                     book = {book}
                   />
                </li>
               )
            }
          </ol>
        </div>
       </div>
    )
  }
}

export default Shelf
