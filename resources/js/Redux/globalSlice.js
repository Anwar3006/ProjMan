import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideNavCollapsed: false,
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSideNavCollapsed: (state, action) => {
      state.isSideNavCollapsed = action.payload;
    },
    setIsDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsDarkMode, setIsSideNavCollapsed } = globalSlice.actions;
export default globalSlice.reducer;
