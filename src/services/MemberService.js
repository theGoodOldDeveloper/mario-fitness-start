import axios from "axios";

export class MemberService {
  //INFO - developer SQLite server
  //static serverURL = 'http://127.0.0.1:5002'
  //INFO - production SQLite server
  static serverURL = 'http://mariofitness.fun:5002'

  static getAllMembers() {
    let dataURL = `${this.serverURL}/users`
    //console.log(dataURL)
    return axios.get(dataURL)
  }

  static createMember(member) {
    let dataURL = `${this.serverURL}/createuser`
    return axios.post(dataURL, member)
  }

  static getAllTrainingBooking() {
    let dataURL = `${this.serverURL}/trainings`
    return axios.get(dataURL)
  }

  static deleteTrainingBooking(memberID) {
    let dataURL = `${this.serverURL}/deletetrainingbooking/${memberID}`
    return axios.delete(dataURL)
  }

  static createTrainingBooking(member) {
    let dataURL = `${this.serverURL}/createtrainingbooking`
    return axios.post(dataURL, member)
  }
}