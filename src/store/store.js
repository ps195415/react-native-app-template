import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducers";

export default store = configureStore({
  reducer: {
    authToken: loginSlice
  }
});
