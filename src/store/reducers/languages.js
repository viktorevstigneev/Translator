import initialState from '../initialState';
import { GET_LANGUAGES_SUCCESS } from '../constants';

const languages = (state = initialState.languages, action) => {
	switch (action.type) {
		case GET_LANGUAGES_SUCCESS:
			return action.payload;
		default:
			return state;
	}
};

export default languages;
