import { useEffect, useState } from 'react'
import { LOGGEDIN_API_URL } from '../api/api'
import NavBar from '../components/NavBar'

const Profile = () => {
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const myData = async () => {
            const response = await fetch(LOGGEDIN_API_URL, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('Token')}`
                }
            });

            const result = await response.json();
            setUserData(result.data);
        }
        myData();
    }, []);

    const posts = userData.posts;



    return (
        <>
            <NavBar />
            <h1>Welcome {userData.username}</h1>
            <h2>Messages sent by you:</h2>

            <h2>Mesages sent to you: </h2>
            {posts && posts.map((post) => {
                return (
                    <div key={post._id}>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        {console.log(post)}
                    </div>
                )
            })}


        </>
    )
}


export default Profile;