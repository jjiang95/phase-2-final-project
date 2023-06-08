import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";

function Home() {

    const [bookCollection, setBookCollection] = useState([])
    
    function handleDeleteClick(bookId) {
        const updatedBooks = bookCollection.filter(book => book.id !== bookId)
        setBookCollection(updatedBooks);
    }
    useEffect(() => {
        fetch("http://localhost:4000/books")
        .then(resp => resp.json())
        .then(books => setBookCollection(books)) 
    },[])

    return (
        <div>
            {bookCollection.map((book => (
                <BookItem key={book.id} book={book} onDeleteClick={handleDeleteClick}/>
            )))}
        </div>
    )
}
export default Home;
