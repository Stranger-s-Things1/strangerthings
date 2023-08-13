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
                <Link to="/profile">PROFILE</Link>
                <Link>LOG OUT</Link>
            </div>
        </nav>
    )
}

export default NavBar;