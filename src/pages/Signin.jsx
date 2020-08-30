import React from "react";
import { Redirect } from "react-router-dom";
import SigninFormContainer from "../containers/SigninFormContainer";

export default function Sigin() {
    const token = sessionStorage.getItem("token");
    if (token !== null) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <h1>Sign In</h1>
            <SigninFormContainer />
        </div>
    );
}
