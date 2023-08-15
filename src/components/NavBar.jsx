import { Link } from 'react-router-dom'
 

const NavBar = () => {

    return(
        <nav>
            <div>
                Stranger's Things
            </div>
            <div>
                {/* <Link>HOME</Link> */}
                <Link to="/posts">POSTS</Link>
                <Link to="/profile">{localStorage.Token ? "PROFILE" : null}</Link>
                <Link to="/"onClick={()=>{
                    localStorage.clear();
                }}>{localStorage.Token ? "LOG OUT" : "LOG IN"}</Link>
            </div>
        </nav>
    )
}

export default NavBar;