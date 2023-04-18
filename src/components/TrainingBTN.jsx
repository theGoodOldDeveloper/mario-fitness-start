import React, { useState } from 'react'
import { Navigate, useNavigate, Link } from 'react-router-dom';//FIXME - navigate 
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

function TrainingBTN({ ppersonReservationNumber, ptrainingType, pweekNumber, pWeekDayNumber, pweekTypeBookindDate }) {
  /* console.log("🚀 ~ file: TrainingBTN.jsx:22 ~ TrainingBTN ~ ppersonReservationNumber:", ppersonReservationNumber) */
  /* console.log("🚀🚀🚀 ~ file: TrainingBTN.jsx:22 ~ TrainingBTN ~ ptrainingType:", ptrainingType)
 */
  const navigate = useNavigate() //FIXME - navigate 
  function onClickReaction() {
    //alert('foglaltam a kovetkezore: ')
    navigate("/reservation", { state: { data: data } }) //FIXME - navigate 
    //navigate("/reservation", { state: { data: pweekTypeBookindDate } })
  }
  const data = {
    personReservationNumber: ppersonReservationNumber,
    trainigType: ptrainingType.trainingID,
    weekNumber: pweekNumber,
    weekDayNumber: pWeekDayNumber,
    weekTypeBookindDate: pweekTypeBookindDate,
    d2: 'this is props data...'
  }

  let isPastTime = pastTime(sendDay = (new Date(actualMonday + oneDayCorrection * pWeekDayNumber + oneweekCorrection * pweekNumber)).getMonth(),
    (new Date(actualMonday + oneDayCorrection * pWeekDayNumber + oneweekCorrection * pweekNumber)).getDate(),
    sendHour = ptrainingType.hour,
    sendMinute = ptrainingType.minute)

  prColor = ppersonReservationNumber
  //let navigate = useNavigate()
  return (
    <div>
      {/* <Link to={isPastTime ? '/' : '/reservation'} state={data}> */}
      <button className={personReservation(prColor)}
        id={{ ptrainingType }.trainingID}
        onClick={() => onClickReaction()}
        disabled={isPastTime}>
        <span className="badge bg-secondary">{ppersonReservationNumber}</span> {ptrainingType.trainingName} {ptrainingType.time}
      </button>
      {/* </Link> */}
    </div>
  )
}

export default TrainingBTN