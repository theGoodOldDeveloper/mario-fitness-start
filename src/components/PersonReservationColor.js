const personReservationColor = (personReservation) => {
  if (personReservation > 7 && personReservation <= 9) {
    return 'btn btn-warning m-1'
  } else if (personReservation > 9) {
    return 'btn btn-danger m-1'
  } else {
    return 'btn btn-success m-1'
  }
}
export default personReservationColor