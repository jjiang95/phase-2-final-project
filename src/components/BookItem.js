import React from "react";

function BookItem({ book, onDeleteClick }) {

    function handleDeleteClick(id) {
        fetch(`http://localhost:4000/books/${id}`, {
            method: "DELETE"
          })
          .then(resp => resp.json())
          .then(() => onDeleteClick(id))
      
    }
    const rating = [];
    for (let i=0; i < book.rating; i++) {
        rating.push("⭐")
    }
    return (
        <div className="book-item" key={book.id}>
            {/* <h2>{book.title.toUpperCase()}</h2> */}
            <img src={book.image} alt="cover"/>
            {/* <p>{book.genre.toUpperCase()}</p> */}
            <p>Rating: {rating}</p>
            {/* <p>{book.haveRead ? "have read" : "have not read"}</p> */}
            <button onClick={() => handleDeleteClick(book.id)}>Delete</button>
        </div>
    )
}

export default BookItem;