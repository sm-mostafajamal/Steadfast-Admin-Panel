import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobLists: [],
  },
  reducers: {
    appendJob: (state, action) => {
      state.jobLists = action.payload;
    },
  },
});

export const { appendJob, createNewJob } = jobSlice.actions;

export default jobSlice.reducer;
