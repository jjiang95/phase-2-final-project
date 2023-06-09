import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";
import Filter from "./Filter";

function Home() {

    const [bookCollection, setBookCollection] = useState([])
    
    function handleReadToggle(updatedBook) {
        const updatedBooks = bookCollection.map(book => {
            if (book.id === updatedBook.id) {
                return updatedBook;
            } else {
                return book;
            }
        })
        setBookCollection(updatedBooks)
    }

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
    
    useEffect(() => {
        fetch("http://localhost:4000/books")
        .then(resp => resp.json())
        .then(books => setBookCollection(books)) 
    }, [])

    return (
        <div>
            <Filter onFilterChange={handleFilterChange}/>
            {bookCollection.map((book => (
                <BookItem onReadToggle={handleReadToggle} key={book.id} book={book} onDeleteClick={handleDeleteClick}/>
            )))}
        </div>
    )
}
export default Home;
