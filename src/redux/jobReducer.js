import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: [],
  reducers: {
    appendJob: (state, action) => {
      // return action.payload;
      return action.payload;
    },
  },
});

export const { appendJob } = jobSlice.actions;

export default jobSlice.reducer;
