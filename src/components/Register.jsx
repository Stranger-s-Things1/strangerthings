import { useState } from 'react'



const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries());
    console.log(post);
}

const Register = () => {
    const [token, setToken] = useState("");
    const [message, setMessage] = useState("");



    return (
        <>
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