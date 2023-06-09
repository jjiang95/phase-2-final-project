import React, { useState } from "react";
import { Link } from "react-router-dom";

function BookItem({ book, onDeleteClick }) {

    // const [haveRead, setHaveRead] = useState(book.haveRead);

    function handleDeleteClick(id) {
        fetch(`http://localhost:4000/books/${id}`, {
            method: "DELETE"
          })
          .then(resp => resp.json())
          .then(() => onDeleteClick(id))
    }

    // function handleReadToggle(id) {
    //     setHaveRead((haveRead) => (!haveRead));
    //     fetch(`http://localhost:4000/books/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type":"application/json"
    //         },
    //         body: JSON.stringify(
    //             {
    //               "haveRead": !haveRead
    //             }
    //         )     
    //     })
    //     .then(resp => resp.json())
    //     .then(updatedBook => onReadToggle(updatedBook))
    // }

    const rating = [];
    for (let i=0; i < book.rating; i++) {
        rating.push("⭐")
    }

    return (
        <div className={book.haveRead ? "have-read" : "haven't-read"} key={book.id}>
            <img src={book.image} alt="cover"/>
            <p>{book.haveRead ? rating : "--"}</p>
            <div className="button-container">
                <button><Link className="details-button" exact to={`/${book.id}`}>Details</Link></button>
                <button className="remove" onClick={() => handleDeleteClick(book.id)}>Remove</button>
            </div>
        </div>
    )
}

export default BookItem;