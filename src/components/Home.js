import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";

function Home() {

    const [bookCollection, setBookCollection] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:4000/books")
        .then(resp => resp.json())
        .then(books => setBookCollection(books)) 
    },[])

    return (
        <div>
            {bookCollection.map((book => (
                <BookItem key={book.id} book={book}/>
            )))}
        </div>
    )
}
export default Home;
