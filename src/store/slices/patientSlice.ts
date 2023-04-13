import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllAppointmentsDetails } from "../actions/patientActions";

interface PatientInfo {
  appointmentData:any,
  isLoading: boolean;
  error: string | null;
}
const initialState: PatientInfo = {
  appointmentData:[],
  isLoading: false,
  error: null
};

const sampleSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder.addCase(
    fetchAllAppointmentsDetails.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.appointmentData = payload;
        state.isLoading = false
      }
    );
    
    builder.addCase(
    fetchAllAppointmentsDetails.pending,
      (state) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
    fetchAllAppointmentsDetails.rejected,
      (state) => {
        state.error = "Something went wrong while fetching information";
        state.isLoading = false;
      }
    );
  }
});
// export actions and reducer.
export default sampleSlice.reducer;
