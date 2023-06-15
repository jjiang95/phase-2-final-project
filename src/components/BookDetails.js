import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function BookDetails() {

    const history = useHistory();
    const [book, setBook] = useState(null);
    const params = useParams();
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/books/${params.id}`)
        .then(resp => resp.json())
        .then(book => setBook(book))
    }, [params.id])
    
    if(!book) {
        return <span>Loading...</span>
    }
    
    function handleEditClick() {
        history.push(`/${book.id}/edit`)
    }

    const rating = [];
    for (let i=0; i < book.rating; i++) {
        rating.push("⭐")
    }

    return (
        <div className="details-container">
            <div className="details-img">
                <img src={book.image} alt="book-cover"/>
            </div>
            <div className="book-details">
                <h1>{book.title.toUpperCase()}</h1>
                <h2>{book.author.toUpperCase()}</h2>
                <h3>Genre: {book.genre.toUpperCase()}</h3>
                <h3>Have Read: {book.haveRead ? "✅" : "❌"}</h3>
                <h3>Rating: {book.rating === 0 ? "--" : rating}</h3>
                <button onClick={handleEditClick} id="edit">Edit 📝</button>
            </div>
        </div>
    )
}

export default BookDetails;