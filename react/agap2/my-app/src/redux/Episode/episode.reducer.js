import episodeTypes from "./episode.types";

const INITIAL_STATE = {
	episode: {}
};

const episodeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case episodeTypes.ADD_NEW_PRODUCT_START:
			return {
				...state,
				episode: action.payload
			};

		default:
			return state;
	}
};

export default episodeReducer;
