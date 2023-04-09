import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MemberService } from "../services/MemberService";
import { Link, Navigate, useNavigate } from "react-router-dom";

function MessageModal(props) {
  let navigate = useNavigate()

  const [show, setShow] = useState(false);

  let [nickName, setNickName] = useState('')
  let [members, setMembers] = useState('*+*')
  let [member, setMember] = useState('')
  let createLoginNickName = (event) => {
    //console.log(event.target.value)
    setNickName(event.target.value)
    setMember({
      username: event.target.value,
      emil: props.messageData
    })
    //console.log(nickName)
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    try {
      fetchData()
      async function fetchData() {
        let response = await MemberService.getAllMembers()
        //console.log('members********: ', response.data)


        console.log("😎 ~ file: MessageModal.jsx:48 ~ register ~ members:", members)
        console.log("😎😎😎 ~ file: MessageModal.jsx:48 ~ register ~ response.data:", response.data)
        setMembers(members = response.data)
        console.log("😎😎😎😎😎 ~ file: MessageModal.jsx:48 ~ register ~ members:", members)


      }
    } catch (error) {
      return new Response('<h1>Something went wrong</h1>', {
        status: 500,
        headers: { 'content-type': 'text/html' },
      });
    }
  }, [])

  const register = async () => {
    try {
      let response = await MemberService.createMember(member)
      if (response) {


        console.log("🚀 ~ file: MessageModal.jsx:48 ~ register ~ response.data:", response.data)
        localStorage.setItem('memberName', member.username)
        localStorage.setItem('memberEmil', member.emil)
        let newMembers = response.data
        console.log("🚀🚀🚀 ~ file: MessageModal.jsx:48 ~ register ~ newMembers:", newMembers)
        setMembers(members = response.data)
        console.log("🚀🚀🚀🚀🚀 ~ file: MessageModal.jsx:48 ~ register ~ otherMembers:", members)


        for (let newMember of members) {
          if (newMember.emil === member.emil) {
            localStorage.setItem('memberID', newMember.ID)
          }
        }
        isEmail = true
        navigate('/', { replace: true })
      }

    } catch (error) {
      return new Response('<h1>Something went wrong</h1>', {
        status: 500,
        headers: { 'content-type': 'text/html' },
      });
    }
  }

  /* useEffect(() => {
    try {
      fetchData()
      async function fetchData() {
        let response = await MemberService.getAllMembers()
        console.log('members********: ', response.data)
        setMembers(members => response.data)

      }
    } catch (error) {
      return new Response('<h1>Something went wrong</h1>', {
        status: 500,
        headers: { 'content-type': 'text/html' },
      });
    }
  }, []) */

  //NOTE - isEmail
  let isEmail = false
  //console.log('members--------------: ', members)
  for (let ismember of members) {
    if (ismember.emil === props.messageData) {
      isEmail = true
      localStorage.setItem('memberName', ismember.username)
      localStorage.setItem('memberEmil', ismember.emil)
      localStorage.setItem('memberID', ismember.ID)
    }
  }

  if (isEmail) {
    return (
      <Navigate to={'/'} />
    )
  } else {
    return (
      <>

        {props.messageData.includes('@') && props.messageData.includes('.') ?
          (<Button variant="primary" onClick={handleShow} className='mt-4'>
            Bejelentkezem
          </Button>) :
          (<Button variant="primary" onClick={handleShow} className='mt-4' disabled>
            Bejelentkezem
          </Button>)}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header className='bg-warning text-center' closeButton>
            <Modal.Title >A {props.messageData} email címmel még nincs tag a csoportban!</Modal.Title>
            {/* <Modal.Title >{modalTitleMessage}</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <div className="m-2  mx-a" >
              <input
                required={true}
                name="name"
                value={nickName}
                onChange={createLoginNickName}
                type="text" className="form-control" placeholder="Beceneved" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Javítom
            </Button>
            <Button variant="danger" onClick={register}>
              Rendben, regisztrálok
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );

  }

}

export default MessageModal;

/* let modalTitleMessage = ''
  let modalBodyMessage = ''
  let modalColor = ''
  props.messageData === '' ? console.log('true') : console.log('false')
  props.messageData === '' ? modalTitleMessage = 'nemjooo' : modalTitleMessage = 'jooooooooo'
  props.messageData === '' ? modalColor = 'bg-danger text-center' : modalColor = 'bg-warning text-center'
  props.messageData === '' ? modalBodyMessage = 'nemjooo' : modalBodyMessage = <div className="m-2  mx-a" >
    <input
      required={true}
      name="name"
      value={nickName}
      onChange={createLoginNickName}
      type="text" className="form-control" placeholder="Beceneved" />
  </div> */
