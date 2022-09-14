import { combineReducers } from 'redux';

import translator from './translator';
import languages from './languages';
import theme from './theme';

const root = combineReducers({
	translator,
	languages,
	theme,
});

export default root;
