import React from 'react';

import LightThemeIcon from '../LightThemeIcon';
import DarkThemeIcon from '../DarkThemeIcon';
import { ToggleButton } from './styles';

const ThemeToggler = ({ theme, toggleTheme }) => {
	return (
		<ToggleButton onClick={toggleTheme}>
			{theme.darkMode ? <DarkThemeIcon /> : <LightThemeIcon />}
		</ToggleButton>
	);
};

export default ThemeToggler;
