import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    searchQuery: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.searchQuery;
export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
