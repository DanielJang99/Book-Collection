import React from "react";
import { useHistory } from "react-router-dom";

function Counter(props) {
    // console.log(props);
    const history = useHistory();
    console.log(history);

    const [count, setCount] = React.useState(0);

    // useEffect 은 리턴한 직후 실행
    // React.useEffect(() => {
    //     console.log("[]");
    // }, []);

    // React.useEffect(() => {
    //     console.log("no second arg");
    // });

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
