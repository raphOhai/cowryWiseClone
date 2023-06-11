import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  color1: "#0067F5",
  color2:"#fff",
  pieMenueColor:"black"
};
const AnimationStepSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    WhiteLogo(state) {
      state.color1 = "#fff";
      state.color2 = "#0067F5"
      state.pieMenueColor= "#fff"
    },
    BlueLogo(state) {
     
      state.color2 = "#fff";
      state.color1 = "#0067F5"
      state.pieMenueColor = "black"
    },
  },
});
export const { WhiteLogo, BlueLogo } = AnimationStepSlice.actions;
export default AnimationStepSlice.reducer;
