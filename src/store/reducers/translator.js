import initialState from '../initialState';
import { POST_TRANSLATE_TEXT_SUCCESS } from '../constants';

const translator = (state = initialState.translator, action) => {
	switch (action.type) {
		case POST_TRANSLATE_TEXT_SUCCESS:
			return action.payload;
		default:
			return state;
	}
};

export default translator;
