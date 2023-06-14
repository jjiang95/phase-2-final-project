import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";
import Filter from "./Filter";

function Home() {

    const [bookCollection, setBookCollection] = useState([])
    
    function handleDeleteClick(bookId) {
        const updatedBooks = bookCollection.filter(book => book.id !== bookId)
        setBookCollection(updatedBooks);
    }

    function handleGenreChange(filter) {
        fetch("http://localhost:4000/books")
        .then(resp => resp.json())
        .then(books => (
            setBookCollection(books.filter(book => {
                if (filter === "all") {
                    return true;
                } else {
                    return filter === book.genre;
                }
            }))
        ))
    }

    function handleReadChange(filter) {
        fetch("http://localhost:4000/books")
        .then(resp => resp.json())
        .then(books => (
            setBookCollection(books.filter(book => {
                if (filter === "all") {
                    return true;
                } else if (filter === "unread") {
                    return book.haveRead === false;
                } else {
                    return book.haveRead;
                } 
            }))
        ))
    }

    function scrollToTop() {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    
    useEffect(() => {
        fetch("http://localhost:4000/books")
        .then(resp => resp.json())
        .then(books => setBookCollection(books)) 
    }, [])

    return (
        <div>
            <Filter onReadChange={handleReadChange} onGenreChange={handleGenreChange}/>
            {bookCollection.map((book => (
                <BookItem key={book.id} book={book} onDeleteClick={handleDeleteClick}/>
            )))}
            <br></br>
            <button onClick={scrollToTop}>Back to Top</button>
        </div>
    )
}
export default Home;
