import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";

function BookEdit() {
    const history = useHistory();   
    const params = useParams();
    
    const [book, setBook] = useState(null);
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
            fetch(`${process.env.REACT_APP_API_URL}/books/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    rating:parsedRating,
                    haveRead:haveRead,
                })
            })
            .then(() => {
                history.push(`/${params.id}`);
            })
        }
    }
    
    function handleCancel() {
        history.push(`/${params.id}`)
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
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/books/${params.id}`)
        .then(resp => resp.json())
        .then(book => {
            setBook(book);
            //pre-fills the form with book's values
            setFormData({
                ...formData,
                title:book.title,
                image:book.image,
                rating:book.rating,
                genre:book.genre,
                author:book.author,
                haveRead:book.haveRead,
            })
        })
    }, [params.id])

    if(!book) {
        return <span>Loading...</span>
    }


    return (
        <>
        <h1>Editing: {book.title.toUpperCase()}</h1>
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
                    <input onChange={handleHaveRead} value="true" name="have-read" type="radio" checked={formData.haveRead}/>
                    <label className="label">Have Read</label>
                    <input onChange={handleHaveRead} value="false" name="have-read" type="radio" checked={!formData.haveRead}/>
                    <label className="label">Haven't Read</label>
                </div>
                <input className="submit" value="Update" name="submit" type="submit"/>
                <button className="submit" onClick={handleCancel}>Cancel</button>
            </form>
            <h2 className="submit-message">{formValid ? "Success!" : errorMessage}</h2>
        </div>
        </>
    )
}

export default BookEdit;