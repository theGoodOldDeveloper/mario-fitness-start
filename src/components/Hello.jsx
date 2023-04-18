import React, { useState, useEffect } from 'react';
import { Link, Navigate } from "react-router-dom";
import weekDay from "../weekDay";
import monthName from "../monthName";
import actualMonday from "./LookingForMonday";
import trainingType from "../services/TrainingType";
//import personReservationNumber2 from "../components/PersonReservationNumber";
//import TrainingBooking from './TrainingBooking'
//import pastTime from "./PastTime" //HACK - button COPY
//import personReservation from "./PersonReservationColor" //HACK - button COPY
//import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons'
import TrainingBTN from '../components/TrainingBTN'
import actualTypeBookindDateWEEK from './ActualTypeBookindDate'
import { MemberService } from "../services/MemberService"

//console.log('trainingType: ', trainingType)

//HACK - button COPY * let datum = new Date()
let oneDayCorrection = 24 * 60 * 60 * 1000
let oneweekCorrection = 7 * 24 * 60 * 60 * 1000
//INFO - let weekNumber = 0

//let sendDay = 0 //HACK - button COPY
//let sendHour = 0 //HACK - button COPY
//let sendMinute = 0 //HACK - button COPY
//let personReservationNumber = [8, 11, 7, 9, 15, 2, 8, 10, 5, 9, 12]

//let prColor = 'btn btn-success m-1' //HACK - button COPY

function onClickReaction(data) {
    console.log('click vooot', data)
    alert('foglaltam a kovetkezore: ' + data)
} //HACK - button COPY

const Hello = (props) => {
    const [weekNumber, setWeekNumber] = useState(0)
    const [allTrainingBooking, setAllTrainingBooking] = useState({
        training: []
    })

    useEffect(
        () => {
            try {
                fetchData()
                async function fetchData() {
                    let response = await MemberService.getAllTrainingBooking()
                    setAllTrainingBooking({
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
        }, [allTrainingBooking]
    )

    //let allTrainingBooking = []
    let typeBooking = []
    let typeBookingDate = []
    //allTrainingBooking = TrainingBooking()
    //let allTrainingBookingNumber = personReservationNumber2(actualMonday, weekNumber).training
    let allTrainingBookingNumber = allTrainingBooking.training
    typeBooking = allTrainingBooking.training.map(booking => booking.trainingID)
    typeBookingDate = allTrainingBooking.training.map(booking => booking.trainingDATE)

    let weekTypeBookindDate = []
    let personReservationNumber = bookingNumber()

    function bookingNumber() {
        weekTypeBookindDate = actualTypeBookindDateWEEK(trainingType, actualMonday, weekNumber)
        /* console.log('weekTypeBookindDate: ❤❤❤❤', weekTypeBookindDate)
        console.log('trainingType: ❤❤👀❤❤', trainingType)
        console.log('typeBooking: ❤❤👀👀👀👀👀❤❤', typeBooking)
        console.log('typeBookingDate: ❤❤👀👀👀👀👀❤❤', typeBookingDate) */
        let index = 0
        weekTypeBookindDate.map((type) => {
            let isBooking = 0
            typeBookingDate.filter((booking) => {
                if (booking === type) {
                    isBooking++
                }
            })
            allTrainingBookingNumber[index] = (isBooking)
            index++
        })
        return allTrainingBookingNumber
    }

    /* if (allTrainingBookingNumber.length > 0) {
        console.log('huraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    } else {
        console.log('ba.............................................meg!!!!!!')
    }
    console.log('allTrainingBookingNumber: ❤❤👀❤❤', allTrainingBookingNumber)
    console.log('allTrainingBookingNumber: ❤❤👀❤❤', allTrainingBookingNumber.length) */

    //BUG - katto nulla   !!! korrigaalva !!!
    /* setInterval(() => {
        //setSendMinute((new Date()).getMinutes())
        console.log('frissitettem 😊')
        window.location.reload();
    }, 60000) */

    if (!localStorage.getItem('isLogin')) {
        localStorage.setItem('isLogin', '*')
        console.log('isLogin = *')
        return (
            <Navigate to={'/login'} />
        )
    } else {
        return (<div className='container text-center'>
            <div>
                <button className="btn btn-info me-4"
                    disabled={weekNumber === 0}
                    onClick={() => setWeekNumber(weekNumber - 1)}
                ><FontAwesomeIcon icon={faLeftLong} size="2xl" /></button>
                <img src="mario-fitness.jpg" alt="Márió Fitness" width="128" height="128"></img>
                <button className="btn btn-dark  ms-3"
                    onClick={() => setWeekNumber(preWeekNumber => preWeekNumber + 1)}
                /* onClick={() => setWeekNumber(weekNumber + 1)} */
                ><FontAwesomeIcon icon={faRightLong} size="2xl" /></button>
            </div>
            <h3 className="card bg-light text-success mb-4 p-2" >Légy üdvözölve {localStorage.getItem('memberName')}! 😉</h3>
            {/* //NOTE - HÉTFŐ */}
            <div className="card bg-light mb-2 p-2" >
                <h2 className="bg-info">
                    {weekDay[(new Date(actualMonday + oneDayCorrection * 0)).getDay()]} -
                    ({monthName[(new Date(actualMonday + oneDayCorrection * 0 + oneweekCorrection * weekNumber)).getMonth()]}.
                    {(new Date(actualMonday + oneDayCorrection * 0 + oneweekCorrection * weekNumber)).getDate()})
                </h2>
                <div className="d-flex justify-content-around">

                    <TrainingBTN ppersonReservationNumber={personReservationNumber[0]} ptrainingType={trainingType[0]} pweekNumber={weekNumber} pWeekDayNumber={0} pweekTypeBookindDate={weekTypeBookindDate[0]} />
                    <TrainingBTN ppersonReservationNumber={personReservationNumber[1]} ptrainingType={trainingType[1]} pweekNumber={weekNumber} pWeekDayNumber={0} pweekTypeBookindDate={weekTypeBookindDate[1]} />
                </div>
            </div>

            {/* //NOTE - KEDD */}
            <div className="card bg-light mb-2 p-2" >
                <h2 className="bg-info">
                    {weekDay[(new Date(actualMonday + oneDayCorrection * 1)).getDay()]} -
                    ({monthName[(new Date(actualMonday + oneDayCorrection * 1 + oneweekCorrection * weekNumber)).getMonth()]}.
                    {(new Date(actualMonday + oneDayCorrection * 1 + oneweekCorrection * weekNumber)).getDate()})
                </h2>
                <div className="d-flex justify-content-around">
                    <TrainingBTN ppersonReservationNumber={personReservationNumber[2]} ptrainingType={trainingType[2]} pweekNumber={weekNumber} pWeekDayNumber={1} pweekTypeBookindDate={weekTypeBookindDate[2]} />
                    <TrainingBTN ppersonReservationNumber={personReservationNumber[3]} ptrainingType={trainingType[3]} pweekNumber={weekNumber} pWeekDayNumber={1} pweekTypeBookindDate={weekTypeBookindDate[3]} />
                    <TrainingBTN ppersonReservationNumber={personReservationNumber[4]} ptrainingType={trainingType[4]} pweekNumber={weekNumber} pWeekDayNumber={1} pweekTypeBookindDate={weekTypeBookindDate[4]} />
                </div>
            </div>

            {/* //NOTE - SZERDA */}
            <div className="card bg-light mb-2 p-2" >
                <h2 className="bg-info">
                    {weekDay[(new Date(actualMonday + oneDayCorrection * 2)).getDay()]} -
                    ({monthName[(new Date(actualMonday + oneDayCorrection * 2 + oneweekCorrection * weekNumber)).getMonth()]}.
                    {(new Date(actualMonday + oneDayCorrection * 2 + oneweekCorrection * weekNumber)).getDate()})
                </h2>
                <div className="d-flex justify-content-around">
                    <TrainingBTN ppersonReservationNumber={personReservationNumber[5]} ptrainingType={trainingType[5]} pweekNumber={weekNumber} pWeekDayNumber={2} pweekTypeBookindDate={weekTypeBookindDate[5]} />
                </div>
            </div>

            {/* //NOTE - CSÜTÖRTÖK */}
            <div className="card bg-light mb-2 p-2" >
                <h2 className="bg-info">
                    {weekDay[(new Date(actualMonday + oneDayCorrection * 3)).getDay()]} -
                    ({monthName[(new Date(actualMonday + oneDayCorrection * 3 + oneweekCorrection * weekNumber)).getMonth()]}.
                    {(new Date(actualMonday + oneDayCorrection * 3 + oneweekCorrection * weekNumber)).getDate()})
                </h2>
                <div className="d-flex justify-content-around">
                    <TrainingBTN ppersonReservationNumber={personReservationNumber[6]} ptrainingType={trainingType[6]} pweekNumber={weekNumber} pWeekDayNumber={3} pweekTypeBookindDate={weekTypeBookindDate[6]} />
                    <TrainingBTN ppersonReservationNumber={personReservationNumber[7]} ptrainingType={trainingType[7]} pweekNumber={weekNumber} pWeekDayNumber={3} pweekTypeBookindDate={weekTypeBookindDate[7]} />
                    <TrainingBTN ppersonReservationNumber={personReservationNumber[8]} ptrainingType={trainingType[8]} pweekNumber={weekNumber} pWeekDayNumber={3} pweekTypeBookindDate={weekTypeBookindDate[8]} />
                </div>
            </div>

            {/* //NOTE - PÉNTEK */}

            {/* //NOTE - SZOMBAT */}

            {/* //NOTE - VASÁRNAP */}
            <div className="card bg-light mb-2 p-2" >
                <h2 className="bg-info">
                    {weekDay[(new Date(actualMonday + oneDayCorrection * 6)).getDay()]} -
                    ({monthName[(new Date(actualMonday + oneDayCorrection * 6 + oneweekCorrection * weekNumber)).getMonth()]}.
                    {(new Date(actualMonday + oneDayCorrection * 6 + oneweekCorrection * weekNumber)).getDate()})
                </h2>
                <div className="d-flex justify-content-around">
                    <TrainingBTN ppersonReservationNumber={personReservationNumber[9]} ptrainingType={trainingType[9]} pweekNumber={weekNumber} pWeekDayNumber={6} pweekTypeBookindDate={weekTypeBookindDate[9]} />
                    <TrainingBTN ppersonReservationNumber={personReservationNumber[10]} ptrainingType={trainingType[10]} pweekNumber={weekNumber} pWeekDayNumber={6} pweekTypeBookindDate={weekTypeBookindDate[10]} />
                </div>
            </div>

            {/* <div>
                <Link to={'/login'} className='btn btn-dark'>Jelentkezz be!</Link>
            </div> */}
        </div >)
    }
}
export default Hello



/* <Link to={'/login'} >

            </Link>
 */

/* <Link to={'/login'} className='btn btn-success'>Jelentkezz be!</Link> */

/* const shoot = () => {
        alert("Great Shot! " + props.udv);
        console.log('props*******************' + props.udv)
    } */

/* <h4 className="mt-4">{props.udv}</h4>
    <h4 className="mb-4">{props.name}</h4> */
/* <div>
<form className="card m-2 p-4">
    <label>Enter your name:<br></br>
        <input type="text" />
    </label><br></br>
    <label>Enter your password:<br></br>
        <input type="password" />
    </label>
</form>
</div> */

/* //INFO - heetfo version 1 disabled
<div className="card bg-light mb-2 p-2" >
                <h2 className="bg-info">
                    {weekDay[(new Date(actualMonday)).getDay()]} -
                    ({monthName[(new Date(actualMonday)).getMonth()]}.
                    {(new Date(actualMonday)).getDate()})
                </h2>
                <div className="d-flex justify-content-around">
                    {(new Date(actualMonday)).getDate() < datum.getDate() ?
                        <button className='btn btn-success m-1 ' disabled>{trainingType[0].trainingName} {trainingType[0].time}</button>
                        : <button className='btn btn-success m-1 ' >{trainingType[0].trainingName}</button>}
                    <button className='btn btn-success m-1'>{trainingType[1].trainingName} {trainingType[1].time}</button>
                </div>
            </div>
*/
/* //HACK - button component */
/* <button className={personReservation(prColor = personReservationNumber[0])}
    id={trainingType[0].trainingID}
    onClick={() => onClickReaction(trainingType[0].trainingID)}
    disabled={pastTime(sendDay = (new Date(actualMonday + oneDayCorrection * 0 + oneweekCorrection * weekNumber)).getMonth(),
        (new Date(actualMonday + oneDayCorrection * 0 + oneweekCorrection * weekNumber)).getDate(), sendHour = trainingType[0].hour,
        sendMinute = trainingType[0].minute)}>
    {trainingType[0].trainingName} {trainingType[0].time}</button>
<button className={personReservation(prColor = personReservationNumber[1])}
    id={trainingType[1].trainingID}
    onClick={() => onClickReaction(trainingType[1].trainingID)}
    disabled={pastTime(sendDay = (new Date(actualMonday + oneDayCorrection * 0 + oneweekCorrection * weekNumber)).getMonth(),
        (new Date(actualMonday + oneDayCorrection * 0 + oneweekCorrection * weekNumber)).getDate(), sendHour = trainingType[1].hour,
        sendMinute = trainingType[1].minute)}>
    {trainingType[1].trainingName} {trainingType[1].time}</button> */
/* //HACK - button component */