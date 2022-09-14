import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../../constants';

export const darkTheme = {
	body: COLORS.DARK_THEME_BACKGROUND_COLOR,
	text: COLORS.DARK_THEME_TEXT_COLOR,
	headerBackground: COLORS.DARK_THEME_HEADER_COLOR,
};

export const lightTheme = {
	body: COLORS.LIGHT_THEME_BACKGROUND_COLOR,
	text: COLORS.LIGHT_THEME_TEXT_COLOR,
	headerBackground: COLORS.LIGHT_THEME_HEADER_COLOR,
};

export const GlobalStyles = createGlobalStyle`
body{
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: Tahoma, Helvetica, Arial, sans-serif;
  transition: all 0.50s linear;
	}
`;
