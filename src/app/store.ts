import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { contactsApi } from "../services/api";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApi.middleware)
})