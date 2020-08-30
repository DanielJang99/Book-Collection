import React from "react";
import withAuth from "../HOCs/withAuth";
import BookListContainer from "../containers/BookListContainer";

function Home({ token }) {
    return (
        <div>
            <h1>Home</h1>
            <p>{token}</p>
            <BookListContainer token={token} />
        </div>
    );
}

export default withAuth(Home);
