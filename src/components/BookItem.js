import React from "react";

function BookItem({ book }) {
    return (
        <div key={book.id}>{book.title}</div>
    )
}

export default BookItem;