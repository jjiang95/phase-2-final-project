import React from "react";
import { useHistory } from "react-router-dom";

function BookItem({ book, onDeleteClick }) {

    const history = useHistory();

    function handleDeleteClick(id) {
        fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
            method: "DELETE"
          })
          .then(resp => resp.json())
          .then(() => onDeleteClick(id))
    }

    function handleDetailsClick() {
        history.push(`/${book.id}`)
    }

    const rating = [];
    for (let i=0; i < book.rating; i++) {
        rating.push("⭐")
    }

    return (
        <div className={book.haveRead ? "have-read" : "haven't-read"} key={book.id}>
            <img src={book.image} alt="cover"/>
            <p>{book.rating === 0 ? "--" : rating}</p>
            <div className="button-container">
                <button onClick={handleDetailsClick}>Details</button>
                <button className="remove" onClick={() => handleDeleteClick(book.id)}>Delete</button>
            </div>
        </div>
    )
}

export default BookItem;