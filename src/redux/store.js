import { combineReducers, configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";
import authRole from "./slices/authRole";
import filterReducer from "./slices/performanceFilter";
import phoneReducer from "./slices/phoneSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["phone"],
};

const rootReducer = combineReducers({
  language: languageSlice,
  authRole,
  filter: filterReducer,
  phone: phoneReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
