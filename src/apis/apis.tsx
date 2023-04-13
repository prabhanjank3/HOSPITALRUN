import axios from "axios";
import Appointment from "../models/appointment";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const fetchScheduledSlots = async (opdId:string, date:string) => {
    return axios.get(SERVER_URL+`/appointment/q?opdId=${opdId}&&date=${date}`)
}
const scheduleAppointment = (data:Appointment) => {
    return axios.post(SERVER_URL+`/appointment/create`, data)
}

export {fetchScheduledSlots, scheduleAppointment}