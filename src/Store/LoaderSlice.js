import { createSlice } from "@reduxjs/toolkit";

export const LoaderSlice = createSlice({
  name: "Loader",
  initialState: {
    isLoading: false,
  },
  reducers: {
    loadingHandler(state) {
      state.isLoading = !state.isLoading;
    },
  },
});
