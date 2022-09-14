import React from 'react';

import ThemeToggler from '../ThemeToggler';
import LogoIcon from '../LogoIcon';
import { HeaderContainer, HeaderNav, HeaderLink, StyledHeader } from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<HeaderContainer>
				<ThemeToggler />
				<LogoIcon />
				<HeaderNav>
					<HeaderLink to="/translator">Translator</HeaderLink>
					<HeaderLink to="/history">History</HeaderLink>
					<HeaderLink to="/favorites">Favorites</HeaderLink>
				</HeaderNav>
			</HeaderContainer>
		</StyledHeader>
	);
};

export default Header;
