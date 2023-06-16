import React, { useState } from "react";
import Form from "./Form";

function AddBook() {
    
    const [formData, setFormData] = useState({
        title:"",
        image:"",
        rating:0,
        genre:"fantasy",
        author:"",
        haveRead:true
    })

    function handleSubmit() {
        //changes string value from form field into number
        const parsedRating = parseInt(formData.rating)
        fetch(`${process.env.REACT_APP_API_URL}/books`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...formData,
                rating:parsedRating,
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
    
    return (
        <div className="form-container">
            <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default AddBook;