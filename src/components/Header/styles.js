import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
	width: 100%;
	background: ${({ theme }) => theme.headerBackground};
`;

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	height: 5em;
	margin: 0 auto;
`;

export const HeaderNav = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 40%;
`;

export const HeaderLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	text-transform: uppercase;
`;

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
`;
