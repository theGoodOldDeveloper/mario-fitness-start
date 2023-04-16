import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import TrainingBooking from './TrainingBooking'
import { MemberService } from "../services/MemberService"

function Reservation({ state }) {
  const location = useLocation();
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

  console.log("👀👀👀👀👀 ~ file: Reservation.jsx:17 ~ Reservation ~ responseData:", responseData.training)
  console.log("🚀🚀🚀🚀🚀 ~ file: Reservation.jsx:12 ~ Reservation ~ location.state:", location.state)

  return (
    <div className='container text-center'>
      <img src="mario-fitness.jpg" alt="Márió Fitness" width="128" height="128"></img>
      <h3>{responseData.training.map((data) => {
        if (data.trainingID === location.state.trainigType) {
          return data.trainingID

        }
      })}</h3>
      <div>
        <Link to={'/'} className='btn btn-success'>Hoooo, vissza!</Link>
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