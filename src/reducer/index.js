import { configureStore } from "@reduxjs/toolkit";
import logoColor from "./logoColor";
const store = configureStore({
  reducer: {
    logoColor
  },
});

export default store;
