import { configureStore } from "@reduxjs/toolkit";
import logoColor from "./logoColor";
import DrawSvg from "./DrawSvg";
const store = configureStore({
  reducer: {
    logoColor,
    DrawSvg
  },
});

export default store;
