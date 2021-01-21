import React, { Component } from "react";

import { FaShoppingCart } from "react-icons/fa";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      //   count: 0,
    };
  }

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  //   handleCount = (e) => {
  //     const { count } = this.state;
  //     this.setState({
  //       count: count + 1,
  //     });
  //   };

  render() {
    const { books } = this.props;
    const { searchText, count } = this.state;
    console.log("books", searchText);
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>
          <FaShoppingCart className="cart-icon" />
        </div>
      </div>
    );
  }
}

export default Navbar;
