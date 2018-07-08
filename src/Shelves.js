import React from "react"
import Shelf from "./Shelf"

import {Link} from "react-router-dom"

// All BookShelves Component - app title + 3 shelves, add search button

class Shelves extends React.Component {
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
    
    
         <Shelf // Currently reading books
           name = "Currently reading"
           books = {this.filterShelves("currentlyReading")}
           book = {this.props.book}
           changeShelf = {this.props.changeShelf}
           shelf = {this.props.shelf}
         />
    
     
        <Shelf // Want to read books
           name = "Want to read"
           books = {this.filterShelves("wantToRead")}
           book = {this.props.book}
           changeShelf = {this.props.changeShelf}
           shelf = {this.props.shelf}
          />
             
         
         <Shelf // Read books 
           name = "Read"
           books = {this.filterShelves("read")}
           book = {this.props.book}
           changeShelf = {this.props.changeShelf}
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