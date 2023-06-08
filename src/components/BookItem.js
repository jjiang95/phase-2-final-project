import React from "react";

function BookItem({ book }) {
    return (
        <div className="book-item" key={book.id}>
            <h2>{book.title}</h2>
            <img src={book.image} alt="cover"/>
            <p>Genre: {book.genre}</p>
            <p>Rating: {book.rating}</p>
            <p>{book.haveRead ? "have read" : "have not read"}</p>
        </div>
    )
}

export default BookItem;