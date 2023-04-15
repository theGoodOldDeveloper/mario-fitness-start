import React from 'react'
import TrainingBooking from './TrainingBooking'
import trainingType from "../services/TrainingType";
//import axios from 'axios';

let oneweekCorrection = 7 * 24 * 60 * 60 * 1000
let allTrainingBooking = []
let typeBooking = []
let allTrainingBookingNumber = []

export default function PersonReservationNumber(actualMonday, weekNumber) {
  let index = 0
  let weekDayStart = (actualMonday + weekNumber * oneweekCorrection)
  let weekDayEnd = (actualMonday + (weekNumber + 1) * (oneweekCorrection - 1000))
  allTrainingBooking = TrainingBooking()
  typeBooking = allTrainingBooking.training.map(booking => booking.trainingID)

  //INFO - traimimgID / person -  
  bookingNumber()

  console.log('allTrainingBookingNumber: -*-*🎁🎁🎁-*-*- ', allTrainingBookingNumber)

  function bookingNumber() {
    console.log(allTrainingBooking.training.map(booking => booking.trainingID).length)
    console.log(allTrainingBooking.training.map(booking => booking.trainingID))
    console.log('typeBooking: ', typeBooking)
    let index = 0
    trainingType.map((type) => {
      let akarmi = 0
      typeBooking.filter((booking) => {
        //console.log('type', type.trainingID)
        //console.log('booking', booking)
        if (booking === type.trainingID) {
          console.log('csudijooooooooooooooooooooooooooooo')
          akarmi++
        }
      })
      console.log(akarmi)
      allTrainingBookingNumber[index] = (akarmi)
      index++
    })
    console.log('allTrainingBookingNumber: -*-*-*-*- ', allTrainingBookingNumber)
  }

  /* console.log("😁😁😁😁😁 ~ file: ~ allTrainingBooking ~ loloo:", allTrainingBooking)
  console.log("😁😁😁😁😁😁😁 ~ file: ~ allTrainingBooking ~ loloo:", new Date(weekDayStart))
  console.log("😁😁😁😁😁😁😁 ~ file: ~ allTrainingBooking ~ loloo:", new Date(weekDayEnd))
  console.log("😁😁😁😁😁😁😁 ~ file: ~ allTrainingBooking ~ loloo:", weekNumber) */
  return (allTrainingBooking)
}

/* 
   //INFO - https://youtu.be/PSCZP-pxqTw?t=1256
      
if (type.trainingID === (allTrainingBooking.training.map(booking => booking.trainingID))) {
        console.log('eeeeeeeeez IGEN', type.trainingID)

        console.log(allTrainingBooking.training.length)
        console.log("🚀 ~ file: PersonReservationNumber.jsx:24 ~ trainingType.map ~ allTrainingBooking:", allTrainingBooking)

      }

      allTrainingBooking.training.map(booking => booking.trainingID)

      console.log(allTrainingBooking.length)

      if (type.trainingID === allTrainingBooking.map(trainingBooking => trainingBooking.trainingID)) {
        console.log('eeeeeeeeez IGEN')


      } */
