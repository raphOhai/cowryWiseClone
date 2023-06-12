import { configureStore } from "@reduxjs/toolkit";
import logoColor from "./logoColor";
import DrawSvg from "./DrawSvg";
import profitAnalyser from "./profitAnalyser";
const store = configureStore({
  reducer: {
    logoColor,
    DrawSvg,
    profitAnalyser 
  },
});

export default store;
