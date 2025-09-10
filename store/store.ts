import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice";
import CartReducer from "@/store/actions/cartSlice"
const store = configureStore({
  reducer: {
    cart : CartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

//   preloadedState: {
//     favorites: initialFavorites,
//   },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
export default store;