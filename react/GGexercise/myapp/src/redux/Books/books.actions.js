import booksTypes from "./books.types";

export const addFetchBooksStart = (productData) => ({
	type: booksTypes.ADD_BOOKS_START,
	payload: productData
});
