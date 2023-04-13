import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const fetchOpdSelectionInfo = createAsyncThunk(
  "opdSelection",
  async () => {
    const response = await axios.get(SERVER_URL + "/opdSelectionInfo");
    return response.data;
  }
);
const fetchAllAppointmentsDetails = createAsyncThunk('fetch/allAppointments',
  async ({opdId,date}:{opdId:string, date:string}) => {
    const response = await axios.get(SERVER_URL + `/appointment/filter?opdid=${opdId}&&date=${date}`);
    return response.data;
})
const fetchAppointmentsByFilter = createAsyncThunk('fetch/appointmentsByPatient',
async ({opdId,date}:{opdId:string, date:string}) => {
  const response = await axios.get(SERVER_URL + `/appointment/filter?opdid=${opdId}&&date=${date}`);
  return response.data;
})

export { fetchOpdSelectionInfo, fetchAllAppointmentsDetails, fetchAppointmentsByFilter };
