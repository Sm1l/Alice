import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    pageCheckbox: false,
    theme: "light",
  },
  reducers: {
    togglePageCheckbox(state) {
      state.pageCheckbox = !state.pageCheckbox;
    },
    toggleTheme(state) {
      state.theme = "light" ? "dark" : "light";
    },
  },
});

export const { togglePageCheckbox, toggleTheme } = headerSlice.actions;
export default headerSlice.reducer;
