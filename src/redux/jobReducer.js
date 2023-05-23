import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobLists: [],
    pageNumbers: [],
    currentPageNumber: null,
    jobsToShow: [],
  },
  reducers: {
    appendJob: (state, action) => {
      const jobsPerPage = 5;
      const jobs = action.payload;
      state.pageNumbers = [];

      for (let i = 1; i <= Math.ceil(jobs.length / jobsPerPage); i++) {
        state.pageNumbers.push(i);
      }
      state.jobLists = action.payload;
    },
    setPageNumber: (state, action) => {
      state.currentPageNumber = action.payload;
      const jobPerPage = 5;
      const totalPage = Math.ceil(state.jobLists.length / jobPerPage);
      const lastJobIndex = state.currentPageNumber * jobPerPage;
      const firstJobIndex = lastJobIndex - jobPerPage;

      if (state.currentPageNumber > 0 && state.currentPageNumber <= totalPage) {
        state.jobsToShow = state.jobLists.slice(firstJobIndex, lastJobIndex);
      }
    },
  },
});

export const { appendJob, setPageNumber } = jobSlice.actions;

export default jobSlice.reducer;
