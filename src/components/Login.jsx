 
    import React,{useState} from "react";
    

    
    const  LoginForm=() =>{
        const [username, setUsername] = useState('')
        const [password, setPassword]= useState('')

        const handleSubmit =(e)=>{
            e.preventDefault()
            console.log(username)

        }
        return (
            <>
             <form>
             <h1>LOG IN</h1>
                <label>
                    <p>Username</p>
                    <input value={username} input type="text" placeholder="username" id="username"/>
                </label>
                <label>
                    <p>Password</p>
                    <input value={password} input type="password" id="password"/>
                </label>
                <div>
                    <button type="submit">LOG IN</button>
                </div>
               
            </form>
            <button>Don't have an account? Register here</button>
            </>
        )
    }



export default LoginForm;