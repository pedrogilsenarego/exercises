import booksTypes from "./books.types";

const INITIAL_STATE = {
	books: { books: null, count: null },
	page: 1
};

const booksReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case booksTypes.ADD_BOOKS_START:
			return {
				...state,
				books: action.payload
			};
		case booksTypes.SET_PAGE:
			return {
				...state,
				page: action.payload
			};

		default:
			return state;
	}
};

export default booksReducer;
