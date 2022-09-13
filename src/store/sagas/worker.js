import axios from 'axios';
import { put, call } from 'redux-saga/effects';

import { postTranslateTextSuccess, postTranslateTextFailed } from '../actions/postTranslateText/postTranslateText';

export function* postTranslateText(action) {
	try {
		const responseData = yield call(() => {});
		yield put(postTranslateTextSuccess(responseData));
	} catch (error) {
		yield put(postTranslateTextFailed(error));
	}
}
