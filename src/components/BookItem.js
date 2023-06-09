import React, { useState } from "react";

function BookItem({ book, onDeleteClick, onReadToggle }) {

    const [haveRead, setHaveRead] = useState(book.haveRead);

    function handleDeleteClick(id) {
        fetch(`http://localhost:4000/books/${id}`, {
            method: "DELETE"
          })
          .then(resp => resp.json())
          .then(() => onDeleteClick(id))
    }

    function handleReadToggle(id) {
        setHaveRead((haveRead) => (!haveRead));
        fetch(`http://localhost:4000/books/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(
                {
                  "haveRead": !haveRead
                }
            )     
        })
        .then(resp => resp.json())
        .then(updatedBook => onReadToggle(updatedBook))
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
            <p>{rating}</p>
            <button onClick={() => handleReadToggle(book.id)}>{haveRead ? "Have Read" : "Haven't Read"}</button>
            <button>Edit</button>
            <button onClick={() => handleDeleteClick(book.id)}>Delete</button>
        </div>
    )
}

export default BookItem;