import React from "react"

//single book component (title, author, img, shelf selector)

class Book extends React.Component {

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128, height: 193,
                        backgroundImage: `url(${this.props.thumb})`
                    }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select 
                            value={this.props.shelf} 
                            onChange={(ev) => this.props.changeShelf(this.props.book, ev.target.value)}
                            >
                            <option disabled>Move to...</option>
                            <option value="none">None</option>
                            <option value="currentlyReading">Currently reading</option>
                            <option value="wantToRead">Want to read</option>
                            <option value="read">Read</option>
                            
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors}</div>
            </div>

        )
    }
}

export default Book