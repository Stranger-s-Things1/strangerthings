import {useEffect, useState } from 'react'
import { LOGGEDIN_API_URL } from '../api/api'
import NavBar from '../components/NavBar'

const Profile = () => {
    const [userData, setUserData] = useState({})

    useEffect(()=>{
        const myData = async () => {
            const response = await fetch(LOGGEDIN_API_URL,{
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${localStorage.getItem('Token')}`
                }
            });

            const result = await response.json();
            setUserData(result.data);
        }
        myData();
    }, []);

    

    return(
        <>
            <NavBar />
            <h1>Welcome {userData.username}</h1>
        </>
    )
}


export default Profile;