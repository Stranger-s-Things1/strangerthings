import { useState } from 'react';
import { LOGIN_API_URL } from '../api/api';

const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    
    const loginUser = async () =>{
        try{
            const response = await fetch(`${REGISTER_API_URL}`, {
                method: form.method,
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    user: {
                        "username": `${userData.username}`,
                        "password": `${userData.password}`
                    }
                })
            });
            const result = await response.json();
            console.log(result);
        } catch(error) {
            console.log(error);
        }

    }
    loginUser();
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