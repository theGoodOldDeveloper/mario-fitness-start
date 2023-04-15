//import trainingBooking from "./TrainingBooking"
//console.log('trainingType: ', trainingBooking())
import { MemberService } from "../services/MemberService"
import React, { useEffect, useState } from 'react'

function TrainingBooking() {
  let [allTrainingBooking, setAllTrainingBooking] = useState(
    {
      "ID": 0,
      "trainingID": "",
      "name": "",
      "trainingDATE": 0,
      "personID": 0,
      "bookingDATE": 0
    }
  )
  useEffect(
    () => {
      try {
        fetchData()
        async function fetchData() {
          let response = await MemberService.getAllTrainingBooking()
          console.log("❤ ~ file: Login.jsx:26 ~ fetchData ~ members:", 'getAllTrainingBooking')
          console.log("❤!!!❤!!!❤ ~ file: Login.jsx:26 ~ fetchData ~ response.data:", response.data[0])
          console.log("❤!!!❤!!!❤ ~ ~ response.data:", response.data.length)



          for (let index = 0; index < response.data.length; index++) {
            console.log(response.data[index])
          }

          console.log("❤❤❤ ~ file: Login.jsx:26 ~ fetchData ~ response.data:", response.data)
          console.log("❤❤❤❤❤ ~ file: Login.jsx:26 ~ fetchData ~ members:", 'getAllTrainingBooking')
          setAllTrainingBooking(allTrainingBooking = response.data)
          console.log("❤!!!❤!!!❤ ~ ~ allTrainingBooking.data:  length  ", allTrainingBooking.length)
          return response.data
        }
      } catch (error) {
        return new Response('<h1>Something went wrong</h1>', {
          status: 500,
          headers: { 'content-type': 'text/html' },
        });
      }
    }, []
  )

  //console.log('******************' + allTrainingBooking + '*****************')

}
export default TrainingBooking




/* let trainingBooking

useEffect()

fetchData()
async function fetchData() {
  let tokom = "televana tele vana ..."
  let response = await MemberService.getAllTrainingBooking()
  console.log("❤ ~ file: Login.jsx:26 ~ fetchData ~ members:", tokom)
  console.log("❤!!!❤!!!❤ ~ file: Login.jsx:26 ~ fetchData ~ response.data:", response.data)
  console.log("❤!!!❤!!!❤ ~ ~ response.data:", response.data.length)

  trainingBooking = response.data

  return tokom
}

export default trainingBooking */