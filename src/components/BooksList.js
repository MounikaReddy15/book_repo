import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";

const BooksList = (props) => {
  const { book } = props;
  return (
    <div className="books-list">
      <div className="book-card">
        <img
          className="book-image"
          src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0dAvk7yQ57U43b8UHJLVsJo9vNOnfiTarUQ&usqp=CAU`}
          alt="book"
        />
        <div className="book-details">
          <p className="book-title">
            Title: <span>{book.title} </span>
          </p>
          <p className="book-author">
            Authors: <span>{book.authors}</span>
          </p>
          <p className="">
            Average Rating: <span>{book.average_rating}</span>
          </p>
          <p className="">
            ISBN: <span>{book.isbn}</span>
          </p>

          <p className="">
            Language Code: <span>{book.language_code}</span>
          </p>
          <p className="">
            Ratings Count: <span>{book.ratings_count} </span>
          </p>
          <StarRatingComponent
            name="rate2"
            editing={false}
            renderStarIcon={() => (
              <span>
                <FaStar />
              </span>
            )}
            starCount={5}
            value={book.average_rating}
          />
          <p className="">
            Price: <span>{book.price} </span>
          </p>
          <button> Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BooksList;
