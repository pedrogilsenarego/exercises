import episodeTypes from "./episode.types";

export const addProductStart = (productData) => ({
	type: episodeTypes.ADD_NEW_PRODUCT_START,
	payload: productData
});
