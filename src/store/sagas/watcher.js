import { takeEvery } from 'redux-saga/effects';

import { POST_TRANSLATE_TEXT, GET_LANGUAGES } from '../constants';
import { postTranslateText, getLanguages } from './worker';

export default function* sagaWatcher() {
	yield takeEvery(POST_TRANSLATE_TEXT, postTranslateText);
	yield takeEvery(GET_LANGUAGES, getLanguages);
}
