import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import Hello from "./Hello";
import Login from "./Login";
import Reservation from "./Reservation";
import MessageModal from "./MessageModal.jsx";

const App = () => {
    return (
        <React.Fragment>
            {/* <MessageModal /> */}
            <Routes>
                <Route path={"/"} element={<Hello />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/reservation"} element={<Reservation />} />
            </Routes>
        </React.Fragment>
    )
}

export default App;







/* import { useState, useEffect } from "react";

export default function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5002/users"
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, [])



    return (
        <div className="App">
            <h1>API Posts</h1>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}

            {data.map((post, index) =>
                <li key={index}>{post.username}</li>
            )}

        </div>
    ); */




/* return (
    <div className="App">
        <h1>API Posts</h1>
        {loading && <div>A moment please...</div>}
        {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ul>
            {data &&
                data.map(({ id, username, emil, password }) => (
                    <li>
                        <h3>{id}</h3>
                        <h3>{username}</h3>
                        <h3>{emil}</h3>
                        <h3>{password}</h3>
                    </li>
                ))}
        </ul>
    </div>
    ); 
}
    */