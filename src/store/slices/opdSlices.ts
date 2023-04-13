import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchOpdSelectionInfo, fetchAllAppointmentsDetails } from "../actions/opdActions";

interface OpdInfo {
  opdSelection:any,
  appointmentData:any,
  isLoading: boolean;
  error: string | null;
}
const initialState: OpdInfo = {
  opdSelection: null,
  appointmentData:null,
  isLoading: false,
  error: null
};

const sampleSlice = createSlice({
  name: "opd",
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder.addCase(
    fetchOpdSelectionInfo.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.opdSelection = payload;
        state.isLoading = false
      }
    );
    
    builder.addCase(
    fetchOpdSelectionInfo.pending,
      (state, { payload }: PayloadAction<any>) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
    fetchOpdSelectionInfo.rejected,
      (state) => {
        state.error = "Something went wrong while fetching information";
        state.isLoading = false;
      }
    );
    builder.addCase(fetchAllAppointmentsDetails.fulfilled, 
    (state, { payload }: PayloadAction<any>) => {
        state.appointmentData = payload;
        state.isLoading = false,
        state.error = null
    });
    builder.addCase(fetchAllAppointmentsDetails.pending, 
    (state) => {
        state.isLoading = true,
        state.error = null
    });
    builder.addCase(fetchAllAppointmentsDetails.rejected, 
    (state, { payload }: PayloadAction<any>) => {
        state.error = payload
    });
  }
});
// export actions and reducer.
export default sampleSlice.reducer;
