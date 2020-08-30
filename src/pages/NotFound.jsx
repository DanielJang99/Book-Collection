import React from "react";
import useWindow from "../hooks/useWindow";

export default function NotFound() {
    const width = useWindow();
    return (
        <div>
            <h1>NotFound {width}</h1>
        </div>
    );
}
