import React, { useState, useEffect } from "react";

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
                <div key={book.id}>{book.title}</div>
            )))}
        </div>
    )
}
export default Home;
