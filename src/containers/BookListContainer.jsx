import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooksThunk } from "../actions";
import BookList from "../components/BookList";

export default function BookListContainer({ token }) {
    // mapStateToProps
    const { books, loading, error } = useSelector(state => state.books);

    // mapDispatchToProps
    const dispatch = useDispatch();

    const getBooks = useCallback(() => {
        dispatch(getBooksThunk(token));
    }, [dispatch, token]);

    return (
        <BookList
            books={books}
            loading={loading}
            error={error}
            getBooks={getBooks}
        />
    );
}
