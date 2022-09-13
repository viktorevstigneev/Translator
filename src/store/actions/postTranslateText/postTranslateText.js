import { POST_TRANSLATE_TEXT, POST_TRANSLATE_TEXT_SUCCESS, POST_TRANSLATE_TEXT_FAILED } from '../../constants';

const postTranslateText = () => ({
	type: POST_TRANSLATE_TEXT,
});

export const postTranslateTextFailed = (error) => ({
	type: POST_TRANSLATE_TEXT_FAILED,
	payload: error,
});

export const postTranslateTextSuccess = (data) => ({
	type: POST_TRANSLATE_TEXT_SUCCESS,
	payload: data,
});

export default postTranslateText;
