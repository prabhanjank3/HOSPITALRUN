import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const fetchAllAppointmentsDetails = createAsyncThunk('fetch/allAppointments',
  async (patientid:string) => {
    const response = await axios.get(SERVER_URL + `/appointment/filter?patientid=${patientid}`);
    return response.data;
})

export { fetchAllAppointmentsDetails };
