import { ADD_TO_FAVORITES } from '../../constants';

export const addToFavorites = (data) => ({
	type: ADD_TO_FAVORITES,
	payload: {
		data,
	},
});

export default addToFavorites;
