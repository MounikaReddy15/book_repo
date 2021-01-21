import React from "react";

const BooksList = (props) => {
  const { book } = props;
  return (
    <div>
      <div className="books-list">
        <div>
          <div className="book-card">
            <img
              className="book-image"
              src={`https://images.unsplash.com/photo-1606311698062-21c4f57cb27f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8aGFycnklMjBwb3R0ZXIlMjBib29rc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`}
              alt="book"
            />
            {/*  <h2 className="rating">{movie.vote_average} / 10</h2>
    <button className="button" onClick={()=> handleDetails(movie)} > View Details </button> */}

            <p className="movie-title">{book.title}</p>
            <p className="release-date">{book.authors}</p>
            <p className="">{book.average_rating}</p>
            <p className="">{book.isbn}</p>

            <p className="">{book.language_code}</p>
            <p className="">{book.ratings_count}</p>
            <p className="">{book.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksList;
