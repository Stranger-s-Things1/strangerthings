import { Link } from 'react-router-dom'
 

const NavBar = () => {

    return(
        <nav>
            <div>
                <h1>Stranger's Things</h1>
            </div>
            <div className= "navbar">
                {/* <Link>HOME</Link> */}
                <Link className="link" to="/posts">POSTS</Link>
                <Link className="link" to="/profile">{localStorage.Token ? "PROFILE" : null}</Link>
                <Link className="link" to="/"onClick={()=>{
                    localStorage.clear();
                }}>{localStorage.Token ? "LOG OUT" : "LOG IN"}</Link>
            </div>
        </nav>
    )
}

export default NavBar;