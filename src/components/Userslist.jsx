import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Userslist() {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])



    useEffect(() => {
        const loadPost = async () => {
            setLoading(true)
            const response = await axios.get("http://localhost:5002/users")
            console.log(response.data)
            setPosts(response.data)
            setLoading(false)
        }
        loadPost()
    }, []);

    return (
        <div className="App">
            <h1>API Posts</h1>
            <div className='card bg-success w-25 text-white '>
                {posts.map((post, index) =>
                    <li key={index}>{post.username}</li>
                )}
            </div>

        </div>
    );
}

export default Userslist 
