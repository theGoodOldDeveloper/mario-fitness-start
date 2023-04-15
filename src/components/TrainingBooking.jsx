import React, { useEffect, useState } from 'react'
import { MemberService } from "../services/MemberService"

const TrainingBooking = () => {
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
          //console.log("❤❤❤ ~ file: Login.jsx:26 ~ fetchData ~ response.data:", responseData.training)
        }
      } catch (error) {
        return new Response('<h1>Something went wrong</h1>', {
          status: 500,
          headers: { 'content-type': 'text/html' },
        });
      }
    }, []
  )

  return responseData
}

export default TrainingBooking
