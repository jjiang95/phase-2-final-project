import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";
import Filter from "./Filter";

function Home() {

    const [bookCollection, setBookCollection] = useState([])
    const [titleFilter, setTitleFilter] = useState("")
    const [haveReadFilter, setHaveReadFilter] = useState("all")
    const [genreFilter, setGenreFilter] = useState("all")

    function handleDeleteClick(bookId) {
        const updatedBooks = bookCollection.filter(book => book.id !== bookId)
        setBookCollection(updatedBooks);
    }

    function handleGenreChange(e) {
        setGenreFilter(e.target.value)        
    }

    function handleReadChange(e) {
        setHaveReadFilter(e.target.value)
    }

    function handleTitleChange(e) {
        setTitleFilter(e.target.value)
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

    const displayedBooks = bookCollection.filter((book) => {
        if (genreFilter === "all") {
            if (titleFilter === "") {
                if (haveReadFilter === "all") {
                    return true;
                } else if (haveReadFilter === "read") {
                    return book.haveRead;
                } else {
                    return book.haveRead === false;
                }
            } else {
                if (haveReadFilter === "all") {
                    return book.title.toLowerCase().includes(titleFilter.toLowerCase());
                } else if (haveReadFilter === "read") {
                    return book.title.toLowerCase().includes(titleFilter.toLowerCase()) && book.haveRead;
                } else {
                    return book.title.toLowerCase().includes(titleFilter.toLowerCase()) && book.haveRead === false;
                }
            }
        } else {
            if (titleFilter === "") {
                if (haveReadFilter === "all") {
                    return book.genre === genreFilter;
                } else if (haveReadFilter === "read") {
                    return book.genre === genreFilter && book.haveRead;
                } else {
                    return book.genre === genreFilter && book.haveRead === false;
                }
            } else {
                if (haveReadFilter === "all") {
                    return book.title.toLowerCase().includes(titleFilter.toLowerCase()) && book.genre === genreFilter;
                } else if (haveReadFilter === "read") {
                    return book.title.toLowerCase().includes(titleFilter.toLowerCase()) && book.haveRead;
                } else {
                    return book.title.toLowerCase().includes(titleFilter.toLowerCase()) && book.haveRead === false;
                }
            }
        }
    })

    return (
        <div>
            <Filter onTitleChange={handleTitleChange} onReadChange={handleReadChange} onGenreChange={handleGenreChange}/>
            {displayedBooks.map((book => (
                <BookItem key={book.id} book={book} onDeleteClick={handleDeleteClick}/>
            )))}
            <br></br>
            <button onClick={scrollToTop}>Back to Top</button>
        </div>
    )
}
export default Home;
