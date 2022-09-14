import { LOCAL_STORAGE_KEY } from '../constants';
const persistedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
const isDarkMode = persistedTheme ? JSON.parse(persistedTheme).darkMode : false;

const initialState = {
	theme: {
		darkMode: isDarkMode,
	},
	translator: {
		data: [],
		loading: false,
		error: {},
	},
	languages: [],
	favorites: []
};

export default initialState;
