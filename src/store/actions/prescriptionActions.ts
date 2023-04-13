import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import PrescriptionData from "../../models/prescriptionData";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

interface PrescriptionBody extends PrescriptionData
{
    patientid:string
}

const fetchPrescriptionsByPatientId = createAsyncThunk(
  "prescription/patient",
  async (patientid:any) => {
    const response = await axios.get(SERVER_URL + "/prescription/q?patientid=" + patientid);
    return response.data;
  }
);
const fetchPrescriptionsByPatientIdDummy = 
     (patientid:any) => {
      return axios.get(SERVER_URL + "/prescriptions/q?patientid=" + patientid);
    }

const createAppointment = createAsyncThunk(
  "prescription/create",
  async (data: PrescriptionBody) => {
    const response = await axios.post(SERVER_URL + "/prescription/create", data);
    return response.data;
  }
);

export { createAppointment, fetchPrescriptionsByPatientId, fetchPrescriptionsByPatientIdDummy };
