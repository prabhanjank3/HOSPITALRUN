import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  modal:{open:false}
};

const sampleSlice = createSlice({
  name: "utilities",
  initialState,
  reducers: {
    setModalOpen(state) {
      state.modal.open = true;
    },
    setModalClose(state) {
        state.modal.open = false;
      }
  }
});
// export actions and reducer.
export const { setModalOpen, setModalClose } = sampleSlice.actions;
export default sampleSlice.reducer;
