import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import { charactersReducer } from "./characters/reducer";

const persistConfig = {
  key: "root",
  storage,
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, charactersReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
