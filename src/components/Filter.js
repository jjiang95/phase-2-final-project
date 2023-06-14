import React from "react";

function Filter({ onGenreChange, onReadChange, onTitleChange }) {

    return (
        <div className="filter">
            <label className="label" htmlFor="filter-by-genre">Filter by genre: </label>
            <select className="select-menu" onChange={onGenreChange} name="filter-by-genre">
                <option value="all">All</option>
                <option value="fantasy">Fantasy</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="non-fiction">Non-Fiction</option>
                <option value="romance">Romance</option>
                <option value="mystery">Mystery</option>
                <option value="other">Other</option>
            </select>
            <label className="label" htmlFor="filter-by-read">Filter by read/unread: </label>
            <select className="select-menu" onChange={onReadChange} name="filter-by-read">
                <option value="all">All</option>
                <option value="read">Read</option>
                <option value="unread">Unread</option>
            </select>
            <label className="label" htmlFor="search-by-title">Search by title: </label>
            <input onChange={onTitleChange} type="text" name="title" placeholder="title"></input>
        </div>
    )
}

export default Filter;