import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Userslist() {
    const [loading, setLoading] = useState(false)
    const [returnHTML, setReturnHTML] = useState(false)
    const [posts, setPosts] = useState([])


    useEffect(() => {
        var HTML = ''
        const loadPost = async () => {
            setLoading(true)
            const response = await axios.get("127.0.0.1:5002/users")
            /* const response = await axios.get("http://mariofitness.fun:5002/users") */
            console.log(response.data)
            for (let user of response.data) {
                HTML += `<p>${user.username}</p>`
            }
            console.log(HTML)
            setReturnHTML(HTML)
            setPosts(response.data)
            setLoading(false)
        }
        loadPost()
    }, []);



    /* return (
        <div className="App">
            {returnHTML}

        </div>
    ); */
    return (
        <div className="App">
            {/* <h1>API Posts</h1> */}
            <div className='card bg-success  text-white m-2 '>
                {posts.map((post, index) =>
                    <li key={index}>{post.username}</li>
                )}
            </div>

        </div>
    );
}

export default Userslist 
