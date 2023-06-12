import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  rangeValue:"",
  cowryWiseProfit:"",
  bankProfit:"",
  crytoProfit:"",
  NftProfit:"",

};
const ProfitAnalyserSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
     ShowRangeValue(state, action){
        state.rangeValue = action.payload 
        state.cowryWiseProfit = action.payload * 4
        state.bankProfit = action.payload * 1.2
        state.crytoProfit = 0.0001 + action.payload/1000000
        state.NftProfit = 0
        
     }

  },
});
export const { ShowRangeValue } = ProfitAnalyserSlice.actions;
export default ProfitAnalyserSlice.reducer;
