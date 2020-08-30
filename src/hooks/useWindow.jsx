import React from "react";

function useWindow() {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const resize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return width;
}

export default useWindow;
