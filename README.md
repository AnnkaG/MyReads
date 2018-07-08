# MyReads Project

Application for overview of book status: books I want to read, I am currently reading and I read.
Built with React and React Router. Project was bootstrapped with Create React App.


## Set up
a/ Clone this repo: git clone https://github.com/dhtlee/reactnd-project-myreads.git
b/ Install dependencies: npm install
c/ Start application: npm start

## Contents
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # Collection of available search terms.
├── package.json # npm package manager file
├── public
│   ├── favicon.ico # React Icon
│   └── index.html # main html file
└── src
    ├── App.css # Styles for app. 
    ├── App.js # This is the root of app.
    ├── App.test.js # Used for testing. Provided with Create React App. 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Contains methods below.
    ├── icons #images for app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. 
    └── index.js # used for DOM rendering only.
    ├── Book.js # component for single book (title, img, author, shelfChanger)
    ├── Shelf.js # component for shelf element (title and books)
    ├── Shelves.js # component with all available shelves(Want to read, Read, Currently reading
    ├── Search.js # component for searching books 
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains below methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. 


