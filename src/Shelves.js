import React from "react"
import Shelf from "./Shelf"

import {Link} from "react-router-dom"

class Shelves extends React.Component{
  filterShelves = (shelf) => {
    return this.props.books.filter((book) => book.shelf === shelf)
  }


render() {
  return(
    <div className = "list-books">
       <div className = "list-books-title">
          <h1> My Reads </h1>
       </div>
       <div className = "list-books-content">
         <Shelf
           name = "Currently reading"
           books = {this.filterShelves("currentlyReading")}
           book = {this.props.book}
           moveBook = {this.props.moveBook}
           shelf = {this.props.shelf}
         />
            
        
         <Shelf 
           name = "Want to read"
           books = {this.filterShelves("wantToRead")}
           book = {this.props.book}
           moveBook = {this.props.moveBook}
           shelf = {this.props.shelf}
          />
            
         <Shelf 
           name = "Read"
           books = {this.filterShelves("read")}
           book = {this.props.book}
           moveBook = {this.props.moveBook}
           shelf = {this.props.shelf}
          />
       </div>
       <div className = "open-search">
         <Link to = "/Search">Add a Book</Link>
       </div>
     </div>
  )
}
}
export default Shelves