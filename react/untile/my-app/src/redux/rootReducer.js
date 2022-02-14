import { combineReducers } from "redux";

import conversionReducer from "./Conversions/conversion.reducer";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; //local storage, can also be used session storage

export const rootReducer = combineReducers({
	conversionData: conversionReducer
});

const configStorage = {
	key: "root",
	storage,
	Whitelist: ["conversionData"]
};

export default persistReducer(configStorage, rootReducer);
