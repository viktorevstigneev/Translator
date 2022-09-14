import { put, call } from 'redux-saga/effects';

import { postTranslateTextSuccess, postTranslateTextFailed } from '../actions/postTranslateText/postTranslateText';
import { postTranslationText } from '../../api/translatorApi';

export function* postTranslateText({ text, inputLanguage, outputLanguage }) {
	try {
		const responseData = yield call(postTranslationText, text, inputLanguage, outputLanguage);
		yield put(postTranslateTextSuccess(responseData));
	} catch (error) {
		yield put(postTranslateTextFailed(error));
	}
}
