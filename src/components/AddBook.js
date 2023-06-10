import React, { useState } from "react";

function AddBook() {
    
    const [haveRead, setHaveRead] = useState(true)
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [rating, setRating] = useState(0);
    const [genre, setGenre] = useState("fantasy")
    const [author, setAuthor] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:4000/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                image: image,
                rating: rating,
                genre: genre,
                haveRead: haveRead, 
                author: author   
            })
        })
        setTitle("");
        setImage("");
        setAuthor("");
    }

    function handleHaveRead(e) {
        setHaveRead(e.target.value === "true")
    }

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }

    function handleGenreChange(e) {
        setGenre(e.target.value)
    }

    function handleImgChange(e) {
        setImage(e.target.value)
    }

    function handleRatingChange(e) {
        setRating(parseInt(e.target.value))
    }

    function handleAuthorChange(e) {
        setAuthor(e.target.value)
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input className="text-input" onChange={handleTitleChange} value={title} type="text" name="title" placeholder="title"></input>
                <input className="text-input" onChange={handleImgChange} value={image} type="text" name="image" placeholder="cover image URL"></input>
                <input className="text-input" onChange={handleAuthorChange} value={author} type="text" name="author" placeholder="author"></input>
                <div className="genre-rating-container">
                    <label className="label" htmlFor="genre">Genre:</label>
                    <select className="select-menu" onChange={handleGenreChange} name="genre">
                        <option value="fantasy">Fantasy</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="non-fiction">Non-Fiction</option>
                        <option value="romance">Romance</option>
                        <option value="mystery">Mystery</option>
                        <option value="other">Other</option>
                    </select>
                    <label className="label" htmlFor="rating">Rating:</label>
                    <select className="select-menu" onChange={handleRatingChange} name="rating">
                        <option value="0"></option>
                        <option value="5">⭐⭐⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="1">⭐</option>
                    </select>
                </div>
                <div className="radio-group">
                    <input onChange={handleHaveRead} value="true" name="have-read" type="radio" checked={haveRead}/>
                    <label className="label">Have Read</label>
                    <input onChange={handleHaveRead} value="false" name="have-read" type="radio" checked={!haveRead}/>
                    <label className="label">Haven't Read</label>
                </div>
                <input className="submit" value="Add to Collection" name="submit" type="submit"/>
            </form>
        </div>
    )
}

export default AddBook;