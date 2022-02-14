import conversionTypes from "./conversions.types";

const INITIAL_STATE = {
	conversion: []
};

const conversionReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case conversionTypes.ADD_NEW_CONVERSION_START:
			return {
				...state,
				conversion: action.payload
			};
		case conversionTypes.CLEAR_CONVERSIONS:
			return {
				...state,
				...INITIAL_STATE
			};

		default:
			return state;
	}
};

export default conversionReducer;
