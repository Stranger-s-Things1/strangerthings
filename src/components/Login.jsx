import { useState } from 'react';
import { LOGIN_API_URL } from '../api/api';

const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries());
    console.log(post);
}

const Login = () => {

    const [token, setToken] = useState("");
    const [message, setMessage] = useState("");




    return (
        <>
            <form method="POST" onSubmit={handleSubmit}>
                <input name="username" placeholder="Username" />
                <input name="password" placeholder="Password" />
                <button>Submit</button>
            </form>
        </>
    )
}

export default Login;