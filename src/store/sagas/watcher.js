import { takeEvery } from 'redux-saga/effects';

import { POST_TRANSLATE_TEXT } from '../constants';
import { postTranslateText } from './worker';

export default function* sagaWatcher() {
	yield takeEvery(POST_TRANSLATE_TEXT, postTranslateText);
}
