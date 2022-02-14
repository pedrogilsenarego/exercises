import conversionTypes from "./conversions.types";

export const addConversionStart = (productData) => ({
	type: conversionTypes.ADD_NEW_CONVERSION_START,
	payload: productData
});

export const clearConversionsStart = (productData) => ({
	type: conversionTypes.CLEAR_CONVERSIONS
});
