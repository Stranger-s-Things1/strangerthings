import { useState,useEffect } from 'react';
import { LOGIN_API_URL } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




const LoginForm = () => {

    const [token, setToken] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate()

    useEffect(()=>{
        if(token !== ""){
            localStorage.setItem("Token", token);
            navigate('/profile')
        }
    },[token])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData.entries());
        
        const loginUser = async () =>{
            try{
                const response = await fetch(`${LOGIN_API_URL}`, {
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
                setToken(result.data.token);
            } catch(error) {
                console.log(error);
            }
    
        }
        loginUser();
    }



    return (
        <>
            <form method="POST" onSubmit={handleSubmit}>
                <input name="username" placeholder="Username" />
                <input name="password" placeholder="Password" />
                <button>Log In</button>
            </form>
            <Link to="/users/register">Don't have an account? Sign up</Link>
        </>
    )
}

export default LoginForm;