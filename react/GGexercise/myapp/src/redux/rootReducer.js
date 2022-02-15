import { combineReducers } from "redux";

import booksReducer from "./Books/books.reducer";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; //local storage, can also be used session storage

export const rootReducer = combineReducers({
	booksData: booksReducer
});

const configStorage = {
	key: "root",
	storage,
	Whitelist: ["booksData"]
};

export default persistReducer(configStorage, rootReducer);
