import { Link } from 'react-router-dom'
 

const NavBar = () => {

    return(
        <nav>
            <div>
                <h1>Stranger's Things</h1>
            </div>
            <div className= "navbar">
                {/* <Link>HOME</Link> */}
<<<<<<< HEAD
                <Link className= "link" to="/posts">POSTS</Link>
                <Link className= "link" to="/profile">PROFILE</Link>
                <Link className= "link">LOG OUT</Link>
=======
                <Link to="/posts">POSTS</Link>
                <Link to="/profile">{localStorage.Token ? "PROFILE" : null}</Link>
                <Link to="/"onClick={()=>{
                    localStorage.clear();
                }}>{localStorage.Token ? "LOG OUT" : "LOG IN"}</Link>
>>>>>>> 03520a3e2386723fcfe13528a373b8ae64cd6bda
            </div>
        </nav>
    )
}

export default NavBar;