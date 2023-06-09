import React from "react";

function AddBook() {
    
    // const formData = {
    //     title:"",
    //     image:"",
    //     rating:0,
    //     genre:"",
    //     haveRead: false
    // };

    function handleSubmit(e) {
        e.preventDefault()
       
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="title"></input>
                <br></br>
                <input type="text" name="image" placeholder="cover image URL"></input>
                <br></br>
                <label htmlFor="genre">Genre:</label>
                <select name="genre">
                    <option value="fantasy">Fantasy</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="non-fiction">Non-Fiction</option>
                    <option value="romance">Romance</option>
                    <option value="mystery">Mystery</option>
                    <option value="other">Other</option>
                </select>
                <br></br>
                <input value="have-read" name="have-read" type="radio" checked/>
                <label htmlFor="have-read">Have Read</label><br></br>
                <input value="haven't-read" name="have-read" type="radio"/>
                <label htmlFor="haven't-read">Haven't Read</label><br></br>
                <br></br>
                <label htmlFor="rating">Rating:</label>
                <select name="rating">
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
                <br></br>
                <input value="Add to Collection" name="submit" type="submit"/>
            </form>
        </div>
    )
}

export default AddBook;