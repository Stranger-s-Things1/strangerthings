import React from 'react'
import { POST_API_URL } from '../api/api'
import { useState, useEffect } from 'react'


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
            
            {posts && posts.map((post) =>
                <div>
                <p key={post._id}>
                    {post.title}
                </p>
                <button>Edit</button>
                <button>Delete</button>
                </div>)}
        </>
    )
}

export default Posts; 