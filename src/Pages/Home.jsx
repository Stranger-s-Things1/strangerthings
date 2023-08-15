import LoginForm from "../components/LoginForm"
import NavBar from "../components/NavBar";

const Home = () =>{

    return(
        <>
            <NavBar />  
            <h1>Log In</h1>
            <LoginForm />
        </>
    )
}

export default Home;