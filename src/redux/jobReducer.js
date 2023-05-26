import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobLists: [],
    pageNumbers: [],
    currentPageNumber: 1,
    jobsToShow: [],
  },
  reducers: {
    appendJob: (state, action) => {
      state.jobLists = action.payload;
    },
    setPageNumber: (state, action) => {
      state.currentPageNumber = action.payload;
      const jobPerPage = 5;
      const totalPage = Math.ceil(state.jobLists.length / jobPerPage);

      if (state.jobLists.length <= 5) state.currentPageNumber = 1;

      state.pageNumbers = [];
      for (let i = 1; i <= totalPage; i++) {
        state.pageNumbers.push(i);
      }

      const lastJobIndex = state.currentPageNumber * jobPerPage;
      const firstJobIndex = lastJobIndex - jobPerPage;

      if (
        state.currentPageNumber >= 0 &&
        state.currentPageNumber <= totalPage
      ) {
        state.jobsToShow = state.jobLists.slice(firstJobIndex, lastJobIndex);
      }
    },
  },
});

export const { appendJob, setPageNumber } = jobSlice.actions;

export default jobSlice.reducer;
