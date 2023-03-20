//import weekDay from "../weekDay";
let datum = new Date()
let oneDayCorrection = 24 * 60 * 60 * 1000

let correction = 0
switch (datum.getDay()) {
  case 1:
    correction = 0
    break
  case 2:
    correction = -1
    break
  case 3:
    correction = -2
    break
  case 4:
    correction = -3
    break
  case 5:
    correction = -4
    break
  case 6:
    correction = -5
    break
  case 0:
    correction = -6
    break
  default:
    correction = "What kind of this is day..."
}

let datumTausendthsSec = datum.getTime(datum)
const actualMondayDATE = new Date(datumTausendthsSec + oneDayCorrection * correction)

actualMondayDATE.setHours(0)
actualMondayDATE.setMinutes(0)
actualMondayDATE.setSeconds(0)
actualMondayDATE.setMilliseconds(0)

console.log('actualMondayDATE: ', actualMondayDATE)

const actualMonday = actualMondayDATE.getTime()

export default actualMonday