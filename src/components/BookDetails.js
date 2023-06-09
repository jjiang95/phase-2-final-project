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

    return (
        <div>
            <img src={book.image}/>
            <h1>{book.title}</h1>
            <h2>Author: {book.author}</h2>
            <p></p>
        </div>
    )
}

export default BookDetails;