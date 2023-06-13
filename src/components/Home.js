import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";
import Filter from "./Filter";

function Home() {

    const [bookCollection, setBookCollection] = useState([])
    
    // function handleReadToggle(updatedBook) {
    //     const updatedBooks = bookCollection.map(book => {
    //         if (book.id === updatedBook.id) {
    //             return updatedBook;
    //         } else {
    //             return book;
    //         }
    //     })
    //     setBookCollection(updatedBooks)
    // }

    function handleDeleteClick(bookId) {
        const updatedBooks = bookCollection.filter(book => book.id !== bookId)
        setBookCollection(updatedBooks);
    }

    function handleFilterChange(filter) {
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
            <Filter onFilterChange={handleFilterChange}/>
            {bookCollection.map((book => (
                <BookItem key={book.id} book={book} onDeleteClick={handleDeleteClick}/>
            )))}
            <br></br>
            <button onClick={scrollToTop}>Back to Top</button>
        </div>
    )
}
export default Home;
