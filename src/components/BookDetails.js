import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetails() {

    const [book, setBook] = useState(null);
    const params = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:4000/books/${params.id}`)
        .then(resp => resp.json())
        .then(book => setBook(book))
    }, [params.id])

    if(!book) {
        return <span>Loading...</span>
    }
    
    const rating = [];
    for (let i=0; i < book.rating; i++) {
        rating.push("⭐")
    }

    return (
        <div>
            <img src={book.image}/>
            <h1>{book.title.toUpperCase()}</h1>
            <h2>{book.author.toUpperCase()}</h2>
            <h3>Genre: {book.genre.toUpperCase()}</h3>
            <h3>Have Read: {book.haveRead ? "✅" : "❌"}</h3>
            <h3>Rating: {book.rating === 0 ? "--" : rating}</h3>
            <button>Edit</button>
        </div>
    )
}

export default BookDetails;