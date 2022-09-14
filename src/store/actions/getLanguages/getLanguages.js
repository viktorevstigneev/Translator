import { GET_LANGUAGES, GET_LANGUAGES_SUCCESS, GET_LANGUAGES_FAILED } from '../../constants';

const getLanguages = () => ({
	type: GET_LANGUAGES,
});

export const getLanguagesFailed = (error) => ({
	type: GET_LANGUAGES_FAILED,
	payload: error,
});

export const getLanguagesSuccess = (data) => ({
	type: GET_LANGUAGES_SUCCESS,
	payload: data,
});

export default getLanguages;
