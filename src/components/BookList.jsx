import React, { useEffect } from "react";

function BooksList({ books, loading, error, getBooks }) {
    useEffect(() => {
        getBooks();
    }, [getBooks]);

    return (
        <div>
            {loading && <div>로딩중...</div>}
            {error !== null && <div>에러다!!</div>}
            {books.map(book => (
                <li>{book.title}</li>
            ))}
        </div>
    );
}

// function sleep(ms) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     });

export default BooksList;
