import booksTypes from "./books.types";

const INITIAL_STATE = {
	books: { books: null, count: null }
};

const booksReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case booksTypes.ADD_BOOKS_START:
			return {
				...state,
				books: action.payload
			};

		default:
			return state;
	}
};

export default booksReducer;
