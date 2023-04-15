import React, { useState } from 'react'
import personReservation from "./PersonReservationColor"
import trainingType from "../services/TrainingType";
import pastTime from "./PastTime"
import actualMonday from "./LookingForMonday";

let oneDayCorrection = 24 * 60 * 60 * 1000
let oneweekCorrection = 7 * 24 * 60 * 60 * 1000

let prColor = 'btn btn-success m-1'
//HACK - button COPY * let personReservationNumber = [8, 11, 7, 9, 15, 2, 8, 10, 5, 9, 1]
let sendDay = 0
let sendHour = 0
let sendMinute = 0

function onClickReaction(data) {
  console.log('click vooot', data)
  alert('foglaltam a kovetkezore: ' + data)
}


function TrainingBTN({ ppersonReservationNumber, ptrainingType, pweekNumber, pWeekDayNumber }) {
  /* console.log("🚀 ~ file: TrainingBTN.jsx:22 ~ TrainingBTN ~ ppersonReservationNumber:", ppersonReservationNumber) */
  /* console.log("🚀🚀🚀 ~ file: TrainingBTN.jsx:22 ~ TrainingBTN ~ ptrainingType:", ptrainingType)
 */
  prColor = ppersonReservationNumber

  return (

    <button className={personReservation(prColor)}
      id={{ ptrainingType }.trainingID}
      onClick={() => onClickReaction(ptrainingType.trainingID)}
      /* onClick={() => onClickReaction(new Date(actualMonday + oneDayCorrection * pWeekDayNumber + oneweekCorrection * pweekNumber))} */
      disabled={pastTime(sendDay = (new Date(actualMonday + oneDayCorrection * pWeekDayNumber + oneweekCorrection * pweekNumber)).getMonth(),
        (new Date(actualMonday + oneDayCorrection * pWeekDayNumber + oneweekCorrection * pweekNumber)).getDate(), sendHour = ptrainingType.hour,
        sendMinute = ptrainingType.minute)}>
      <span className="badge bg-secondary">{ppersonReservationNumber}</span> {ptrainingType.trainingName} {ptrainingType.time}</button>

  )
}

export default TrainingBTN