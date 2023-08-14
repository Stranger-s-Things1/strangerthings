import { useState } from 'react'
import { REGISTER_API_URL } from '../api/api'



const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    

    const registerUser = async () =>{
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
    registerUser();
}

const Register = () => {
    const [token, setToken] = useState("");
    const [message, setMessage] = useState("");



    return (
        <>
        <h1>Sign Up</h1>
            <form method="POST" onSubmit={handleSubmit}>
                <label>
                    <input name="username" placeholder="Username" />
                </label>
                <label>
                    <input name="password" placeholder="Password" />
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Register;