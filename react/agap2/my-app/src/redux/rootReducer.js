import { combineReducers } from "redux";

import episodeReducer from "./Episode/episode.reducer";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; //local storage, can also be used session storage

export const rootReducer = combineReducers({
	episodeData: episodeReducer
});

const configStorage = {
	key: "root",
	storage,
	Whitelist: ["episodeData"]
};

export default persistReducer(configStorage, rootReducer);
