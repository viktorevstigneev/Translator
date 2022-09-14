import axios from 'axios';

import { API_URL, API_HOST, API_KEY, LANGUAGES } from '../constants';
import { transformObjectToArray } from './dataAdapters/transformObjectToArray';

export const postTranslationText = async (text, inputLanguage, outputLanguage) => {
	const options = {
		method: 'POST',
		url: `${API_URL}/translate`,
		params: {
			from: inputLanguage,
			'to[0]': outputLanguage,
			'api-version': '3.0',
			profanityAction: 'NoAction',
			textType: 'plain',
		},
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': API_KEY,
			'X-RapidAPI-Host': API_HOST,
		},
		data: `[{"Text":"${text}"}]`,
	};

	const response = await axios.request(options);

	return response.data;
};

export const getLanguagesList = async () => {
	const options = {
		method: 'GET',
		url: `${API_URL}/languages`,
		params: { 'api-version': '3.0', scope: 'translation' },
		headers: {
			'X-RapidAPI-Key': API_KEY,
			'X-RapidAPI-Host': API_HOST,
		},
	};

	// await axios.request(options);
	// return response.data;
	const transformedData = transformObjectToArray(LANGUAGES);

	return transformedData;
};
