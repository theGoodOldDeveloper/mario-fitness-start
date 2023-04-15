import React from 'react'
let oneMinuteCorrection = 60 * 1000
let oneHourCorrection = 60 * 60 * 1000
let oneDayCorrection = 24 * 60 * 60 * 1000
let oneweekCorrection = 7 * 24 * 60 * 60 * 1000

export default function ActualTypeBookindDate(trainingType, actualMonday, weekNumber) {
  /* console.log('trainingType::::::::::::::::::::::::::', trainingType)
  console.log('actualMonday::::::::::::::::::::::::::', actualMonday)
  console.log('actualMonday::::::::::::::::::::::::::', new Date(actualMonday))
  console.log('weekNumber::::::::::::::::::::::::::', weekNumber) */
  //INFO   Mon Apr 10 2023 00:00:00
  //INFO   actualMonday + oneDayCorrection*trainingType.weekDay + oneweekCorrection*weekNumber

  let actualDayTypeWEEK = []
  for (let dayType of trainingType) {
    actualDayTypeWEEK.push(actualMonday +
      weekNumber * oneweekCorrection +
      dayType.weekDay * oneDayCorrection +
      dayType.hour * oneHourCorrection +
      dayType.minute * oneMinuteCorrection)

    //console.log('👌✔👌✔👌✔👌✔👌✔', new Date(actualDayTypeWEEK))
  }

  return actualDayTypeWEEK
}
