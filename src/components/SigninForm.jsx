import React, { useRef } from "react";

function SigninForm({ login, loading, error }) {
    const emailRef = useRef();
    const passwordRef = useRef();
    return (
        <div>
            <p>
                <input type="text" ref={emailRef} />
                <input type="password" ref={passwordRef} />
            </p>
            <p>
                <button onClick={click}>로그인</button>
            </p>
            {loading && <p>로딩중...</p>}
            {error !== null && <p>에러!!</p>}
        </div>
    );
    function click() {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        login(email, password);
    }
}

export default SigninForm;
