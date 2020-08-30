import React from "react";
import { useHistory } from "react-router-dom";

function Counter(props) {
    const history = useHistory();
    console.log(history);

    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <p>
                <button onClick={click}>+</button>
            </p>
        </div>
    );

    function click() {
        setCount(count + 1);
    }
}

export default Counter;
