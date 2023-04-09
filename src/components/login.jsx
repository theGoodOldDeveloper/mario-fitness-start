import React, { useEffect, useState } from "react";
//import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageModal from "./MessageModal.jsx";
import { MemberService } from "../services/MemberService";
/* style={{ background: 'aqua', height: '100vh' }} */
/* [event.target.name]: event.target.value */

const Login = () => {

    let [email, setEmail] = useState('')
    /* let [nickName, setNickName] = useState('') */
    let [members, setMembers] = useState('')

    useEffect(() => {
        try {
            fetchData()
            async function fetchData() {
                let response = await MemberService.getAllMembers()
                console.log("❤ ~ file: Login.jsx:26 ~ fetchData ~ members:", members)
                console.log("❤❤❤ ~ file: Login.jsx:26 ~ fetchData ~ response.data:", response.data)
                setMembers(members = response.data)

                console.log("❤❤❤❤❤ ~ file: Login.jsx:26 ~ fetchData ~ members:", members)
            }
        } catch (error) {
            return new Response('<h1>Something went wrong</h1>', {
                status: 500,
                headers: { 'content-type': 'text/html' },
            });
        }
    }, [])

    let createLoginEmail = (event) => {
        setEmail(event.target.value)
    }
    /* let createLoginNickName = (event) => {
        console.log(event.target.value)
        setNickName(event.target.value)
        console.log(nickName)
    } */

    let submitForm = async (event) => {
        event.preventDefault()
        //try {
        //INFO let response = await ContactService.createContact(state.contact)
        //navigate("/contacts/list")
        //INFO if (response) {
        //console.log('eljutsz te ide', response)
        //INFO navigate('/contacts/list', { replace: true })
        //console.log('eljutsz te ide', response)
        //}
        //} catch (error) {
        //NOTE setState({ ...state, errorMessage: error.message })
        //NOTE navigate('/contacts/add', { replace: false })
    }


    return (
        <React.Fragment>
            <div className="logginRegister text-center" >

                <MessageModal messageData={email} />

                {/* <h3 className="card text-danger bg-light mb-4 p-2">Ha most vagy itt először akkor...</h3> */}
                <div className="emil">
                    <div>
                        <img src="emailPro.png" className="emilImage" />

                    </div>
                    <div className="">
                        <h3 className="display-1">e-mail címed:</h3>
                    </div>

                    <form onSubmit={submitForm}>
                        <div className="m-2">
                            <input
                                required={true}
                                name="email"
                                value={email}
                                onChange={createLoginEmail}
                                type="email" className="form-control" placeholder="E-mai címed" />
                        </div>
                        {/* <div className="m-2  mx-a" >
                        <input
                            required={true}
                            name="name"
                            value={nickName}
                            onChange={createLoginNickName}
                            type="text" className="form-control" placeholder="Beceneved" />
                    </div> */}

                    </form>



                </div>
                {/* <Link to={'/'} className='btn btn-danger regBTN btn-lg'>Bejelentkezem...</Link> */}


                <h6 className="mb-4 me-4 text-end fixed-bottom"><span ><img className="rounded-circle" src="portrait.jpg" width="25" /></span>©2023 by photovegh with react</h6>
            </div>
        </React.Fragment>
    )
}

export default Login

/* <div className="portraitImage">
                    <img className="rounded-circle" src="portrait.jpg" width="50" />
                </div> */