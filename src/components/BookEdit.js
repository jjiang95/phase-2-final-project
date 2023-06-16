import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Form from "./Form";

function BookEdit() {
    const history = useHistory();   
    const params = useParams();
    
    const [book, setBook] = useState(null);
    const [formData, setFormData] = useState({
        title:"",
        image:"",
        rating:0,
        genre:"fantasy",
        author:"",
        haveRead:true
    })

    function handleSubmit() {
        const parsedRating = parseInt(formData.rating)
        fetch(`${process.env.REACT_APP_API_URL}/books/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...formData,
                rating:parsedRating,
            })
        })
        .then(() => {
            history.push(`/${params.id}`);
        })
    }
        
    function handleChange(e) {
        if (e.target.name !== "haveRead") {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value === "true"
            })
        }
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
            <Form formData={formData} handleSubmit={handleSubmit} handleChange={handleChange}/>
        </div>
        </>
    )
}

export default BookEdit;