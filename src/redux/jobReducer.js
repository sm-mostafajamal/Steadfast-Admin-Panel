import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: [],
  reducers: {
    appendJob: (state, action) => {
      return action.payload;
      // state.jobs = action.payload;
    },
    // createNewJob: (state, action) => {
    //   const content = action.payload;
    //   state.createJob = { ...content };
    // },
  },
});

export const { appendJob, createNewJob } = jobSlice.actions;

export default jobSlice.reducer;
