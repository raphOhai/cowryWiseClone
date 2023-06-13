import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  rangeValue:5000,
  cowryWiseProfit:4709203,
  bankProfit:1595,
  crytoProfit:0,
  NftProfit:5000,
  TotalProfit:235460

};
const ProfitAnalyserSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
     ShowRangeValue(state, action){
        state.rangeValue = action.payload * 1 
        state.TotalProfit = action.payload * 470.92 /10
     
        state.crytoProfit = 0
        state.NftProfit = action.payload *1
        state.cowryWiseProfit = Math.floor(state.TotalProfit/6.523)  
        state.bankProfit = Math.floor(state.TotalProfit/147.62)  

     }

  },
});
export const { ShowRangeValue } = ProfitAnalyserSlice.actions;
export default ProfitAnalyserSlice.reducer;
