import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom"
import Search from "./Search"
import Shelves from "./Shelves"

// Final component added to the root

class BooksApp extends React.Component {
  
  // Setting the original state
  constructor(props) {
    super(props)
    this.state = {
      books : []
    }
  }
  
  componentDidMount()  {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
   });  
  }

 changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState(prevState => ({
      books: prevState.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
    .then(()=> {
       this.setState((prevState) => {
       return {
          books: prevState.books.map(findBook =>{
           if(book.id === findBook.id) {
              findBook.shelf = shelf
            }
           return findBook;
          })
       }
       })
    })
    .then(() => {
       BooksAPI.getAll().then((books) => {
         this.setState({ books});
       })
     })
 }


  
render() {
    return (
      <div className = "app">
        <Route exact path = "/" render = {() => (
          !this.state.books ? null :
      
          <Shelves
            books ={this.state.books}
            shelf= {this.state.shelf} 
            key = {this.props.key}
            book  = {this.state.book}
            changeShelf= {this.changeShelf}
          />
        )}
        />

        <Route exact path = "/Search" render = {() => (
           <Search
            books ={this.state.books}
            output = {this.props.output} 
            shelf= {this.state.shelf} 
            key = {this.props.key}
            book  = {this.props.book}
            changeShelf = {this.changeShelf}
          />                                     
        )}
        />
      </div>
)
}
}  

export default BooksApp


