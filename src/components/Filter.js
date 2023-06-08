import React from "react";

function Filter() {
    return (
        <div>
            <label for="filter-by-genre">Filter by genre:</label>
            <select name="filter-by-genre">
                <option value="all">All</option>
                <option value="fantasy">Fantasy</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="non-fiction">Non-Fiction</option>
                <option value="romance">Romance</option>
                <option value="mystery">Mystery</option>
                <option value="other">Other</option>

            </select>
        </div>
    )
}

export default Filter;