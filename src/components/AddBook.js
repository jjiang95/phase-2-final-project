import React, { useState } from "react";

function AddBook() {
    
    const [formValid, setFormValid] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [haveRead, setHaveRead] = useState(true)
    const [formData, setFormData] = useState({
        title:"",
        image:"",
        rating:0,
        genre:"fantasy",
        author:"",
        haveRead:true
    })

    function handleSubmit(e) {
        e.preventDefault()
        if (
            formData.title.trim() === "" ||
            formData.image.trim() === "" ||
            formData.author.trim() === ""
        ) {
            setFormValid(false)
            setErrorMessage("Please fill in all fields.")
            return;
        } else if (
            !formData.image.trim().includes(".jpg" || ".png")
        ) {
            setFormValid(false)
            setErrorMessage("Please enter a valid image URL.")
            return;
        } else {

            const parsedRating = parseInt(formData.rating)
            fetch("http://localhost:4000/books", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    rating:parsedRating,
                    haveRead:haveRead,
                })
            })
            setFormData({
                title:"",
                image:"",
                rating:0,
                genre:"fantasy",
                author:"",
                haveRead:true
            })
            setFormValid(true)
            setErrorMessage("")
        }
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    function handleHaveRead(e) {
        setHaveRead(e.target.value === "true")
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input className="text-input" onChange={handleChange} value={formData.title} type="text" name="title" placeholder="title"></input>
                <input className="text-input" onChange={handleChange} value={formData.image} type="text" name="image" placeholder="cover image URL"></input>
                <input className="text-input" onChange={handleChange} value={formData.author} type="text" name="author" placeholder="author"></input>
                <div className="genre-rating-container">
                    <label className="label" htmlFor="genre">Genre:</label>
                    <select className="select-menu" onChange={handleChange} value={formData.genre} name="genre">
                        <option value="fantasy">Fantasy</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="non-fiction">Non-Fiction</option>
                        <option value="romance">Romance</option>
                        <option value="mystery">Mystery</option>
                        <option value="other">Other</option>
                    </select>
                    <label className="label" htmlFor="rating">Rating:</label>
                    <select className="select-menu" onChange={handleChange} value={formData.rating} name="rating">
                        <option value="0"></option>
                        <option value="5">⭐⭐⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="1">⭐</option>
                    </select>
                </div>
                <div className="radio-group">
                    <input onChange={handleHaveRead} value="true" name="haveRead" type="radio" checked={haveRead}/>
                    <label className="label">Have Read</label>
                    <input onChange={handleHaveRead} value="false" name="haveRead" type="radio" checked={!haveRead}/>
                    <label className="label">Haven't Read</label>
                </div>
                <input className="submit" value="Add to Collection" name="submit" type="submit"/>
            </form>
            <h2 id="submit-message">{formValid ? "Success!" : errorMessage}</h2>
        </div>
    )
}

export default AddBook;