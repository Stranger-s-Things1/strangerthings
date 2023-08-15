import { Link } from 'react-router-dom'

const NavBar = () => {

    return(
        <nav>
            <div>
                <h1>Stranger's Things</h1>
            </div>
            <div className= "navbar">
                {/* <Link>HOME</Link> */}
                <Link className= "link" to="/posts">POSTS</Link>
                <Link className= "link" to="/profile">PROFILE</Link>
                <Link className= "link">LOG OUT</Link>
            </div>
        </nav>
    )
}

export default NavBar;