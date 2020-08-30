import React, { useCallback } from "react";
import SigninForm from "../components/SigninForm";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../actions";
import { useHistory } from "react-router-dom";

function SigninFormContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { loading, error } = useSelector(state => state.auth);

    const login = useCallback(
        async (email, password) => {
            dispatch(loginThunk(email, password, history));
        },
        [dispatch, history]
    );
    return <SigninForm login={login} loading={loading} error={error} />;
}

export default SigninFormContainer;
