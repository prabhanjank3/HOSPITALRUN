import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPrescriptionsByPatientId, createAppointment } from "../actions/prescriptionActions";
import {toast} from 'react-toastify'

interface PrescriptionInfo {
  prescriptionData:any,
  isLoading: boolean;
  error: string | null;
}
const initialState: PrescriptionInfo = {
  prescriptionData:[],
  isLoading: false,
  error: null
};

const sampleSlice = createSlice({
  name: "prescriptions",
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder.addCase(
        fetchPrescriptionsByPatientId.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.prescriptionData = payload;
        state.isLoading = false
      }
    );
    
    builder.addCase(
    fetchPrescriptionsByPatientId.pending,
      (state) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
    fetchPrescriptionsByPatientId.rejected,
      (state) => {
        state.error = "Something went wrong while fetching information";
        state.isLoading = false;
      }
    );

    builder.addCase(
        createAppointment.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.isLoading = false
        toast.success('Prescription Created Successfully!')
      }
    );
    
    builder.addCase(
        createAppointment.pending,
      (state) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
        createAppointment.rejected,
      (state) => {
        state.error = "Something went wrong while fetching information";
        state.isLoading = false;
        toast.error('Something went wrong!')
      }
    );
  }
});
// export actions and reducer.
export default sampleSlice.reducer;
