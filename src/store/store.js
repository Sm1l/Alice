import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import menuSlice from "./menuSlice";

export default configureStore({
  reducer: {
    theme: themeSlice,
    menu: menuSlice,
  },
});
