import React from "react";
import { Redirect } from "react-router-dom";

// this is HOC
export default function withAuth(Component) {
    function WrappingComponent(props) {
        // console.log("HOC", props);
        const token = sessionStorage.getItem("token");
        if (token === null) {
            return <Redirect to="/Book-Collection/signin" />;
        }
        return <Component {...props} token={token} />;
    }

    WrappingComponent.displayName = `WithAuth(${Component.displayName})`;

    return WrappingComponent;
}
