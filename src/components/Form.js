import React, { useState } from "react";

function Form({ formData, handleChange, handleSubmit }) {

    const [formValid, setFormValid] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    function onSubmitClick(e) {
        e.preventDefault()
        //input validation
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
            setFormValid(true)
            setErrorMessage("")
            handleSubmit()
        }
    }

    return (
        <>
        <form className="form" onSubmit={onSubmitClick}>
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
                <input onChange={handleChange} value="true" name="haveRead" type="radio" checked={formData.haveRead}/>
                <label className="label">Have Read</label>
                <input onChange={handleChange} value="false" name="haveRead" type="radio" checked={!formData.haveRead}/>
                <label className="label">Haven't Read</label>
            </div>
            <input className="submit" value="Submit" name="submit" type="submit"/>
        </form>
        <h2 className="submit-message">{formValid ? "Success!" : errorMessage}</h2>
        </>
    )
}

export default Form;