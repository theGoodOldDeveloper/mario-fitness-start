//import React, { useState, useEffect } from 'react';
import { Link, Navigate } from "react-router-dom";
import weekDay from "../weekDay";
import monthName from "../monthName";
import actualMonday from "./LookingForMonday";
import trainingType from "../services/TrainingType";
import pastTime from "./PastTime"

//const [show, setShow] = useState(false);


console.log('trainingType: ', trainingType)

let datum = new Date()
let oneDayCorrection = 24 * 60 * 60 * 1000

let sendDay = 0
let sendHour = 0
let sendMinute = 0
let personReservation = 8



/* console.log(weekDay)
console.log(datum)
console.log(weekDay[datum.getDay()]) */
console.log('************************', (datum.getDay() < 2), datum.getDay())//NOTE - !!!!!!!
const Hello = (props) => {
    //let [sendMinute, setSendMinute] = useState(datum.getMinutes())
    console.log('datum.getMinutes()', datum.getMinutes())
    console.log('sendMinute', sendMinute)

    setInterval(() => {
        //setSendMinute((new Date()).getMinutes())
        console.log('frissitettem', sendMinute)
        window.location.reload();
    }, 60000)
    if (!localStorage.getItem('isLogin')) {
        localStorage.setItem('isLogin', '*')
        console.log('isLogin = *')
        return (
            <Navigate to={'/login'} />
        )
    }

    else {
        return (<div className='container text-center'>
            <img src="mario-fitness.jpg" alt="Márió Fitness" width="128" height="128"></img>
            <h3 className="card bg-light text-success mb-4 p-2" >Légy üdvözölve {localStorage.getItem('memberName')}! 😉</h3>
            {/* //NOTE - HÉTFŐ */}
            <div className="card bg-light mb-2 p-2" >
                <h2 className="bg-info">
                    {weekDay[(new Date(actualMonday)).getDay()]} -
                    ({monthName[(new Date(actualMonday)).getMonth()]}.
                    {(new Date(actualMonday)).getDate()})
                </h2>
                <div className="d-flex justify-content-around">

                    <button className='btn btn-warning m-1'
                        disabled={pastTime(sendDay = (new Date(actualMonday)).getDate(), sendHour = trainingType[0].hour, sendMinute = trainingType[0].minute)}>
                        {trainingType[0].trainingName} {trainingType[0].time}</button>

                    <button className='btn btn-success m-1'
                        disabled={pastTime(sendDay = (new Date(actualMonday)).getDate(), sendHour = trainingType[1].hour, sendMinute = trainingType[1].minute)}>
                        {trainingType[1].trainingName} {trainingType[1].time}</button>
                </div>
            </div>

            {/* //NOTE - KEDD */}
            <div className="card bg-light mb-2 p-2" >
                <h2 className="bg-info">
                    {weekDay[(new Date(actualMonday + oneDayCorrection)).getDay()]} -
                    ({monthName[(new Date(actualMonday + oneDayCorrection)).getMonth()]}.
                    {(new Date(actualMonday + oneDayCorrection)).getDate()})
                </h2>
                <div className="d-flex justify-content-around">
                    <button className='btn btn-success m-1 '
                        disabled={pastTime(sendDay = (new Date(actualMonday + oneDayCorrection)).getDate(), sendHour = trainingType[2].hour, sendMinute = trainingType[2].minute)}>
                        {trainingType[2].trainingName} {trainingType[2].time}</button>
                    <button className='btn btn-success m-1 '
                        disabled={pastTime(sendDay = (new Date(actualMonday + oneDayCorrection)).getDate(), sendHour = trainingType[3].hour, sendMinute = trainingType[3].minute)}>
                        {trainingType[3].trainingName} {trainingType[3].time}</button>
                    <button className='btn btn-success m-1'
                        disabled={pastTime(sendDay = (new Date(actualMonday + oneDayCorrection)).getDate(), sendHour = trainingType[4].hour, sendMinute = trainingType[4].minute)}>
                        {trainingType[4].trainingName} {trainingType[4].time}</button>
                </div>
            </div>

            {/* //NOTE - SZERDA */}
            <div className="card bg-light mb-2 p-2" >
                <h2 className="bg-info">
                    {weekDay[(new Date(actualMonday + oneDayCorrection * 2)).getDay()]} -
                    ({monthName[(new Date(actualMonday + oneDayCorrection * 2)).getMonth()]}.
                    {(new Date(actualMonday + oneDayCorrection * 2)).getDate()})
                </h2>
                <div className="d-flex justify-content-around">
                    {/* <button className='btn btn-success m-1 '>TRX</button>
                    <button className='btn btn-success m-1 '>TRX</button> */}
                    <button className='btn btn-success m-1'>{trainingType[5].trainingName} {trainingType[5].time}</button>
                </div>
            </div>

            {/* //NOTE - CSÜTÖRTÖK */}
            <div className="card bg-light mb-2 p-2" >
                <h2 className="bg-info">
                    {weekDay[(new Date(actualMonday + oneDayCorrection * 3)).getDay()]} -
                    ({monthName[(new Date(actualMonday + oneDayCorrection * 3)).getMonth()]}.
                    {(new Date(actualMonday + oneDayCorrection * 3)).getDate()})
                </h2>
                <div className="d-flex justify-content-around">
                    <button className='btn btn-success m-1 '>{trainingType[6].trainingName} {trainingType[6].time}</button>
                    <button className='btn btn-success m-1 '>{trainingType[7].trainingName} {trainingType[7].time}</button>
                    <button className='btn btn-success m-1'>{trainingType[8].trainingName} {trainingType[8].time}</button>
                </div>
            </div>

            {/* //NOTE - PÉNTEK */}
            {/* <div className="card bg-light mb-2 p-2" >
                <h2 className="bg-info">
                    {weekDay[(new Date(actualMonday + oneDayCorrection * 4)).getDay()]} -
                    ({monthName[(new Date(actualMonday + oneDayCorrection * 4)).getMonth()]}.
                    {(new Date(actualMonday + oneDayCorrection * 4)).getDate()})
                </h2>
                <div className="d-flex justify-content-around">
                    <button className='btn btn-success m-1 '>TRX</button>
                    <button className='btn btn-success m-1 '>TRX</button>
                    <button className='btn btn-success m-1'>TRX</button>
                </div>
            </div> */}

            {/* //NOTE - SZOMBAT */}
            {/* <div className="card bg-light mb-2 p-2" >
                <h2 className="bg-info">
                    {weekDay[(new Date(actualMonday + oneDayCorrection * 5)).getDay()]} -
                    ({monthName[(new Date(actualMonday + oneDayCorrection * 5)).getMonth()]}.
                    {(new Date(actualMonday + oneDayCorrection * 5)).getDate()})
                </h2>
                <div className="d-flex justify-content-around">
                    <button className='btn btn-success m-1 '>TRX</button>
                    <button className='btn btn-success m-1 '>TRX</button>
                    <button className='btn btn-success m-1'>TRX</button>
                </div>
            </div> */}

            {/* //NOTE - VASÁRNAP */}
            <div className="card bg-light mb-2 p-2" >
                <h2 className="bg-info">
                    {weekDay[(new Date(actualMonday + oneDayCorrection * 6)).getDay()]} -
                    ({monthName[(new Date(actualMonday + oneDayCorrection * 6)).getMonth()]}.
                    {(new Date(actualMonday + oneDayCorrection * 6)).getDate()})
                </h2>
                <div className="d-flex justify-content-around">
                    <button className='btn btn-success m-1 '>{trainingType[9].trainingName} {trainingType[9].time}</button>
                    <button className='btn btn-success m-1 '>{trainingType[10].trainingName} {trainingType[10].time}</button>
                </div>
            </div>

            <Link to={'/login'} className='btn btn-success'>Jelentkezz be!</Link>
        </div>)
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