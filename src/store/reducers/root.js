import { combineReducers } from 'redux';

import translator from './translator';
import languages from './languages';
import favorites from './favorites';
import theme from './theme';

const root = combineReducers({
	translator,
	languages,
	favorites,
	theme,
});

export default root;
