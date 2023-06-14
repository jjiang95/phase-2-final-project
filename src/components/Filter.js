import React from "react";

function Filter({ onGenreChange, onReadChange }) {

    function handleGenreChange(e) {
        onGenreChange(e.target.value)
    }

    function handleReadChange(e) {
        onReadChange(e.target.value)
    }

    return (
        <div className="filter">
            <label className="label" htmlFor="filter-by-genre">Filter by genre: </label>
            <select className="select-menu" onChange={handleGenreChange} name="filter-by-genre">
                <option value="all">All</option>
                <option value="fantasy">Fantasy</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="non-fiction">Non-Fiction</option>
                <option value="romance">Romance</option>
                <option value="mystery">Mystery</option>
                <option value="other">Other</option>
            </select>
            <label className="label" htmlFor="filter-by-read">Filter by read/unread: </label>
            <select className="select-menu" onChange={handleReadChange} name="filter-by-read">
                <option value="all"></option>
                <option value="read">Read</option>
                <option value="unread">Unread</option>
            </select>
        </div>
    )
}

export default Filter;