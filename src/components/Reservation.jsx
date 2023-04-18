import React, { useEffect, useState } from 'react'
import { useNavigate, Link, useLocation } from "react-router-dom";
//import TrainingBooking from './TrainingBooking'
import { MemberService } from "../services/MemberService"
import personReservation from "./PersonReservationColor"

function Reservation({ state }) {
  const location = useLocation();
  const navigate = useNavigate()
  //console.log("🎁🎁🎁🎁🎁 ~ file: Reservation.jsx:8 ~ Reservation ~ location.state:", location.state)
  let [responseData, setResponseData] = useState({
    training: []
  })

  useEffect(
    () => {
      try {
        fetchData()
        async function fetchData() {
          let response = await MemberService.getAllTrainingBooking()
          setResponseData({
            training: response.data
          })
        }
      } catch (error) {
        return new Response('<h1>Something went wrong</h1>', {
          status: 500,
          headers: { 'content-type': 'text/html' },
        });
      }
    }, []
  )

  function onClickReaction(isBookingBTN, deleteItem) {
    if (isBookingBTN) {
      deleteTrainingBooking(deleteItem)
      //INFO - delete contact
      async function deleteTrainingBooking(memberID) {
        try {
          let response = await MemberService.deleteTrainingBooking(memberID)
          if (response) {
          }
        } catch (error) {
          return new Response('<h1>Something went wrong</h1>', {
            status: 500,
            headers: { 'content-type': 'text/html' },
          });
        }
      }

    } else {
      let sendDATA = {
        trainingID: location.state.data.trainigType,
        name: localStorage.getItem('memberName'),
        trainingDATE: location.state.data.weekTypeBookindDate,
        personID: localStorage.getItem('memberID'),
        bookingDATE: (new Date()).getTime()
      }
      console.log(sendDATA.trainingID)
      createTrainigBooking(sendDATA)
      async function createTrainigBooking(sendDATA) {
        try {
          let response = await MemberService.createTrainingBooking(sendDATA)
        }
        catch (error) {
          return new Response('<h1>Something went wrong</h1>', {
            status: 500,
            headers: { 'content-type': 'text/html' },
          });
        }
      }
    }
    /* NOTE
    true = DELETE training
    false = CREATE training
    < to={'/'}
    */
    navigate("/")
  }

  //console.log("👀👀👀👀👀 ~ file: Reservation.jsx:17 ~ Reservation ~ responseData:", responseData.training)
  let filter
  let memberIDBTNTEXT = 'Bejelentkezem'
  let isBookingBTN = false
  let deleteItem = -1
  //console.log("🚀🚀🚀🚀🚀 ~ file: Reservation.jsx:12 ~ Reservation ~ location.state:", location.state)
  let memberID = parseInt(localStorage.getItem('memberID'))
  filter = responseData.training.map(isBooking => {
    if (isBooking.personID === memberID && isBooking.trainingDATE === location.state.data.weekTypeBookindDate) {
      memberIDBTNTEXT = 'Törlöm'
      isBookingBTN = true
      deleteItem = isBooking.ID
      return true
    } else { return false }
  })
  let index = 0
  let prColor = location.state.data.personReservationNumber
  let hiddenTag = prColor !== 8 ? 'hidden' : ''

  return (
    <div className='container text-center'>
      <img src="mario-fitness.jpg" alt="Márió Fitness" width="128" height="128"></img>
      <h3>{responseData.training.map((data) => {
        if (data.trainingDATE === location.state.data.weekTypeBookindDate) {
          { index++ }
          return (
            <React.Fragment key={data.ID}>
              <div>
                <p key={data.ID}>{index} {data.name} ({data.personID})</p>
                <p hidden={index !== 8}>----- Tartalék 😊 -----</p>
              </div>
            </React.Fragment>)
        }
      })}</h3>

      <button className={personReservation(prColor)}
        disabled={!isBookingBTN && (location.state.data.personReservationNumber >= 10)}
        onClick={() => onClickReaction(isBookingBTN, deleteItem)}
      >{memberIDBTNTEXT}</button>

      <div className='card text-bg-danger m-2' hidden={!(location.state.data.personReservationNumber >= 10)}>CSAK TÖRLÉS! </div>
      <div className='card text-bg-info m-2' hidden={(location.state.data.personReservationNumber >= 10)}>BEJELENKEZÉS vagy TÖRLÉS! </div>

      <div>
        <Link to={'/'} className='btn btn-secondary'>Hoooo, vissza!</Link>
      </div>
    </div>
  )
}

export default Reservation


/* let allTrainingBooking = {
    training: {
      "ID": 0,
      "bookingDATE": 0,
      "name": "",
      "personID": 0,
      "trainingDATE": 0,
      "trainingID": ""
    }
  } */