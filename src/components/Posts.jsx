import React from 'react'
import { POST_API_URL } from '../api/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const handleEdit = async() =>{
    console.log("Edited");
}

const handleDelete = async() =>{
    console.log("Deleted");
}

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`${POST_API_URL}`);
                const result = await response.json();
                console.log(result.data.posts);
                setPosts(result.data.posts);

            } catch (error) {
                console.log(error);
            }

        }
        fetchPost();
    }, [])





    return (
        <>
            <NavBar />
            <div>
                <h1>Posts</h1>
                <input name="search" placeholder="Search Posts" />
                <Link to="/post/form">{"(ADD POST)"}</Link>
            </div>
            {posts && posts.map((post) =>
                <div key={post._id}>
                <p key={post._id}>
                    {post.title}
                </p>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
                </div>)}
        </>
    )
}

export default Posts; 