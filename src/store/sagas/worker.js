import { put, call } from 'redux-saga/effects';

import { postTranslateTextSuccess, postTranslateTextFailed } from '../actions/postTranslateText/postTranslateText';
import { getLanguagesFailed, getLanguagesSuccess } from '../actions/getLanguages/getLanguages';
import { postTranslationText, getLanguagesList } from '../../api/translatorApi';

export function* postTranslateText({ text, inputLanguage, outputLanguage }) {
	try {
		const responseData = yield call(postTranslationText, text, inputLanguage, outputLanguage);
		yield put(postTranslateTextSuccess(responseData));
	} catch (error) {
		yield put(postTranslateTextFailed(error));
	}
}

export function* getLanguages() {
	try {
		const responseData = yield call(getLanguagesList);
		yield put(getLanguagesSuccess(responseData));
	} catch (error) {
		yield put(getLanguagesFailed(error));
	}
}
