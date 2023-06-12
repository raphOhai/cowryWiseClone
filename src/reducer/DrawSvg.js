import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  transform1: "translate3d(0px, 500px, 0px)",
};
const DrawSvgSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    IncreaseHeight(state) {
      state.transform1 = "translate3d(0px, 0px, 0px)";
    },
    DecreaseHeight(state) {
      state.transform1 = "translate3d(0px, 500px, 0px)";
    },
  },
});
export const { IncreaseHeight, DecreaseHeight } = DrawSvgSlice.actions;
export default DrawSvgSlice.reducer;
