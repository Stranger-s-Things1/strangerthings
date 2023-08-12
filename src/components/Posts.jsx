import React from 'react'
import { BASE_URL } from '../api/api'
import { useState, useEffect } from 'react'


function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`${BASE_URL}/posts`);
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
                <p>
                    {post.title}
                </p>)}
        </>
    )
}

export default Posts; 