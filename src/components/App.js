// import "./App.css";

import React, { Component } from "react";
import BooksList from "./BooksList";
import Navbar from "./Navbar";

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
    console.log("res", res);
    const results = await res.json();
    console.log("results", results);
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
        <Navbar books={books} />
        {books.map((book, index) => {
          if (index < 10) {
            return <BooksList book={book} key={`books-${index}`} />;
          }
        })}
      </div>
    );
  }
}

export default App;
