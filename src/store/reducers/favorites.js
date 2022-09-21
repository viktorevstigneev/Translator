import initialState from '../initialState';
import { ADD_TO_FAVORITES } from '../constants';

const favorites = (state = initialState.favorites, action) => {
	console.log('state: ', state);
	console.log('action: ', action.payload);
	switch (action.type) {
		case ADD_TO_FAVORITES:
			const newState = [action.payload.data, ...state];
			// localStorage.setItem('favorites', JSON.stringify(newState.favorites));

			return newState;
		default:
			return state;
	}
};

export default favorites;
