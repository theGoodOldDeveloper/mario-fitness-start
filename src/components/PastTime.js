//import React from "react"
//import actualMonday from "./LookingForMonday";

const datum = new Date()
let sendDatum = new Date()

const pastTime = (month, day, hour, minute) => {
  sendDatum.setMonth(month)
  sendDatum.setDate(day)
  sendDatum.setHours(hour)
  sendDatum.setMinutes(minute)
  sendDatum.setSeconds(0)
  /* console.log('datum.getDate()', datum.getDate())
  console.log('datum.getDay()', datum.getDay())
  console.log('weekDay', weekDay)
  console.log('hour', hour)
  console.log('minute', minute) */
  /* console.log('**************************', month)
  console.log('--------------------------', datum)
  console.log('--------------------------', sendDatum) */
  /* console.log(weekDay < datum.getDay())
  console.log(hour < datum.getHours())
  console.log(minute < datum.getMinutes()) */

  if (
    sendDatum < datum
  ) { return true }

  else { return false }

  /* datum.getDay() < props.weekDay */
  //return pastTime = false

}

export default pastTime