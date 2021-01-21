// import "./App.css";

import React, { Component } from "react";
import BooksList from "./BooksList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isLoaded: false,
    };
  }

  //  to fetch api data
  async componentDidMount() {
    const res = await fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json"
    );
    const results = await res.json();
    // console.log("booksssssssss", boo);
    // const results = boo.results;
    this.setState({
      books: results,
      isLoaded: true,
    });
  }

  render() {
    const { books, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading....</div>;
    }
    return (
      <div className="App">
        {books.map((book, index) => {
          if (index < 10) {
            return (
              <BooksList
                book={book}
                // handleDetails={this.handleDetails}
                key={`books-${index}`}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default App;
