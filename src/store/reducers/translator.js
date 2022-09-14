import initialState from '../initialState';
import { POST_TRANSLATE_TEXT, POST_TRANSLATE_TEXT_SUCCESS, POST_TRANSLATE_TEXT_FAILED } from '../constants';

const translator = (state = initialState.translator, action) => {
	switch (action.type) {
		case POST_TRANSLATE_TEXT:
			return {
				...state,
				loading: true,
			};
		case POST_TRANSLATE_TEXT_SUCCESS:
			return {
				...state,
				data: action.payload,
				loading: false,
			};
		case POST_TRANSLATE_TEXT_FAILED:
			return {
				...state,
				loading: false,
				error: true,
			};

		default:
			return state;
	}
};

export default translator;
